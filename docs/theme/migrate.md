---
id: migrate
title: Migration Guide
---

Here you will learn how you can adapt existing themes to work with the latest HumHub versions.


## Foreword

### Theme Builder

If you are using a theme created with the [Theme Builder](https://www.humhub.com/en/marketplace/theme-builder/) module, you only need to save the **Stylesheet** again with the latest HumHub version.

Go to the page `Administration -> Theme Builder -> Select your theme -> Stylesheet`  and click `Save and Rebuild Stylesheet`.

### Custom Stylesheets

Since **HumHub** version 1.2 you simply need to rebuild your theme stylesheet.
All changes or additions will be automatically applied to your theme.

> Note: If you disabled any default component import ([Prevent default component file imports](css.md#prevent-default-component-file-imports)) you may need to manually these adapt new changes.

### View Files

As mentioned in the [View Files](views.md) section, you may need to manually adjust overwritten view files if there are any changes made in the new **HumHub** version.

:::tip
This [Community Wiki Guide](https://community.humhub.com/content/perma?id=237199) might help you to identify template changes more easily.
:::

## Required changes

### 1.7

#### Wall Stream Entry

HumHub 1.7 introduces two new wall entry layouts, the old entry layout was deprecated. In case your theme contains 
adjustments of the old wall entry layout, make sure your changes are compatible with the new entry layouts. 
Otherwise a theme rebuild should be sufficient.

#### New @link variable

Themes build with HumHub 1.7 can facilitate a new `@link` color variable, which is used for inner content links and
special links as comment/like within the stream entries. Prior to 1.7 such links used the `@info` color which
currently still is the default color for the new link variable. For example, you may want to consider choosing a 
darker link color by setting `@link: darken(@info, 5%)`.

### 1.6

There were some major changes in the **Comment** module. Please check any overwritten templates if you've made any changes here.

Otherwise, besides minor LESS/CSS optimizations, there are no changes relevant to custom themes. 

### 1.5

No breaking changes.

### 1.4

Please [rebuild](css.md#compile-css-package) and test your theme prior to a production update. 
Even though there were no major theme related changes introduced in HumHub 1.4, you may have to test overwritten views
and new UI features. The following migration guide lists some changes as well as new features which may affect your custom theme.

> Note: In case you notice other problems with your theme, please let us know in the [community](https://community.humhub.com/) 
> or on [github](https://github.com/humhub/humhub/blob/master/protected/humhub/assets/ProsemirrorEditorAsset.php)!

#### Page Icon

You can now upload your page icon under `Administration -> Settings -> Appearance -> Icon upload`. Your icon should have
a minimum `height` and `width` of `256px` and one of the following formats: `png`, `jpg`.

#### PWA

HumHub 1.4 comes with a build in PWA support. In case you've manually added some of the following head or meta tags, please
remove them from your theme, they will be added automatically.

**Remove all icon and web app related head tags such as**:

- `<link rel="apple-touch-icon" sizes="57x57" href="<?= $this->theme->getBaseUrl(); ?>/ico/apple-icon-57x57.png">`
- `<link rel="icon" type="image/png" sizes="192x192" href="<?= $this->theme->getBaseUrl(); ?>/ico/android-icon-192x192.png">`
- `<link rel="manifest" href="<?= $this->theme->getBaseUrl(); ?>/ico/manifest.json">`

**Remove Metatags**:

- `apple-mobile-web-app-title`
- `apple-mobile-web-app-capable`
- `apple-mobile-web-app-status-bar-style`
- `mobile-web-app-capable`
- `msapplication-TileColor`
- `msapplication-TileImage`
- `msapplication-TileImage`
- `theme-color`
- `application-name`

#### View file mapping

The automatic mapping of view files to modified files has been improved with a much more generic approach.
More details can be found in the [Views](views.md) chapter of the theme documentation. 

The old mapping is still supported until at least version 1.5. But we recommend to upgrade your theme as soon as possible.

#### Icon abstraction

HumHub 1.4 comes with an icon abstraction widget. Direct usage of font awesome classes are deprecated.

Instead of `<i class="fa fa-arrow-up"></i>` use:

```
<?= Icon::get('arrow-up')?>
```

Other examples:

```
<?= Button::info()->icon('cloud-upload'); ?>
```

#### Oembed styles

Version 1.4 enhanced the oembed styling, now you can use following styles in order to align your oembeds:

```
.oembed_snippet[data-oembed-provider="twitter.com"] {
    padding-bottom:0 !important;
    padding-top:0;
    margin-top: 0;
}
```

#### CSP Rules

HumHub 1.4 added a default [Content Security Policy Header](../admin/security.md#web-security-configuration). 
Even tough the default header is not very strict, you should test external theme resources as scripts, 
style sheets or fonts of your custom theme.

#### print.less

There is a new `print.less` less file which fixes https://github.com/humhub/humhub/issues/3810 and includes further
print style enhancements. As with all included less files you can omit this by setting the `@prev-print` less variable to true.
There are some further print style enhancements added to `stream.less` and `profile.less`

#### Space and Profile Header refactoring

The space and profile header has been refactored, old views should still work, but should be migrated to the latest
version. You can now define the banner and profile image size and ratio by means of the following theme variables:

- `space-profile-banner-ratio` default `6.3`
- `space-profile-banner-crop` default `0, 0, 267, 48`

- `space-profile-image-ratio` default `1`
- `space-profile-image-crop` default `0, 0, 100, 100`

- `user-profile-banner-ratio` default `6.3`
- `user-profile-banner-crop` default `0, 0, 267, 48`

- `user-profile-image-ratio` default `1`
- `user-profile-image-crop` default `0, 0, 100, 100`


#### Reloadable scripts

You can now configure scripts which should be reloadable by means of the `humhub\modules\admin\Module:$defaultReloadableScripts`
[module configuration](../admin/advanced-configuration.md#module-configuration) as follows:

```php
return [
    'modules' => [
        'admin' => [
            'defaultReloadableScripts' => [ 
                'https://platform.twitter.com/widgets.js'
            ]
        ]
    ]
]
```

#### Mobile enhancements

There were many mobile view enhancements and fixes introduced in HumHub 1.4, therefore test your theme on a mobile a
device after the theme rebuild.

**Mobile swipe**

The mobile view now supports a left swipe in order to display the sidebar. This behavior can be deactivated under
`Administration -> Appearance -> Use the default swipe to show sidebar on a mobile device`.

#### Minor changes overview

- Chng:Removed `jquery-placeholder` asset and dependency
- Chng: Removed `atwho` asset and dependency
- Chng: Removed old IE support
- Chng: Added `jquery.atwho.modified.css` to `mentioning.less`
- Chng: Minor changes in `notification/views/index.php`
- Chng: Refactored `widget/views/panelMenu.php`
- Chng: Use of new WallEntryControls in `modules/content/widgets/views/wallEntry.php`
- Chng: Removed `static/temp.css`, moved required form style to `form.less`
- Chng: Removed italic text from summary mail of comment and content activities for better readability
- Enh: Editable `['twemoji']['path']` config parameter
- Enh: Added isFluid LESS variable for automatic HTML container handling
- Enh: Added show password feature for password form elements
- Enh: Use of colored required input field asterisk


### 1.3

#### Automatic stylesheet loading

The file `yourtheme/css/theme.css` is now automatically included into the HTML header.

Please remove following lines from the file `yourtheme/views/layouts/head.php`:

```html
<link href="<?= $this->theme->getBaseUrl() ?>/css/theme.css" rel="stylesheet">
<link href="<?= $this->theme->getBaseUrl() ?>/font/open_sans/open-sans.css" rel="stylesheet">
```

#### Parent themes

Please refer to the  [Parent themes section](css.md#parent-themes) for more information about the new `@baseTheme` variable.
Using this technique will ease the update process of your custom theme.

#### Space & Profile Layouts and header

The sidebar handling of the content container layouts has changed.

Please check following view files for changes:

- `/protected/humhub/modules/user/views/profile/_layout.php`
- `/protected/humhub/modules/user/views/space/_layout.php`
- `/protected/humhub/modules/user/views/profile/home.php`
- `/protected/humhub/modules/user/views/space/home.php`

Also check the deprecation of `humhub\modules\activity\widgets\Stream` in case you've overwritten
the space or dashboard layout.

Also the space/profile header files (Statistic section) has slightly changed.

Please check following view files for changes:
- `/protected/humhub/modules/user/widgets/views/profileHeader.php`
- `/protected/humhub/modules/space/widgets/views/header.php`


#### New Richtext

**Added wrapper div `comment-create-input-group` to**

 - `/protected/humhub/modules/comment/views/comment/edit.php`
 - `/protected/humhub/modules/comment/widgets/views/form.php`

**Added wrapper div `post-richtext-input-group` to**

 - `/protected/humhub/modules/post/views/post/edit.php`
 
**Minor changes in the following less files:**
 
  - `static/less/comment.less`
  - `static/less/file.less`
  - `static/less/mentioning.less`

> Note: Those changes will be included by rebuilding your theme, as long as you did not exclude those files from your theme build.

**Added `static/less/richtext.less` file.**

This file contains the style of the new wysiwyg rich text editor and will be included by a theme rebuild.
As with other less files this file can be excluded from your theme build by less variable `@prev-richtext`.

### 1.2


#### Use of new Theming

HumHub 1.2 introduced an enhanced theming structure, which allows you to overwrite only the style definitions you want to change. This leads to smaller and cleaner themes without the need to manually maintain each small style change or addition of a new release. Please refer to the [Theming Guide](structure.md) for more details about the new theme structure.

> Note: You can still use your old theme, but you'll have to maintain your theme manually as before. You should at least create your themes `variables.less` file as described in the following, since these variables are used within your mails.

The steps below, describe how to merge your old theme to the new theming structure:

1. Download HumHub 1.2.
2. Copy your theme folder to `humhub\themes` of your HumHub 1.2 project folder.
3. Copy the following directory into your theme `humhub\themes\HumHub\less`.
4. Seperate your theme variables into `humhub\themes\yourTheme\less\variables.less`. Use the new variable names used in `humhub\static\less\variables.less`.
5. Ideally, only add the differences between your theme and the default theme to `humhub\themes\yourTheme\less\theme.less`.
6. Build your theme with `lessc -x build.less ../css/theme.css`.

If your theme overwrites major parts of the defalt theme, you can disable the import of some default less files by setting variables as for example `@prev-login: true;` to disable the import of `humhub/static/less/login.less`. Please see the [Theming Guide](overview.md) for more information about this technique.

> Info: You should rebuild your theme after each HumHub release to adopt new theme changes automatically.

> Info: If your theme directory resides outside the `themes` directory, you'll have to edit the `@HUMHUB` variable within the `build.less` file to point to the `static/less` directory of your HumHub v1.2 directory.

#### Stream

The new stream javascript rewrite requires some additional data-* attributes, which have to be added in case your theme overwrites one of the mentioned files.

Please check the following files for changes, in case your theme does overwrite those files:

- `protected/humhub/modules/stream/widget/views/stream.php`
- `protected/humhub/modules/content/views/layouts/wallEntry.php`

The same applies to the activity stream:

- `protected/humhub/modules/activity/widget/views/activityStream.php`
- `protected/humhub/modules/activity/views/layouts/web.php`

#### Legacy Themes

Old themes, should check the following file for changes:

- `humhub/themes/HumHub/css/theme.deprecated.less`

> Note: This file will not be maintained in the future.

#### Pjax

In v1.2 we introduced the pjax js library for faster partial page loads. Pjax enables us to navigate through the site without the need of full page loads.
If Pjax is enabled (default) it has an impact on how your javascript is executed. 

In Yii Javascript files are only loaded and executed once per full page load, therefore if you include code which makes use of for example `$(document).ready`, this code is only
executed once if pjax is enabled, even if you navigate to another page.

For this purpose you can either listen to `$(document).on('humhub:ready',...)` which is fired after a full page load and pjax page loads, or preferably implement a
humhub module with an `init` function for your initialization logic.

You can also disable pjax by using the following configuration param in your `protected/config/common.php`:

```php 
return [
    'params' => [
        'enablePjax' => false,
    ]
]
```

> Note: Since pjax provides a major performance boost, you should consider merging your Theme to the new pjax logic.

#### Layout

- We cleaned up the themes [main.php](https://github.com/humhub/humhub/blob/master/protected/humhub/views/layouts/main.php)
- Add 'top-menu-nav' to [main.php](https://github.com/humhub/humhub/blob/master/protected/humhub/views/layouts/main.php#L45) layout. This is required for pjax page loads.
- We added the icon definition etc to the themes [head.php](https://github.com/humhub/humhub/blob/master/themes/HumHub/views/layouts/head.php)

#### Gallery

The old **ekko lighbox** was replaced by the [blueimp ](https://blueimp.github.io/Gallery/) gallery. If your theme
does overwrite a view with gallery images, you'll have to use the new **data-ui-gallery** attribute instead of the
**data-toggle** and **data-gallery** attributes. Please check the following files:

- `modules/file/widgets/views/showFiles.php`
- `modules/space/widgets/views/header.php`
- `modules/tour/views/tour/welcome.php`
- `modules/user/widgets/views/profileHeader.php`

#### JS Rewrite: 

The JS Rewrite removed many inline script blocks from views and uses the new Javascript Module System with data-* attributes. Many UI Components and Widget had been rewritten.

- **General Rewrite**:
    - `modules/like/widget/views/likeLink.php` 
    - `modules/admin/views/setting/design.php` 
    - `modules/space/views/create/invite.php`
    - `modules/space/views/membership/invite.php`
    - `modules/comment/widget/views/showComment.php`
    - `modules/files/widget/views/showFiles.php`
    - `modules/post/widget/views/post.php`
- **Richtext rewrite**:
    - `modules/comment/widget/views/form.php`
    - `modules/comment/views/comment/edit.php`
    - `modules/post/views/post/edit.php`
    - `modules/post/widget/views/form.php`
- **UserPicker rewrite**:
    - `modules/admin/views/group/edit.php`
    - `modules/admin/views/group/members.php`
    - `modules/content/widgets/views/wallCreateContentForm.php`
- **TabbedForm**:
    - `modules/admin/views/user/add.php` 
    - `modules/admin/views/user/edit.php` 
    - `modules/user/views/account/_userProfileLayout.php` 
    - `modules/user/views/account/_userSettingsLayout.php` 
- **Space Picker**
    - `modules/admin/views/group/edit.php`
    - `modules/admin/views/setting/basic.php`
    - `modules/search/views/search/index.php`
- **Refactored**:
    - `modules/search/views/search/index.php` 
- **Pjax**
    - `modules/tour/widgets/views/tourPanel.php`
- **Notification**:
   - `modules/notification/widget/views/overview.php`


### 1.1

- Make sure to update your themed less file with the latest version.
In the upcoming 1.2.x releases we'll split the 'theme' less file into multiple files, to simplify this process.

- There were also many view file updates this release, please check changes (e.g. diff) of your themed versions.
We are constantly reducing view complexity to ease this process.

**Important changed views:**

- Logins (Standalone / Modal)
- Registration
- Main Layout

### 1.0

The following line was added to the HumHub Base Theme Less/Css file due to a Bootstrap update:
https://github.com/humhub/humhub/blob/0a388d225a53fd873773cf0989d6e10aaf66996a/themes/HumHub/css/theme.less#L648

### 0.20

As you know, HumHub based on the Yii Framework. In the new 0.20 release, the Framework was changed from Yii 1.1 to Yii 2. With this change the style.css in **webroot/css/** was removed and from now all styles are merged in the theme.css under  **webroot/themes/humhub/css/**.

Follow this steps to migrate an older theme ot 0.20:

1. Get the latest **style.css** [here](https://github.com/humhub/humhub/blob/v0.11/css/style.css) and copy it to **webroot/themes/yourtheme/css/**

2. Open the file `head.php` in **/themes/yourtheme/views/layouts/**

3. Remove this code snippet:

    `<?php $ver = HVersion::VERSION; ?>`

4. To load the old **style.css**, insert this code to the first line:

    `<link href="<?php echo $this->theme->getBaseUrl() . '/css/style.css'; ?>" rel="stylesheet">`

5. Change the structure of all reference calls for your additional theme files from:

    `<link href="<?php echo Yii::app()->theme->baseUrl; ?>/css/theme.css?ver=<?php echo $ver; ?>" rel="stylesheet">` 

    to: 
    
    `<link href="<?php echo $this->theme->getBaseUrl() . '/css/theme.css'; ?>" rel="stylesheet">` 

6. Check if everything works well, and fix optical issues at your theme file, if necessary.
