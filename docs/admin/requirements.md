---
id: requirements
title: System Requirements
---

This sections lists required and recommended server settings for running a HumHub installation.

:::note 
All vital requirements will be checked during the web installation and can be reviewed under 
`Administration -> Information -> Prerequisites`.
:::

## Shell Access

While the installation and most configuration can be done without shell access, it's highly recommended to enable shell
access (e.g. ssh) to the server in order to facilitate the [comand line interface](console.md). 
The command line interface provide important features used to maintain and troubleshoot your HumHub installation.

## Webserver

- [Apache Webserver](https://httpd.apache.org/)
- [nginx](https://www.nginx.com/)

## Memory

Since HumHub can be used for a variety of different platforms, the required memory highly depends on the amount and
activity of users as well as the specific use case of your platform. The minimum memory requirements of HumHub are:

- 500 MB of free disk space
- 64 MB of memory allocated to PHP
- 50 MB of database space

## PHP Environment

HumHub requires a minimum of **PHP 7.1+**, as well as the following PHP Extensions, 
see the [PHP Manual](https://www.php.net/manual/en/extensions.php) for more information.

**Required:**
 
- PHP GD Extension (With JPEG and PNG support)
- PHP CUrl  Extension (w/ SSL Support) <https://secure.php.net/manual/en/curl.setup.php>
- PHP Multibyte String Support <https://secure.php.net/manual/en/mbstring.setup.php> 
- PHP PDO MySQL Extension (https://secure.php.net/manual/en/ref.pdo-mysql.php)
- PHP Zip Extension (https://secure.php.net/manual/en/book.zip.php)
- PHP EXIF Extension (https://secure.php.net/manual/en/book.exif.php)
- PHP INTL Extension (https://secure.php.net/manual/en/intro.intl.php) (min ICU v49 see [Yii2 Internationalization](https://www.yiiframework.com/doc/guide/2.0/en/tutorial-i18n#setup-environment))
- PHP FileInfo Extension (https://secure.php.net/manual/en/fileinfo.installation.php)

**Optional:**

- ImageMagick
- PHP LDAP Support
- PHP APC
- PHP Memcached

## Database

**MySQL 5.6+** or **MariaDB 10.1+** with **utf8mb4** character set support and **InnoDB** storage engine.

The following privilege are required for the HumHub database user:

- SELECT
- INSERT
- DELETE
- UPDATE
- CREATE
- ALTER
- INDEX
- DROP
- REFERENCES

:::caution
**MyISAM** is not supported due to the lack of foreign keys.
:::

## Web browser

 - Microsoft Internet Explorer 11
 - Microsoft Edge
 - Mozilla Firefox
 - Google Chrome
 - Apple Safari
