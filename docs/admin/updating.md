---
id: updating
title: Updating HumHub
sidebar_label: Overview
---

The following **Migration Guides** will additionally be available for each new version release (except maintenance releases):
- [Migration Guide: **Administrative Changes**](../admin/updating-migration.md) (Server Environment and System Requirements)
- [Migration Guide: **Theming Related Changes**](../theme/migrate.md) (If you are using your own theme.)
- [Migration Guide: **Module Development**](https://github.com/humhub/humhub/blob/develop/MIGRATE-DEV.md) (If you are using any custom modules.)

Please follow these guides - if necessary - before you start the update process.

We also recommend to create a complete **[backup](backup.md)** before each update (also for maintenance updates).


## Updater Module

The [HumHub Updater](https://marketplace.humhub.com/module/updater) Module enables updates of your HumHub platform 
in just a few clicks and without any technical knowledge. 

** Installation of the ``Updater`` module **

1. Open your HumHub installation as Administrator
2. Go to: Administration -> Modules -> Browse online
3. Choose **HumHub Updater** and click 'Install'
4. Switch to 'Installed' Tab
5. Choose **HumHub Updater** and click 'Enable'


:::note 
In the configuration of the module you can select the release channel for the available updates. This is set to "Stable" by default. Use the "Beta" channel here to try out new versions or verify compatibility with your own modules/themes.  
:::

** Perform a update **

1. Select in left navigation: Administration -> Update HumHub
2. Follow the updater steps

The update packages we provide typically contain only one update step (e.g. 1.4.0 to 1.4.1). This means you have to re-run the update procedure as many times as you have reached the latest HumHub version. During these procedure, especially between major updates (e.g. 1.3 -> 1.4.) all installed marketplace modules should be also updated.

:::note
Keep your updater module itself up to date, otherwise new versions may not be available for you.  
:::


## Upgrade manually

:::note 
The example commands presented here are based on the [Server Setup](server-setup.md) described here. 
:::

:::note 
We do not recommend skipping major versions. For example, an update from e.g. 1.3 to 1.5 should be done in two steps (1.3 to 1.4 and 1.4 to 1.5). 
:::



**Stop the webserver and the cron jobs**

``` 
systemctl stop apache2
systemctl stop cron 
```

**Backup & Delete your current HumHub installation**

``` 
mv /var/www/humhub /var/www/humhub.backup
```

**Download and Extract**

Download the latest HumHub package from [https://download.humhub.com](https://download.humhub.com) and extract the package to your `web-root`.

``` 
cd /var/www
wget https://download.humhub.com/downloads/install/humhub-1.13.0.tar.gz
tar xvfz humhub-1.13.0.tar.gz
mv humhub-1.13.0 humhub 
```

**Restore individual files**

Restore the following files from backup:

- ``.htaccess`` (if used)
- ``.env`` (if used)
- ``/uploads/*``
- ``/protected/config/*``
- ``/protected/modules/*``
- ``/themes/mytheme`` (if available)

```
cp -rfa /var/www/humhub.backup/uploads /var/www/humhub
cp -rfa /var/www/humhub.backup/protected/{config,modules} /var/www/humhub/protected
cp -a /var/www/humhub.backup/.htaccess /var/www/humhub
```

**Flush caches**

This step is only necessary if an external cache such as Redis is used.

```console
cd /var/www/humhub/protected
php yii cache/flush-all
```

**Database migration**

```
cd /var/www/humhub/protected
php yii migrate/up --includeModuleMigrations=1
```

**Update installed modules**

```
cd /var/www/humhub/protected
php yii module/update-all
```

**Fix permissions** 

If you did not run the previous steps as the actual HumHub system user (e.g. www-data), you may need to correct the permissions.

```
chown -R www-data:www-data /var/www/humhub 
```


**Restart services** 

```
systemctl start apache2
systemctl start cron
```

**Cleanup backup (optional)**

```
rm -rf /var/www/humhub.backup
```



## Git based Installations


If you're running an installation based on our git repository (not recommended for production installations), you can find more information about [updates](../develop/environment.md#update-your-installation) in our developer documentation. 
