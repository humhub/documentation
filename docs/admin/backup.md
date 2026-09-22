---
id: backup
title: Backup HumHub
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Whether you are upgrading your installation of HumHub using the updater module or manually, you must make sure you have your own set of backup data - one you can rely on and get back to on your own terms.

A complete backup always consists of two parts:

- the **database**
- the **file storage** (uploads, configuration, custom modules and themes)

<Tabs groupId="install-method">
<TabItem value="docker" label="Docker" default>

The [Docker image](installation-docker.md) includes a built-in backup functionality. It is recommended to add it as a separate service in your `compose.yml` and run it on demand or via cron on the host:

```yaml
backup:
  extends:
    service: humhub
  profiles: ["manual"]
  restart: "no"
  command: /app/bin/humhub-backup.sh
  user: root
  volumes:
    - ./humhub-backup:/backup
  environment:
    - HUMHUB_DOCKER__BACKUP_MERGE_ARCHIVES=true
```

:::note
The service uses `extends` to inherit image, environment (including the database credentials) and volumes from your `humhub` service, so both always stay in sync. You only add the backup volume and the backup-specific settings on top.
:::

Run a backup manually:

```bash
docker compose run --rm backup
```

This produces a single `humhub_backup_<TIMESTAMP>.tar` archive in the `humhub-backup` volume, containing the database dump and the storage archive. Set `HUMHUB_DOCKER__BACKUP_MERGE_ARCHIVES` to `false` to keep both parts as separate files and reduce the temporary space needed on the backup volume.

:::note
Store the backup volume **outside** the data volume (ideally on a separate partition or remote storage). Rotating and cleaning up old backups is your responsibility.
:::

For scheduled backups, the restore procedure and all options, see the [Docker Backup & Restore guide](https://github.com/humhub/docker/blob/main/docs/backup-restore.md).

</TabItem>
<TabItem value="manual" label="Manual (Server)">

## Create a Backup of HumHub Data

* Create a full backup of the HumHub database
* Backup instance files
  - `/protected/config`
  - `/protected/modules`
  - `/uploads`
  - `/themes/yourtheme` (if you're running an own theme)

## Restore HumHub from Backup Data

* Restore and import backup database
* Restore instance files
  - `/protected/config`
  - `/protected/modules`
  - `/uploads`
  - `/themes/yourtheme` (if you're running an own theme)
* Rebuild the search index, see [Search chapter](search.md)

:::note
When uploading your files to `/uploads` by ftp make sure to use `binary` transfer mode.
:::

Example: Backup on Linux
------------------------

The following examples show one possible way to create backups on a Linux server.
Adjust database name, user and paths to your own environment.

### Database Dump

```bash
mariadb-dump -h <DB_HOST> -u <DB_USER> -p \
    --default-character-set=utf8mb4 \
    --single-transaction \
    --skip-extended-insert \
    <DB_NAME> \
    | gzip -9 > <BACKUP_DIR>/humhub_database_`date +'%Y%m%d%H%M%S'`.sql.gz
```

On MySQL servers the same command can be used with `mysqldump` instead of `mariadb-dump`. All
options above are supported by both clients.

### Instance Files

```bash
cd <HUMHUB_ROOT>/..
sudo tar czf <BACKUP_DIR>/humhub_files_`date +'%Y%m%d%H%M%S'`.tar.gz \
    humhub/protected/config/ \
    humhub/protected/modules/ \
    humhub/uploads/ \
    humhub/themes/
```

:::note
Store your backups outside of the web root and outside of the `/uploads` folder, so they are not publicly accessible, and not backuped recursively by the next run.
:::

</TabItem>
</Tabs>
