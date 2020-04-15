---
id: release_notes_1_5
title: HumHub 1.5
---

## Released April 2020

### Live Updates

An indicator for new content was added to the timeline.
The activity widget now updates in realtime when there is new content e.g. new posts available.

This is a step towards our goal of displaying more and more live updates in realtime without the need to reload a page.

### Permission Management

A module filter was added to the permission settings of spaces, profiles and group level permissions.
This allows you to comfortably manage permissions without loosing track of all available options. 

### User profile posts

In previous versions, the profile stream was rather secondary for many HumHub installations and was often kept empty although
users were very active within the spaces of a network. In order to revitalize the profile stream, we've now included
all user related space contributions in their profile stream. This not only gives an overview of the overall activity
of an user, but also helps other users to find content of a user.

### Dashboard filter

Filters on the dashboard will only be displayed, if profile posts directly from the timeline are enabled.

### Legacy modules

Of course, with our continuously growing module marketplace, it can happen that certain modules are no longer maintained or are replaced by more powerful alternatives. In order to maintain high quality standards and to provide information about modules that are currently not actively maintained as early as possible, expiring modules are now marked with a "Legacy" tag.   

Legacy modules can still be used and we will try to provide migration steps to alternatives.

### Profile Administration

The admin view to manage the available profile fields has been reworked and improved.

### Other notable changes

- The entries in the navigation directory now also have icons (#3844)
- Advanced search and filter administrative log entries have been added (#3909)
- Added possibility to directly send test emails (#3937)
- Replaced space delete & archive buttons

**Administrative notes:**

- SameSite Cookie Support
- Removed caching section from `.htaccess` file. See [Documentation](https://docs.humhub.org/docs/admin/performance#http-caching) for more details. 
- Removed ImageConverter class, switched to Imagine library (#3402)
    - ImageMagick "convert" command not longer exists
    - New optional PHP extensions (ImageMagicks, GraphicsMagick) 
