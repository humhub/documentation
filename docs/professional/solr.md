---
id: solr
title: SOLR - Search Driver
---

> Warning: The SOLR search driver is in experimental stage yet!

## Installation

### Humhub Configuration

Add following part into the `components` section of your configuration file.

See also: [Custom Configurations](../admin/advanced-configuration.md)

```php
'search' => [
    'class' => 'humhub\modules\enterprise\modules\solr\engine\SolrSearch',
    'host' => 'solr-host-name-here', // e.g. localhost
    'port' => 12345, // e.g. 8983
    'path' => 'solr-path', // e.g. /solr/example1
    'username' => 'optional-user-name',
    'password' => 'optional-password',
],
```

### SOLR Configuration

Use the standard managed schema mode (schemaless). 

Search core creation example:

```
cd bin
./solr create -c example1
```

Tweak default field type:

Edit the file `server/solr/example1/conf/solrconfig.xml` and change:

```
<str name="defaultFieldType">strings</str>
```

to:

```
<str name="defaultFieldType">string</str>
```

Restart the SOLR search server:

```
cd bin
./solr restart
```

### Active the SOLR search

Rebuild your search index. ([Search](../admin/search.md))


## Tuning

Change following field types:

```
curl -X POST -H 'Content-type:application/json' --data-binary '{
  "replace-field":{
     "name":"files",
     "type":"text_general",
     "stored":false }
}' http://localhost:8983/solr/example1/schema
```

```
curl -X POST -H 'Content-type:application/json' --data-binary '{
  "replace-field":{
     "name":"comments",
     "type":"text_general",
     "stored":false }
}' http://localhost:8983/solr/example1/schema
```



