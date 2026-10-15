---
id: migrate-to-docker
title: Migrate to Docker
sidebar_label: Migrate to Docker
---

This page describes how to move an existing **manual / server installation** to the [Docker setup](installation-docker.md). The authoritative, step by step guide lives in the [HumHub Docker repository](https://github.com/humhub/docker/blob/main/docs/migrate-to-docker.md).

## Principle

A migration is a regular Docker restore. The only difference is where the data comes from: instead of a Docker backup archive, the database and the files are taken directly from your existing installation. The HumHub version itself is not upgraded by hand, the container applies pending database migrations on start.

## Process

1. **Create a full [backup](backup.md)** of your existing installation and keep that installation untouched until the new stack is verified.
2. **Set up a fresh Docker stack** as described in [Docker Installation](installation-docker.md) and start it once, so the data volume is initialized.
3. **Import your database dump** into a new, empty database of the Docker stack, see [Database](https://github.com/humhub/docker/blob/main/docs/migrate-to-docker.md#database) in the migration guide.
4. **Copy your persistent data** into the data volume, see [Configuration](https://github.com/humhub/docker/blob/main/docs/migrate-to-docker.md#configuration) and [Files, themes and modules](https://github.com/humhub/docker/blob/main/docs/migrate-to-docker.md#files-themes-and-modules):

   | Data | Source (existing installation) | Target (data volume) |
   |---|---|---|
   | Configuration | `protected/config/` | `/data/config/` |
   | Uploaded files | `uploads/` | `/data/uploads/` |
   | Custom themes | `themes/<YourTheme>/` | `/data/themes/<YourTheme>/` |
   | Custom modules | `protected/modules/<YourModule>/` | `/data/modules-custom/<YourModule>/` |

5. **Start the stack** and verify that login works, uploaded files are accessible and your configuration is in place, see [Finish](https://github.com/humhub/docker/blob/main/docs/migrate-to-docker.md#finish).

## Hints

- **Image version:** Use an image version equal to or newer than the HumHub version of your existing installation. Database migrations are applied automatically on container start, a downgrade is not possible.
- **Never reuse the live database:** Always import into a new, empty database, also when you keep using the database server of your existing installation. The database is migrated to the image version on container start and can become unusable for the old installation.
- **Environment beats configuration files:** The `HUMHUB_CONFIG__...` variables are applied after the configuration files, so the database settings carried over from your old installation (usually in `dynamic.php`) do not take effect. Review your configuration and remove settings the image already covers, such as pretty URLs or paths of your old installation.
- **What you do not need to copy:** Marketplace modules are installed in their latest compatible version on container start, the default theme ships with the image, and ownership and permissions of the data volume are adjusted automatically.

For the exact commands, path handling and edge cases, follow the [full migration guide](https://github.com/humhub/docker/blob/main/docs/migrate-to-docker.md).
