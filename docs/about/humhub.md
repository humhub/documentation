---
id: humhub
title: About HumHub
---

This guide will give you a brief introduction to the basic concepts and components of the HumHub platform and should
help you to decide whether HumHub fits your needs.

## What is HumHub?

HumHub is an open source social network platform with a wide variety of use cases as **social intranet**, **community** or
**collaboration** platform. HumHub consists of a core application, which can be extended through additional modules 
and adjusted to your needs by many configuration options. 

Common use cases for HumHub are:

 - Public or private communities
 - Enterprise Social Intranet
 - Schools
 - Agencies
 - Municipality
 - Associations
 
Besides this documentation site and the core software, the HumHub platform consists of further HumHub related 
projects and resources worth a visit:

 - [HumHub Website](https://www.humhub.com)
 - [HumHub Community](https://community.humhub.com/dashboard)
 - [Translation Community](https://translate.humhub.org/user/auth/login)
 - [GitHub (HumHub)](https://github.com/humhub)
 - [GitHub (Contrib)](https://github.com/humhub-contrib)
 - [Marketplace](https://marketplace.humhub.com)
 
## Key benefits 

The HumHub platform aims to provide a flexible core platform and some official modules for others to build their 
own social network with many customization options as a module system, marketplace and theming mechanism as well as 
an intuitive user interface also suitable for non technical users.

Some of the key benefits are listed below:

 - Free to use
 - Self hosted or hosted on our [cloud hosting](https://www.humhub.com/en/professional-edition/step1)
   - Keep your data save, without the need to share it with any external services
 - Simple [installation](../admin/installation.md) and maintenance
   - Only requires a [simple web server environment](../admin/installation.md)
 - Highly customizable
   - Custom theme support
   - Custom module support
   - Many configuration and fine tuning options
 - Open source
   - Transparent development and discussions
   - Community support and contribution
   - Direct contact to the core development team
   - Many eyes principle
 - Translated into more than 40 languages
 - [Marketplace](https://marketplace.humhub.com) for modules and themes
 - Intuitive user interface

## Requirements

Besides meeting the [system requirements](../admin/requirements.md), a HumHub system administrator 
should be familiar with the setup and maintenance of a web server environment e.g. [LAMP Stack](https://en.wikipedia.org/wiki/LAMP_(software_bundle))
and should be able to:

 - [Install and configure HumHub](../admin/installation.md)
 - [Create backups](../admin/backup.md)
 - [Run console commands](../admin/console.md)

## Basic Concepts

The following section provides a short overview of the basic concepts supported by the HumHub core software.

### Users & Groups

Users of a HumHub network are assigned to one or multiple user groups. User groups are used to manage group level
permissions as for example the permission to create [spaces](#spaces) or access certain areas of the network as the directory. You
can either automatically assign new users to a certain group or let them choose from a set of user groups in the
registration process.

Depending on your requirements, HumHub allows you to either run a private or a public network by enabling or disabling
limited access for guest users. When enabling limited access for guest users, 
non-authenticated users will have access to certain areas and see public contents of your network. 
Private networks, on the other hand, can only be accessed by existing users and either allow new users to register 
manually or solely by invite and may also require a group administrator to approve users registrations.

:::info
Learn more about different [authentication options](../admin/authentication.md) supported by HumHub.
:::

### Spaces

HumHub networks are usually separated into multiple spaces. A space serves as an independent area within your network with
an own set of members, permissions, settings and modules. Most content created within a network as posts, events
or wiki pages are linked to a specific space. Depending on the use case of your network, a space could be created for each project,
department or any kind of community topic. You can even allow your users to create and manage their own spaces. 
That said, spaces are a fundamental part of most HumHub networks.

### Streams

In HumHub, streams are used to display and filter recently created contents and activities. 
The following types of streams are available in the HumHub core software:

 - **Space stream**: This space level wall stream includes contents related to a specific space
 - **Profile stream**: This profile level wall stream includes contents related to a certain user and by default also includes content created by a user within spaces
 - **Dashboard stream**: A network wide wall stream includes contents of spaces and profiles a user is following
 - **Activity stream**: Sidebar stream which lists activities within the whole network or on space level

### Activities

Beside the wall streams, which display actual content entries as posts or calendar events, the activity stream lists various
information about recent activities within the whole network or a single space. An activity for example could be a new member
joining a space or a user liking a post. Activities are also part of the summary mail sent out to users 
to keep them up-to-date with recent network activities.

### Posts

In HumHub, posts are the simplest form of content and are included in the core platform. Users can create posts directly within
the start page of a space or on their user profile wall. HumHub provides a [WYSIWYG](https://en.wikipedia.org/wiki/WYSIWYG)
editor for most text based contents in order to add simple formatting as headlines or bold text as well as [oEmbed](https://oembed.com/)
or file uploads. As in most social network platforms, posts can be commented and liked or archived.

While posts are the only content type included in the core software, there are many modules available supporting further
kinds of content as meetings, calendar events or wiki pages.

### Search

The search system can be used to search for contents, users and spaces and with a little bit of 
[configuration](../admin/search.md#file-content-indexing) even supports file content search. Refer to the 
[Admin Search](../admin/search.md) section for more information about the search system.

### Notifications

Notifications are sent out to users to inform them about user related events as new comments or likes on one of his/her
posts. In contrast to activities, notifications are always directed to a single user and not the whole network
or a space. A Notification can be sent to multiple targets like E-Mail, Web or Mobile. HumHub provides 
fine grained notification settings in order to specify which notifications should be sent to which targets.

### Dashboard

By default, the dashboard is the starting point for all of your users. The dashboard provides a quick overview of
all recent contents and activities of all spaces and profiles a user is following and may contains additional sidebar
elements as for example a task or calendar overview snippet.

### Spaces Page

The spaces page provides an overview of all spaces that are visible for you. You can filter them by your status (member, following) and search for specific spaces.

### People Page

The people page provides an overview of all users. You can filter them by user group and your relation to them (following, friendship) and also search for specific users.

### Topics

Topics can be used to classify and filter contents within a stream by attaching one or multiple topic labels to a content
entry. You can either allow all space members to create a topic, or restrict creating and managing topics to only 
space administrator or moderator roles.

### Modules

The feature set of your HumHub network can be extended by installing additional modules. A module may add features as
new content types or change the behavior of core features or even include custom themes. Many modules can also be
enabled on space or profile level. A wiki module for example could be installed on space level, allowing space 
members to create and manage wiki pages collaboratively, or on user profile level in order to setup a personal wiki.

As mentioned before, spaces do not necessarily share the same set of enabled modules, a module installed on one space does 
not affect other spaces, unless a module is configured as default module.

:::info
Checkout the following links for more information:
 
 - The [Marketplace](https://marketplace.humhub.com) lists modules directly installable within your HumHub 
 backend
 - [GitHub (HumHub)](https://github.com/humhub) hosts all official open source modules as well as the core software
 - [GitHub (Contribution)](https://github.com/humhub-contrib) hosts many of the community driven modules
:::

## Professional Edition

The HumHub [Professional Edition](https://www.humhub.com/en/professional-edition) consists of a 
suite of [additional modules](https://www.humhub.com/en/marketplace) especially useful in enterprise environments with
features as [extended LDAP](../professional-edition/features.md#advanced-ldap) and [single sign on (SSO)](../professional-edition/features.md##feature-list) support
as well as an additional [enterprise theme](../professional-edition/features.md#enterprise-theme).

Further information are available at:

 - [Professional Edition Guide](../professional-edition/intro.md)
 - [Enterprise Edition Homepage](https://www.humhub.com/en/professional-edition)

## Limitations

This section gives you some insights about current limitations of the HumHub platform. The following issues
are listed here, since they are frequently requested and may are part of your platform requirements. 
The revision of below issues may be part of a future release, but are not planned in near future and some of them would require 
major changes in the core software.

- If you plan to create a platform like Facebook with **billions of active users**, HumHub won't fit your needs, since HumHub is not designed
to support such a large user base. Platforms like this are usually based on [Big Data](https://en.wikipedia.org/wiki/Big_data) 
technologies and are way more complex than HumHub. 

- Although we try to make HumHub as customizable as possible by providing a variety of configuration options and official modules, 
some existing features may not fit your **specific needs** and will require some custom development effort. Feel free to share your ideas
and requirements by opening feature requests on [GitHub](https://github.com/humhub/humhub/issues), but note, that only features
useful for common use-cases will be considered.

- HumHub currently only supports a rather **simple content visibility concept** with private and public content. While this 
vastly reduces the overall complexity, it also does not allow custom content visibility settings as for example 
[user group](#users--groups) level content visibility.

- There is currently no concept available or planned for **nested spaces** or **sub-spaces**. The [topic](#topics) feature adds 
some kind of content categorization within a space and can be used to separate/filter contents of a space. 
Furthermore, the Professional Edition adds a [space type feature](../professional-edition/features.md) for categorizing spaces,
which allows one additional level of space classification.

- HumHub currently can not be operated as a real **multi-client system** with entirely separated user bases. 
You can deactivate the directory and invite your users to private spaces, but other users will still be found e.g. 
in the search system or user picker. At the moment of writing, this feature is considered but not part of the 
release plan. If you want to push forward the development of this feature [let us know](https://www.humhub.com/en/)!

- The **guest mode is limited**, there is currently no way for guests to create, comment or like any kind of content.

- There is currently no payment integration available. If you want to offer community services behind a payment wall, you will have to buy the [eCommerce module](https://marketplace.humhub.com/module/ecommerce) or implement a custom integration of your payment backend.

## How do I get started?

Get started testing HumHub by
 
 - creating a [Demo Instance](https://www.humhub.com/en/) on our cloud hosting
 - setup an own HumHub installation by following the [Installation Guide](../admin/installation.md)



