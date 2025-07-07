---
id: search
title: Search
---

**The built in search system is used for:**

- Content
- People
- Spaces
- Marketplace
- Third-party resources ("[Advanced Search](https://marketplace.humhub.com/module/advanced-search/description)" - [HumHub Professional Edition](../professional-edition/intro.md) module)

## Content Search - Index Rebuilding

If you want to rebuild the search index (e.g. after updating/restore backup), you have two methods:

**Browser**

Log in to your HumHub with an administrator account and go to the following section: `Administration` -> `Information` -> `Database`.

On this page click on the button "Rebuild search index". The process can take several minutes.

**Console**

To start the rebuild job, you need to run following command:

```
cd /path/to/humhub/protected
php yii content-search/rebuild
```

## File Content Indexing

In order to allow also indexing of file contents (e.g. PDF, Word or PowerPoint document) you can specify file parsers in your [configuration](advanced-configuration.md).

We recommend [Apache Tika](https://tika.apache.org/) as parser software which supports thousand of different file types.

Example configuration:

```php
    return [
        // ...

        'modules' => [
            // ...

            'file' => [
                'converterOptions' => [
                    'humhub\modules\file\converter\TextConverter' => [
                        'converter' => [
                            [
                                'cmd' => '/usr/bin/pdftotext -q -enc UTF-8 {fileName} {outputFileName}',
                                'only' => ['pdf']
                            ],
                            [
                                 'cmd' => '/usr/bin/java -jar /srv/www/var/lib/tika-app-1.18.jar -maxFileSizeBytes=67108864 --text {fileName} 2>/dev/null',
                                 'except' => ['image/', 'application/x-tar', 'application/zip', ]
                            ],
                         ]
                    ]
                ]
            ],

        ],
    ];
```

## Search Syntax Reference Cheat Sheet

This cheat sheet lists search operators and explains what they do. It helps you build search queries so you can filter, combine, or adjust your searches with more control.

### `-word` Exclusion Operator

**Function:**
Excludes any result that contains the given word.

**Example:**

```
report -draft
```

**Explanation:**
Find results that contain `report` but **do not** include `draft.`

---

### `+word` Required/AND Operator

**Function:**
Forces the word to be present in the result.

**Example:**

```
+budget +2024
```

**Explanation:**
Find results that **contain both** `budget` and `2024`.

---

### `NOT word` Exclusion / Boolean NOT

**Function:**
Same as `-word`, excludes results that contain the term.

**Example:**

```
report NOT report
```

**Explanation:**
Find results that contain `report` but **not** `draft`.

---

### `word*` Wildcard

**Function:**
Matches any word that starts with the given characters, even if you don’t write the `*`.

**Example:**

```
report*
```

**Explanation:**
Also matches: `reports`, `reporting`, `reported`, etc. Typing `report*` is the same as just `report`.

---

### `"word"` Quoted Phrase Match

**Function:**
Matches the **exact phrase**, in exact order, without partial or fuzzy logic.

**Example:**

```
"Annual Report"
```

**Explanation:**
Find results that contain `Annual Report` exactly as-is. Will not match: "Report for the Annual Review", for example.

## Example Combinations & What They Mean

#### Combination:

```
"Home Policy" "Remote Work"
```

**Meaning:**
Find results that contain both exact phrases `Home Policy` and `Remote Work`.

---

#### Combination:

```
+report -draft
```

**Meaning:**
Find results that contain `report` and must **not** contain `draft`.

---

#### Combination:

```
+Annual +Report -Draft
```

**Meaning:**
Find results that contain **both** `Annual` and `Report`, and must **not** contain `Draft`.

---

#### Combination:

```
update +2025 -deprecated
```

**Meaning:**
Find results that contain `update` and `2025`, and must **not** contain `deprecated`.

## Building Complex Search Queries

You can freely **combine multiple operators** to create precise search queries. Each operator acts as a logic block: required words (`+`), excluded terms (`-` or `NOT`), exact phrases (`"..."`), and implicit wildcards (`report` matches `reports`, `reporting`, etc.). For example, a query like `update +2025 +report -draft "annual report"` will find results that mention **`update`**, must include **`2025`** and **`report`**, must **not** mention **`draft`**, and must contain the **exact phrase `annual report`**. These combinations help narrow down results significantly and let you search with high precision.
