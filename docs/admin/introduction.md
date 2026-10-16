---
id: introduction
title: Getting Started
---

Welcome to the HumHub Administration Guide. This guide describes the installation, configuration and maintenance of HumHub.

There are three ways to get a HumHub instance up and running. Pick the one that fits your use case:

## 1. Docker (recommended)

The official Docker image is the **preferred way to run HumHub**. It ships the complete stack (web server with automatic HTTPS, cron scheduler, queue workers and real-time push) preconfigured and production-ready. Upgrades are a simple image change.

Use this if you want a fast, reproducible setup with the least manual configuration.

- [Docker Installation](installation-docker.md)

## 2. Web Server

The classic installation of the packaged release on your own web server (Apache or nginx + PHP + MariaDB/MySQL). This gives you full control over every part of the stack and is the right choice when you must integrate into an existing server environment or have specific hosting constraints.

Start here:

- [System Requirements](requirements.md)
- [Server Setup](server-setup.md)
- [Web Server Installation](installation.md)

:::tip
Already running HumHub on your own web server and want to move to Docker? See [Migrate to Docker](migrate-to-docker.md).
:::

## 3. Try it hosted (Demo & SaaS)

If you don't want to operate the software yourself, or just want to evaluate HumHub, use the hosted option. No installation, backups or maintenance on your side.

- [Create a free demo / SaaS instance](https://saas.humhub.com/en/create)
- See the [SaaS option](../professional-edition/saas.md) of the Professional Edition for details.

## Docker or Web Server?

Both self-hosted options run the same HumHub, but the commands you use and the places your files live differ. Wherever this guide has to describe both, it labels them **Docker** and **Web Server**, either as a section heading or as tabs above the examples. Pick the one that matches your installation.
