---
id: updating-migration2
title: Migration Guide
---

Besides the normal Humhub update, major version upgrades may also require changes to the server system or configuration files.
For example, this could be a new PHP dependency or a changed setting in the configuration file.

In addition to this guide, you may also check the [Theme Migration Guide](../theme/migrate.md) or [Development Migration Guide](../developer/modules-migrate.md).

1.5
----

**Caching and ``.htaccess`` changes**

Removed caching section from `.htaccess` file. See [Documentation](https://docs.humhub.org/docs/admin/performance#http-caching) for more details.

**Image Handling**

- ImageMagick "convert" command  ad ``Administration -> Settings -> Advanced -> Files`` was removed

- New recommended PHP extensions (ImageMagicks, GraphicsMagick) 


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
- [Module Migration Guide](../developer/modules-migrate.md)


2.) This release changes the existing cron jobs. 
Please see the chapter [Installation: Configuration](installation-configuration.md) for the new cronjob configuration!


3.) If you're using the sources directly from GitHub, you need to build the required assets manually.
Please see the chapter [Development Environment](dev-environment.md#build-production-assets) for more details.


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

1. Before you run an update please check, if your installed modules and themes are compatible with your targeted version. If not, you can follow the [Theme Migration Guide](../theme/migrate.md) and [Module Migration Guide](../developer/modules-migrate.md) to make everything ready for the new version.

2. Backup your data:
	- Backup the whole HumHub installation folder from your webroot
	- Make a complete MySQL-Dump from your HumHub database

**Migration Steps**

1. Delete your current HumHub installation (Don't forget to make a backup as mentioned above, you will need these files later!)
2. Download the latest HumHub package directly from [https://www.humhub.org/download](https://www.humhub.org/download) and extract it to your webroot or install it via [GitHub/Composer](../developer/git-installation.md).
3. **IMPORTANT**: Before starting the Web installer you have to restore the /uploads/ directory form your backup to your new installation
4. Start the Web installer (e.g. [http://localhost/humhub](http://localhost/humhub)) and follow the instructions. If you enter the database name from your previous installation, HumHub will automatically migrate your existing database to the new version
5. Reinstall all previously installed modules/themes
  (Make sure to use a 0.20 compatible version!)
6. Rebuild the Search Index 

```
php yii search/rebuild
```

