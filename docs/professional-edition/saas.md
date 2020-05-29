---
id: saas
title: Managed Hosting (SaaS)
---

It is possible to subscribe to the HumHub Professional Edition with a SaaS option. Our team will take care of the operation, maintenance and backup of your HumHub installation.

:::note
You can always migrate to an OnPremise installation later on. But we are also happy to import your existing installation into our infrastructure. Just contact our helpdesk for this.
:::


## Installation

To create a hosted HumHub with us, simply create an installation at our [Demo Hosting](https://www.humhub.com/en/professional-edition/demo).

Each installation starts here with the free Demo Plan (maximum 5 users) and can be upgraded to Professional Edition Hosting at any time later.  
 
:::note
The name of your hosting cannot be changed after the installation is complete.
:::

 ## Humhub version updates 

While demo installations are automatically updated to the latest stable HumHub version, an update of Professional Edition SaaS installations must be requested from our helpdesk. 

Please see ``Administration -> Cloud Hosting -> Request Humhub upgrade`` for details.

:::note
If you use your own modules or themes, you should test them on a local environment before updating.
:::

A Humhub update is free of charge.

## Backup & Export Data

Please see ``Administration -> Cloud Hosting -> Export data`` for details

### Migrate to On Premise 

1.) [Install and setup](../admin/installation.md) a Humhub system with the same version locally

2.) Download the provided data package and extract it to a temporary folder

3.) Replace the folders `/uploads`, `/themes`, `/protected/modules`.

4.) Replace the database (A full database dump is stored in the folder `runtime/dbbackup.sql.gz`)

5.) Delete the file `/protected/config/dynamic.php` and empty the folder `protected/runtime/`.

6.) Rebuild the [search index](../admin/search.md)

7.) Restart the webserver and test the installation


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

## Custom modules & themes (SFTP)

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


