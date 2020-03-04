---
id: updating
title: Updating HumHub
---

## Before you update

Prior to an update, always check the compatibility of custom modules and your theme, especially for major version updates.
For each new release (except maintenance releases) there will be a theming and module migration guide available:

- [Theme Migration Guide](../theme/migrate.md)
- [Module Migration Guide](../developer/modules-migrate.md)

Additional migration notes:
- [HumHub Changelog](https://github.com/humhub/humhub/blob/master/protected/humhub/docs/CHANGELOG.md)
- [Update to 1.4](updating-140.md)
- [Update to 1.3](updating-130.md)
- [Update to 0.20](updating-020.md)

:::warning
Always **[backup](backup.md)** your data before updating
:::

## Manual Update

1. [Backup](backup.md) your installation (you will need these files later!)
2. Delete your current HumHub installation
3. Download the latest HumHub package from [https://www.humhub.org/download](https://www.humhub.org/download) and extract the package to your `web-root`
4. Restore the following files from backup:

    - `/uploads/*`
    - `/protected/config/*`
    - `/protected/runtime/searchdb/*`
    - `/protected/modules/*`
    - `/themes/*`
	
4. Run database migration tool within `@humhub/protected`:

```console
php yii migrate/up --includeModuleMigrations=1
```

5. Flush caches

```console
php yii cache/flush-all
```

> If you are using APC(u) as cache backend, you may also need to restart your web server. 

6. Update installed marketplace modules within `@humhub/protected`:

```console
php yii module/update-all
```
## Automatic Update

The [HumHub Updater Module](https://www.humhub.org/de/marketplace/details?id=17) enables updates of your HumHub platform 
in just a few clicks and without any technical knowledge. 

1. Administration -> Modules -> Browse online
2. Choose **HumHub Updater** and click 'Install'
3. Switch to 'Installed' Tab
4. Choose **HumHub Updater** and click 'Enable'
5. Select in left navigation: Administration -> Update HumHub
6. Follow the updater steps

:::tip
Keep your updater module itself up to date, otherwise new versions may not be available for you
:::

:::caution
The Update module can not be used in [git based installations](../develop/environment.md#gitcomposer-installation)
:::
