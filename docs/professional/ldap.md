---
id: ldap
title: Extended LDAP features
---

The **HumHub** Enterprise Edition provides some advanced LDAP features.

User Mapping
------------

You can assign user's group or space memberships automatically using LDAP configuration.

The mapping can be used by:

- User LDAP group memberships (memberOf field, e.g. CN=xyz_space_access,OU=Groups,DC=example,DC=com)
- The part of the users base DN (e.g. OU=People,DC=example,DC=com)
- Attribute values (e.g. street==Some Street or street=~Street)

> Note: The mapping is handled by the hourly cron job and may takes some time to affect.

### Space Mapping

As administrative user, you can map a LDAP group directly to a space. 

Configuration page: `Open Space` -> `Members` -> `LDAP`

![Space LDAP Mapping](images/ldap-mapping-space.png)

### Group Mapping

As administrative user, you can map a LDAP group against HumHub groups which are mainly used for administrative tasks. 

Configuration page: `Administration` -> `Users` -> `Groups` -> `Select a group` -> `LDAP`

![Group LDAP Mapping](images/ldap-mapping-group.png)


Profile Images
--------------

You can also synchronize profile image from LDAP.

Modify your local configuration `protected/config/common.php` and add following section:

```
<?php

return [
    'components' => [
        'authClientCollection' => [
            'clients' => [
                'ldap' => [
                    'class' => 'humhub\modules\enterprise\modules\ldap\authclient\ZendLdapClientEnterprise',
                    'profileImageAttribute' => 'thumbnailphoto'
                ]
            ]
        ]
    ]
];
```


