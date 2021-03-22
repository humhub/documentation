---
id: troubleshooting
title: Troubleshooting & Help
sidebar_label: Troubleshooting & Help
---

This guide provides some assistance for common administrative problems.

Cron Job Setup
----------------------------------------

The cron setup can be frustrating and it's hard to provide a guide for every possible server environment. There is a
[community driven wiki](https://community.humhub.com/s/installation-and-setup/wiki/page/view?title=Cron+Job+Setup) with
examples of cron settings for different environments. Furthermore refer to the [Cron Job Setup](cron-jobs.md) guide if not already done.

Please check the following known issues before opening an issue:

- Are you using the right executable for your cron command.

Make sure you are using **php-cli** instead of **php-cgi** and that your php is pointing to the same installation/configuration
as your apache server. You can check the installed php and installed packages by running the following commands:

```
> php -v
> php --ini
```

In case you still need help please add the following information to your issue description:

- Do you have access to setup Cron Jobs?
- Does your server use Cron or Crontab?
- Does your server use a third-party Cron Job provider?
- Are you using VPS or Dedicated/Shared/Other Hosting?
- Can you provide screenshots of your Cron Job settings? (With personal information blurred out!)
- What type of server are you using? (CloudLinux CentOS 6, Windows IIS, or etc)

Clear cache
-----------------------------------------

Especially after manually updating HumHub or a module by git, you'll may have to clear the cache and update the asset files.

The cache can be cleared either in the admin section `Administration -> Settings -> Advanced -> Caching - > Save & Flush` (this will also reset the asset files), or
by console by [console](console.md#cache). When not using the administration backend, you'll have to manually clear the asset files by deleting the content of 
`@humhub/assets/*` folder.

Data Integrity
-----------------------------------------

Some problems may be triggered by data integrity issues, especially if you use a `myisam` database.

The integrity check can be used to ensure the data integrity of your modules.
You can run the integrity check with the following command:

```
cd protected
php yii migrate/up --includeModuleMigrations=1
php yii integrity/run
```

Search index
-----------------------------------------

Especially when using the default [search index](search.md) you may have to rebuild the search index from time to time.
You should consider switching to another search provider if your user base or amount of content grows.

Please refer to the [Search System](search.md) part for more information about the search in HumHub.

Error after update
-----------------------------------------

- Check the version and compatibility of installed modules
- Check the compatibility of your module
- Check the [Theming Migration](../theme/migrate.md) guide.
- Check `Administration -> Information -> Database` or run `php yii migrate/up --includeModuleMigrations=1` to check for faulty migrations

> Note: Please always backup your installation prior to an update

Support Community
-----------------

There is also an active support community at: http://community.humhub.com


Github - Bugtracker
-------------------

**How to file a bug**
- Go to our issue tracker on GitHub: https://github.com/humhub/humhub/issues
- Search for existing issues using the search field at the top of the page
- File a new issue including the info listed below
- Thanks a ton for helping make Brackets higher quality!

**When filing a new bug, please include:**

- Descriptive title - use keywords so others can find your bug (avoiding duplicates)
- Specific and repeatable steps that trigger the problem
- What happens when you follow the steps, and what you expected to happen instead.
- Include the exact text of any error messages if applicable (or upload screenshots).
- HumHub version (or if you're pulling directly from Git, your current commit SHA - use git rev-parse HEAD)
- Did this work in a previous version? If so, also provide the version that it worked in.
- OS/PHP/MySQL version
- Modules? Confirm that you've tested with Debug > Reload Without Extensions first (see below).
- Any errors logged in Debug > Show Developer Tools - Console view

Direct Support (Enterprise Edition only)
----------------------------------------

As Enterprise Edition user you can create direct support inquiries at: 
`Administration -> Enterprise Edition -> Support`.

If you have problems related to the installation, please contact us at: info@humhub.com

Common issues and problems
--------------------------

### Unable to write cache file '/var/www/humhub/protected/runtime/cache/hu/humhub119...f.bin':

This problem is often caused when the HumHub application is used by different system users.  
The reason for this error could be, that the [cron jobs](installation.md#cronjobs) (or other [command line calls](console.md)) have been executed under a different user.

To resolve the problem, we recommend that you [reset the file/directory owner](installation.md#file-permissions) for the entire HumHub directory or delete the ``/protected/runtime/cache`` directory. 

### ErrorException: Maximum execution time of 30 seconds exceeded in /var/www/humhub/...:

The problem occurs if the processing of a request takes longer than 30 seconds but a time limit is configured in the PHP configuration file. 

To fix this, the following variable must be increased in the file 'php.ini': 

```ini
; Maximum execution time of each script, in seconds
; http://php.net/max-execution-time
; Note: This directive is hardcoded to 0 for the CLI SAPI
max_execution_time = 300
``` 
The location of the php.ini depends on the used operating system/Linux distribution and configuration. 

Common locations are: `/etc/php/php.ini`, `/etc/php/7.3/fpm/php.ini`, `/etc/php/7.3/apache2/php.ini`

:::note
Please note that after a change to the `php.ini` the PHP process e.g. Apache2 or PHP-FPM must be restarted!
:::

### Curl error: #60 - SSL certificate problem: unable to get local issuer certificate

- Download the [certificate bundle](https://curl.haxx.se/docs/caextract.html).
- Place them in a path that is accessible for the PHP process.
- Adjust `php.ini` file(s):

```ini
curl.cainfo="C:/certs/certs.pem"
```

- Restart Webserver or PHP 

See also:
- https://thisinterestsme.com/php-curl-ssl-certificate-error/
- https://webdev-training.de/tutorials/xampp/anleitung-fuer-das-ssl-zertifikatsproblem-unter-xampp-ssl-certificate-error-unable-to-get-local-issuer-certificate
