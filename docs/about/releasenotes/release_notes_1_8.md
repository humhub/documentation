---
id: release_notes_1_8
title: HumHub 1.8
---

## Release March 2021

#### Multiple Default Spaces

Without the use of advanced solutions like LDAP, it has always been a bit difficult to assign multiple users to certain Spaces. To create a simple option for this, it is now possible to add multiple Default Spaces for Groups. Allowing you to add as many Groups as you like and add as many users to the groups you like, this basically allows you to map users to Spaces. This can also be applied to existing Groups and it is of course also possible to add new Default Spaces at a later point in time, to automatically assign users to them. 

#### Maintenance Mode

Updates for HumHub are usually easy and quick to install. To prevent users from using the software in an unstable situation and to prevent them from facing error messages during the process, we have added a maintenance mode. Administrators are able to activate it via the admin panel. Once activated all users, except administrators, will automatically be logged out and can not log in until the maintenance has been completed.

#### Improve Richtext Styles

In the area of design improvements, we have fine-tuned the Markdown output.  This affects output in the streams as well as content in modules like the Wiki or Custom Pages.Besides that, the possibility to align images was added to the Richtext editor.

#### Admin Password Change

To simplify user management, administrators can now easily reset users' passwords via the admin interface. In addition to this, we have introduced enhanced security measures for accounts. Administrators are now able to force users to change their passwords on a regular basis, as well as on first login. 

#### Failed Login Password Delay

To further increase security, a user account is now automatically locked for a defined period of time in the event of multiple incorrect login attempts. This massively complicates bruteforce attacks, making them almost imposible.

#### Default Permissions

Until now, default values for Space and user profile permissions could only be set in a complicated way via the configuration files. This is now comfortably possible via the administration panel. Furthermore, the permissions for the user profiles are now optional and can also be controlled directly by administrators.

#### And much more.. 

Of course, in addition to the mentiond enhancements we have improved many small details, for example:

- Space optional hide Members Widget
- Improve "Admin Can View All" Option
- Comment permission also on profile level
- Added console command to display LDAP attributes of a user
- Shorten high member numbers (e.g. Space Header)
- Marketplace: Possibility to prohibit modules via the configuration
- Added support for collapsible form fields
- Performance: Implemented live poll result sharing by BroadCastChannel
- Added database related checks (Driver, Collation, Table Engine)

As always, all those interested in technical details will find a complete list of the changes in the Changelog. 
