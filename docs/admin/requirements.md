---
id: requirements
title: System Requirements
sidebar_label: Requirements
---

This sections lists all required and recommended server settings.

## Webserver

- [Apache Webserver](https://httpd.apache.org/) 2.4 with mod_php or php-fpm (recommended)
- [nginx](https://www.nginx.com/) with php-fpm

## Memory

Since HumHub itself can be used for a variety of use-cases, the required memory highly depends on the amount and
activity within the network as well as the specific actions of the users. The minimum memory requirements of HumHub are:

**RAM**

- 64 MB of memory allocated to PHP

**Disk space**

- 500 MB for the applications
- 100 MB for the database

## PHP Environment

:::note 
All essential requirements will be tested during the web installation and can be reviewed under 
`Administration -> Information -> Prerequisites`.
:::

| HumHub Version | PHP 8.3  | PHP 8.2  | PHP 8.1  | PHP 8.0  | PHP 7.4  | PHP 7.3  | PHP 7.2  | PHP 7.1  | 
|----------------|:--------:|:--------:|:--------:|:--------:|:--------:|:--------:|:--------:|:--------:|
| 1.17           | **Yes**  | **Yes**  | Yes      | No       | No       | No       | No       | No       |
| 1.16           | **Yes**  | **Yes**  | **Yes**  | Yes      | No       | No       | No       | No       |
| 1.15           | Yes      | **Yes**  | **Yes**  | Yes      | Yes      | No       | No       | No       |
| 1.14           | No       | **Yes**  | **Yes**  | Yes      | Yes      | No       | No       | No       |
| 1.13           | No       | No       | Yes      | **Yes**  | Yes      | No       | No       | No       |
| 1.12           | No       | No       | Yes      | **Yes**  | **Yes**  | No       | No       | No       |
| 1.11           | No       | No       | Yes      | **Yes**  | **Yes**  | No       | No       | No       |
| 1.10           | No       | No       | No       | **Yes**  | **Yes**  | Yes      | No       | No       |
| 1.9            | No       | No       | No       | **Yes**  | **Yes**  | **Yes**  | No       | No       |
| 1.8            | No       | No       | No       | Yes      | **Yes**  | **Yes**  | Yes      | No       |
| 1.7            | No       | No       | No       | No       | Yes      | **Yes**  | **Yes**  | Yes      |

### Extensions

This is just a short overview. See the [PHP Manual](https://www.php.net/manual/en/extensions.php) for more information.

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
| JSON          | Yes           | |
| ImageMagick   | No            | Better image processing, Recommended |
| GraphicsMagick| No            | Better image processing (alternative to ImageMagick)|
| LDAP          | No            | |
| APC           | No            | |
| Memcached     | No            | |



## Database

- **MariaDB 10.1+** 
- **MySQL 5.7+**

**Utf8mb4** character set  and **InnoDB** storage engine are required.

The database user requires following privileges:

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

## Shell Access

Although the installation and most parts of the configuration can be carried out without a shell access, it's highly recommended to enable shell access (e.g. ssh) in order to facilitate the [comand line interface](console.md). 

The command line interface provides important features, which are used to maintain and troubleshoot the software.


## Web browser

 - **Mozilla Firefox** (Recommended)
 - **Google Chrome** (Recommended)
 - **Microsoft Edge** (Recommended)
 - Apple Safari

