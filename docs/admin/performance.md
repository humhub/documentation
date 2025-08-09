---
id: performance
title: Performance
---


Application Caching
-------------------

Starting with version 1.18, caching can no longer be configured via the Admin interface. 
Instead, it must be defined through the configuration file or environment variables. 
By default, HumHub now uses the `FileCache`. 

The following are examples of caching [configurations](advanced-configuration.md).

**Redis**

Environment Variables:

```env 
HUMHUB_CONFIG__COMPONENTS__REDIS__CLASS="yii\\redis\\Connection"
HUMHUB_CONFIG__COMPONENTS__REDIS__HOSTNAME="localhost"
HUMHUB_CONFIG__COMPONENTS__REDIS__PORT=6379
HUMHUB_CONFIG__COMPONENTS__REDIS__DATABASE=0
HUMHUB_CONFIG__COMPONENTS__CACHE__CLASS="yii\\redis\\Cache"
```

Configuration File:

```php
[
    'components' => [
        'cache' => [
            'class' => 'yii\redis\Cache',
            'redis' => [
                'hostname' => 'localhost',
                'port' => 6379,
                'database' => 0,
            ]
        ],
    ],
]
```

**PHP APC**

Environment Variables:

```env
HUMHUB_CONFIG__COMPONENTS__CACHE__CLASS="yii\\caching\\ApcCache"
```

Configuration File:

```php
[
    'components' => [
        'cache' => [
            'class' => 'yii\caching\ApcCache',
        ],
    ],
]
``` 

**Memcached**

Configuration File:

```php
[
    'components' => [
        'cache' => [
            'class' => 'yii\caching\MemCache',
            'servers' => [
                [
                    'host' => 'server1',
                    'port' => 11211,
                    'weight' => 60,
                ],
                [
                    'host' => 'server2',
                    'port' => 11211,
                    'weight' => 40,
                ],
            ],
        ],
    ],
]
```

HTTP Caching
------------

HTTP caching for assets (e.g. images, stylesheets or Javascript components) must be defined in the configuration of the web server.

If you are using the configuration for Apache2 or NGINX described in the [Server Setup](server-setup.md#webserver) section, the recommended configuration is already in place and no further adjustment is necessary. 

If not, all files of the following directories that are delivered directly by the web server should be delivered with a Cache HTTP Header.

- /static
- /uploads
- /themes
- /assets

:::tip
The expiration time can be set very high, because HumHub automatically changes the URL in case of an update.
:::

X-Sendfile
----------

X-Sendfile is a feature that allows us to pass file download requests directly by the webserver.
This improves the application performance.

:::warning
If this was configured incorrectly, file downloads won't work, please test the file upload and download after 
configuring X-Sendfile.
:::

**Installation**
Administration -> Settings -> Files -> Enable X-Sendfile Support.

Apache Config Example:

```        
XSendFile On
XSendFilePath /path/to/humhub/uploads
```

**More Information:**

- Apache: [X-Sendfile](http://tn123.org/mod_xsendfile)
- Lighttpd v1.4: [X-LIGHTTPD-send-file](http://redmine.lighttpd.net/projects/lighttpd/wiki/X-LIGHTTPD-send-file)
- Lighttpd v1.5: [X-Sendfile](http://redmine.lighttpd.net/projects/lighttpd/wiki/X-LIGHTTPD-send-file)
- Nginx: [X-Accel-Redirect](http://wiki.nginx.org/XSendfile)
- Cherokee: [X-Sendfile and X-Accel-Redirect](http://www.cherokee-project.com/doc/other_goodies.html#x-sendfile)

Requires package `libapache2-mod-xsendfile`

 
