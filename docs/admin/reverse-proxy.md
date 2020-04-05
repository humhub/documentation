---
id: reverse-proxy
title: Reverse Proxy
---

Trusted Hosts
-------------

If the HumHub application is working behind a reverse proxy (especially an SSL terminator), the reverse proxy must be marked as trusted host.

The following headers are only accepted by a trusted host:

- X-Forwarded-For
- X-Forwarded-Host
- X-Forwarded-Proto
- Front-End-Https
- X-Rewrite-Url

The trusted host must be specified in the configuration file ``protected/config/web.php``.

**Example configuration:**

```php
<?php
/**
 * This file provides to overwrite the default HumHub / Yii configuration by your local Web environments
 * @see http://www.yiiframework.com/doc-2.0/guide-concept-configurations.html
 * @see http://docs.humhub.org/admin-installation-configuration.html
 * @see http://docs.humhub.org/dev-environment.html
 */
return [
    'components' => [
        'request' => [
            'trustedHosts' => ['192.168.0.0/24']
        ],

    ]
];

``` 

An array key is an IPv4 or IPv6 IP address in CIDR notation for matching a client.

An array value is a list of headers to trust. These will be matched against $secureHeaders to determine which headers are allowed to be sent by a specified host. The case of the header names must be the same as specified in $secureHeaders.

You can find more information in the Yii2 documentation: https://www.yiiframework.com/doc/api/2.0/yii-web-request#$trustedHosts-detail


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
