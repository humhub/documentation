---
id: saas
title: Managed Hosting (SaaS)
---
The HumHub Professional Edition can also be upgraded to include optional Software-as-a-Service (SaaS) hosting.

With our SaaS offering, you get a fully hosted solution to run your HumHub platform without any technical worries. We take care of everything - server management, software updates, security, and backups — so you can focus entirely on growing and engaging your community. It’s the ideal choice if you’re looking for a secure, customizable, and scalable platform without the hassle of managing the infrastructure yourself.

:::note
Data sovereignty is very important to us. In our SaaS solution, a complete data export, and thus the switch to on-premise, is possible at any time. Naturally, switching from on-premise to our infrastructure is also possible, though with certain limitations. If you would like to migrate your installation to our infrastructure, please contact our Helpdesk for more information.
:::

## Installation & Setup

The only thing you need to do in terms of installation is to create a personal demo on our [website](https://www.humhub.com/en/professional-edition/demo). Our administrators will then migrate your demo to a Professional Edition server and you can start building your platform immediately. Migration is usually completed within one business day. 

If you have already created a demo installation of the HumHub Professional Edition, you don't have to start from scratch, of course. We will not only migrate all content you have created but also the accounts, sturctre, files and so on. In this case, simply provide our Sales Team with the name of your demo and we will take care of everything else.  

## Humhub version updates 

While demo installations are automatically updated to the latest stable HumHub version, an update of Professional Edition SaaS installations must be requested from our helpdesk. 

Please see ``Administration -> Cloud Hosting -> Request Humhub upgrade`` for details.

:::note
If you use your own modules or themes, you should test them on a local environment before updating.
:::

A Humhub update is free of charge.

## Backup & Export Data

Not only data sovereignty, but also data security and recoverability are very important to us. That's why we create daily, weekly and monthly snapshots of your installation. Your installation and the backups created are, of course, stored in different data centres.

You can also create your own backups if you wish. Simply go to ``Administration -> Cloud Hosting -> Export Data'' and create a backup package that is a full copy of your installation.

### Migrate to On Premise 

1.) [Install and setup](../admin/installation.md) a Humhub system with the same version locally

2.) Download the provided data package and extract it to a temporary folder

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


## GDPR & Terms of use

Please see:

- ``Administration -> Cloud Hosting -> Data privacy``
- ``Administration -> Cloud Hosting -> Terms of use`` 

## Custom Domain

You can also use your own domain with our SaaS offer. For this you have to create a nameserver CNAME entry.

For this domain, a Letsencrypt SSL certificate is also automatically generated within 2 hours.

Please see ``Administration -> Cloud Hosting -> Custom domain`` for more details.

:::note
Since CNAME records are only possible for subdomains, only domains like **www**.example.com are possible. 
:::

### Force Custom Domain

You need to prepend the following code block in your [`localconfig.php` file](#configuration-files) to force that all requests are redirected to your own custom domain name.

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
Make sure to replace "example.com" with your domain name. After this modification your default URL e.g. example.humhub.com is  not longer available.
:::



## Custom Modules & Themes (SFTP)

It is possible to upload own modules or themes to your server instance via SFTP.
HumHub core files cannot be modified.


Please see ``Administration -> Cloud Hosting -> SFTP`` for details

:::tip
Uploaded modules/themes should always be tested in advance on a local test system with the same HumHub version. If required, we can also provide you with a Professional Edition Test Key here. Please contact our Helpdesk.  
:::

## Configuration Files

Some specific settings in HumHub require customization via the [HumHub configuration files](../admin/advanced-configuration.md).   

This is also possible with SaaS hosting. To do this, an SFTP connection must be established and the file in the root directory ``localconfig.php`` must be modified. 

The file ``localconfig.php`` is the equivalent of the file ``/protected/config/common.php`` if you run HumHub yourself.

**New:** To adjust configurations which correspond to the file `protected/config/web.php`, the file `/localconfig-web.php` can now be modified.


