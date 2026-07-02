---
id: installation-docker
title: Docker Installation
sidebar_label: Docker Installation
---

The official [HumHub Docker image](https://github.com/humhub/docker) is the **recommended way to run HumHub**. It bundles the complete stack - web server with automatic HTTPS, cron scheduler, queue workers and real-time push (Mercure) - so most of the manual configuration described in the server-based guides is already done for you.

:::tip
This page gives you a production-ready starting point. For the full set of Docker-specific options, see the **[HumHub Docker repository](https://github.com/humhub/docker)**.
:::

## Requirements

- **Docker >= 20.10.13** with **Compose v2** (use the `docker compose` command; older setups use `docker-compose`)
- A domain name pointing to the host if you want automatic HTTPS certificates

You do **not** need to install PHP, a web server or set up cron manually - all of this is part of the image.

## Quick start

Create a project directory and a `docker-compose.yml` file inside it:

```bash
mkdir -p /opt/humhub
cd /opt/humhub
```

A minimal, production-ready stack consists of the `humhub` service and a `db` (MariaDB) service:

```yaml
services:
  humhub:
    image: humhub/humhub:stable-nightly
    restart: unless-stopped
    ports:
      - "80:80"
      - "443:443"
      - "443:443/udp"  # HTTP/3 (optional)
    depends_on:
      db:
        condition: service_healthy
    volumes:
      - ./humhub-data:/data
    environment:
      - SERVER_NAME=https://humhub.example.com
      - HUMHUB_CONFIG__COMPONENTS__DB__DSN=mysql:host=db;dbname=humhub
      - HUMHUB_CONFIG__COMPONENTS__DB__USERNAME=root
      - HUMHUB_CONFIG__COMPONENTS__DB__PASSWORD=changeMe
  db:
    image: mariadb
    restart: unless-stopped
    command:
      - --character-set-server=utf8mb4
      - --collation-server=utf8mb4_unicode_ci
    volumes:
      - ./mysql-data:/var/lib/mysql
    environment:
      - MYSQL_ROOT_PASSWORD=changeMe
    expose:
      - "3306"
    healthcheck:
      test: ["CMD", "/usr/local/bin/healthcheck.sh", "--su-mysql", "--connect", "--innodb_initialized"]
      interval: 10s
      timeout: 5s
      retries: 5
```

:::caution
Before starting, **change every example value** - at least `SERVER_NAME`, `HUMHUB_CONFIG__COMPONENTS__DB__PASSWORD` and `MYSQL_ROOT_PASSWORD`. Never use the example passwords in production.
:::

Start the stack:

```bash
docker compose up -d
```

Open your `SERVER_NAME` URL in the browser - the HumHub installer guides you through the remaining setup, exactly as with a manual installation.

## What's already handled

The image runs these for you, so the corresponding manual guides are only relevant for server installations:

| Concern | In Docker |
|---|---|
| Web server & HTTPS | Built-in (FrankenPHP/Caddy, automatic certificates via `SERVER_NAME`) |
| [Cron jobs](cron-jobs.md) | Scheduler - `HUMHUB_DOCKER__AUTOSTART_SCHEDULER` (on by default) |
| [Queue / async tasks](asynchronous-tasks.md) | Worker - `HUMHUB_DOCKER__AUTOSTART_WORKER` (on by default) |
| Real-time push | Mercure - `HUMHUB_DOCKER__MERCURE_ENABLE` (on by default) |
| [Pretty URLs](installation.md#pretty-urls) | Enabled by default |

For larger installations you can run the scheduler and queue workers as separate, scalable services instead of inside the main container - see the [multi-service compose example](https://github.com/humhub/docker/blob/main/examples/compose-multi-services.yml).

## Configuration

Docker configuration is done through **environment variables**, not by editing config files. Every HumHub config option maps to a `HUMHUB_CONFIG__...` variable (nested keys separated by `__`, camelCase written in upper snake case). For example:

```yaml
environment:
  - HUMHUB_CONFIG__COMPONENTS__DB__DSN=mysql:host=db;dbname=humhub
  - HUMHUB_CONFIG__NAME=My Network
```

This is the same mechanism described in [Environment / .env configuration](dot-env.md) and [Advanced Configuration](advanced-configuration.md) - Docker just supplies the variables through Compose.

## Data & volumes

All persistent data lives under the `/data` volume mounted into the container. The relevant sub-directories are:

| Path | Content |
|---|---|
| `/data/config` | Instance configuration (equivalent to `protected/config`) |
| `/data/uploads` | Uploaded files |
| `/data/modules` | Marketplace modules (installed automatically) |
| `/data/modules-custom` | Your own / custom modules |
| `/data/themes` | Custom themes |
| `/data/logs` | Log files |

Keep the `/data` volume (and your database) in your backup - see [Backup](backup.md).

## Next steps

- [Backup & Restore](backup.md) - Docker backup service
- [Updating HumHub](updating.md) - upgrading the image
- [Command Line Interface](console.md) - running `yii` in the container
- [Modules & Marketplace](modules.md) - custom modules in Docker
- [Migrate to Docker](migrate-to-docker.md) - move an existing server installation

For all Docker-specific details, environment variables and advanced compose setups, refer to the **[HumHub Docker repository](https://github.com/humhub/docker)**.
