---
id: notifications
title: Notifications
sidebar_label: Notifications
---

To be able to inform your users efficiently about meaningful events within the network, even if they are not online, the software offers you an integrated Notification System. 


General Settings & Remarks
------------

By default the software comes with integrated systems which automatically trigger Notifications via the software interface or via email.
The administrator has the possibility to define default settings for all users. **This should be done during the initial setup of the software, as it is not possible to alter these settings retrospectively for existing users**. Users have the option to adjust the settings individually if they feel disturbed by too many notifications.

- **Desktop Notifications** - Enables desktop notifications when the browser window is minimized
- **Notifications for 'New Contet'** - Like the term suggests 'New Content' is a very broad concept, which includes almost every action in the respective Space. This setting should be used very carefully, as it can lead to a flood of notifications. It is recommended, for example, in a Space where company news are published and where only a few users have write access. The option allows you to handpick the Spaces for which the Users should receive Notifications for 'New Content'.

:::important
- Notifications on Space Level - If Users are overwhelmed by the amount of notifications from a certain Space, the can deactivate them for the Space in question. The option can be found by each individual users within the Space menu and only applies to Notifications for 'New Content'.
- Notifications on Content Level - Users are also able to decide for each individual post whether they want to be notified about it. This allows them to effectively filter out the discussions the want to be informed about. 
:::


Push Notifications
------------

Push Notifications for mobile phones can also be enabled. However, the function is not natively integrated into the software, but can be added via the module ['Firebase - Push Notifications'](https://www.humhub.com/en/marketplace/fcm-push/). 
As the name suggests, Google's Firebase service is used. A Firebase account and know how to set up the push service in Firebase are mandatory prerequisites for the use of the Module and thus the Push Notifications. Currently Push Notifications are only supported for Android. 

Notification Types
------------

- **Administrative** - Receive Notifications for administrative events like available updates.
- **Comments** - Receive Notifications when someone comments on my own or a following post.
- **New Content** - Receive Notifications for new content you follow.
- **Likes** - Receive Notifications when someone likes your content.
- **Space Membership** - Receive Notifications of Space Membership events.
- **Following** - Receive Notifications when someone is following you.
- **Mentionings** - Receive Notifications when someone mentioned you in a post.

Module Notifications
-------------

In addition to the default ones, each Module is able to add its own Notifications. The corresponding options will be added to the Administration panel (Administration --> Settings --> Notifications) once the Module was installed. Just to name a few examples of such additional Notifications: 

- **Calendar** - Receive Calendar related Notifications.
- **Message** - Receive Notifications when someone sens you a message. 
- **Tasks** - Receive Notifications for Tasks (Deadline Updates, Status chagnes...)
- **Tasks: Reminder** - Receive Notifications for Task Reminder

