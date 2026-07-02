---
id: migrate-to-docker
title: Migrate to Docker
sidebar_label: Migrate to Docker
---

This page outlines how to move an existing **manual / server installation** to the [Docker setup](installation-docker.md). It is an overview - the authoritative, step-by-step guide lives in the [HumHub Docker repository](https://github.com/humhub/docker/blob/main/docs/migrate-to-docker.md).

:::note
Always create a full [backup](backup.md) of your current installation before migrating.
:::

## Overview

1. **Set up a fresh Docker stack** as described in [Docker Installation](installation-docker.md) and start it once so all volumes are initialized.
2. **Export your current database**, e.g.:
   ```bash
   mysqldump -u humhub_prod -p humhub_prod_db > export.sql
   ```
3. **Import the dump** into the Docker database, then stop the stack. The example below matches the `db` service from the [Docker Installation](installation-docker.md) example (root user, database `humhub`):
   ```bash
   cd /opt/humhub
   docker compose up -d db
   # wait until the database is fully up, then import
   cat export.sql | docker compose exec -T db sh -c 'mariadb -u root -p"$MYSQL_ROOT_PASSWORD" humhub'
   docker compose down
   ```
   Adjust the user, password variable and database name to match your own `compose.yml`.
4. **Copy your persistent data** into the `/data` volume:
   - `uploads/` to `humhub-data/uploads`
   - custom themes to `humhub-data/themes/<YourTheme>`
   - custom modules to `humhub-data/modules-custom/<YourModule>`
   - individual config to `humhub-data/config`
5. **Start the stack** with `docker compose up -d`.

## What you do *not* need to copy

- **Marketplace modules** - the latest compatible version is installed automatically on container start.
- **Pretty URL configuration** - already enabled in the image.

For the exact commands, path handling and edge cases, follow the [full migration guide](https://github.com/humhub/docker/blob/main/docs/migrate-to-docker.md).
