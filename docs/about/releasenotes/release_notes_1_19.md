Draft for the 1.19 release notes in the documentation repo (`docs/about/releasenotes/release_notes_1_19.md`), following the style of the [1.18 release notes](https://github.com/humhub/documentation/blob/master/docs/about/releasenotes/release_notes_1_18.md). Written for non-technical readers: the big topics as text blocks, smaller items as a list. Based on the current state of the `develop` changelog — to be updated as the release approaches.

---

## TBD

### New Sign-In & Sign-Up Experience

HumHub 1.19 introduces a reworked sign-in and sign-up flow. Signing in now starts with a single identity step: users first enter their email address or username, and HumHub then guides them to the right next step — the password entry for local accounts, or directly to the connected login provider (e.g. your company single sign-on). When a user is forwarded to an external provider, the identity they already typed is passed along, so the provider's login page is pre-filled. Invitation links have also become smarter: if local registration is disabled, invited users are sent straight to the external sign-in provider instead of a registration form they cannot use.

### A New Foundation for External User Management

Many HumHub installations manage their users in external systems — an LDAP directory, a single sign-on provider, or an HR system. With 1.19, HumHub introduces the new **UserSource** architecture, which cleanly separates two questions that used to be mixed together: *how does a user sign in* and *which system owns and manages the user account*. Every user now belongs to exactly one source (for example "local" or "LDAP"), and that source controls the account's lifecycle: which login methods it accepts, which profile attributes are synchronized and locked against manual editing, and what happens when the user disappears from the external system.

For administrators this means external accounts behave far more predictably — no more surprises about which system "wins" when profile data is updated. It also allows standard OAuth2 or SAML clients to be connected without custom HumHub adaptations, and it lays the groundwork for upcoming provisioning standards such as SCIM, where user accounts are created and managed entirely by an external identity system.

### Files in the Cloud (S3 & Remote Storage)

Uploaded files, profile images, logos and other assets no longer have to be stored on the local server. With 1.19, HumHub's storage layer has been rebuilt so that both the data and the asset directories can be mounted to remote storage such as Amazon S3 or any S3-compatible object storage. This makes HumHub much easier to operate in cloud and container environments and is an important building block for scalable, multi-server setups. The whole platform has been adapted for this: image processing, file downloads, profile images and module assets all work against remote storage, with caching in place so that remote mounts do not slow down page rendering.

### Improved Commenting

Comments received a series of usability improvements as a first step towards the upcoming redesigned comment experience. The comment counter of a post now includes replies, so it reflects the real size of a discussion. Loading older or newer comments has become more predictable: the "Show previous/next comments" links display the actual number of remaining comments and count down while you read on, and opening a comment permalink keeps the view focused around the linked comment. The comment form itself is tidier — the upload and submit buttons only appear once you start writing — and commenting on mobile devices has been polished as well: on iOS, the on-screen keyboard no longer hides the field you are typing in.

### Post Titles

Posts can now have a title. Administrators decide in the Design settings whether post titles are disabled, optional or required. Titles are shown as a heading above the post content and give streams more structure — especially in communities where posts are used for announcements or longer contributions, readers can scan the stream much faster.

### Community Modules in the Marketplace

The module marketplace can now include modules contributed by the community. Administrators can opt in via the new "Include community modules" option and get access to a wider range of modules beyond the officially maintained ones.

### Under the Hood

Version 1.19 also modernizes several core foundations. Comments, likes and activities are now stored with proper database relations, which improves data integrity and performance and simplifies future development. A new "user gate" system gives modules a clean, unified way to route users through mandatory steps such as a two-factor authentication check or accepting the terms of use.

:::caution
The 1.19 upgrade restructures how activities are stored in the database. The migration rewrites the entire activity table, cannot be reverted, and permanently removes old activity entries that can no longer be matched to existing content. Please take a database backup before upgrading and plan a maintenance window for installations with a large activity table.
:::

### And much more..

- Enh #8089: Modernized LDAP integration, now built on the actively maintained LdapRecord library
- Enh #7933: Faster activity processing (streams, e-mail summaries) through the restructured activity storage
- Enh #8190: New guest mode options — the comment section can be hidden for guests, and posts can be shown fully expanded to guests
- Enh #8261: Single sign-on login pages now open in the mobile app's in-app browser
- Enh #8223: New default idle timeout — users are automatically signed out after 4 hours of inactivity
- Enh #5141: New CLI command for deleting disabled or soft-deleted users
- Enh #8150: New topic sidebar widget
- Accessibility improvements

For a detailed list of all improvements take a look into the [Changelog](https://github.com/humhub/humhub/blob/develop/CHANGELOG.md).
