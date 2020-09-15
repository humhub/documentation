

## User mapping

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
