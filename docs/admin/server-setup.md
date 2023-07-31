---
id: server-setup
title: Server Setup (Linux)
---

This document covers a basic server configuration under Linux.
The operating system used here is ``Linux`` with the distribution ``Debian 12 (Bookworm)``.

HumHub is being installed into the ``/var/www/humhub`` directory in this case and runs with the user/group ``www-data``.

:::warning
Please note that throughout this guide, we will use `humhub.example.com` as a sample hostname. It is essential to customize this with your individual hostname.
::


:::important
HumHub can of course also be run on an **existing server setup** or **shared hosting** if all [requirements](requirements.md) are met. 
:::
  

## Database

In this section we will create a database with the following values: 

- **Datebase:** humhub_prod_db
- **User:** humhub_prod
- **Password:** change-me

Of course these values, especially the password, should be changed according to your environment.


### Installation


Install and configure the MariaDB Server using Debian packages.

```bash
apt update
apt install mariadb-server mariadb-client automysqlbackup
mysql_secure_installation
```

### Create Database Schema

Open the MySQL console

```bash
mysql -u root -p
```

Create a new database user

```sql
mysql> CREATE USER 'humhub_prod' IDENTIFIED BY 'change-me';
``` 

Create a MySQL Database, e.g.:

```sql
mysql> CREATE DATABASE `humhub_prod_db` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
mysql> GRANT ALL ON `humhub_prod_db`.* TO `humhub_prod`@localhost IDENTIFIED BY 'change-me';
mysql> FLUSH PRIVILEGES;
```

:::important
Do not forget to change the `change-me` placeholder!
:::


## PHP

### Installation 

```bash
apt update
apt install php php-cli \
	php-imagick php-curl php-bz2 php-gd php-intl php-mbstring \
	php-mysql php-zip php-apcu php-xml php-ldap

```

### Configuration

Set the following parameters inside the PHP configuration file ``php.ini`` to at least following values:

```bash
upload_max_filesize = 32M
post_max_size = 32M
max_execution_time = 120
```

The ``php.ini`` file is located in one of the following folders depending on the runtime mode (FPM or Apache2 module):

- /etc/php/7.4/apache2/php.ini
- /etc/php/7.4/fpm/php.ini

**Example for Apache2 module:** 

```bash
sed -i 's/max_execution_time = 30/max_execution_time = 600/g' /etc/php/7.4/apache2/php.ini
sed -i 's/post_max_size = 8M/post_max_size = 128M/g' /etc/php/7.4/apache2/php.ini
sed -i 's/upload_max_filesize = 2M/upload_max_filesize = 128M/g' /etc/php/7.4/apache2/php.ini

systemctl restart apache2
```

**Example for FPM:** 

```bash 
sed -i 's/max_execution_time = 30/max_execution_time = 600/g' /etc/php/7.4/fpm/php.ini
sed -i 's/post_max_size = 8M/post_max_size = 128M/g' /etc/php/7.4/fpm/php.ini
sed -i 's/upload_max_filesize = 2M/upload_max_filesize = 128M/g' /etc/php/7.4/fpm/php.ini

systemctl restart php7.4-fpm
```



## WebServer


### Preparation


Install Certbot and obtain SSL certificates for the portal.

```bash
apt install certbot
certbot certonly --standalone -d humhub.example.com
```

### Apache

Install ``Apache 2.4`` core and modules from Debian package repositories.

```
apt update
apt install apache2 \
	libapache2-mod-xsendfile \
	php-fpm 
```

Create configuration file ``/etc/apache2/sites-available/humhub.conf`` with the following content:


```apacheconf
<VirtualHost *:443>
  ServerName humhub.example.com
  ServerAdmin root@humhub.example.com

  SSLEngine on
  SSLCertificateFile    	/etc/letsencrypt/live/humhub.example.com/cert.pem
  SSLCertificateKeyFile 	/etc/letsencrypt/live/humhub.example.com/privkey.pem
  SSLCertificateChainFile 	/etc/letsencrypt/live/humhub.example.com/fullchain.pem

  DocumentRoot /var/www/humhub

  <Directory /var/www/humhub/>
     Options -Indexes -FollowSymLinks
     AllowOverride All
  </Directory>

  <DirectoryMatch "/var/www/humhub/(\.|protected|themes/\w+/views|uploads/file)">
     Order Deny,Allow
     Deny from all
  </DirectoryMatch>

  <FilesMatch "^\.">
     Order Deny,Allow
     Deny from all
  </FilesMatch>
  
  <DirectoryMatch "/var/www/humhub/(static|uploads|themes|assets)">
        Header set Cache-Control "max-age=172800, public"
  </DirectoryMatch>
</VirtualHost>

<VirtualHost *:80>
   ServerName humhub.example.com
   Redirect / https://humhub.example.com
</VirtualHost>
```

Enable the virtual host, additional Apache2 configurations and required modules.

```bash
a2enmod ssl rewrite headers proxy_fcgi setenvif
a2enconf php8.2-fpm
a2ensite humhub

systemctl reload apache2
```


### NGINX

You may skip this NGINX section if Apache has already been configured in the previous steps.

```
apt update
apt install nginx \
	php-fpm
```


Create configuration file ``/etc/nginx/sites-available/humhub.conf`` with the following content:

```conf
server {
    listen 80;
    listen [::]:80;

    server_name humhub.example.com;
    return 301 https://$server_name:443$request_uri;
}

server {
        listen 443 ssl;
        listen [::]:443 ssl;
        
        root /var/www/humhub;
        server_name humhub.example.com;
        
        #include snippets/letsencrypt.conf;
        ssl_certificate /etc/letsencrypt/live/humhub.example.com/fullchain.pem;
        ssl_certificate_key /etc/letsencrypt/live/humhub.example.com/privkey.pem;

        charset utf-8;
        client_max_body_size 256M;

        location / {
                index index.php index.html;
                try_files $uri $uri/ /index.php$is_args$args;
        }

        location ~ ^/(protected|framework|themes/\w+/views|\.|uploads/file) {
                deny all;
        }

        location ~ ^/assets/.*\.php$ {
                deny all;
        }

        location ~ ^/(assets|static|themes|uploads) {
                expires 10d;
                add_header Cache-Control "public, no-transform";
        }

        location ~ \.php {
                include fastcgi_params;
                fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
                fastcgi_pass unix:/var/run/php/php7.4-fpm.sock;
                try_files $uri =404;
        }
}
```

Activate the configuration:

```
ln -s /etc/nginx/sites-available/humhub.conf /etc/nginx/sites-enabled/humhub.conf
systemctl restart nginx
```

## Mail 

If emails are supposed to be sent directly from this server, an SMTP server has to be installed.

### Postfix

```
apt update
apt install postfix
```

Please choose ``Internet Site`` as installation type.
