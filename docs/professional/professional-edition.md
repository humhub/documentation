---
id: professional-edition
title: Migrating from the Enterprise to the Professional Edition
sidebar_label: Migrate to Professional Edition
---

Upgrading from the Enterprise to the Professional Edition is unproblematic. However due to many changes from version 1.3.X to version 1.4, it requires some effort. 
If you follow these steps, you should get this done with ease:

 
1. Create a **BACKUP** of you installation an your database **IN EVERY CASE**

2. Update to the latest HumHub and "Enterprise Edition" module available (`Administration -> Modules`) 

2. Active your **Professional Edition** license key (`Administration -> Information -> "Upgrade to Professional Edition"`)

3. Switch to the default theme named **HumHub** (`Administration -> Settings -> Appearance`)

4. If you're using any Enterprise Edition features, which require a config file entry e.g. [SOLR search](https://www.humhub.com/en/marketplace/solr/) or [JWT SSO](https://www.humhub.com/en/marketplace/jwt-sso/), either comment those parts out or remove them completely.

5. Disable and _uninstall_ the module "Humhub Enterprise Edition"

6. Use to HumHub Marketplace (`Administration -> Modules -> Browse online`) to install and activate the **HumHub - Professional Edition** features you want to use e.g. [Enterprise Theme](https://www.humhub.com/en/marketplace/enterprise-theme/) or [Advanced Ldap](https://www.humhub.com/en/marketplace/advanced-ldap/).

7. Revert to your usual Theme (`Administration -> Settings -> Appearance`)

8. Some Professional Edition modules like [SOLR search](https://www.humhub.com/en/marketplace/solr/) or [JWT SSO](https://www.humhub.com/en/marketplace/jwt-sso/) may require updates to the configuration. You will find detailed instructions each module in our [Marketplace](https://www.humhub.com/en/marketplace)