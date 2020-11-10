---
id: module
title: Marketplace
---

:::caution
This section is under revision.
:::

Themes can also be published via our Marketplace. For this purpose the Theme must be integrated into a basic module. 


Theme Module
------------

You can find a full documentation about Modules in our [Developer documentation](../develop/modules.md).

This section gives only a brief overview of the most important steps to create a Theme Module.

To begin, you need to:

- Choose a unique module ID e.g. "theme-example1". All theme module IDs should start with "theme-".
- Create a folder named by the module ID at /protected/modules or [another module folder](../develop/environment.md#module-loader-path).

### Files

**docs/README.md** 

A description and overview of your Theme features. [See Example](https://raw.githubusercontent.com/humhub/humhub-modules-cfiles/master/docs/CHANGELOG.md)

**docs/CHANGELOG.md**

A file which contains a curated, chronologically ordered list of changes for each version. [See Example](https://raw.githubusercontent.com/humhub/humhub-modules-cfiles/master/docs/CHANGELOG.md)

**themes/example1/**

Place all Theme related files in this directory. (Same structure as directly under `/themes`.)

**Module.php**

```php
<?php

namespace yourName\humhub\theme\example1\Module;

class Module extends \humhub\components\Module
{
    /**
     * @inheritdoc
     */
    public $resourcesPath = 'resources';    
}
``` 


**module.json**

```json
{
    "id": "theme-example1",
    "name": "Example1 Theme",
    "description": "A very beautiful example design.",
    "keywords": [
    ],
    "version": "1.0",
    "humhub": {
        "minVersion": "1.7"
    },
    "screenshots": ["resources/screen1.jpg","resources/screen2.jpg", "resources/screen3.jpg", "resources/screen4.jpg"]
}
```

**config.php**

```php
return [
    'id' => 'theme-example1',
    'class' => 'yourName\humhub\theme\example1\Module',
    'namespace' => 'yourName\humhub\theme\example1'
];
```

**resources/screen1.jpg** - **resources/screen4.jpg**

Some screenshots for the marketplace. Are defined in the file `module.json`.


**resources/module_image**

A square icon at least a 128x128px PNG image.


Marketplace
-----------

### Registration

You can use your [HumHub Community](https://community.humhub.com) account to register our [Partner Portal](https://partner.humhub.com).

First a partner profile must be created and then the Theme can be uploaded and published in the Marketplace section of the Partner backend.

Please note: There will be a review process by our team for new and updated modules.

### Publish updates

To publish an updated version of the theme in our Marketplace, at least the following steps are necessary: 

- Increase version number in `module.json`.
- Adjust the minimum version in `module.json` to the HumHub version used to create the stylesheet.
- Adapt the `docs/CHANGELOG.md`

### Rules

- Simple color variations of the standard templates are not allowed as Marketplace Theme.
- Each module must provide a icon (for the Marketplace) and at least three screenshots. 
- During the beta phase of a new HumHub major version, an updated theme module version must be provided in the Marketplace.
- Overwritten View templates must be listed in the README.md and HumHub major version changes must be adapted. 
- Similar Themes with different variants (e.g. colors, icons) must be provided as single module.


 Subject to change without notice. These rules apply in addition to our General Marketplace Conditions, Terms and Conditions. 
