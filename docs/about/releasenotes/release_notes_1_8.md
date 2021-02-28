---
id: release_notes_1_8
title: HumHub 1.8
---

## Release March 2021

#### Space Mapping with Groups

Without the use of advanced solutions like LDAP, it has always been a bit difficult to automatically assign multiple 
users to certain Spaces. In order to address this issue HumHub now supports the configuration of more than only
one default Space per user group. This heavily simplifies the automatic mapping between Spaces and users. Furthermore,
newly configured default spaces will now be assigned not only to new members but also to existing users of a group, so you
are able to define new default Spaces for all group members at a later point in time.

#### Maintenance Mode

Updates for HumHub are usually easy and quick to install. Nonetheless, in order to prevent users from accessing the
software in an unstable state and to prevent them from facing errors during an update or other maintenance
work, we have added a new maintenance mode which can be activated in the admin interface. Once activated, all users
except administrators will automatically be logged out and are not permitted to log in until the maintenance
has been completed. The maintenance mode can be managed in `Administration -> Settings -> General`.

#### Improve Richtext Styles

In the area of design improvements, we have fine-tuned the Richtext output in streams, previews and detail views as for
example Wiki pages. Besides that, the possibility to align images as well as further usability enhancements as improved
list management was added to the Richtext editor. Richtext output in HTML mails as notifications for new content or comments
are now rendered as formatted Html content instead of plain text blocks.

#### Admin Password Change

To simplify the user management, administrators are now able to easily reset users' passwords via the admin interface.
In addition to this, we have introduced enhanced security measures for user accounts. Admins now have the possibility to
force users to change their passwords on a regular basis. The accounts will be locked until the users change their passwords.

#### Failed Login Password Delay

To further increase security, a user account is now automatically locked for a defined period of time in the event of
multiple incorrect login attempts. This massively complicates bruteforce attacks, making them almost impossible.

#### Default Permissions

Until now, the default values for Space and user profile level permissions could only be overwritten via file configuration.
Those defaults can now comfortably be configured in the administration interface. Furthermore, administrators can now
block users from configuring individual profile level permissions in order to force a static set of permissions for all users.
The default permissions can be managed in `Administration -> Users -> Profile Permissions` for user profiles and 
`Administration -> Spaces -> Permissions` for spaces.

#### And much more.. 

Of course, in addition to the mentioned enhancements we have improved many small details, for example:

- Option to hide Members Widget in Spaces
- Improved "Admin Can View All" Option
- Added comment permission on profile level
- Added console command to display LDAP attributes of a user
- Shortened high member numbers in e.g. Space Headers
- Added possibility to block modules via the configuration
- Added support for collapsible form fields
- Implemented live poll result sharing by BroadCastChannel
- Optimized dashboard streams and Richtext conversion performance
- Improved Richtext preview rendering for activities and notifications
- Added database related checks (Driver, Collation, Table Engine) to the prerequisites check list

All those interested in technical details will find a complete list of the changes in the
[Changelog](https://github.com/humhub/humhub/blob/master/CHANGELOG.md#180-march-1-2021).
