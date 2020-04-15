---
id: release_notes_1_5
title: HumHub 1.5
---

## Released April 2020

### Live Updates

An indicator for new content was added to the timeline. In case new content is available, an update badge is now visible 
at the top of the wall stream, which can be clicked in order to load content updates. 

The activity stream now updates in realtime when there is new content e.g. new posts available.

This is a step towards our goal of displaying more and more live updates without the need to reload a page.

### Permission Management

A module filter was added to the permission settings of spaces, profiles and group level permissions.
This allows you to comfortably manage permissions without loosing track of all available options. 

### User profile posts

In previous versions, the profile stream was rather secondary for many HumHub installations and was often kept empty 
even though users were very active within the spaces of a network. In order to revitalize the profile stream, we've now included
all user related space contributions in their profile stream. This not only gives an overview of the activity
of an user, but also helps other users to find content of a user.

### Dashboard filter

When enabling the user profile input on the dashboard 
(`Administration -> Settings -> General -> Show user profile post form on dashboard`), you can now also filter the
dashboard stream similar to the space stream filter.

### Legacy modules

The marketplace now supports tagging modules as "Legacy". This tag will be assigned to modules which are 
not maintained anymore or were replaced with a more powerful alternative in order to maintain quality standards and
inform users about outdated modules.  

Legacy modules can still be used and we will try to provide migration steps to alternative modules.

### Profile Administration

The administration view to manage the available profile fields 
`Administration -> Users -> Profiles` has been reworked and improved.

### Log Filter

The administration log `Administration -> Information -> Logging` now can be filtered.

### Asset load performance

We've optimized the asset loading by adding deferred script loading for some core assets. This improves the
general loading performance of the network. More information is available in the 
[Development Migration Guide](../../develop/modules-migrate.md#migrate-from-14-to-15)

### Other notable changes

- The entries in the navigation directory now also have icons (#3844)
- Added possibility to directly send test emails (#3937)

**Administrative notes:**

- `SameSite` Cookie Support
- Removed caching section from `.htaccess` file. See [Documentation](https://docs.humhub.org/docs/admin/performance#http-caching) for more details. 
- Removed `ImageConverter` class, switched to **Imagine library**
    - ImageMagick "convert" command not longer exists
    - New optional PHP extensions (ImageMagicks, GraphicsMagick) 
