---
id: dot-env
title: Dot Env (.env)
---


# Dot Env (.env)

The HumHub's `.env` file contains environment variables which can overwrite the configuration made in files.

This allows for clean separation of configuration and code.

To enable it, copy the `.env.example` template to `.env`:

```bash
cp .env.example .env
```

> **Important**: Make sure that the content of the `.env` file is not accessible to the web by checking file permissions or server configuration.


## Configuration File Sequence

HumHub's configuration is built from multiple files, and the `.env` file has the **highest priority**, overwriting all other configurations:

1. **Base Configurations** (should not be modified):
- `protected/humhub/config/common.php`
- `protected/humhub/config/web.php` (for Web application)
- `protected/humhub/config/console.php` (for Console application)

2. **Dynamic Configurations**:
- `protected/config/dynamic.php` (only for the database configuration)

3. **Custom Configurations**:
- `protected/config/common.php`
- `protected/config/web.php` (for Web application)
- `protected/config/console.php` (for Console application)

4. **Environment Variables**:
- `.env`


## Key Features

- **Array Depth Separator**:  
  Uses `__` to represent nested keys in arrays.

- **Key Conversion**:  
  Converts environment variable segments into `camelCase`.

- **Automatic Value Normalization**:  
  Supports JSON decoding and boolean value conversion.

Example:
  ```env
  HUMHUB_CONFIG__COMPONENTS__URL_MANAGER__ENABLE_PRETTY_URL=true
  HUMHUB_CONFIG__PARAMS__SUPPORTED_LANGUAGES=["en", "de", "fr"]
  ```
  ```php
  $config['components']['urlManager']['enablePrettyUrl'] = true;
  $config['params']['supportedLanguages'] = ['en', 'de', 'fr'];
  ```

- **Alias Support**:  
  Maps environment-defined aliases to Yii aliases.

Example:
  ```env
  HUMHUB_ALIASES__WEBROOT=/var/www/app
  HUMHUB_ALIASES__UPLOADS=/var/www/app/uploads
  ```
  ```php
  Yii::setAlias('@webroot', '/var/www/app');
  Yii::setAlias('@uploads', '/var/www/app/uploads');
  ```


## Supported Prefixes

### HUMHUB_DEBUG

Controls Yii's debugging and environment settings.

- **When `HUMHUB_DEBUG=true`**:
  - Sets `YII_DEBUG` to `true`
  - Sets `YII_ENV` to `dev`
- **When `HUMHUB_DEBUG=false` or not set**:
  - Sets `YII_DEBUG` to `false`
  - Sets `YII_ENV` to `prod`

### HUMHUB_CONFIG

General Yii configuration.

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

### HUMHUB_WEB_CONFIG

Web application-specific configuration.

- **Example**:
  ```env
  HUMHUB_WEB_CONFIG__COMPONENTS__ASSET_MANAGER__FORCE_COPY=true
  ```
  **Resulting Configuration**:
  ```php
  $config['components']['assetManager']['forceCopy'] = true;
  ```

### HUMHUB_CLI_CONFIG

Console application-specific configuration.
- 
- **Example**:
  ```env
  HUMHUB_CLI_CONFIG__COMPONENTS__CACHE__CLASS=FileCache
  ```
  **Resulting Configuration**:
  ```php
  $config['components']['cache']['class'] = 'FileCache';
  ```

### HUMHUB_FIXED_SETTINGS

Defines fixed settings under `params['fixed-settings']`.

- **Example**:
  ```env
  HUMHUB_FIXED_SETTINGS__EXAMPLE1__EXAMPLE2=Something
  ```
  **Resulting Configuration**:
  ```php
  $config['params']['fixed-settings']['example1']['example2'] = 'Something';
  ```


## Example Configuration

```env
HUMHUB_FIXED_SETTINGS__EXAMPLE1__EXAMPLE2=Something
HUMHUB_CONFIG__COMPONENTS__URL_MANAGER__ENABLE_PRETTY_URL=true
HUMHUB_WEB_CONFIG__COMPONENTS__ASSET_MANAGER__FORCE_COPY=true
HUMHUB_CLI_CONFIG__COMPONENTS__CACHE__CLASS=FileCache
HUMHUB_ALIASES__WEBROOT=/var/www/app
```

Resulting Configuration:
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
