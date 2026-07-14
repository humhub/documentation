---
id: oauth
title: OAuth / OpenID Connect
sidebar_label: OAuth / OpenID Connect
---

HumHub can authenticate users against external OAuth2 / OpenID Connect (OIDC) identity
providers such as Keycloak, Authentik or any standards compliant provider.

:::info
Before configuring a client manually, check the [Marketplace](https://marketplace.humhub.com/)
for an official first-party provider module. Ready to use modules exist for common providers such
as Facebook, GitHub and Google. Installing a module (see [Modules](modules.md)) is the recommended
way to connect these providers.
:::

Setting up OIDC by hand can be tricky, since the exact scopes and claim names vary from provider to
provider and small mismatches are easy to miss. Use the manual configuration below only for generic
OIDC / OAuth2 providers that have no dedicated module. Clients are registered in the
`authClientCollection` component within your [configuration file](advanced-configuration.md)
`protected/config/common.php`.

## Configuring an OpenID Connect client

Add your provider to the `clients` array of the `authClientCollection` component. The generic
`yii\authclient\OpenIdConnect` client is included with HumHub. The following complete sample
configures an [Authentik](https://goauthentik.io/) provider. Put it in `protected/config/common.php`,
which overrides the HumHub core defaults and survives updates:

```php
<?php
/**
 * Local common (console + web) configuration overrides.
 * @see https://docs.humhub.org/docs/admin/advanced-configuration
 */
return [
    'components' => [
        'authClientCollection' => [
            'clients' => [
                'authentik' => [
                    'class' => \yii\authclient\OpenIdConnect::class,

                    // Authentik OIDC issuer. Note the trailing slash.
                    // Find it in Authentik under: Applications > Providers > <provider>
                    //   "OpenID Configuration Issuer".
                    'issuerUrl' => 'https://auth.example.com/application/o/<your-app-slug>/',

                    // Credentials from the Authentik provider.
                    'clientId'     => '<authentik-client-id>',
                    'clientSecret' => '<authentik-client-secret>',

                    // Request the claims HumHub needs. 'openid' alone returns only
                    // 'sub'. 'email' and 'profile' are required for the rest.
                    'scope' => 'openid email profile',

                    // Map OIDC claims onto the attribute names HumHub expects.
                    // 'id' is mandatory and comes from the OIDC subject ('sub').
                    'normalizeUserAttributeMap' => [
                        'id'        => 'sub',
                        'email'     => 'email',
                        'username'  => 'preferred_username',
                        'firstname' => 'given_name',
                        'lastname'  => 'family_name',
                    ],

                    // Title shown on the login button.
                    'title' => 'Authentik',
                ],
            ],
        ],
    ],
];
```

The array key `authentik` is the internal identifier of the client and can be named as you like.

Additional notes:

- **Scopes:** make sure the provider actually releases the requested scopes to the client. Some
  providers return only `sub` unless the `email` and `profile` scopes are explicitly granted to the
  application.
- **Attribute mapping:** HumHub's profile fields are `firstname` and `lastname`, whereas OIDC
  providers commonly emit `given_name`, `family_name`, `name` and `preferred_username`. Adjust the
  map if your provider's claim names differ. The `AuthController` debug dump helps to confirm the
  actual claim keys.

After editing the configuration, flush the cache so the client registers cleanly:

```
php protected/yii cache/flush-all
```

## Redirect URI

Register the following redirect (callback) URI at your provider:

```
https://<your-humhub-base-url>/user/auth/external?authclient=<client-key>
```

`<client-key>` is the array key of the client `authentik` in the example above. The URI uses your site's base URL, so it must use HTTPS and match your public hostname.

## Verified email and automated account linking

HumHub automatically links an external login to an existing local account with the **same email
address**. Enable this only for providers you trust to verify email ownership before asserting an
email address. For a well trusted identity provider, for example a Keycloak or Authentik realm with
email verification enforced, the default behaviour is appropriate.

For providers that reliably supply the
[`email_verified`](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims) claim
defined by OpenID Connect, you can optionally harden the automatic linking so that an email address
is only used once the provider marks it as verified, as shown in the
[example below](#example-configuration). This gates the email claim on the `email_verified` flag, so
unverified emails are never used for linking. Without such a check, someone who registers another
person's email at a provider that does not enforce verification could gain access to that person's
HumHub account.

:::info
This concerns only generic OIDC / OAuth2 clients configured manually. First-party provider modules
from the [Marketplace](https://marketplace.humhub.com/) are not affected.
:::

### Example configuration

Replace the plain `'email' => 'email'` entry of the `normalizeUserAttributeMap` (see the client
configuration above) with a callable that only passes the email through once the provider reports it
as verified:

```php
'normalizeUserAttributeMap' => [
    // ... other mappings (id, username, firstname, lastname)
    'email' => function ($attributes) {
        return !empty($attributes['email_verified'])
            ? ($attributes['email'] ?? null)
            : null; // unverified or absent -> no email -> no auto linking
    },
],
```

When the callable returns `null`, HumHub no longer sees an email attribute and skips the automatic
account linking.
