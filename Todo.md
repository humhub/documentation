# Todo

## Legacy Todos (pre-review)

- Refactor file names
- Rework/Restructure guides
- Change notes to Admonitions
- Review
- Check all links

### Missing Parts
- Apache/nginx specific install e.g. .htaccess
- Server Mailing / Setup (more infos)
- Backup.md not in use? Perhaps Backup and Server move guide
- Changelog in root dir + align path e.g. update.md
- Rework Configuration Guide, either more sub configuration or statistics/tracing as own
- Config -> Params advanced-configuration -> add all params

---

## Review Report (2026-04-22)

### Abstract

The documentation site is built on Docusaurus 3.9 and covers five major areas: About/Release Notes, Administration, Development, Theming, and the Professional Edition. The overall structure is logical and the configuration is sound. However, the review surfaced several issues that reduce trustworthiness and usability: two swapped navigation links (Release Notes 1.6/1.7), a live placeholder (`YXZ`) in the installation guide, a broken sidebar reference that silently drops a page from navigation, seven confirmed typos, multiple empty or skeleton files, and a gap where release notes 1.5–1.14 are omitted from the sidebar while still reachable via the index page.

---

### Structure & Navigation

| # | Status | Severity | Finding |
|---|--------|----------|---------|
| S-1 | [x]    | Minor | `develop/modules-settings.md` — Filename `modules-settings` does not match frontmatter `id: module-settings`. Sidebar correctly uses the id; rename file to `module-settings.md` or align the id to `modules-settings`. |
| S-2 | [ ]    | **Major** | `sidebars.js:17–23` — Release Notes sidebar lists only 1.15–1.18. Files 1.5–1.14 exist and are linked from the index page but are unreachable via sidebar. |
| S-3 | [x]    | Minor | `sidebars.js:83` — Category label reads `Developement` → `Development`. |
| S-4 | [ ]    | Minor | `sidebars.js` — The entire `adminuser` section (activities, email summaries, permissions, user management) has files on disk but is not registered in the sidebar. |
| S-5 | [ ]    | Minor | `professional-edition/intro.md` — Filename `intro` does not match frontmatter `id: pe-intro`. Sidebar correctly uses the id; rename file to `pe-intro.md` or align the id to `intro`. |
| S-6 | [ ]    | Minor | `adminuser/user.md` — Filename `user` does not match frontmatter `id: adminusers`. Docusaurus doc ID resolves to `adminuser/adminusers`; any sidebar reference to `adminuser/user` would silently fail. Rename file to `adminusers.md` or change id to `user`. |

Files with no `id` in frontmatter (Docusaurus auto-derives id from filename — technically fine, but inconsistent with the rest of the docs):
`admin/push-updates.md`, `admin/README.md`, `admin/uploads.md`, `adminuser/activities.md`, `adminuser/emailsummaries.md`, `develop/javascript-modals.md`, `develop/javascript-stream.md`, `develop/modules-content.md`, `develop/modules-db.md`, `develop/modules-events.md`, `develop/modules-git.md`, `develop/modules-i18n.md`, `develop/modules-lifecycle.md`, `develop/modules-migrate-0.20.md`, `develop/modules-migrate-yii1.md`, `develop/modules-structure.md`, `develop/pull-requests.md`, `user/emoji-cheatsheet.md`, `user/md-cheatsheet.md`, `user/user-management.md`

---

### Accuracy & Timeliness

| # | Status | Severity | Finding |
|---|--------|----------|---------|
| A-1 | [x]    | **Major** | `about/releasenotes/release_notes.md:24–25` — Links are swapped: "Release Notes 1.7" points to `release_notes_1_6.md` and "Release Notes 1.6" points to `release_notes_1_7.md`. |
| A-2 | [x]    | Minor | `about/releasenotes/release_notes.md:9` — Uses `https://docs.humhub.com/` but the canonical URL used everywhere else is `https://docs.humhub.org/`. Reconcile. |
| A-3 | [ ]    | Minor | `develop/overview.md:27` — Links to FontAwesome v4.7.0 (2016). Verify current version shipped with HumHub and update. |
| A-4 | [x]    | Minor | `admin/installation.md:130`, `admin/reverse-proxy.md:28–29` — `@see` comments use old Docusaurus v1 URL format (e.g. `admin-installation-configuration.html`). These URLs 404. |

---

### Completeness

| # | Status | Severity | Finding |
|---|--------|----------|---------|
| C-1 | [x]    | **Major** | `admin/installation.md:191` — Live placeholder `YXZ` never replaced: `These can be viewed directly in Humhub under YXZ.` |
| C-2 | [ ]    | **Major** | `adminuser/activities.md`, `adminuser/emailsummaries.md`, `develop/modules-migrate-yii1.md` — Completely empty files (0 bytes). |
| C-3 | [ ]    | **Major** | `adminuser/permissions.md` (6 lines), `adminuser/user.md` (9 lines) — Frontmatter/heading only, no actual content. |
| C-4 | [ ]    | Minor | `develop/embedded-themes.md` — Entire body is `>⚠️ Under construction.` Listed in sidebar under Advanced Topics. |

---

### Orphaned & Unreachable Files

Files that are neither listed in the sidebar nor linked via a valid relative `.md` link from any other doc — they are invisible to readers of the built site.

**develop/ orphans:**

| # | Status | Severity | Finding |
|---|--------|----------|---------|
| O-1 | [ ] | **Major** | `develop/modules-lifecycle.md` — Not in sidebar, no cross-links. |
| O-2 | [ ] | **Major** | `develop/modules-content.md` — Not in sidebar, no cross-links. |
| O-3 | [ ] | **Major** | `develop/modules-db.md` — Not in sidebar, no cross-links. |
| O-4 | [ ] | **Major** | `develop/modules-events.md` — Not in sidebar, no cross-links. |
| O-5 | [ ] | **Major** | `develop/modules-i18n.md` — Not in sidebar, no cross-links. |
| O-6 | [ ] | **Major** | `develop/modules-marketplace.md` — Not in sidebar, no cross-links. |
| O-7 | [ ] | **Major** | `develop/modules-structure.md` — Not in sidebar, no cross-links. |
| O-8 | [ ] | **Major** | `develop/javascript-modals.md` — Not in sidebar, no cross-links. |
| O-9 | [ ] | **Major** | `develop/modules-migrate-yii1.md` — Not in sidebar, no cross-links, and empty (0 bytes). |

**adminuser/ orphans** (entire section absent from sidebar per S-4; all files also have no valid cross-links from outside the section):

| # | Status | Severity | Finding |
|---|--------|----------|---------|
| O-10 | [ ] | **Major** | `adminuser/modules.md` — Not in sidebar, no cross-links. (Apparent links in `develop/` files resolve to `develop/modules.md`.) |
| O-11 | [ ] | **Major** | `adminuser/notifications.md` — Not in sidebar, no cross-links. (Apparent links resolve to `develop/notifications.md`.) |
| O-12 | [ ] | **Major** | `adminuser/permissions.md` — Not in sidebar, no cross-links. (Apparent links resolve to `develop/permissions.md`.) |
| O-13 | [ ] | **Major** | `adminuser/activities.md` — Not in sidebar, no cross-links, and empty (0 bytes). (Apparent links resolve to `develop/activities.md`.) |
| O-14 | [ ] | **Major** | `adminuser/spaces.md` — Not in sidebar, no cross-links. |
| O-15 | [ ] | **Major** | `adminuser/user.md` — Not in sidebar; only linked from `user/spaces.md` (itself orphaned, see O-19). |

**admin/ orphans:**

| # | Status | Severity | Finding |
|---|--------|----------|---------|
| O-16 | [ ] | Minor | `admin/images.md` — Not in sidebar, no cross-links. (All hits are image-asset folder references, not doc links.) |
| O-17 | [ ] | Minor | `admin/README.md` — Not in sidebar, no cross-links. (Only hit in `theme/module.md` is an external GitHub URL, not a local link.) |

**user/ orphans:**

| # | Status | Severity | Finding |
|---|--------|----------|---------|
| O-18 | [ ] | Minor | `user/emoji-cheatsheet.md` — Not in sidebar, no cross-links. Entire `user/` section is absent from sidebar. |
| O-19 | [ ] | Minor | `user/spaces.md` — Not in sidebar, no cross-links. |
| O-20 | [ ] | Minor | `user/user-management.md` — Not in sidebar, no cross-links. |
| O-21 | [ ] | Minor | `user/md-cheatsheet.md` — Not in sidebar, no cross-links. |

**docs/ root orphans:**

| # | Status | Severity | Finding |
|---|--------|----------|---------|
| O-22 | [ ] | Minor | `doc1.md`, `doc2.md`, `doc3.md`, `mdx.md` — Docusaurus boilerplate demo files at the root of `docs/`. Should be deleted. |

---

Files not in the sidebar but reachable via a valid relative `.md` cross-link from a page that IS in the sidebar:

| # | Status | Severity | Finding |
|---|--------|----------|---------|
| O-23 | [ ] | Minor | `develop/javascript-stream.md` — Not in sidebar; linked from `develop/modules-migrate.md` (sidebar). |
| O-24 | [ ] | Minor | `develop/module-change-behavior.md` — Not in sidebar; linked from `develop/modules.md` (sidebar). |
| O-25 | [ ] | Minor | `develop/modules-migrate-0.20.md` — Not in sidebar; linked from `develop/modules-migrate.md` (sidebar). |
| O-26 | [ ] | Minor | `admin/push-updates.md` — Not in sidebar; referenced from `develop/live.md` via absolute external URL `https://docs.humhub.org/docs/admin/push-updates/` (not a relative `.md` link). |

---

### Link Quality

**Self-referential absolute URLs** — links pointing to `docs.humhub.org` from within the docs should be relative `.md` links so they work locally and stay correct across deployments. *(Note: the old v1-format URLs at `admin/installation.md:130–131` and `admin/reverse-proxy.md:28–29` are already tracked as A-4; the wrong `docs.humhub.com` domain in `release_notes.md:9` is tracked as A-2.)*

| # | Status | Severity | File:Line | Absolute URL | Suggested Relative Path |
|---|--------|----------|-----------|-------------|------------------------|
| L-1 | [x] | Minor | `develop/live.md:14` | `https://docs.humhub.org/docs/admin/push-updates/` | `../admin/push-updates.md` |
| L-2 | [x] | Minor | `professional-edition/saas.md:21` | `https://docs.humhub.org/docs/about/releasenotes/release_notes` | `../about/releasenotes/release_notes.md` |
| L-3 | [x] | Minor | `develop/content.md:175` | `https://docs.humhub.org/docs/admin/config-options#admin` | `../admin/config-options.md#admin` |
| L-4 | [x] | Minor | `about/releasenotes/release_notes_1_5.md:66` | `https://docs.humhub.org/docs/admin/performance#http-caching` | `../../admin/performance.md#http-caching` |
| L-5 | [x] | Minor | `admin/modules.md:26` | `https://docs.humhub.org/docs/develop/environment#module-loader-path` | `../develop/environment.md#module-loader-path` |
| L-6 | [x] | Minor | `admin/modules.md:28` | `https://docs.humhub.org/docs/develop/environment/#module-loader-path` | `../develop/environment.md#module-loader-path` |
| L-7 | [x] | Minor | `admin/updating-migration.md:103` | `https://docs.humhub.org/docs/admin/performance#http-caching` | `performance.md#http-caching` |

**Non-TLS `http://` links** — should be `https://` where the target domain supports it:

| # | Status | Severity | Finding |
|---|--------|----------|---------|
| L-8 | [ ] | Minor | `http://www.yiiframework.com` — 29 occurrences across 17 files (`admin/logging.md`, `develop/authentication.md`, `develop/build.md`, `develop/environment.md`, `develop/events.md`, `develop/files.md`, `develop/i18n.md`, `develop/javascript-index.md`, `develop/models.md`, `develop/modules-db.md`, `develop/modules-events.md`, `develop/modules-i18n.md`, `develop/modules-migrate-0.20.md`, `develop/modules-structure.md`, `develop/modules.md`, `develop/overview.md`, `develop/widgets.md`). Replace with `https://www.yiiframework.com`. |
| L-9 | [ ] | Minor | `http://codeception.com` — 3 occurrences in `develop/testing.md:22,26,31`. Replace with `https://codeception.com`. |
| L-10 | [ ] | Minor | `http://community.humhub.com` — `admin/troubleshooting.md:81`. Replace with `https://community.humhub.com`. |
| L-11 | [ ] | Minor | `http://php.net` — `admin/cron-jobs.md:65`. Replace with `https://www.php.net`. |
| L-12 | [ ] | Minor | `http://supervisord.org` — `admin/cron-jobs.md:32`. Replace with `https://supervisord.org`. |
| L-13 | [ ] | Minor | `http://chromedriver.chromium.org` — `develop/testing.md:256`. Replace with `https://chromedriver.chromium.org`. |
| L-14 | [ ] | Minor | `http://pjax.herokuapp.com` — 2 occurrences in `develop/javascript-client.md:126,128`. Verify whether HTTPS is available; if not, consider linking to the GitHub repository instead. |
| L-15 | [ ] | Minor | Various `http://` links in `admin/performance.md:132–136` (`tn123.org`, `redmine.lighttpd.net`, `wiki.nginx.org`, `www.cherokee-project.com`). Verify HTTPS availability and update. |

---

### Enhancements

| # | Status | Severity | Finding |
|---|--------|----------|---------|
| X-1 | [ ] | Minor | Add `rehype-external-links` plugin to visually mark external links. Install via `npm install rehype-external-links`, then configure in `docusaurus.config.js` under `presets[0][1].docs.rehypePlugins`. Use a CSS class (`properties: { className: ['external-link'] }`) and style with an `::after` pseudo-element in `custom.css` for a clean, swap-friendly icon. |

---

### Typos & Errors

| # | Status | Severity | Finding |
|---|--------|----------|---------|
| E-1 | [x] | Minor | `develop/models.md:14` — `underscorce` → `underscore`; `fieldnames andattributes` → `field names and attributes` |
| E-2 | [x] | Minor | `admin/server-setup.md:25` — `**Datebase:**` → `**Database:**` |
| E-3 | [x] | Minor | `admin/installation.md:98` — `sice reply` → `since reply` |
| E-4 | [x] | Minor | `theme/structure.md:31` — `Appeareance` → `Appearance` |
| E-5 | [x] | Minor | `develop/environment.md:27` — `Fore more infos` → `For more information` |
| E-6 | [x] | Minor | `develop/widgets.md:136` — `Fore more complex` → `For more complex` |
| E-7 | [x] | Minor | `develop/modules-lifecycle.md:15` — `Developement Environment` → `Development Environment` |
