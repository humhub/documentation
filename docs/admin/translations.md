---
id: translations
title: Languages & Translations
sidebar_label: Languages & Translations
---



Available translations
----------------------

Our [translation community](https://translate.humhub.org) is responsible for maintaining the translation of HumHub and its modules into more than 40 languages. If you want to be part of this community effort, just register to the translation community and join the space dedicated to your language. Since the translation activity highly depends on the dissemination of a language we are always in need of contributors especially for rather rare languages. Before starting with the actual translation, please make yourself familiar with the current wording and terms already in use and if needed first discuss changes of such terms with your fellow contributors if possible.

| Language code (ISO)    | Language                                                                  |
| ---------------------- | --------------------------------------------------------------------------|
| en-US                  | English (American)                                                        |
| en-UK                  | English (British)                                                         |
| de                     | German                                                                    |
| fr                     | French                                                                    |
| nl                     | Dutch                                                                     |
| pt                     | Portuguese                                                                |
| pt-BR                  | Portuguese (Brazil)                                                       |
| pl                     | Polish                                                                    |
| es                     | Spanish                                                                   |
| it                     | Italian                                                                   |
| tr                     | Turkish                                                                   |
| ru                     | Russian                                                                   |
| th                     | Thai                                                                      |
| uk                     | Ukrainian                                                                 |
| el                     | Greek                                                                     |
| hu                     | Hungarian                                                                 |
| ja                     | Japanese                                                                  |
| nb-NO                       | Norwegian (Norway)                                                   |
| zh-CN                       | 	Chinese (S)                                                        |
| ca                       | Catalan                                                                 |
| an                       | Aragonese                                                               |
| cs                       | Czech                                                                   |
| vi                       | Vietnamese                                                              |
| sv                       | Swedish                                                                 |
| da                       | Danish                                                                  |
| uz                       | Uzbek (Latin)                                                           |
| fa-IR                    | Farsi (Iran)                                                            |
| bg                       | Bulgarian                                                               |
| sk                       | Slovak                                                                  |
| zh-TW                       | Chinese (T)                                                          |
| ro                       | Romanian                                                                |
| ar                       | Arabic                                                                  |
| id                       | Indonesian                                                              |
| ko                      | Korean                                                                   |
| lt                       | Lithuanian                                                              |
| hr                       | Croatian                                                                |
| ht                       | Haitian, Haitian Kreol                                                  |
| lv                        | Latvian                                                                |
| sl                       | Slovenian                                                               |
| nn-NO                       | Norwegian (Nynorsk) (Norway)                                         |
| am                       | Amharic                                                                 |
| fi                       | Finnish                                                                 |
| br                       | Breton                                                                  |
| he                       | Hebrew                                                                  |




Limit available languages
-------------------------

The languages available to the user can be configured within the [configuration file](advanced-configuration.md). 

It is possible to restrict the allowed languages of your HumHub installation by means of the following configuration:

```php
return [
    'params' => [
        'allowedLanguages' => ['de', 'fr']
    ]
];
```

Overwrite translation messages
------------------------------

:::tip
The [Translation Manager](https://marketplace.humhub.com/module/translation-manager) of the [Professional Edition](../professional-edition/intro.md) offers a very easy and convenient solution to overwrite all available texts in Humhub.
:::


To overwrite an existing text passage, the respective `ModuleID` and `MessageFile`  must first be determined.
This can be done e.g. by a file search for the desired text passage.

To overwrite you have to define a new message file using the following file/path pattern:

- protected/config/messages/`LanguageCode`>/`ModuleID`.`MessageFile`.php

To overwrite the post placeholder in the German language, for example, you have to create the following file:

- config/messages/`de`/`PostModule`.`base`.php

with the content:

```php
<?php
return array (
  'What\'s on your mind?' => 'Wie geht es dir heute?',
);
```


Add new translations
--------------------

In some cases, such as the profile fields, it may be necessary to add your own translations.

** Example to create a profile field translation: **

- In your custom profile field configuration, use an own `Translation Category ID` value like `UserModule.custom`.

- Create an new folder in `protected/config/messages/` for the language you want to translate the profile field to. e.g. `protected/config/messages/de`. Use the language code (ISO) as folder name.

  :::note
  If you're using our [Cloud/SaaS Hosting](../professional-edition/saas.md) you can create the folder `messages` directly in the root directory using SFTP.
  :::

- Create a new message file `protected/config/messages/de/UserModule.custom.php`for the new translation(s).

  ```php
  <?php
  return array (
    'Staff Number' => 'Personalnummer',
  );
  ```
   
  Always use the format: 'Original text` => 'Translated text',   
   