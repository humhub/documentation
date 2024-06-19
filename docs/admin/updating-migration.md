---
id: updating-migration
title: Migration Guide for Administrators
sidebar_label: Migration Guide
---

Besides the normal Humhub update, major version upgrades may also require changes to the server system or configuration files.
For example, this could be a new PHP dependency or a changed setting in the configuration file.

In addition to this guide, you may also check the [**Theme Migration Guide**](../theme/migrate.md) 
or [**Development Migration Guide**](../develop/modules-migrate.md).

1.16
----

- The minimum PHP Version is now **8.0**
-  The search has been reworked and the search index is automatically rebuilt after the update. This can take some time depending on the size.
- If you are using the *Professional Edition - Solr Module*, the configuration must be changed. See Module Configuration for details.

1.15
----
- HumHub now employs JavaScript nonces for enhanced security, which may necessitate manual adjustments for inserted scripts, such as statistics codes, to ensure compatibility.
  Your custom statistic code may need to be modified under `Administration` -> `Settings` -> `Advanced`.  If Javascript is being used in the [Custom Pages](https://marketplace.humhub.com/module/custom_pages/manual) module or [Custom Modules](https://marketplace.humhub.com/module/custom_pages/manual), please refer to the respective documentation.


1.14
----
- Make sure that you don't use any third-party auth clients in your configuration. Use available Modules instead!    protected/humhub/modules/user/authclient/[Facebook,GitHub,Google,LinkedIn,Live,Twitter].php


1.11
----

- The minimum PHP Version is now **7.4**
- The deprecated "Directory" module has now been removed. It must now also no longer be used in the custom configuration files. 
 

1.9
----

- The minimum PHP Version is now **7.3**
 

1.8
----

- Usernames are now validated more strictly and can only contain letters, numbers and the characters `-_.@` by default.  This behavior can be customized via the User Module variable `validUsernameRegexp`. New Value: `/^[\p{L}\d_\-@\.]+$/iu` - Old Value: `/^[\p{L}\d_\-@#$%^&*\(\)\[\]\{\}+=<>:;,.?!|~"\'\\\\]+$/iu`.

- Default permissions for Spaces or User Profiles can now be defined easily in the administration area.

- The minimum PHP Version is now **7.2**
 


1.7
----

- The Space description is now limited to 100 characters. For longer texts there is a new "About" field.

- The file names of some automatically generated file variants (like the preview images) have changed. Therefore the "cache" for those file variants should be deleted after the upgrade. The variants will be created again automatically later.

```
php protected/yii file/delete-variants
```

- The new About section can be disabled by space [module configuration](advanced-configuration.md#module-configurations):

```
return [
    'modules' => [
        'space' => [
            'hideAboutPage' => true 
        ]
    ]
]
```
- New profile field types `UserMemberSince` and `UserLastLogin` can be added
- New [image scale options](uploads.md)

1.6
----

No changes necessary.

1.5
----

**Caching and ``.htaccess`` changes**

Removed caching section from `.htaccess` file. See [Documentation](https://docs.humhub.org/docs/admin/performance#http-caching) for more details.

**Image Handling**

- ImageMagick "convert" command  ad ``Administration -> Settings -> Advanced -> Files`` was removed

- New recommended PHP extension (**ImageMagicks** or GraphicsMagick) 


**Site logo**

Your uploaded logo is now automatically scaled to different dimensions depending on the specific position.

We recommend uploading a high resolution version of the used logo again.  ``Administration -> Settings -> Appearance ``


1.4
----

**Changed Language codes**

Some language codes have changed. If you use any codes in configuration files or in manually overwritten translations, please check if they are affected. 

Affected codes:

| Old language code| New language code |
|----------|-------------|
| en | en-US |
| en_gb | en-GB |
| pt_br | pt-BR |
| nb_no | nb-NO |
| nn_no | nn-NO |
| zh_cn | zh-CN |
| zh_tw | zh-TW |
| fa_ir | fa-IR |

**The notification target configuration changed from**

```
'targets' => [ 
    \humhub\modules\notification\targets\WebTarget::class => [
        'class' => \humhub\modules\notification\targets\WebTarget::class
        'renderer' => ['class' => \humhub\modules\notification\renderer\WebRenderer::class]
    ],
...
]
```

to:

```
'targets' => [ 
    \humhub\modules\notification\targets\WebTarget::class => [
        'renderer' => ['class' => \humhub\modules\notification\renderer\WebRenderer::class]
    ],
...
]
```

Notification targets now can be overwritten or disabled e.g:

```
return [
    'components' => [
        'targets' => [ 
            \humhub\modules\notification\targets\MailTarget::class => [
                'active' => false
            ],
            \humhub\modules\notification\targets\MobileTarget::class => [
                'class' => '/my/own/target/MobileTarget'
            ],
        ]
    ]
]
```

1.3
----


> NOTE: This guide only affects updates from HumHub 1.2.x or lower to HumHub 1.3


1.) Please check following guides if you're using custom modules or themes:
- [Theme Migration Guide](../theme/migrate.md)
- [Module Migration Guide](../develop/modules-migrate.md)


2.) This release changes the existing cron jobs. 
Please see the chapter [Installation: Configuration](cron-jobs.md) for the new cronjob configuration!


3.) If you're using the sources directly from GitHub, you need to build the required assets manually.
Please see the chapter [Development Environment](../develop/build.md#build-production-assets) for more details.


1.2
----


No changes required.


1.1
----


No changes required.


1.0
----


No changes required.


0.20
----

> NOTE: This guide only affects updates from HumHub 0.11.2 or lower to HumHub 0.20

1. Before you run an update please check, if your installed modules and themes are compatible with your targeted version. If not, you can follow the [Theme Migration Guide](../theme/migrate.md) 
and [Module Migration Guide](../develop/modules-migrate.md) to make everything ready for the new version.

2. Backup your data:
	- Backup the whole HumHub installation folder from your webroot
	- Make a complete MySQL-Dump from your HumHub database

**Migration Steps**

1. Delete your current HumHub installation (Don't forget to make a backup as mentioned above, you will need these files later!)
2. Download the latest HumHub package directly from [https://download.humhub.com](https://download.humhub.com) and 
extract it to your webroot or install it via [GitHub/Composer](../develop/environment.md#gitcomposer-installation).
3. **IMPORTANT**: Before starting the Web installer you have to restore the /uploads/ directory form your backup to your new installation
4. Start the Web installer (e.g. [http://localhost/humhub](http://localhost/humhub)) and follow the instructions. If you enter the database name from your previous installation, HumHub will automatically migrate your existing database to the new version
5. Reinstall all previously installed modules/themes
  (Make sure to use a 0.20 compatible version!)
6. Rebuild the Search Index 

```
php yii search/rebuild
```
