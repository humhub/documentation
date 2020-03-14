---
id: redis
title: Redis
sidebar_label: Redis
---

We recommend installing an additional Redis server which can act as a caching, push service and job queuing service for HumHub.


Basic Configuration
------------------

To enable Redis, you have to add following block to your local configuration file (protected/config/common.php):

```php
    // ...
    'components' => [
        // ...

        'redis' => [
            'class' => 'yii\redis\Connection',
            'hostname' => 'localhost',
            'port' => 6379,
            'database' => 0,
        ],
        
        // ...
    ],
    // ...

```

Caching 
-------

To use Redis as cache, the following block must be added to the configuration file (protected/config/common.php).

```php
    // ...
    'components' => [
        // ...

        'cache' => [
            'class' => 'yii\redis\Cache',
        ],
        
        // ...
    ],
    // ...

```



Background Job Queue
--------------------

Besides acting as a cache, Redis can also be used to manage the queue of background tasks. 

To enable this feature you need to add following block to your local configuration file (protected/config/common.php):


```php
    // ...
    'components' => [
        // ...

        'queue' => [
            'class' => 'humhub\modules\queue\driver\Redis',
        ],
        
        // ...
    ],
    // ...

```





Push Updates
------------

TBD
