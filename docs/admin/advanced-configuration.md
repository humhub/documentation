---
id: advanced-configuration
title: Configuration
---

While many HumHub settings can be configured directly within the administration backend, some more specific or low-level
configuration must be specified within configuration files. 

The default configuration files of HumHub reside in `@humhub/protected/humhub/config` and should not be touched.
Administrators can overwrite or extend the default configuration within the configuration files 
residing in `@humhub/protected/config` as described in the following section.

## File Configuration

The main application configuration of HumHub consists of different configuration files which are loaded and merged in a specific
order, whereas the last loaded configuration file may overwrites the previous configurations. The following files
residing in `@humhub/protected/config` can be used to specify custom configurations.

- `common.php`  - Configuration used in Console & Web Application
- `web.php` - Configuration used exclusively in the Web Application
- `console.log` - Configuration used exclusively the Console Application

Note, the shortcoming of this merging technique is, that it is not possible to replace an array value:

```php
// common.php
return [
    //..
    'someValue' => [
        'oldValue'
    ]
    //..
]
```
merged with:

```php
// web.php
return [
    //..
    'someValue' => [
        'newValue'
    ]
    //..
]
```

will result in:

```php
// resulting config
return [
    //..
    'someValue' => [
        'oldValue',
        'newValue'
    ]
    //..
]
```

### Configuration loading order

**Web Application**

1. `@protected/humhub/config/common.php`
2. `@protected/humhub/config/web.php`
3. `@protected/config/dynamic.php`
4. `@protected/config/common.php`
5. `@protected/config/web.php`

**Console Application**

1. `@protected/humhub/config/common.php`
2. `@protected/humhub/config/console.php`
3. `@protected/config/dynamic.php`
4. `@protected/config/common.php`
5. `@protected/config/console.php`

:::tip
If you are not sure where to put your configuration, in most cases you can use the `common.php` file.
This file will be used for the web as well as the console application.
:::

:::caution
Do not edit the core configuration files under `@humhub/protected/humhub/config/` directly. 
:::

### Application Parameters

Some application behaviours can be adjusted by configuring application parameters within one of the configuration files:

```php
// protected/config/web.php
return [
    'params' => [
        'enablePjax' => false
    ]
];
```

**Available params:**

>⚠️ Under construction.

| Parameter | Description |    
| -------- | ---------- |
| `allowedLanguages`  | see the [Translations Section](translations.md) | 
| `enablePjax`  | used to disable/enable pjax support (default true) | 

### Module Configurations

Some modules may allow further configurations by overwriting fields of their `Module.php` class. 
Those configurations can be overwritten within your `common.php` file as follows:

**Example:**

```php
return [
    'modules' => [
        'directory' => [
            'guestAccess' => false 
        ]
    ]
]
```

## Statistics/Tracking

Your tracking code can be managed under `Administration -> Settings -> Advanced -> Statistics`.

In order to send the tracking code in case of pjax page loads as well as full page loads, you have to add the following to your statistics code by the example of google analytics:


```html
<script nonce="{{ nonce }}">
    $(document).on('pjax:end', function() {
        ga('set', 'location', window.location.href);
        ga('send', 'pageview');
    });
</script>
```

or by using the old ga version:

```html
<script nonce="{{ nonce }}">
    $(document).on('pjax:end', function() {
        if( window._gaq ) {
            _gaq.push(['_trackPageview', window.location.href]);
        }
    });
</script>
```

Please see [Single Page Application Tracking](https://developers.google.com/analytics/devguides/collection/analyticsjs/single-page-applications)
for more information about google analytics configuration in single page application environments.

:::note
Since HumHub 1.4 you should add the `nonce="{{ nonce }}` attribute to your script tag in order to be 
compatible with [csp nonces](security.md#security-configuration)
:::