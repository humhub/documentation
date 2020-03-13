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

- [Apache Webserver](https://httpd.apache.org/) 2.4 with mod_php or php-fpm (recommended)
- [nginx](https://www.nginx.com/) with php-fpm

## Memory

Since HumHub can be used for a variety of different platforms, the required memory highly depends on the amount and
activity of users as well as the specific use case of your platform. The minimum memory requirements of HumHub are:

**RAM**

- 64 MB of memory allocated to PHP

**Disk space**

- 500 MB for the applications
- 100 MB for the database

## PHP Environment

- **PHP 7.4** (Recommended)
- **PHP 7.3** (Recommended)
- PHP 7.2
- PHP 7.1

### Extensions

see the [PHP Manual](https://www.php.net/manual/en/extensions.php) for more information.

| Extension     | Required      | Description                                                               |
| ------------- |:-------------:| --------------------------------------------------------------------------|
| GD            | Yes           | With JPEG and PNG support                                                 |
| Curl          | Yes           | w/ SSL Support                                                            |
| MBString      | Yes           | Multibyte Support                                                         |
| MySQL         | Yes           | |
| ZIP           | Yes           | |
| EXIF          | Yes           | |
| INTL          | Yes           | min ICU v49 see [Yii2 Internationalization](https://www.yiiframework.com/doc/guide/2.0/en/tutorial-i18n#setup-environment)         |
| FileInfo      | Yes           | |
| ImageMagck    | No            | |
| LDAP          | No            | |
| APC           | No            | |
| Memcached     | No            | |


## Database

- **MariaDB 10.1+** 
- **MySQL 5.6+**

With **utf8mb4** character set support and **InnoDB** storage engine.

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

 - **Mozilla Firefox** (Recommended)
 - **Google Chrome** (Recommended)
 - **Microsoft Edge** (Recommended)
 - Apple Safari
 - Microsoft Internet Explorer 11
