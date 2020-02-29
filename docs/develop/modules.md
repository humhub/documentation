---
id: modules
title: Getting Started
---

The following guide describes the basic module structure and extended module features as well as important considerations regarding your own custom modules.
Since HumHub is based on the [Yii Application Framework](http://www.yiiframework.com/doc-2.0) you should at least be familiar with the basic concepts of this framework
before writing your own code as:

 - [Basic Application Structure](https://www.yiiframework.com/doc/guide/2.0/en/structure-overview)
 - [Controllers](https://www.yiiframework.com/doc/guide/2.0/en/structure-controllers)
 - [Models](https://www.yiiframework.com/doc/guide/2.0/en/structure-models)
 - [Views](https://www.yiiframework.com/doc/guide/2.0/en/structure-views)
 - [Assets](https://www.yiiframework.com/doc/guide/2.0/en/structure-assets)

You should also follow the [Coding Standards](coding-standards.md) and keep an eye on the [Migration Guide](modules-migrate.md) in order to
keep your module compatible with new HumHub versions and facilitate new features.

## Before you start

Before starting with the development of your custom module, first consider the following module options:

- Can my module be [enabled on user and/or space level](modules-base-class.md#use-of-contentcontainermodule)?
- Does my module produce [content](content.md)?
- Does my module produce [stream entries](stream.md)?
- Does my module add any [sidebar snippets](snippet.md)?
- Do I need to [extend or change the default behaviour](module-change-behavior.md) of core components?
- Do I need specific [permissions](permissions.md) for my module?
- Does my module create any [notifications](notifications.md) or [activities](activities.md)?
- Should [guest users](permissions.md#guest-access) have access to some parts of my module?

Furthermore you may have to consider the following issues:

- [Module settings and configuration](settings.md)
- [Append a module to a specific navigation](module-change-behavior.md#extend-menus)
- [Client side development](javascript-index.md)
- [Schema Migrations and Integrity](models.md)
- [Testing](testing.md)
- [File handling](files.md)
- [Events](events.md)
- [Translation](i18n.md)
- [Live UI updates](live.md)
- [Security](security.md)
- [Embedded Themes](../theme/module.md)

## Setup a module skeleton

The easiest way of setting up a basic HumHub module is by using the [Developer Tools Module](https://github.com/humhub/humhub-modules-devtools).
Once you've generated a module skeleton, copy the module to a [module loader path](environment.md#module-loader-path). Now the module
should be visible under `Administration -> Modules` and can be [enabled](#enabled-a-module).

## Module Structure

Basically HumHub modules are identical to [Yii2 modules](http://www.yiiframework.com/doc-2.0/guide-structure-modules.html).

A minimal HumHub module at least have to define the following files and metadata:

```
my-module
├── config.php
│   ├── id
│   ├── namespace
│   └── class
├── module.json
│   ├── id
│   ├── name
│   ├── description
│   └── version
└── Module.php
```

### `config.php`

The `config.php` can be used to define event handlers, and the definition of [URL Rules](https://www.yiiframework.com/doc/guide/2.0/en/runtime-routing#creating-rules)
and consists of the following data:

- **id** - Unique ID of the module **required**
- **class** - Namespaced classname of the module class  **required**
- **namespace** - The namespace of your module  **required**
- **events** - Array containing the modules event configuration
- **urlManagerRules** - Array of [URL Manager Rules](https://www.yiiframework.com/doc/guide/2.0/en/runtime-routing#creating-rules) 
- **modules** - Can be used to define submodules

**Example:**

```php
// @example/config.php
use humhub\widgets\TopMenu;

return [
    'id' => 'example',
    'class' => 'johndoe\example\Module',
    'namespace' => 'johndoe\example',
    'events' => [
        [
           'class' => TopMenu::class, 'event' => TopMenu::EVENT_INIT, 
           'callback' => ['johndoe\example\Events', 'onTopMenuInit']
        ]
    ]
];
```

> ⚠️ Do not execute any dynamic code directly within `config.php` since the result will be cached!

> ⚠️ Do choose a preferably unique module id which does not interfere with any [core](overview.md#core-modules-and-components)
>or other available module.

### `module.json`

The `module.json` file holds basic metadata of a module which is used besides others by the marketplace.

Available attributes:

- **id** - The module ID **required**
- **version** - The module version. This must follow the format of X.Y.Z. **required**
- **name** - The modules name **required**
- **description** - A short module description **required**
- **humhub** - HumHub requirements
    - **minVersion** - The minimum HumHub core version this module is compatible with.
    - **maxVersion** - The maximum HumHub core version this module is compatible with.
- **keywords** - (Array) Some keywords 
- **screenshots** - (Array) Some screenshots for the marketplace, those should reside in the `resourcesPath` of your module.
- **homepage** - An URL to the website of the module. (Optional)
- **authors** - (Array) The authors of the module. (Optional)
	- **name** - The author's name.
	- **email** - The author's email address.
	- **homepage** - An URL to the author's website.
	- **role** -  The author's role (e.g. developer or translator)


**Example:**

```json
{
    "id": "example",
    "version": "1.0",
    "name": "My Example Module",
    "description": "My testing module.",
    "humhub": {
        "minVersion": "1.2",
		"maxVersion": "2.0"
    },
    "keywords": ["my", "cool", "module"],
    "screenshots": ["assets/screen_1.jpg"],
	"homepage": "https://www.example.com",
    "authors": [
        {
            "name": "Tom Coder",
            "email": "tc@example.com",
            "role": "Developer"
        },
        {
            "name": "Sarah Mustermann",
            "email": "sm@example.com",
            "homepage": "http://example.com",
            "role": "Translator"
        }
    ]	
}
```
> ⚠️ You should align the `minVersion` of your module when using new features and test your modules on all supported versions.

### `Module.php`

See chapter [Module Class](modules-base-class.md) for an introduction of the module base class.

### Documentation

The documentation files of a module must be located in the modules `docs` folder.

The following table lists files which can be added in order to provide module documentation for the marketplace. Note, the
**required** field only applies to the marketplace modules and are not required for private modules.

| File | Required | Description |
| --- | --- | --- |
| README.md | Yes | A description and overview of the features |
| CHANGELOG.md | Yes | A file which contains a curated, chronologically ordered list of changes for each version |
| MANUAL.md | No | Information on how to use this module |
| LICENCE.md | No | Licencing information including the licence |
| DEVELOPER.md | No | Additional information for developers |


### Extended structure example

The following structure contains some additional directories and files, which can be added for specific use-cases or features. 

```
my-module
├── activities - activity classes
├── assets - asset bundle classes
├── components - component classes
├── controllers - see above
├── live - live event classes
├── jobs - queue job classes
├── messages - contains the modules message files
├── migrations - see above
├── helpers - contains utility classes e.g. for URL generation
├── models - see above
├── modules - contains any submodules
├── notifications - notification classes
├── permissions - permission classes
├── resources - contains web assets as javascript files or stylesheets
├── tests- module tests
├── views - see above
├── widgets - see above
├── views - see above
├── Events.php - is often used for static event handlers
├── Module.php - see above
├── config.php - see above  
└── module.json - see above
```

## Module Lifecycle

### Bootstrap

During the `bootstrap` phase of the application the `humhub\components\bootstrap\ModuleAutoLoader` will search for 
all `enabled` modules within the module autoload path and register the configured [module event listeners](events.md)
defined in `config.php`.

### Install a Module

A module is considered as installed once it resides in one of the `moduleAutoloadPaths`. 
By default non-core modules reside in `@humhub/protected/modules`. You can install modules either by adding them 
manually to an autoload path or by loading them from the marketplace. 

> ℹ️ You can add additional module paths by means of the `moduleAutoloadPaths` parameter. 
Please see the [Development Environment Section](environment.md#module-loader-path) for more information.

### Enabled a Module

In order to use a module, you'll have to enable it first. This can be achieved by:

- Administration Backend `Administration -> Modules`
- Console command `php yii module/enable`

Enabling a module will automatically run the modules [database migrations](models.md#initial-migration) 
and add an entry to the `modules_enabled` table.

The `ModuleManager` responsible for enabling modules will trigger the following events right before and after enabling a module:

- `ModuleManager::EVENT_BEFORE_MODULE_ENABLE`
- `ModuleManager::EVENT_AFTER_MODULE_ENABLE`

### Disable Module

Disabling a module will usually drop all related module data from the database and will detach the module from the `bootstrap` process.

Modules can be disabled by means of

- Administration Backend `Administration -> Modules`
- Console command `php yii module/disable`

The `ModuleManager` responsible for disabling modules will trigger the following events right before and after enabling a module:

- `ModuleManager::EVENT_BEFORE_MODULE_DISABLE`
- `ModuleManager::EVENT_AFTER_MODULE_DISABLE`

> ℹ️ [ContentContainerModules](modules-base-class.md#use-of-contentcontainermodule) also have to be enabled within
> a space or user profile by means of the space management section.

### Uninstall Module

Uninstalling a module means removing it from the autoload path.

> ⚠️ You should never delete an enabled module folder manually without disabling it first.



