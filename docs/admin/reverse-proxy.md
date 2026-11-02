---
id: reverse-proxy
title: Reverse Proxy
---

Trusted Hosts
-------------

If the HumHub application is working behind a reverse proxy (especially an SSL terminator), the reverse proxy must be marked as trusted host.

The following headers are only accepted from a trusted host:

- X-Forwarded-For
- X-Forwarded-Host
- X-Forwarded-Proto
- X-Forwarded-Port
- Front-End-Https
- X-Rewrite-Url
- X-Original-Host

Headers sent by any other host are ignored. Without a trusted host entry, HumHub generates links with the wrong protocol or host name and records the proxy address instead of the visitor IP.

### Configuration

The trusted hosts can be configured in the web configuration file `protected/config/web.php` (in Docker: `/data/config/web.php`):

```php
<?php
/**
 * This file provides to overwrite the default HumHub / Yii configuration by your local Web environments
 * @see https://www.yiiframework.com/doc-2.0/guide-concept-configurations.html
 * @see https://docs.humhub.org/docs/admin/advanced-configuration
 */
return [
    'components' => [
        'request' => [
            'trustedHosts' => ['192.168.0.0/24'],
        ],
    ],
];
```

Alternatively, use an environment variable, e.g. in the `.env` file (see [Dot Env](dot-env.md)):

```env
HUMHUB_WEB_CONFIG__COMPONENTS__REQUEST__TRUSTED_HOSTS='["192.168.0.0/24"]'
```

The value is parsed as JSON. The single quotes keep the double quotes intact in `.env` files.

In Docker Compose, the quoting depends on the syntax:

```yaml
# List syntax: no single quotes
environment:
  - HUMHUB_WEB_CONFIG__COMPONENTS__REQUEST__TRUSTED_HOSTS=["192.168.0.0/24"]

# Map syntax: single quotes
environment:
  HUMHUB_WEB_CONFIG__COMPONENTS__REQUEST__TRUSTED_HOSTS: '["192.168.0.0/24"]'
```

With the list syntax, single quotes become part of the value and every request fails with HTTP 500.

:::warning Web configuration only
Do not configure the trusted hosts in `protected/config/common.php` or with the `HUMHUB_CONFIG__` prefix. Both also apply to the console application, whose request component has no `trustedHosts` property. Every `yii` command (migrations, queue workers, cron jobs) then fails with `Setting unknown property: yii\console\Request::trustedHosts`. The web frontend keeps working, so the error is easy to miss.
:::

Environment variables are merged after the configuration files. List entries are appended, not replaced, so configure the setting in one place only.

### Value format

The value can be a list or a map:

- **List:** `['192.168.0.0/24']` trusts all headers listed above from these addresses.
- **Map:** `['10.0.0.1' => ['X-Forwarded-For']]` trusts only the given headers from this address.

Addresses are IPv4 or IPv6 addresses in CIDR notation. The entries are checked in order, the first match wins.

You can find more information in the Yii2 documentation: https://www.yiiframework.com/doc/api/2.0/yii-web-request#$trustedHosts-detail

### Which address to trust

Trust the address HumHub sees as the direct peer of the request (`REMOTE_ADDR`), e.g. `127.0.0.1` if the proxy runs on the same host.

- Keep the range as narrow as possible. Any trusted peer can spoof the host name used in generated links (e.g. in password reset e-mails) and the visitor IP recorded in sessions and logs.
- HumHub must not be reachable directly, bypassing the proxy.
- Under FrankenPHP (e.g. the Docker image), `REMOTE_ADDR` stays the proxy address even if Caddy is configured with `trusted_proxies`. That setting only affects Caddy's own access log, HumHub still needs its own trusted hosts entry to see the visitor IP.

Proxy Configuration
-------------------

The proxy has to keep the original `Host` header and send the headers `X-Forwarded-Proto`, `X-Forwarded-Host` and `X-Forwarded-For`. The defaults differ between proxies:

- **Caddy:** Nothing to add, the headers are sent by default ([reverse_proxy defaults](https://caddyserver.com/docs/caddyfile/directives/reverse_proxy#defaults)).
- **Traefik:** Nothing to add, the headers are sent by default ([services](https://doc.traefik.io/traefik/reference/routing-configuration/http/load-balancing/service/)).
- **nginx:** All headers have to be set explicitly, including `Host $host` ([proxy_set_header](https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_set_header)).
- **Apache:** Add `ProxyPreserveHost On` ([ProxyPreserveHost](https://httpd.apache.org/docs/2.4/mod/mod_proxy.html#proxypreservehost)) and `RequestHeader set X-Forwarded-Proto https`. mod_proxy sends `X-Forwarded-Host` and `X-Forwarded-For`, but not `X-Forwarded-Proto` ([X-Forwarded headers](https://httpd.apache.org/docs/2.4/mod/mod_proxy.html#x-headers)).

Common pitfalls:

- Under FrankenPHP (e.g. the Docker image), `X-Forwarded-Host` is required, otherwise URLs end up with `:80`.
- Without `X-Forwarded-Proto`, all URLs including the live updates URL use `http://`.
- Live updates (`/.well-known/mercure`) usually pass the proxy without extra settings. For nginx, disabling response buffering for this location is a sensible precaution ([proxy_buffering](https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_buffering)):

```conf
location /.well-known/mercure {
  proxy_buffering off;
  # Further proxy settings
}
```

### Existing installations

Check the stored Base URL in **Administration > Settings > General** after putting an existing installation behind a proxy. Links in e-mails and notifications created by background jobs use this setting, not the current request.

Encrypted Connection to HumHub
------------------------------

It is recommended to encrypt the connection between the proxy and HumHub as well. If HumHub is reached via HTTPS and the original `Host` header is passed through, it generates correct HTTPS URLs without trusting any forwarded headers. A trusted host entry is then only needed to see the real visitor IP.

The proxy has to keep the original `Host` header, send the public host name as SNI and verify the certificate of HumHub:

- **Caddy:** Since v2.11, Caddy replaces the `Host` header with the upstream address for HTTPS upstreams. Restore it with `header_up Host {hostport}` ([reverse_proxy HTTPS](https://caddyserver.com/docs/caddyfile/directives/reverse_proxy#https)). Otherwise HumHub answers with an empty page.
- **nginx:** `proxy_ssl_server_name on` and `proxy_ssl_name $host` for SNI, `proxy_ssl_verify on` with `proxy_ssl_trusted_certificate` for verification ([proxy_ssl_verify](https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_ssl_verify)).
- **Apache:** `SSLProxyEngine on`, `SSLProxyVerify require` and `SSLProxyCACertificateFile` ([SSLProxyVerify](https://httpd.apache.org/docs/2.4/mod/mod_ssl.html#sslproxyverify)). For a CA with an intermediate certificate, `SSLProxyVerifyDepth 2` is needed ([SSLProxyVerifyDepth](https://httpd.apache.org/docs/2.4/mod/mod_ssl.html#sslproxyverifydepth)).
- **Traefik:** A `serversTransport` with `serverName` and `rootCAs` ([ServersTransport](https://doc.traefik.io/traefik/reference/routing-configuration/http/load-balancing/serverstransport/)).

Common pitfalls:

- Missing or wrong SNI fails with `tlsv1 alert internal error` or `tls: internal error`.
- nginx and Apache do not verify the certificate of HumHub by default. Without verification, the encryption only protects against passive eavesdropping. Accept this only if the proxy and HumHub run on the same host.

For the container side (TLS options, internal CA for an encrypted connection from the proxy), see the [Docker image documentation](https://github.com/humhub/docker/blob/main/docs/custom-tls.md).

HTTPS/SSL Detection
-------------------

Typically HumHub detects the currently used protocol (HTTP or HTTPS) and uses this automatically to generate links. Behind an SSL terminating reverse proxy, this is done using the `X-Forwarded-Proto` header from a [trusted host](#trusted-hosts).

If this detection fails, the generation of HTTPS URLs can be forced in `protected/config/web.php`. Use this only as a fallback, a correctly configured trusted host is the preferred solution.

```php
<?php

// Enforce HTTPS link generation
$_SERVER['HTTPS'] = 'on';

return [
    // Further configuration options
];
```


Caching
-------

If the proxy also acts as a cache, it is important that query parameters are taken into account.

When static files are modified (e.g. during an upgrade), HumHub automatically adds a new query parameter value (cache bust).

The following paths can be cached:

- /assets/*
- /themes/*
- /uploads/*
- /static/*

**Example NGINX caching snippet (incomplete):**

```conf
location ~ ^/(assets|themes|uploads|static)/.*$ {
  add_header                X-ECache 1;
  add_header                X-ECache-Key    $host$uri$is_args$args;
  add_header                X-ECache-Status $upstream_cache_status;

  proxy_ignore_headers      "Expires";
  proxy_ignore_headers      "Cache-Control";

  proxy_cache_key           "$host$uri$is_args$args";
  proxy_cache_valid         200 1d;

  proxy_pass                $target;
}
```
