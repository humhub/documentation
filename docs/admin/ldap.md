---
id: ldap
title: LDAP
---

You can enable authentication against LDAP (e.g. against Active Directory or OpenLDAP) using the web interface at: `Administration -> Users -> Settings-> LDAP`.

### Advanced Features

The [Professional Edition](https://www.humhub.com/en/professional-edition) module [Advanced LDAP](https://www.humhub.com/en/marketplace/advanced-ldap) provides additional LDAP features like:

- Automatic mapping of LDAP users to Spaces
- Automatic linking of LDAP users to predefined groups (e.g. administrators)
- Synchronize LDAP profile images to HumHub user profiles
- Support for multiple LDAP servers/connections

More information can be found in the [module documentation](https://www.humhub.com/en/marketplace/advanced-ldap/#Manual).


## SSL (LDAPS)


If you using a self-signed SSL certificate for LDAP, there are the following options: 

**Disable certificate checking**

Add following line to your OpenLDAP configuration (e.g. /etc/ldap/ldap.conf)

```
TLS_REQCERT never
``` 

You must then restart the Webserver or PHP-FPM service. 

Example:

```
systemctl restart apache2
```


**Add custom certificate**


Add following lines to your OpenLDAP configuration (e.g. /etc/ldap/ldap.conf)

```
TLS_REQCERT demand
TLS_CACERT  /etc/ldap/cert.pem
```

The ``TLS_CACERT`` option should contain the path to the self-signed certificate file.

You must then restart the Webserver or PHP-FPM service.

Example:

```
systemctl restart apache2
```

## User Attributes

The profile field attribute mapping can be defined at `Administration -> Users -> Profile -> Select profile field -> LDAP Attribute`.

### Date fields

If you're using custom date formats in our ldap backend, you can specify different formats
in the [configuration file](advanced-configuration.md).

```php
    'params' => [
        'ldap' => [
            'dateFields' => [
                'somedatefield' => 'Y.m.d'
            ],
        ],
    ],
```


## User Mapping (HumHub to LDAP)

When an LDAP user is first imported by HumHub, the value of the specified `ID attribute` (LDAP settings) is saved in an internal mapping table.
This is used to recognize a user even if their name or e-mail address was changed.

Although the value of the ID attribute should not change, there are always common causes for this:

- Migration to another LDAP server (Changed domain)
- Re-create (delete & create) a LDAP user 
- Changing the ID attribute field to another ID field

**Update Mapping**

Currently only the entire mapping table can be reset. 
This means for all users the mapping must be rebuilt afterwards. 
This process works very reliably because it can resolve existing users based on their email address and user name. 


Using the HumHub system user, go to the root directory of the HumHub application and execute the following commands: 

``` 
cd protected

php yii ldap/mapping-clear
php yii ldap/mapping-rebuild

php yii ldap/status
```
