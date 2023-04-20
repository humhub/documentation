---
id: release_notes_1_14
title: HumHub 1.14
---

## Release March 2023


### Content Drafts and Scheduling

One of the main enhancements of this new version includes the addition of two new features that are designed to improve workflow and enhance user experience. The draft mode enables users to save their work in progress and resume at a later time, facilitating the management of multiple Spaces concurrently. Furthermore, the scheduled posts feature allows for the planning and scheduling of content in advance, enabling greater control over content distribution.

### Hide Content in Stream

With this release, we are also laying the groundwork for better, more targeted structuring of the streams. For this purpose, we have implemented the prerequisites for hidden content. Building upon this, we will be releasing an extension to the software that will allow admins to define what content is really meant to be seen within an individual stream and content is meant to be only visible within the relevant module views. 

### "Recycle Bin" (Professional Edition)

Another feature for which we have laid the necessary groundwork with this release is the upcoming “Recycle Bin” module. The module will provide administrators with a way to recover deleted posts and module content, helping to prevent accidental data loss and providing a safety net for users. The module will be particularly useful for organizations and communities that rely heavily on user-generated content, as it provides a way to recover valuable contributions that may have been accidentally or maliciously deleted. Besides the release of the basic functionality, there will also be an extended version for users of the HumHub Professional Edition.

#### And much more..

Of course, we have also included many other improvements, just to name a few:


- Dynamic font size for posts based on text length is now optional
- Allow users to invite other users by link
- Changing the visibility of a space to private will also change the visibility of all its content to private
- Self-test was extended (Pretty URL, `proc_open` were added) 
- PHP 8.2 is now supported as the maximum PHP version
- "Content Tabs" above the post form are now always visible


For a detailed list of all improvements take a look into the [Changelog](https://github.com/humhub/humhub/blob/develop/CHANGELOG.md).
