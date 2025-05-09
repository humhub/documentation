---
id: dot-env
title: Dot Env (.env)
---


# Dot Env (.env)

The HumHub's `.env` file provides a mechanism for mapping environment variables to the configuration array used by the Yii framework. This allows for clean separation of configuration and code.

---

## Overview

The HumHub's `.env` file mechanism is **not enabled by default**. It is designed for advanced users who want to customize their HumHub configuration in a flexible way. To enable it, users can create a `.env` file by copying the provided `.env.example` template:

```bash
cp .env.example .env
```

Afterward, users can populate the `.env` file with their custom configurations.
> **Important**: Be sure that the contents of the `.env` file are not accessible to the web. Make sure to secure it using proper file permissions or server configuration to prevent unauthorized access.

---

## Configuration File Sequence

HumHub's configuration is built from multiple files, and the `.env` file has the **highest priority**, overwriting all other configurations.

### Sequence of Configuration Files

1. **Base Configurations**:
- `protected/humhub/config/common.php`
- `protected/humhub/config/web.php` (for Web application)
- `protected/humhub/config/console.php` (for Console application)

2. **Dynamic Configurations**:
- `protected/config/dynamic.php`

3. **Custom Configurations**:
- `protected/config/common.php`
- `protected/config/web.php` (for Web application)
- `protected/config/console.php` (for Console application)

4. **Environment Variables**:
- `.env`

---

## Key Features

- **Environment-Specific Prefixes**:
    - `HUMHUB_FIXED_SETTINGS`: Immutable settings.
    - `HUMHUB_CONFIG`: General Yii configuration.
    - `HUMHUB_WEB_CONFIG`: Web application-specific configuration.
    - `HUMHUB_CLI_CONFIG`: Console application-specific configuration.
    - `HUMHUB_ALIASES`: Yii alias definitions.

- **Array Depth Separator**:  
  Uses `__` to represent nested keys in arrays.

- **Key Conversion**:  
  Converts environment variable segments into `camelCase`.

- **Automatic Value Normalization**:  
  Supports JSON decoding and boolean value conversion.

- **Alias Support**:  
  Maps environment-defined aliases to Yii aliases.

---

## Debug Mode

The `HUMHUB_DEBUG` environment variable controls Yii's debugging and environment settings.

### Behavior
- **When `HUMHUB_DEBUG=true`**:
    - Sets `YII_DEBUG` to `true`
    - Sets `YII_ENV` to `dev`
- **When `HUMHUB_DEBUG=false` or not set**:
    - Sets `YII_DEBUG` to `false`
    - Sets `YII_ENV` to `prod`
---

## Supported Prefixes

### HUMHUB_FIXED_SETTINGS
- **Purpose**: Defines fixed settings under `params['fixed-settings']`.
- **Example**:
  ```env
  HUMHUB_FIXED_SETTINGS__EXAMPLE1__EXAMPLE2=Something
  ```
  **Resulting Configuration**:
  ```php
  $config['params']['fixed-settings']['example1']['example2'] = 'Something';
  ```

---

### HUMHUB_CONFIG
- **Purpose**: General Yii configuration.
- **Example**:
  ```env
  HUMHUB_CONFIG__COMPONENTS__URL_MANAGER__ENABLE_PRETTY_URL=true
  HUMHUB_CONFIG__COMPONENTS__URL_MANAGER__SHOW_SCRIPT_NAME=false
  ```
  **Resulting Configuration**:
  ```php
  $config['components']['urlManager']['enablePrettyUrl'] = true;
  $config['components']['urlManager']['showScriptName'] = false;
  ```

---

### HUMHUB_WEB_CONFIG
- **Purpose**: Web application-specific configuration.
- **Example**:
  ```env
  HUMHUB_WEB_CONFIG__COMPONENTS__ASSET_MANAGER__FORCE_COPY=true
  ```
  **Resulting Configuration**:
  ```php
  $config['components']['assetManager']['forceCopy'] = true;
  ```

---

### HUMHUB_CLI_CONFIG
- **Purpose**: Console application-specific configuration.
- **Example**:
  ```env
  HUMHUB_CLI_CONFIG__COMPONENTS__CACHE__CLASS=FileCache
  ```
  **Resulting Configuration**:
  ```php
  $config['components']['cache']['class'] = 'FileCache';
  ```

---

### HUMHUB_ALIASES
- **Purpose**: Maps aliases for Yii.
- **Example**:
  ```env
  HUMHUB_ALIASES__WEBROOT=/var/www/app
  HUMHUB_ALIASES__UPLOADS=/var/www/app/uploads
  ```
  **Resulting Aliases**:
  ```php
  Yii::setAlias('@webroot', '/var/www/app');
  Yii::setAlias('@uploads', '/var/www/app/uploads');
  ```

---

## Value Normalization

- **Boolean Values**:
  Strings like `true` and `false` are converted to booleans.
  ```env
  HUMHUB_CONFIG__COMPONENTS__URL_MANAGER__ENABLE_PRETTY_URL=true
  ```
  ```php
  $config['components']['urlManager']['enablePrettyUrl'] = true;
  ```

- **JSON Decoding**:
  Strings are decoded into arrays or objects.
  ```env
  HUMHUB_CONFIG__PARAMS__SUPPORTED_LANGUAGES=["en", "de", "fr"]
  ```
  ```php
  $config['params']['supportedLanguages'] = ['en', 'de', 'fr'];
  ```

## Example Configuration

### Sample `.env` File
```env
HUMHUB_FIXED_SETTINGS__EXAMPLE1__EXAMPLE2=Something
HUMHUB_CONFIG__COMPONENTS__URL_MANAGER__ENABLE_PRETTY_URL=true
HUMHUB_WEB_CONFIG__COMPONENTS__ASSET_MANAGER__FORCE_COPY=true
HUMHUB_CLI_CONFIG__COMPONENTS__CACHE__CLASS=FileCache
HUMHUB_ALIASES__WEBROOT=/var/www/app
```

### Resulting Configuration
```php
$config = [
    'params' => [
        'fixed-settings' => [
            'example1' => [
                'example2' => 'Something',
            ],
        ],
    ],
    'components' => [
        'urlManager' => [
            'enablePrettyUrl' => true,
        ],
        'assetManager' => [
            'forceCopy' => true,
        ],
        'cache' => [
            'class' => 'FileCache',
        ],
    ],
    'aliases' => [
        '@webroot' => '/var/www/app',
    ],
];
```
