---
id: release_notes_1_7
title: HumHub 1.7
---

## HumHub 1.7 (Currently Beta)

#### Stream Enhancements

Streams are an integral part of HumHub. They represent the main form in which content is delivered and they are a core element of other components of the software like the Dashboard, Spaces and user profiles. In order to do justice to the importance of such a core element we will fundamentally rework the Stream design and connected components starting with this version. As a basis for this process, we are moving away from the principle of an uniform post design with an emphasis on the content creator.
Instead, this version introduces the distinction between content-focused and user-focused contributions. For contributions where the type of content and the content itself should be in the foreground (e.g. wikis, calendar entries or surveys), the content, respectively the typeof content will be emphasized in form of icons, headlines, highlighting and design in general. For this purpose we are introducing a completely new wall entry layout. The creator will move into the background, the information itself will be emphasized. With this step hope to improve the visibility and exchange of relevant information substantially. This does not mean, however, that we have neglected user-centric contributions. These have also been fundamentally revised in terms of structure and presentation. But see for yourself: 

![](https://github.com/humhub/documentation/blob/master/docs/about/releasenotes/images/1_7/Layout1.PNG)

In addition to these conceptual changes, we have also added many others to optimize the presentation, like: 

- Posts with one line are now emphasized
- Improved comment section layout
- New grid view for files 
- Icons instead of badges (public, private etc.) 
-	New mouse-over texts
- New 'Topics' badge design

![](https://github.com/humhub/documentation/blob/master/docs/about/releasenotes/images/1_7/Layout2.PNG)

#### 'About' Pages for Spaces

In previous versions, users often used pinned posts to communicate the purpose of a Space to new members. This was especially the case when the Enterprise Theme was in use, as it does not provide an option to add a Space description. To make the process more practical, we will be introducing 'About' pages for Spaces with this version. Every Space will have a dedicated information page going forward, enabling administrators to share basic information and users to learn about the Space, its settings and and their own role within the Space. Besides the description, which can be created using a WYSIWIG editor, the 'About'´page will also provide information about the key users like administrators and moderators as well as give an overview about the security settings of the Space.  From the user's point of view, another widget will be part of the concept. In the "About your membership" section it will inform users about their own role in the Space. If desired, the new 'About' page can also be defined as the homepage of the Space. 

![](https://github.com/humhub/documentation/blob/master/docs/about/releasenotes/images/1_7/About1.PNG)

#### Image compression

In order to maintain the performance of the stream and to keep the software's memory requirements low in general, we are also introducing options for image compression and downscaling. With this step we want to prevent high-resolution images taken with a mobile phone, for example, from slowing down the network. Likewise, we also intend to maintain a pleasant experience for users of larger networks.  

#### Accessibility

Adapting to accessibility standards such as the WCAG is a constant process, which is also very important for us. With this update we are introducing further improvements regarding this subjects like an improved default theme coloring, new info texts and a new theme variable ('@link') for link coloring.

#### Stream API

The new and enhances stream API introduced with HumHub 1.7 also eases the development of custom content types and custom streams.

### New MemberSince and LastLogin profile fields

There are two new profile fields available which can be added to your user profiles. A member since and last login field.

### Other features at a glance

- New command line tools for console `User` and `File` management
- New optional [image downscaling](../../admin/uploads.md#compression--downscaling) for user uploads
