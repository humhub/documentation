---
id: release_notes_1_18
title: HumHub 1.18
---

## February 2026

### Bootstrap 5 

With HumHub 1.18, the most significant update is the migration of the entire UI framework from Bootstrap 3 to Bootstrap 5. This is a major step forward that brings improved accessibility, cleaner markup, better performance, and a more future-proof UI foundation. The migration also modernizes HumHub's styling system by moving from LESS to SCSS and introducing built-in theme customization directly within HumHub. Theme customisation settings are now available under Administration > Settings > Appearance, allowing administrators to customise theme styling without relying on a separate module.

:::caution
Due to structural changes in Bootstrap itself, this migration also introduces breaking changes on the CSS level. Some classes have been removed or renamed, and certain layout behaviors have changed, which means custom themes and LESS/CSS overrides may require adjustments. The legacy Theme Builder has been deprecated and is no longer maintained, as it is not compatible with the Bootstrap 5 architecture. We recommend that theme developers and administrators with custom styling review and test their themes before upgrading. To learn more, see the [Migration process](https://github.com/humhub/humhub/blob/develop/CHANGELOG-BS5.md).
:::

### Accessibility & UI

Building on the Bootstrap 5 migration, we are introducing several accessibility and usability improvements across the platform. One of the key features is automatic contrast handling, which dynamically calculates foreground text colors based on the background color in use. This ensures that UI components meet WCAG contrast requirements without manual adjustments. Auto-contrast has been applied across multiple interface elements, including buttons, form controls, checkboxes, select inputs, and email notifications, improving readability throughout the system.

In addition, HumHub now offers more flexibility in email customization. Administrators can upload a custom email header image or choose to use a text-based header instead. Custom fonts can also be applied to emails via the Appearance > Theme settings using the SCSS/CSS configuration, allowing better alignment with visual identity.

### Group Management

With this release, working with groups in HumHub also becomes  more flexible and structured. Parent Groups allow you to organize groups hierarchically and bundle members and content in a clear way. At the same time, permissions for group managers have been extended, enabling them to take on more responsibility without relying on admins. 

This improvement is especially important for organizations that use HumHub at scale or with complex structures. As communities grow, flat group setups quickly become hard to manage and confusing for members. Parent Groups make it possible to mirror real organizational structures and keep  members clearly organized. In addition, we have introduced the new virtual profile field Group memberships, which increases the visibility of groups and helps users quickly understand where someone is involved.

### Altcha

We have also added Altcha as a new default captcha provider in HumHub, as many users were dissatisfied with the previous captcha system. As an alternative to the Yii captcha, Altcha offers a modern, privacy friendly approach that works without tracking and provides a smoother experience for users.

### And much more..

- Enh #7645: Allow displaying a custom loading message
- Enh #7584: Mobile App: allow configuring whitelisted domains
- Enh #7831: Mercure push driver
- Enh #7828: Improved Installer Cron Page & Selftest
- Enh #7768: Improved Pretty URLs detection and guidance during installation

For a detailed list of all improvements take a look into the [Changelog](https://github.com/humhub/humhub/blob/develop/CHANGELOG.md).
