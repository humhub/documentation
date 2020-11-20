---
id: search
title: Search
---

**The built in search system is used for:**
- Directory
- People/Space Search
- Content Search
- User/Space Picker Widgets


Index Rebuilding
----------------

If you want to rebuild the search index (e.g. after updating/restore backup), you have two methods:

**Browser**

Log in to your HumHub with an administrator account and go to the following section: `Administration` -> `Information` -> `Database`.

On this page click on the button "Rebuild search index". The process can take several minutes.   

**Console**

To start the rebuild job, you need to run following command:

```
cd /path/to/humhub/protected
php yii search/rebuild
```

File Content Indexing
---------------------

In order to allow also indexing of file contents (e.g. PDF, Word or PowerPoint document) you can specify file parsers in your [configuration](advanced-configuration.md).

We recommend [Apache Tika](https://tika.apache.org/) as parser software which supports thousand of different file types.

Example configuration:

```php
    return [
        // ...
        
        'modules' => [
            // ...
            
            'file' => [
                'converterOptions' => [
                    'humhub\modules\file\converter\TextConverter' => [
                        'converter' => [
                            [
                                'cmd' => '/usr/bin/pdftotext -q -enc UTF-8 {fileName} {outputFileName}',
                                'only' => ['pdf']
                            ],
                            [
                                 'cmd' => '/usr/bin/java -jar /srv/www/var/lib/tika-app-1.18.jar -maxFileSizeBytes=67108864 --text {fileName} 2>/dev/null',
                                 'except' => ['image/', 'application/x-tar', 'application/zip', ]
                            ],
                         ]
                    ]
                ]
            ],
            
        ],
    ];
```


Zend Lucence Engine
--------------------

By default, HumHub is using a *Lucence* Index (Zend Lucence) to store search data.

Default database folder: `/protected/runtime/searchdb/`

You can modify the default search directory in the [configuration](advanced-configuration.md):

```php
    return [
        // ...
        'params' => [
            'search' => [
                'zendLucenceDataDir' => '/some/other/path',
            ]
        ]
        // ...
    ];
```
