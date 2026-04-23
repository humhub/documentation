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

- [ ] **[Major]** `sidebars.js:106` — References `develop/module-settings` but actual file is `develop/modules-settings.md`. Page silently dropped from navigation.
- [ ] **[Major]** `sidebars.js:17–23` — Release Notes sidebar lists only 1.15–1.18. Files 1.5–1.14 exist and are linked from the index page but are unreachable via sidebar.
- [ ] **[Minor]** `sidebars.js:83` — Category label reads `Developement` → `Development`.
- [ ] **[Minor]** `sidebars.js` — The entire `adminuser` section (activities, email summaries, permissions, user management) has files on disk but is not registered in the sidebar.

---

### Accuracy & Timeliness

- [ ] **[Major]** `about/releasenotes/release_notes.md:24–25` — Links are swapped: "Release Notes 1.7" points to `release_notes_1_6.md` and "Release Notes 1.6" points to `release_notes_1_7.md`.
- [ ] **[Minor]** `about/releasenotes/release_notes.md:9` — Uses `https://docs.humhub.com/` but the canonical URL used everywhere else is `https://docs.humhub.org/`. Reconcile.
- [ ] **[Minor]** `develop/overview.md:27` — Links to FontAwesome v4.7.0 (2016). Verify current version shipped with HumHub and update.
- [ ] **[Minor]** `admin/installation.md:130`, `admin/reverse-proxy.md:28–29` — `@see` comments use old Docusaurus v1 URL format (e.g. `admin-installation-configuration.html`). These URLs 404.

---

### Completeness

- [ ] **[Major]** `admin/installation.md:191` — Live placeholder `YXZ` never replaced: `These can be viewed directly in Humhub under YXZ.`
- [ ] **[Major]** `adminuser/activities.md`, `adminuser/emailsummaries.md`, `develop/modules-migrate-yii1.md` — Completely empty files (0 bytes).
- [ ] **[Major]** `adminuser/permissions.md` (6 lines), `adminuser/user.md` (9 lines) — Frontmatter/heading only, no actual content.
- [ ] **[Minor]** `develop/embedded-themes.md` — Entire body is `>⚠️ Under construction.` Listed in sidebar under Advanced Topics.

---

### Typos & Errors

- [ ] **[Minor]** `develop/models.md:14` — `underscorce` → `underscore`; `fieldnames andattributes` → `field names and attributes`
- [ ] **[Minor]** `admin/server-setup.md:25` — `**Datebase:**` → `**Database:**`
- [ ] **[Minor]** `admin/installation.md:98` — `sice reply` → `since reply`
- [ ] **[Minor]** `theme/structure.md:31` — `Appeareance` → `Appearance`
- [ ] **[Minor]** `develop/environment.md:27` — `Fore more infos` → `For more information`
- [ ] **[Minor]** `develop/widgets.md:136` — `Fore more complex` → `For more complex`
- [ ] **[Minor]** `develop/modules-lifecycle.md:15` — `Developement Environment` → `Development Environment`
