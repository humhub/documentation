---
id: live
title: Live Updates
---

Allows Browser Notifications, only when HumHub tab is open.

In the user "Notification Settings", "Receive desktop notifications when you are online." must be checked.

Notifications are triggered by the HumHub live component, which per default uses the **poll driver**.

To have instant notifications, you must use a websocket by [configuring the **push driver**](https://docs.humhub.org/docs/admin/push-updates/).

For a service worker allowing to receive them even when the tab or browser is closed, install the [Push Notifications (Firebase) module](https://marketplace.humhub.com/module/fcm-push/description).
