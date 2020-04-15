---
id: modules-migrate
title: Migration Guide
---

Module Migration Guide
======================

This guide provides useful information about migrating your custom modules in order to keep them compatible with new HumHub versions.
You should keep your modules up-to-date by removing deprecations and align code breaking changes of the platform and ideally test your
modules against new HumHub version. Also keep in mind to align the `minVersion` of your module when using new features.

You can execute code for specific versions by using the `version_compare` function as:

```php
if (version_compare(Yii::$app->version, '1.3', '=>')) {
    // Use some 1.3+ features here
} else {
     // Compatibility code for older versions
}
```

Migrate from 1.4 to 1.5
-----------------------

### Asset Management

In HumHub 1.5 the loading of core assets was optimized by splitting the main `humhub\assets\AppAsset` into two separate
bundles. The old AppAsset, which was reduced to only a few core scripts and stylesheets and a new `humhub\assets\CoreBundleAsset`.
The CoreBundleAsset contains other core dependencies which are not as essential and will be loaded with a [defer](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-defer)
script attribute, which means those assets are not available immediately within the html body while not blocking the site rendering process.

You'll have to follow one of the migration options described below in case your scripts depend on one of the following assets:

 - JqueryColorAsset, 
 - JqueryHighlightAsset,
 - JqueryAutosizeAsset,
 - Select2Asset,
 - Select2BootstrapAsset,
 - JqueryWidgetAsset,
 - NProgressAsset,
 - JqueryNiceScrollAsset,
 - BlueimpFileUploadAsset,
 - BlueimpGalleryAsset,
 - ClipboardJsAsset,
 - ImagesLoadedAsset,
 - HighlightJsAsset,
 - SwipedEventsAssets,
 - CoreExtensionAsset,
    - `js/humhub/humhub.ui.modal.js`,
    - `js/humhub/humhub.ui.form.elements.js`,
    - `js/humhub/humhub.ui.form.js`,
    - `js/humhub/humhub.ui.showMore.js`,
    - `js/humhub/humhub.ui.panel.js`,
    - `js/humhub/humhub.ui.progress.js`,
    - `js/humhub/humhub.ui.gallery.js`,
    - `js/humhub/humhub.ui.picker.js`,
    - `js/humhub/humhub.oembed.js`,
    - `js/humhub/humhub.media.Jplayer.js`,
    - `js/humhub/humhub.client.pjax.js`,
 - ProsemirrorEditorAsset,
 - ProseMirrorRichTextAsset,
 - UserAsset,
 - LiveAsset,
 - NotificationAsset,
 - ContentAsset,
 - ContentContainerAsset,
 - UserPickerAsset,
 - FileAsset,
 - PostAsset,
 - SpaceAsset,
 - TopicAsset,
 - FilterAsset,
 - CommentAsset,
 - LikeAsset,
 - StreamAsset,
 - ActivityAsset,
 - SpaceChooserAsset
 
:::tip
It is recommended to migrate to deferred scripts loading even if you don't depend on the CoreBundleAssets.
:::

:::info
In case your scripts are exclusively loaded by ajax for example within the wall stream, you don't have to care about
the CoreBundleAsset dependency.
:::

#### AssetBundle Migration

If your AssetBundle depends on the CoreAssetBundle you'll need to add deferred script loading to your scripts.

**HumHub >=1.5 only migration:**

If you don't plant to stay compatible with older HumHub versions you can manage the script loading by
extending the `humhub\components\assets\AssetBundle`, which will make use of deferred script loading by default.
Don't forget to update `"humhub": {"minVersion": "1.5"}` within your `module.json`. 

```php
use humhub\components\assets\AssetBundle;

class MyAssetBundle extends AssetBundle
{    
   //... 
}
```

:::info
The new `humhub\components\assets\AssetBundle` provides some new useful features and default settings besides the script loading management.
:::

**HumHub < 1.5 compatibility**

In case you want to stay compatible with older HumHub versions, you can enable the `defer` script loading by setting 
a `$defer` property as in the following example. This property will simply be ignored in HumHub versions < 1.5.

```php
use yii\web\AssetBundle;

class MyAssetBundle extends AssetBundle
{
   // Activate deferred script loading (this prop
   public $defer = true;
    
   //... 
}
```

The following example enables deferred script loading even on HumHub versions < 1.5.

```php
use yii\web\AssetBundle;
use yii\web\View;

class CoreBundleAsset extends AssetBundle
{
    //...

    public $jsOptions = [
        // Make sure scripts are added after CoreBundleAsset
        'position' => View::POS_BEGIN, 
        'defer' => 'defer'
    ];
}
```

#### Script Migration

The following options are available to migrate non deferred scripts as for example inline scripts which are
dependent on CoreAssetBundle.

**Use of `humhub:ready` listener**

The `humhub:ready` event is triggered once all modules are loaded and initialized.

```javascript
$(document).one('humhub:ready', function(event, isPjax, humhub) {
    var stream = humhub.require('stream');
    // do stuff...
});
```

You can also define modules within a `humhub:ready` event handler,
this will also ensure all dependencies are available and may be useful when working with inline scripts.

```javascript
$(document).one('humhub:ready', function(event) {    
    humhub.module('myModule', function(module, require) {
        var stream = require('stream');
        // do stuff...
    });
});
```

:::info
By using `one` instead of  `on` we make sure our handler is only executed once, otherwise the handler would be executed
on each `pjax` page transition.
:::

**HumHub module module `init()`**

The `init` function of your HumHub javascript module will always be called once all scripts are available.

```javascript
// myModule.js
humhub.module('myModule', function(module, require) {
    
    /**
     * Outside of init some modules may not be available, so make sure to follow one of the other migration options
     * when using requiring a js module included in CoreAssetBundle.
    */

    module.export({
        init: function(isPjax) {
            // All scripts are loaded and stream dependency is available
            var Stream = require('stream').Stream;
        }
    })
});
```

#### Deactivate deferred script loading

If none of the above migration options makes you happy, you can disable the deferred script loading as follows:

**Globally within `config.php`**

```
/protected/config/common.php
return [
    'components' => [
        'assetManager' => [
            'preventDefer' => true
        ]
    ]
]
```

### Default lazy javascript module loading

In HumHub 1.5 modules required by `humhub.require()` will be fetched lazily by default, which means a module will be
initialized by `require()` in case it has not been loaded yet. In HumHub <1.5 a lazy flag was required to be set in `require`
e.g. `require('moduleId', true)`. This behavior was introduced in order to be more tolerant regarding script loading order
due to the core asset loading change. Since lazy loaded modules are rarely used on purpose a warning is logged to the console
once a module was loaded lazily for troubleshooting. 

:::warning
Lazy module loading only works on real modules and not on exported classes:

```javascript
// Can be required lazily and will be available in init at the latest
var stream = require('stream');

// Can not be required lazily and won't be available if the module was not loaded already
var Stream = require('stream.Stream');
```
:::

### Other changes

Some assets bundles were removed from the AppAsset, in case one of them is required in your custom module,
you should register them manually or even better include them in your custom module since they probably will be removed 
in an upcoming release:

**Deprecated:**

- Removed legacy `humhub\assets\PagedownConverterAsset` from AppAsset
- Removed legacy `humhub\assets\JqueryCookieAsset` from AppAsset
- Removed legacy `resources/file/fileuploader.js` from AppAsset
- Removed legacy `resources/user/userpicker.js` from AppAsset
- Removed legacy `js/humhub/legacy/jquery.loader.js` from CoreApiAsset
- Removed legacy `js/humhub/legacy/app.js` from CoreApiAsset
- Removed legacy `js/humhub/humhub.ui.markdown.js` from CoreApiAsset 
- `SocketIoAsset` is only registered on demand
- Deprecated `humhub\modules\ui\form\widgets\MarkdownField` in order to favor `humhub\modules\content\widgets\richtext\RichTextField`


**Loaded on demand:**

- Removed `humhub\assets\SocketIoAsset` from AppAsset

Migrate from 1.3 to 1.4
-----------------------

### CSP and Nonce support

Please test your modules against the `security.strict.json` rules and mention possible incompatibilities in your module
description.

In order to support [CSP nonces](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src) 
you should either completely avoid using inline scripts or use one of the techniques described 
in the [Javascript Guide](javascript.md). Its furthermore recommended to avoid inline styles, as they may be restricted
in the strict CSP rule in a future version as well.

### Menus

The menu system has been revised, is mostly downward compatible, but the old API methods/views will be removed with the next HumHub 1.5 version.

Please adjust your module menus accordingly. More details can be found in the [Menu](menus.md) chapter of the developer documentation. 

### Language codes

Following language codes has been changed.

If you're using any custom modules, please change the message directories accordingly.

| Old language code| New language code |
|----------|-------------|
| en | en-US |
| en_gb | en-GB |
| pt_br | pt-BR |
| nb_no | nb-NO |
| nn_no | nn-NO |
| zh_cn | zh-CN |
| zh_tw | zh-TW |
| fa_ir | fa-IR |


### Removed deprecated methods

The following deprecated method have been removed.
 
**Content model -removed methods **

- canWrite()
- canRead()
- canDelete()
- getSpace()
- getUser()

**Removed class**

- humhub\modules\space\modules\manage\widgets\Menu

**Space class - removed methods**

- canInvite()
- canShare()

**Notification class - removed methods**

- getSpace()

Migrate from 1.2 to 1.3
-----------------------

### New Stream Javascript API

In v1.3 we've reworked the Stream Javascript API. Please check the [Javascript Stream](javascript-stream.md) documentation
for more information.

### ContentContainer Controller

The base controller attributes `autoCheckContainerAccess` and `hideSidebar` are not longer available.

### Queuing 

Queue related classes has been moved into an own module `humhub\modules\queue`.
The existing `humhub\components\queue\ActiveJob` is declared as deprecated and will be removed in 1.4.

### Partial user deletion (Soft Delete)

Added new user status (User::SOFT_DELETED). You can find more information here: [Users](modules-users.md)

### Widgets

Moved all form and field related widgets from `humhub\widgets` to `humhub\modules\ui\form\widgets` namespace.
There is a compatibility layer for the 1.3 release.

### Social Activities (Notification & Activities)

- Added new 'requireOriginator' flag with default to true
- Added new 'requireSoruce' flag with default to true

### Deprecations

#### Removed Deprecated 

 - formatterApp Application Component (Yii::$app->formatterApp)
 
#### New Deprecations

 - `humhub\components\Theme.php` -> `humhub\modules\ui\view\components\Theme`
 - `humhub\components\View` -> `humhub\modules\ui\view\components\View`
 - `humhub\libs\ThemeHelper` -> `humhub\modules\ui\view\components\ThemeHelper`
 - `humhub\modules\content\widgets\richtext\HumHubRichText` -> Compatibility class for the legacy rich-text, which was replaced with prosemirror richtext.
 - `humhub\modules\content\widgets\richtext\HumHubRichTextEditor` -> Compatibility class for the legacy rich-text, which was replaced with prosemirror richtext editor.
 - `humhub\widgets\RichText` -> `humhub\modules\content\widgets\richtext\RichText`
 - `humhub\widgets\RichTextField` -> `humhub\modules\content\widgets\richtext\RichTextField`
 - `humhub\modules\user\models\Mentioning::parse()` -> `humhub\modules\content\widgets\richtext\RichText::processText()`
 
We moved most of the `humhub\widgets` into the new `ui` core module as:

 - `humhub\widgets\ActiveField`
 - `humhub\widgets\ActiveForm`
 - `humhub\widgets\BasePickerField`
 - `humhub\widgets\ColorPickerField`
 - `humhub\widgets\ContentTagDropDown`
 - `humhub\widgets\DatePicker`
 - `humhub\widgets\DurationPicker`
 - `humhub\widgets\InputWidget`
 - `humhub\widgets\MarkdownField`
 - `humhub\widgets\MarkdownFieldModals`
 - `humhub\widgets\MultiSelectField`
 - `humhub\widgets\TimePicker`

Migrate from 1.1 to 1.2
-----------------------

### Stream / Content Changes

The models WallEntry and Wall were removed. So all corresponding methods like getFirstWallEntryId() are not longer available.
The stream handling is now handled directly by the Content model. Also all stream classes (widgets, actions) are moved into the humhub\modules\stream package.

### File module changes

Please refer the new [File Handling](files.md) documentation section for more details regarding the new file management API.

- Deprecated widgets:
    - humhub\modules\user\widgets\UserPicker (replaced with humhub\modules\user\widgets\UserPickerField)
    - humhub\modules\space\widgets\Picker (replaced with humhub\modules\space\widgets\SpackePickerField)
    - humhub\widgets\DataSaved (replaced with humhub\components\View::saved)
- Removed Content models 'attachFileGuidsAfterSave' attribute and handling
- Deprecated File model methods
    - \humhub\modules\file\models\File::attachPrecreated
	- \humhub\modules\file\models\File::getFilesOfObject
	- \humhub\modules\file\models\File::getStoredFilePath
	- \humhub\modules\file\models\File::getPreviewImageUrl
	- \humhub\modules\file\models\File::attachPrecreated
	- \humhub\modules\file\models\File::getFilename
	- \humhub\modules\file\models\File::getInfoArray
	- \humhub\modules\file\models\File::getMimeBaseType
	- \humhub\modules\file\models\File::getMimeSubType
	- \humhub\modules\file\models\File::getExtension
- Removed configuration option 'showFilesWidgetBlacklist' use WallEntry showFiles attribute instead.
- File models title attributes is not longer automatically populated with the filename when empty
- Moved file upload capabilities (UploadedFile) from File model to FileUpload model
- Moved file store content by attribute capabilities from File model to FileContent model
- Created UploadAction/DownloadAction classes

#### Pjax + TopNavigation:
Use

public $topMenuRoute = '/dashboard/dashboard';

within your controller for pjax topmenu support.


Migrate from 1.0 to 1.1
-----------------------

- Dropped unused space attribute "website"

- ContentContainer Model Changes
    - Removed canWrite method (now requires own implementation using permissions)

- Content Model Changes
    - Removed space_id / user_id columns - added contentcontainer_id
    - Not longer validates content visibility (private/public) permissions

- system_admin attribute in user table was removed
 see `humhub\modules\user\models\User::isSystemAdmin`

- Renamed space header settings menu dropdown class
  from  `humhub\modules\space\modules\manage\widgets\Menu` to `humhub\modules\space\widgets\HeaderControlsMenu`

- Refactored settings system. see [Settings Documentation](modules-settings.md) for more details.
  Old settings api is still available in 1.1.x 

- Refactored user group system

- New administration menu structure



Migrate from 0.20 to 1.0
------------------------

## Migrate from 0.12 to 0.20

**Important: This release upgrades from Yii1 to Yii2 Framework!**

This requires an extensive migration of all custom modules/themes.
Find more details here: [HumHub 0.20 Migration](modules-migrate-0.20.md)



Migrate from 0.11 to 0.12
-------------------------

- Rewritten Search 



Migrate from 0.10 to 0.11
-------------------------
No breaking changes.

- Now handle ContentContainerController layouts, new option showSidebar
- New ContentAddonController Class
- New Wiki Parser / Editor Widget
