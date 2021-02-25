---
id: advanced-configuration
title: Introduction
sidebar_label: Introduction
---

While many HumHub settings can be configured directly within the administration backend, some more specific or low-level
configuration must be specified within configuration files. 

The default configuration files of HumHub reside in `@humhub/protected/humhub/config` and should not be touched.
Administrators can overwrite or extend the default configuration within the configuration files 
residing in `@humhub/protected/config` as described in the following section.

## File Configuration

The main application configuration of HumHub consists of different configuration files which are loaded and merged in a specific
order, whereas the last loaded configuration file may overwrites the previous configurations. The following files
residing in `@humhub/protected/config` can be used to specify custom configurations.

- `common.php`  - Configuration used in Console & Web Application
- `web.php` - Configuration used exclusively in the Web Application
- `console.php` - Configuration used exclusively the Console Application

Note, the shortcoming of this merging technique is, that it is not possible to replace an array value:

```php
// common.php
return [
    //..
    'someValue' => [
        'oldValue'
    ]
    //..
]
```
merged with:

```php
// web.php
return [
    //..
    'someValue' => [
        'newValue'
    ]
    //..
]
```

will result in:

```php
// resulting config
return [
    //..
    'someValue' => [
        'oldValue',
        'newValue'
    ]
    //..
]
```

### Configuration loading order

**Web Application**

1. `@protected/humhub/config/common.php`
2. `@protected/humhub/config/web.php`
3. `@protected/config/dynamic.php`
4. `@protected/config/common.php`
5. `@protected/config/web.php`

**Console Application**

1. `@protected/humhub/config/common.php`
2. `@protected/humhub/config/console.php`
3. `@protected/config/dynamic.php`
4. `@protected/config/common.php`
5. `@protected/config/console.php`

:::tip
If you are not sure where to put your configuration, in most cases you can use the `common.php` file.
This file will be used for the web as well as the console application.
:::

:::caution
Do not edit the core configuration files under `@humhub/protected/humhub/config/` directly. 
:::

### Application Parameters

Some application behaviours can be adjusted by configuring application parameters within one of the configuration files:

```php
// protected/config/web.php
return [
    'params' => [
        'enablePjax' => false
    ]
];
```

**Available params:**

>⚠️ Under construction.

| Parameter | Description |    
| -------- | ---------- |
| `allowedLanguages`  | see the [Translations Section](translations.md) | 
| `enablePjax`  | used to disable/enable pjax support (default true) | 

### Module Configurations

Some modules may allow further configurations by overwriting fields of their `Module.php` class. 
Those configurations can be overwritten within your `common.php` file as follows:

**Example:**

```php
return [
    'modules' => [
        'directory' => [
            'guestAccess' => false 
        ]
    ]
]
```


## Core Module Settings

### Activity

**weeklySummaryDay** - Day to send weekly summaries on daily cron run (0 = Sunday, 6 = Saturday)<br/>
Default: `0`<br/>
Data Type: `Integer`<br/>

**enableMailSummaries** - Enable mail summary feature<br/>
Default: `true`<br/>
Data Type: `Boolean`<br/>

### Admin

**dailyCheckForNewVersion** - Check daily for new HumHub version<br/>
Default: `true`<br/>
Data Type: `Boolean`<br/>

**allowUserImpersonate** - Allow admins to impersonate other users<br/>
Default: `true`<br/>
Data Type: `Boolean`<br/>

**showDashboardIncompleteSetupWarning** - Show incomplete setup warning on the dashboard for admins<br/>
Default: `true`<br/>
Data Type: `Boolean`<br/>

**defaultReloadableScripts** - List of script urls which should not be cached on the client side<br/>
Default: `[]`<br/>
Data Type: `Array`<br/>

**cleanupPendingRegistrationInterval** - Seconds before delete old pending registrations messages<br/>
Default: `60 * 60 * 24 * 90`<br/>
Data Type: `Integer`<br/>


### Comment

**commentsBlockLoadSize** -Maximum comments to load at once<br/>        
Default: `10`<br/>
Data Type: `Integer`<br/>

**commentsPreviewMax** - Maximum comments to show initially<br/>
Default: `2`<br/>
Data Type: `Integer`<br/>

### Content

**adminCanViewAllContent** - Global admin can see all content.<br/>
Default: `false`<br/>
Data Type: `Boolean`<br/>

**adminCanEditAllContent** - Global admin can edit/delete all content.<br/>
Default: `true`<br/>
Data Type: `Boolean`<br/>

**emailSubjectHourlyUpdate** - Custom e-mail subject for hourly update mails.<br/>
Default: `empty`<br/>
Data Type: `String`<br/>

**emailSubjectDailyUpdate** - Custom e-mail subject for daily update mails.<br/>
Default: `empty`<br/>
Data Type: `String`<br/>

**maxAttachedFiles** - Maximum allowed file uploads for posts/comments.<br/>
Default: `50`<br/>
Data type: `Integer`<br/>

**maxOembeds** - Maximum allowed number of oembeds in richtexts.<br/>
Default: `5`<br/>
Data type: `Integer`<br/>

### Dashboard

**autoIncludeProfilePosts** - Possible options to include profile posts into the dashboard stream. <br/>
Default: `empty`<br/>
Options: `all` - Include all profile posts, `admin` - Include all profile posts for admins only<br/>
Data Type: `String`<br/>

**hideActivitySidebarWidget** - Hides the activities sidebar widget. <br/>
Default: `false` <br/>
Since: `1.3` <br/>
Data Type: `Boolean`<br/>

### Directory

**active** - Defines if the directory is active, if not the directory is not visible and can't be accessed.<br/>
Default: `true`<br/>
Data Type: `Boolean`<br/>

**pageSize** - Default page size for directory pages. <br/>
Default: `25`<br/>
Data Type: `Integer`<br/>

**memberListSortField** - Sort field for members page.<br/>
Default: `profile.lastname`<br/>
Data Type: `String`<br/>

**guestAccess** - Defines if the directory is available for guest users, this flag will only have effect if guest access is allowed and the module is active.<br/>
Default: `true`<br/>
Data Type: `Boolean`<br/>

**showUserProfilePosts** - Show menu entry for user profile posts on directory.<br/>
Default: `true`<br/>
Data Type: `Boolean`<br/>


### File

**$fileNameValidationPattern** - 
Default: `/[\x00-\x1F\x80-\xA0>\/\<":\*?|{}\[\]\\\\\/]/u`
Data Type: `String`<br/>

**inlineMimeTypes** - Mime types to show inline instead of download
Default: `[
        'application/pdf',
        'application/x-pdf',
        'image/gif',
        'image/png',
        'image/jpeg'
    ]`<br/>
Data type: `Array`<br/>

**denyDoubleFileExtensions** - Prohibit uploads of files with double file extension.<br/>
Default: `false`<br/>
Data type: `Boolean`<br/>

**converterOptions** - Array of file converter options<br/>
Default: `[]`<br/>
Data type: `Array`<br/>

**imageMaxResolution** - Maximum image resolution before auto downscaling e.g. 1920x1080<br/>
Default: `empty`<br/>
Data type: `String`<br/>
Since: `1.7`<br/>

**imageJpegQuality** - The JPEG quality for uploaded JPEG images. From 0 to 100.<br/>
Default: `empty`<br/>
Data type: `Integer`<br/>
Since: `1.7`<br/>

**imagePngCompressionLevel** - The PNG compression level for uploaded PNG images. From 0 to 9.<br/>
Default: `empty`<br/>
Data type: `Integer`<br/>
Since: `1.7`<br/>

**imageWebpQuality** - Tt The WebP quality for uploaded WebP files. From 0 to 100.<br/>
Default: `empty`<br/>
Data type: `Integer`<br/>
Since: `1.7`<br/>

**imagePreviewMaxHeight** - The maximum height of generated preview image files in px.<br/>
Default: `400`<br/>
Data type: `Integer`<br/>
Since: `1.7`<br/>

**imagePreviewMaxWidth** - The maximum width of generated preview image files in px.<br/>
Default: `400`<br/>
Data type: `Integer`<br/>
Since: `1.7`<br/>

### LDAP

**pageSize** - The page size for ldap query, set to 0 to disable pagination.<br/>
Default: `10000`<br/>
Data type: `Integer`<br/>
Since: `1.6`<br/>

**queriedAttributes** - The queried LDAP attributes, leave empty to retrieve all.<br/>
Default: `[]`<br/>
Data type: `Array`<br/>

### Like

**autoFollowLikedContent** - Enable automatic follow liked content.<br/>
Default: `true`<br/>
Data type: `Boolean`<br/>
Since: `1.2.5`<br/>

**queriedAttributes** - Mark this core module as enabled.<br/>
Default: `true`<br/>
Since: `1.4`<br/>
Data type: `Boolean`<br/>


### Marketplace

**modulesPath** - Path to store marketplace modules. <br/>
Default: `@app/modules`<br/>
Data type: `String`<br/>

**enabled** - Enable marketplace. <br/>
Default: `true`<br/>
Data type: `Boolean`<br/>

**modulesDownloadPath** - Path to store marketplace module packages. <br/>
Default: `@runtime/module_downloads`<br/>
Data type: `String`<br/>

**hideLegacyModules** - Hide modules from marketplace which are marked as legacy. <br/>
Default: `true`<br/>
Since: `1.7`<br/>
Data type: `Boolean`<br/>

**moduleBlacklist** - A list of module ids that cannot be installed.<br/>
Default: `[]]`<br/>
Since: `1.7`<br/>
Data type: `Array`<br/>

### Space

**globalAdminCanAccessPrivateContent** - Allow global admins (super admin) access to private content also when no member. <br/>
Default: `false`<br/>
Data type: `Boolean`<br/>

**useUniqueSpaceNames** - Do not allow multiple spaces with the same name. <br/>
Default: `true`<br/>
Data type: `Boolean`<br/>
Since: `1.2`<br/>

**disableFollow** - Defines if the Space following is disabled or not.<br/>
Default: `true`<br/>
Data type: `Boolean`<br/>
Since: `1.2`<br/>

**maximumSpaceUrlLength** - Maximum space url length<br/>
Default: `45`<br/>
Since: `1.3`<br/>
Data type: `Integer`<br/>

**minimumSpaceUrlLength** - Minimum space url length<br/>
Default: `2`<br/>
Since: `1.3`<br/>
Data type: `Integer`<br/>

**hideAboutPage** - Hide about page in space menu. <br/>
Default: `false`<br/>
Data type: `Boolean`<br/>
Since: `1.7`<br/>

### Stream

**streamExcludes** - Content classes to excludes from streams. <br/>
Default: `[]`<br/>
Data type: `Array`<br/>

**streamSuppressQueryIgnore** - Content classes which are not suppressed when in a row.<br/>
Default: `[]`<br/>
Data type: `Array`<br/>

**defaultStreamSuppressQueryIgnore** - Default content classes which are not suppressed when in a row.<br/>
Default: `[]`<br/>
Data type: `Array`<br/>

**showDeactivatedUserContent** - Show contents of deactivated users in stream. <br/>
Default: `true`<br/>
Data type: `Boolean`<br/>

### UI

**iconAlias** - Contains all available icon aliases. <br/>
Default: `[
        'dropdownToggle' => 'angle-down',
        'edit' => 'pencil',
        'delete' => 'trash',
        'dashboard' => 'tachometer',
        'directory' => 'book',
        'back' => 'arrow-left',
        'add' => 'plus',
        'invite' => 'paper-plane',
        'remove' => 'times',
        'controls' => 'cog',
        'about' => 'info-circle',
        'stream' => 'bars'
    ]`<br/>
Data type: `Array`<br/>


### User

**sendInviteMailsInGlobalLanguage** - Option to translate all invite mails except self invites to the default language (true) or user language(false).<br/>
Default: `true`<br/>
Data Type: `Boolean`<br/>

**loginRememberMeDefault** - Default state of remember me checkbox on login page.<br/>
Default: `true`<br/>
Data Type: `Boolean`<br/>

**loginRememberMeDuration** - Number of seconds that the user can remain in logged-in status if remember me is clicked on login.<br/>
Default: `2592000`<br/>
Data type: `Integer`<br/>

**logoutUrl** - Redirect url after logout (if not set, home url will be used).<br/>
Default: `empty`<br/>
Data Type: `String`<br/>

**profileDefaultRoute** - The default route for user profiles.<br/>
Default: `empty`<br/>
Data Type: `String`<br/>

**userListPaginationSize** - The default pagination size of the user list lightbox.<br/>
Default: `8`<br/>
Data type: `Integer`<br/>

**adminCanChangeUserProfileImages** - Allow admin users to modify user profile image and banner.<br/>
Default: `false`<br/>
Data Type: `Boolean`<br/>

**validUsernameRegexp** - Regular expression to check username characters.<br/>
Default: `/^[\p{L}\d_\-@\.]+$/iu`<br/>

**maximumUsernameLength** - The maximum username length.<br/>
Default: `50`<br/>
Data type: `Integer`<br/>

**minimumUsernameLength** - The minimum username length.<br/>
Default: `4`<br/>
Data type: `Integer`<br/>

**displayNameCallback** - A callback that returns the user display name.<br/>
Default: `null`<br/>
Data type: `Callable`<br/>

**displayNameSubCallback** - A callback that returns the user display name sub text.<br/>
Default: `null`<br/>
Data type: `Callable`<br/>

**disableFollow** - Defines if the user following is disabled or not.<br/>
Default: `false`<br/>
Data Type: `Boolean`<br/>

**emailRequired** - Defines mark user e-mail field as required. (Experimental)<br/>
Default: `true`<br/>
Data Type: `Boolean`<br/>

**softDeleteKeepProfileFields** - Profile field names to keep after user soft deletion.<br/>
Default: `['firstname', 'lastname']`<br/>
Data type: `Array`<br/>

**includeAllUserContentsOnProfile** - Include user contents on profile stream.<br/>
Default: `true`<br/>
Data Type: `Boolean`<br/>

**passwordStrength** - Defines empty additional rules for password validation<br/>
Default: `[]`<br/>
Data type: `Array`<br/>

**profileDisableStream** - Disable the profile stream.<br/>
Default: `false`<br/>
Data Type: `Boolean`<br/>

**failedLoginDelayTimes** - Account login blocking times after attempted incorrect logins. Format: Number of tries => Time delay in seconds.<br/>
Default: `[2 => 10, 6 => 20]`<br/>
Data type: `Array`<br/>

### Web

**security** - Web Security Settings.<br/>
Default: `[]]`<br/>

**enableServiceWorker** - Disable Service Worker and PWA Support.<br/>
Default: `false`<br/>
Since: `1.8`<br/>
Data Type: `Boolean`<br/>
