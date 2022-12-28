---
id: installation
title: HumHub Setup
---

:::tip
Check out our [Community Wiki](https://community.humhub.com/s/installation-and-setup/wiki/overview/list-categories) for many more guides and tips on installing and running HumHub!
:::

## Download and extract


This guide describes the installation of the packaged version of HumHub. The packaged version of HumHub includes a
production ready version of HumHub with all required third party dependencies and production assets. 
Make sure your server meets the [System Requirements](requirements.md) before you install HumHub.

If you intend to setup a development environment for HumHub, follow the [Development Environment](../develop/environment.md)
guide instead.

The packaged version of HumHub is available at [https://www.humhub.org/download](https://www.humhub.org/download).
After the download, just place the package into the `htdocs` folder of your web server.

Example

```
cd /tmp
wget https://www.humhub.com/download/package/humhub-<version>.tar.gz
tar xvfz humhub-<version>.tar.gz
mv /tmp/humhub-<version> /var/www/humhub
```
> Please replace `<version>` with the desired HumHub version e.g. `1.10.3`.

## File permissions

At least following directories and files needs to be **writable** by the PHP process:

- `/assets`
- `/protected/config/`
- `/protected/modules`
- `/protected/runtime`
- `/uploads/*`

If you want to use the HumHub automatic updater, all files must be writable.

```
chown -R www-data:www-data /var/www/humhub
```

## Start installer

Open your browser and open the URL e.g. [https://temp.humhub.dev](https://temp.humhub.dev).

The HumHub installer will now start and will guide you through the initial setup process.

For the first two steps [System Check](server-setup.md) and [Database Configuration](server-setup.md#create-database-schema) there is a detailed introduction in the [Server Setup](server-setup.md) document. 


## CronJobs

In the section below, only the most common method (also based on the installation structure of [Server Setup](server-setup.md)) is described.  

On the page [Cron Jobs](cron-jobs.md) we will go into this topic in more detail. 

** Cron job setup steps: **

Open the crontab of HumHub/PHP process user e.g. ``www-data``.

```
crontab -e -u www-data
``` 

Add following line to the crontab:

```
* * * * * /usr/bin/php /var/www/humhub/protected/yii queue/run >/dev/null 2>&1
* * * * * /usr/bin/php /var/www/humhub/protected/yii cron/run >/dev/null 2>&1
``` 

Make sure to replace ``/var/www/humhub`` with the path of your HumHub installation.


:::tip
Instead of the `queue/run` Cron Job you can also setup permanent worker processes. With these, background tasks have a shorter delay and a better performance.  More information can be found in the [Community Wiki](https://community.humhub.com/s/installation-and-setup/wiki/page/view?title=Queue+Worker). 
:::


## Configuration

The following configuration settings can be made directly in HumHub via the browser.

### E-Mails

HumHub sends emails to the users e.g. during the registration, password recovery, notifications or for daily summaries.

A valid transport and a sender e-mail address must be provided for this purpose. This can be configured in the web interface under ``Administration -> Settings -> Advanced -> E-Mail`.

:::note
You should use a `noreply` sender e-mail address sice reply by mail is currently not supported.
:::

If you installed a local SMTP server e.g. [Postfix](server-setup.md#postfix), you can use ``PHP`` as ``Mail Transport Type`` option.

You can use external SMTP services like SendGrid, Postmark, Amazon SES, Mailgun or any other SMTP server with the ``SMTP`` as ``Mail Transport Type`` option. 

### Time Zone

By default HumHub uses the time zone of the web server. However, the time zone of the database server (MariaDB) is the relevant one. If these time zones differs or the server was moved to another location, you need to change this time zone.  

You can switch the time zone at: ``Administration -> Settings -> General -> Server timezone``

If you are not sure which time zone is configured on your Maria DB server, you can query the time zone with the following SQL statement.

```sql
mysql> SELECT @@global.time_zone, @@session.time_zone;
``` 


:::note
Each registered user can also set its own primary time zone in the profile settings.
:::

## Pretty URLs 

By default, the HumHub URL includes a index.php file part and looks like https://example.com/index.php?r=dashboard%2Fdashboard. 
Using the Pretty URL or URL Rewriting feature, shorter and more meaningful URLs can be created such as https://temp.humhub.dev/dashboard.

To enable this feature, both the HumHub configuration and, possibly, the WebServer configuration must be modified.

Modify the HumHub [Configuration File](advanced-configuration.md) and add following block:

```php
    'components' => [
        'urlManager' => [
            'showScriptName' => false,
            'enablePrettyUrl' => true,
        ],
    ]
```

Full example of the configuration file: ``/protected/config/common.php``

```php
<?php
/**
 * This file provides to overwrite the default HumHub / Yii configuration by your local common (Console and Web) environments
 * @see http://www.yiiframework.com/doc-2.0/guide-concept-configurations.html
 * @see http://docs.humhub.org/admin-installation-configuration.html
 * @see http://docs.humhub.org/dev-environment.html
 */
return [
    'components' => [
        'urlManager' => [
            'showScriptName' => false,
            'enablePrettyUrl' => true,
        ],
    ]
];
```

### Apache

To enable URL Rewriting in Apache 2.4 based installations it is usually sufficient to copy the supplied file ``.htaccess.dist`` in the root directory of the HumHub installation to ``.htaccess``. 

```bash
cd /var/www/humhub
cp .htaccess.dist .htaccess
```

Sometimes it is necessary to enable support for ``.htaccess`` files in the [Apache VirtualHost](server-setup.md#apache) via the ``AllowOverwrite all`` directive. 


Example VirtualHost configuration:

```
<VirtualHost *:443>

  # ...

  <Directory /var/www/humhub/>
     Options -Indexes -FollowSymLinks
     AllowOverride All
  </Directory>

  # ...

</VirtualHost>
```

### NGINX

The [virtual server](server-setup.md#nginx) configuration for NGINX is already prepared for Pretty URLs and there are no further changes required.

## Enable production mode

By default HumHub is shipped in debug mode. This means that error messages are shown with maximum details directly to the users. In addition, the performance is reduced because no caching or compressed assets are used.

To activate Production Mode, edit the index.php file  and comment out the following lines.
To comment out lines, the line must begin with: //

Example (/var/www/humhub/index.php):

```php
// comment out the following two lines when deployed to production
// defined('YII_DEBUG') or define('YII_DEBUG', true);
// defined('YII_ENV') or define('YII_ENV', 'dev');
``` 

You can see the current mode at ``Administration -> Information``.

## Verify 

- **Cronjobs**

    You can find the last execution and number of open background jobs at: ``Administration -> Information -> Background jobs``

- **Error log**

    Check the log for error messages and warnings. These can be viewed directly in Humhub under YXZ.  ``Administration -> Information -> Logging``

- **Protected folders**

    Please make sure that the following directory is **not** publicly accessible via the web server.

    - /protected
    - /uploads/file
    - /themes/*/views
    
    The file `/protected/config/dynamic.php` contains the database credentials and should only be readable by the HumHub user (e.g. ``www-data``).

- **Production Mode**

    Make sure that no warning about the ``Debug mode`` appears under ``Administration -> Information -> About HumHub``.
    
 ## Staging/Test Environment
 
:::tip
 You can find a guide to setup an additional staging environment in our [Community Wiki](https://community.humhub.com/s/installation-and-setup/wiki/page/view?title=Staging+Environment).
:::

