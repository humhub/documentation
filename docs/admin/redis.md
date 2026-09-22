---
id: redis
title: Redis
sidebar_label: Redis
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

We recommend installing an additional Redis server which can act as a caching, push service and job queuing service for HumHub.

<Tabs groupId="install-method">
<TabItem value="docker" label="Docker" default>

With the [Docker installation](installation-docker.md) you add a `redis` service to your `compose.yml` and configure HumHub through `HUMHUB_CONFIG__...` environment variables - the same options shown in the "Manual (Server)" tab, expressed as environment variables:

```yaml
environment:
  - HUMHUB_CONFIG__COMPONENTS__REDIS__CLASS=yii\redis\Connection
  - HUMHUB_CONFIG__COMPONENTS__REDIS__HOSTNAME=redis
  - HUMHUB_CONFIG__COMPONENTS__REDIS__PORT=6379
  - HUMHUB_CONFIG__COMPONENTS__CACHE__CLASS=yii\redis\Cache
  - HUMHUB_CONFIG__COMPONENTS__QUEUE__CLASS=humhub\modules\queue\driver\Redis
```

See the [HumHub Docker repository](https://github.com/humhub/docker) for a full example.

</TabItem>
<TabItem value="manual" label="Manual (Server)">

The following sections describe the configuration for a manual / server installation.

</TabItem>
</Tabs>

:::note Manual / server installation
The following configuration reference applies to a **manual / server installation**. On the [Docker installation](installation-docker.md) the same options are supplied as `HUMHUB_CONFIG__...` environment variables.
:::

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
