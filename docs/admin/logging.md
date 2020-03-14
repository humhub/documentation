---
id: logging
title: Logging & Statistics
sidebar_label: Logging & Statistics
---

## Runtime Logs

By default HumHub writes log entries (warnings & errors) to a log file and also to the database. 

:::note
Please note, in addition to errors & warnings received or triggered by HumHub, the web server, database or PHP-FPM system may have additional log files for problem analysis.
:::

### Database

Log entries stored in the database can be accessed via the menu item ``Administration -> Information -> Logging``.

All Log table rows older than 7 days are automatically deleted by the HumHub CronJob.

### Logfile

The log file is located in the folder ``/protected/runtime/app.log`` by default. 

This file is automatically rotated by the HumHub CronJob.


## Custom Logging

All log targets provided by Yii2 can be used. Furthermore, it is possible to develop individual log targets. These targets must be provided by a module.

You can find detailed information here:
[Yii Framework - Logging Documentation](http://www.yiiframework.com/doc-2.0/guide-runtime-logging.html)


### E-Mail

Below you find an example configuration part (protected/config/common.php) to send log entries directly via e-mail.

```php
'components' => [
    'log' => [
        'traceLevel' => YII_DEBUG ? 3 : 0,
        'targets' => [
            [
                'class' => 'yii\log\EmailTarget',
                'levels' => ['error', 'warning'],
                'except' => ['yii\web\HttpException:404', 'yii\web\HttpException:403', 'yii\web\HttpException:401', 'yii\web\HttpException:400', 'yii\web\HttpException:416'],
                'message' => [
                    'from' => ['myserver@example.com'],
                    'to' => ['admin@example.com'],
                    'subject' => 'HumHub - Log - Event',
                ],
            ],
        ],
    ],
],
```



### Syslog

Use the following configuration to pass log entries to syslog.

```php
'components' => [
    'log' => [
        'traceLevel' => YII_DEBUG ? 3 : 0,
        'targets' => [
            [
                'class' => 'yii\log\SyslogTarget',
                'levels' => ['error', 'warning'],
                'except' => ['yii\web\HttpException:404', 'yii\web\HttpException:403', 'yii\web\HttpException:401', 'yii\web\HttpException:400', 'yii\web\HttpException:416'],
                'identity' => 'humhub'
            ],
        ],
    ],
],
```

## Statistics/Tracking

Your tracking code can be managed under `Administration -> Settings -> Advanced -> Statistics`.

In order to send the tracking code in case of pjax page loads as well as full page loads, you have to add the following to your statistics code by the example of google analytics:


```html
<script nonce="{{ nonce }}">
    $(document).on('pjax:end', function() {
        ga('set', 'location', window.location.href);
        ga('send', 'pageview');
    });
</script>
```

or by using the old ga version:

```html
<script nonce="{{ nonce }}">
    $(document).on('pjax:end', function() {
        if( window._gaq ) {
            _gaq.push(['_trackPageview', window.location.href]);
        }
    });
</script>
```

Please see [Single Page Application Tracking](https://developers.google.com/analytics/devguides/collection/analyticsjs/single-page-applications)
for more information about google analytics configuration in single page application environments.

:::note
Since HumHub 1.4 you should add the `nonce="{{ nonce }}` attribute to your script tag in order to be 
compatible with [csp nonces](security.md#security-configuration)
:::