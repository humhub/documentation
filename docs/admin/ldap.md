



## LDAPS / SSL


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
