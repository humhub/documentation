---
id: advanced-configuration
title: Configuration Files
sidebar_label: Configuration Files
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
- `console.php` - Configuration used exclusively the Console Application

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

### Advanced Configuration with .env (v1.17+)

For advanced users, HumHub also supports environment-based configuration using a `.env` file.
This approach provides greater flexibility and separation of sensitive or dynamic configuration values.

Refer to the [Dot Env (.env) documentation](../admin/dot-env) for details on setting up and using .env files.

**Important**: Make sure the `.env` file is not accessible to the web to protect sensitive data. Use appropriate file permissions or web server rules to secure it.

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

| Parameter                | Description                                        |    
|--------------------------|----------------------------------------------------|
| `allowedLanguages`       | see the [Translations Section](translations.md)    |
| `dailyCronExecutionTime` | When to execute the daily cron job (default 18:00) |
| `enablePjax`             | used to disable/enable pjax support (default true) | 

### Module Configurations

Some modules may allow further configurations by overwriting fields of their `Module.php` class. 
Those configurations can be overwritten within your `common.php` file as follows:

**Example:**

```php
return [
    'modules' => [
        'activity' => [
            'weeklySummaryDay' => 0
        ]
    ]
]
```
