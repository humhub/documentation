---
id: release_notes_1_12
title: HumHub 1.12
---

## Release July 2022

#### New and improved email systems

For emails we now use Symfony instead of Swift, making the system fit for the future. We believe this will improve the experience for both administrators and users. In addition to that, we have also significantly expanded the software's possibilities with regard to configuration and stability. For example, it is now possible to set up load balancing and high availability with FailOver SMTP servers. We have also simplified the integration of third-party providers. The configuration of e.g. Amazon SES, GMail, MailChimp, SendGrid, MailGun and others can now be done via the admin panel or if wanted comfortably by using a configuration file.

#### Invisible users

With the increasing popularity of the software and the continuously growing number of networks and users, we have noticed that the number of custom developments is also steadily increasing. Our REST API in particular has also become very popular. For this reason, we have decided to implement the concept of 'invisible users' enabling for instance invisible admin or API bot accounts. To keep this process as simple as possible, user accounts can be easily marked as invisible via the administration panel.

#### Improved ‘User Subtitle’

In addition to these technical changes, we have also implemented visible changes, for example, with regard to the 'User Subtitle'. We have always considered the 'User Subtitle' as an important way of providing additional information about a user at first glance. That is why we want to encourage the use of this instrument by introducing it to several other views and making it easier to use. Based on their use case, administrators are now able toeasily define which profile field is used as subtitle. This could be for example be the location, the organisation or the position of the user in the organisation or in the network itself, making the interaction between users more convenient.

#### New stream filter ‘Date’

Another change that we are introducing is the new stream filter ‘Date’, which enables users to filter stream entries based on a specific time interval. The filter can of course also be combined with other filters such as ‘Content types’ or ‘Posts I am involved in’. With this new option we hope to make it easier and faster for users to find the posts, documents and files they are really looking for.

#### And much more..

Of course, we have also included many other improvements, just to name a few:
- New language: Welsh
- ‘People Directory’: Profile descriptions are truncated now
- New Event: ‘MentioningController’ (manipulation of results)
- Modules: Enabled to create ‘Profile Field Types’
- API/Modules: Ability to inject additional validation on demand

For a detailed list of all changes take a look into the [Changelog](https://github.com/humhub/humhub/blob/master/CHANGELOG.md).
