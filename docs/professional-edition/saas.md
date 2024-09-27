---
id: saas
title: Managed Hosting (SaaS)
---
The HumHub Professional Edition can also be upgraded to include optional Software-as-a-Service (SaaS) hosting.

With our SaaS offering, you get a fully hosted solution to run your HumHub platform without any technical worries. We take care of everything - server management, software updates, security, and backups - so you can focus entirely on growing and engaging your community. It’s the ideal choice if you’re looking for a secure, customizable, and scalable platform without the hassle of managing the infrastructure yourself.

:::note
Data sovereignty is very important to us. In our SaaS solution, a complete data export, and thus the switch to on-premise, is possible at any time. Naturally, switching from on-premise to our infrastructure is also possible, though with certain limitations. If you would like to migrate your installation to our infrastructure, please contact our Helpdesk for more information.
:::

## Installation & Setup

The only thing you need to do in terms of installation is to create a personal demo on our [website](https://www.humhub.com/en/professional-edition/demo). Our administrators will then migrate your demo to a Professional Edition server and you can start building your platform immediately. Migration is usually completed within one business day. 

If you have already created a demo installation of the HumHub Professional Edition, you don't have to start from scratch, of course. We will not only migrate all content you have created but also the accounts, structure, files, and so on. In this case, simply provide our Sales Team with the name of your demo and we will take care of everything else.  

## Updates

Your installation of the HumHub Professional Edition is automatically updated without any action required from you. For security reasons, updates are applied 2-3 weeks after their release. We summarize the most important new features and improvements in our [Release Notes](https://docs.humhub.org/docs/about/releasenotes/release_notes), a detailed list of all changes can be found in the [Changelog](https://github.com/humhub/humhub/blob/master/CHANGELOG.md).

:::note
If you are using custom modules and themes, we recommend disabling automatic updates to avoid any potential compatibility issues. You can manage this setting by navigating to `Administration > Cloud Hosting > Updates`. 
:::

The updates are of course provided and installed free of charge as part of our SaaS offering. 

## Backup & Export Data

Not only data sovereignty, but also data security and recoverability are very important to us. That's why we create daily, weekly, and monthly snapshots of your installation. Your installation and the backups created are, of course, stored in different data centres.

You can also create your own backups if you wish. Simply go to `Administration > Cloud Hosting > Export Data` and create a backup package that is a full copy of your installation.

### Migrate to On-Premise 

If you change your mind and decide you would rather host the HumHub Professional Edition on-premise, you can always export a backup of your data.

A detailed step-by-step installation guide can be found in this documentation. Once your server is up and running, follow these simple instructions to import the data from your backup: 

1.) [Install and configure](../admin/installation.md) a Humhub system. Use the same version that you have used in our infrastructure.

2.) Download the provided backup package and extract it to a temporary folder

3.) Replace the folder `/uploads`.

4.) Replace the database (A full database dump is stored in the folder `runtime/dbbackup.sql.gz`)

5.) Delete the file `/protected/config/dynamic.php` and empty the folder `protected/runtime/`.

6.) Rebuild the [search index](../admin/search.md)

7.) Reinstall [modules](../admin/console.md#module)

```
cd protected
php yii module/update-all
```

8.) Restart the webserver and test the installation


## GDPR

To download the data processing agreement go to `Administration > Cloud Hosting > Data privacy`.

## Custom Domain

Using your own domain is possible if we host your installation for you. All you need to do is create a CNAME record for your subdomain (e.g. community.example.com) pointing to our services:

- saas-edge-de1.humhub.zone. (Europe / Germany)
- saas-edge-ca1.humhub.zone. (North America / Canada)
- saas-edge-sgp1.humhub.zone. (Asia / Singapore)

Once this is set up, all you need to do is add the custom domain in `Admin > Cloud Hosting > Custom Domain`. Please note that it may take up to 15 minutes for our systems to process and apply the changes.

A Let's Encrypt SSL certificate is automatically created within 2 hours.

:::note
Since CNAME records are only possible for subdomains, only custom domains like **community.example.com** or **www.examplecommunity.com** are possible. 
:::

### Force Custom Domain

Prepend the following code block in your [`localconfig.php` file](#configuration-files) to force that all requests are redirected to your own custom domain name.

**Example:**

```php
$forwardedHost = empty($_SERVER['HTTP_X_FORWARDED_HOST']) ? '' : $_SERVER['HTTP_X_FORWARDED_HOST']; 
if (!empty($_SERVER['REQUEST_URI']) && (empty($forwardedHost) || $forwardedHost === 'example.humhub.com')) {
   header("Location: https://www.example.com". $_SERVER['REQUEST_URI']);
   exit;
}

// ...
``` 

:::note
Make sure to replace "example.com" with your domain name. After this modification, your default URL e.g. community.example.com is no longer available.
:::

## Custom Modules & Themes (SFTP)

If you would like to use your own modules and themes, you can enable SFTP access for your instance.

Please go to `Administration > Cloud Hosting > SFTP` for more details.

**HumHub core files cannot be modified.**

:::tip
Uploaded modules/themes should always be tested on a local test system with the same HumHub version. If required, we can also provide you with a Professional Edition Test Key here. Please contact our Helpdesk.  
:::

## Configuration Files

Some specific settings in HumHub require customization via the [HumHub configuration files](../admin/advanced-configuration.md).   

To do this, an SFTP connection must be established and the file in the root directory ``localconfig.php`` must be modified. 

The file ``localconfig.php`` is the equivalent of the file ``/protected/config/common.php`` if you run HumHub on-premise.

**New:** To adjust configurations which correspond to the file `protected/config/web.php`, the file `/localconfig-web.php` can now be modified.


