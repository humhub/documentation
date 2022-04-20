---
id: release_notes_1_11
title: HumHub 1.11
---

## Release April 2022

#### Introducing the new marketplace

We have extensively redesigned the software's Marketplace by introducing a new "cards" design for the module overview. With this fresh look we want to give the individual modules more visibility and hope to draw the the users' attention to them. Of course, we hope not only increase the attention to our own modules, but also to the many modules of our partners and our Community.  

In addition to the extensive rework in terms of look & feel, we have of course also added new features to the Marketplace. For example, a new filters help you find the modules you are looking for faster, a prominent notice now appears when the core software needs an update and you are now able to install all pending module updates with just one click. 

#### Opt-in for embedded content and support for new oEmbed providers

Before external embedded content (e.g. Youtube, Dailymotion) is displayed we now force an opt-in from the users. The embedded content is covered with a corresponding overlay, which allows users to give their consent directly and to save these settings for each provider individually. With the introduction of this feature we hope to make it easier for you to comply with the data protection regulations in your respective countries.

In addition to that, we have also reworked the oEmbed settings giving administrators new possibilities. In this case, too, we have not only revised the settings overview, but have also added new functions. For instance, providers that require an individual API key are now also supported. This is the case for Facebook or Twitter, for example. 

#### Forbidden usernames and notifications about deleted content

With this release we are also creating the possibility ban certain usernames. This can be done via the configuration and the new feature makes it possible to exclude unwanted or offensive usernames. We are implementing this because a big part of our vision at HumHub is to build a great communities and networks that connect people and thrive an environment where everyone is welcoming and respectful. 

Another feature that comes with this version is the possibility for admins to leave a comment on why they are deleting certain posts/comments. This avoids confusion in case that content has to be deleted. This is intended to give users direct feedback, when necessary, on the content they create on the network and to encourage them to adopt more appropriate practices. 

#### And more...

- Added a single content view for posts Posts (Own URL, direct linking, expanded comment section)
- Indication who invited users on the approval page
- Implemented grouped actions for user approval
- Profile fields can now be prefixes (for example 'tel://')
- Followers are now being displayed on the "About" page of Spaces
- LDAP: Possibility to reset mapping for individual users
- Added a new permission for 'mentioning' (@user)
- 'Send comment' button was improved and repositioned, previously overlapped in some cases with other objects

For a detailed list of all changes take a look into the [Changelog](https://github.com/humhub/humhub/blob/master/CHANGELOG.md).
