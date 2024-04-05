---
id: search
title: Search
---

>⚠️ Under construction.


See `\humhub\modules\search\interfaces\Searchable` interface for more details.

Example:


```php
use humhub\modules\content\components\ContentActiveRecord;

class Post extends ContentActiveRecord
{
    // ...

    // This is required to display the search result
    public $wallEntryClass = "humhub\modules\post\widgets\WallEntry";

    // Searchable Attributes / Information
    public function getSearchAttributes()
    {
        return array(
            'message' => $this->message,
            'url' => $this->url,
            'someTextField' => 'Some text'
        );
    }
    // ...
}
```
