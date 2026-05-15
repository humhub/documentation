---
id: overview
title: Development
displayed_sidebar: null
hide_table_of_contents: true
pagination_prev: null
pagination_next: null
---

HumHub is built to be extended. There are three main ways to plug in:

## REST API

For integrating HumHub with external systems — single sign-on flows, dashboards, automation, mobile apps — use the REST module. It exposes users, spaces, content, files, notifications and more over HTTP.

- **[REST API documentation](https://marketplace.humhub.com/module/rest/manual)**
- **[REST module on GitHub](https://github.com/humhub/humhub-modules-rest)**

## Custom modules

Most extension happens through **modules** — self-contained packages that add features, content types, integrations or background jobs. A module can:

- ship its own controllers, models, views and migrations
- hook into core events (after a user is created, before content is saved, when a stream is rendered, …)
- add menu entries, sidebar snippets, dashboard widgets and notifications
- define its own permissions and settings
- be installed per space, per user, or globally

The developer documentation, including module structure, core APIs and platform concepts, lives in the core repository:

→ **[Developer documentation on GitHub](https://github.com/humhub/humhub/tree/develop/docs/develop)**

Start with [Module Development](https://github.com/humhub/humhub/blob/develop/docs/develop/module-development.md).

## Theming

The look and feel can be adjusted directly in *Administration → Settings → Appearance* — logo, colours, login background, custom SCSS. A dedicated theme module is only needed when you want to override view templates or ship a coordinated style as a package.

→ **[Theming overview](https://github.com/humhub/humhub/blob/develop/docs/develop/theme-overview.md)**

## Community

Questions, ideas, or showcases of what you built — the [HumHub Community](https://community.humhub.com/) is the place. For bug reports and pull requests, use the [core repository](https://github.com/humhub/humhub).
