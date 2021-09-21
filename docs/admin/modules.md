---
id: modules
title: Modules & Marketplace
---


## Module Installation

Modules can be easily installed and updated via the integrated Marketplace.

`Administration` -> `Modules` -> `Browse Online`

Own custom modules or modules that are not available in the official Marketplace can also be unpacked directly into the `protected/modules` folder. 
In this case, however, the database migrations at the page `Administration` -> `Information` -> `Database` page must also be performed. 


## Purchased Modules


Purchased modules can be activated via the `Administration` -> `Modules` -> `Purchase` page.

They are then available for installation in the `Browse Online` tab.


## Firewall / Whitelist

If the HumHub server does not have a direct or filtered internet connection, the following options are available:

- Setup a HTTP Proxy Server (`Administration` -> `Settings` -> `Advanced` -> `Proxy`).

- Whitelist HumHub API Endpoints. Following hosts `www.humhub.com` and `api.humhub.com` must be accessible with HTTPS (443) protocol.

- Disable Outgoing Marketplace connections. [See configuration options](config-options.md#marketplace)
