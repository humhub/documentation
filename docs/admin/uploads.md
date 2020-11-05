---
title: File Management & Uploads
---

This part covers the topic of file uploads and the associated file management.


Image Compression / Downscaling
-------------------------------

:::note
These options are only available in HumHub 1.7 and later. 
:::

To keep HumHub's storage requirements low, uploaded images can automatically be optimized in terms of quality or compression rate.
It is also possible to downscale image files with a very high resolution (e.g. 8K) to a predefined maximum resolution size.

The `Files` module provides the following options:

| Variable                             | Description                                                        |
| ------------------------------------ | -------------------------------------------------------------------| 
| imageMaxResolution                   | The maximum image resolution before downscaling. (e.g. 1920x1080)  |
| imageJpegQuality                     | The JPEG quality for uploaded JPEG images. From 0 to 100.          |
| imagePngCompressionLevel             | The compression level for uploaded PNG images. From 0 to 9.        |
| imageWebpQuality                     | The quality for uploaded WebP files. From 0 to 100.                |

You can adjust these variables, by changing applications parameters within the configuration **(protected/config/common.php)**.

By default the values are empty, which means that HumHub does not modify the uploaded files and always returns the original file. 

**Example:**

```php
return [
    'modules' => [
        'file' => [
            'imageMaxResolution' => '1920x1080',
            'imageJpegQuality' => 75,
            'imagePngCompressionLevel' => 9,
            'imageWebpQuality' => 75,
        ]
    ]
];
```

### Downscaling of existing files

It is also possible to downscale already uploaded and processed files. 

To do this, the configuration must be adjusted to the desired options (see above) and then the following command must be executed:

```
cd protected
php yii file/downscale-images
```

:::caution
The original files are overwritten and therefore this process cannot be undone.
:::


Upload Folder
--------------

:::note These option are only available in HumHub 1.7 and later. :::

By default, uploaded files are stored in the folder 'uploads/files'. This folder should not be reachable via the web server.

The path can be changed with the following configuration option:


**Example:**

```php
return [
    'aliases' => [
        '@filestore' => '/mnt/large-disk/uploads'
    ]
];
```
