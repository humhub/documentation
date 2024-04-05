---
id: console
title: Command Line Interface
---

Some administrative tasks can also or exclusively be executed by console. This guide lists the most
important console commands used to administer HumHub. All available console commands can be displayed 
by running `php yii` within the `protected` directory of your HumHub installation.

:::important
Make sure that you are working with the proper system user to prevent permission problems.
To change the system user use e.g. ``su -s /bin/bash -l www-data``
:::

All of the following commands can be executed withine the `@humhub/protected` directory.

**Example**

```console
cd protected
php yii cache/flush-all
```

## Commands

### `cache`

| Command | Description |    
| -------- | ---------- |
| `cache/flush`  | Allows you to flush cache | 
| `cache/flush-all`        | Combines and compresses the asset files according to the given configuration |
| `cache/flush-schema`        |  Clears DB schema cache for a given connection component |
| `cache/index (default)`        |  Lists the caches that can be flushed |

### `cron`

| Command | Description |    
| -------- | ---------- |
| `cron/daily`  | Force run of the daily cron jobs | 
| `cron/hourly`        | Force run of the hourly cron jobs |
| `cron/run`        |  Runs the cron jobs |

### `help`

Provides help information about console commands.

| Command | Description |    
| -------- | ---------- |
| `help/index (default)  `  | Displays available commands or the detailed information | 
| `help/list   `        | List all available controllers and actions in machine readable format |
| `help/list-action-options`        |  List all available options for the $action in machine readable format |
| `help/usage`        |  Displays usage information for $action |


### `integrity`

Performs data integrity checks.
 
| Command | Description |    
| -------- | ---------- |
| `integrity/run`  |  Starts integrity checker |
| `integrity/run --interactive=0`  |  Starts integrity checker with automatic acceptance |

### `ldap`

Console tools for manage Ldap

| Command | Description |    
| -------- | ---------- |
| `ldap/list` (default) | Lists configured LDAP auth clients | 
| `ldap/list-users`        | Lists all users found in the LDAP server |
| `ldap/mapping-clear` | Clears the `authclient_id` entries in the user table. |
| `ldap/mapping-rebuild`| Rebuilds the `authclient_id` and auth_mode mappings in the user table |
| `ldap/status`| Returns status information |
| `ldap/sync`| Synchronizes all ldap users (if `autoRefresh` is enabled) |

### `migrate`

Manages application migrations.

| Command | Description |    
| -------- | ---------- |
| `migrate/up` (default)| Upgrades the application by applying new migrations |
| `migrate/history`| Displays the migration history |

**Include module migrations:**

```console
php yii migrate/up --includeModuleMigrations=1
```

### `module`

HumHub Module Management

| Command | Description |    
| -------- | ---------- |
| `module/disable` | Disables an enabled module |
| `module/enable`| Enables an installed module |
| `module/install`|  Installs a given module |
| `module/list`| Lists all installed and enabled modules |
| `module/list-online`| Lists all online available modules |
| `module/remove`| Uninstalls a given module |
| `module/update`| Updates a given module |
| `module/update-all`| Updates all modules to the latest available version |

### `queue`

HumHub Queue Management

| Command | Description |    
| -------- | ---------- |
| `queue/clear` |  Clears the queue |
| `queue/exec`| Executes a job |
| `queue/info` (default) |  Info about queue status |
| `queue/listen`| Listens db-queue and runs new jobs |
| `queue/remove`| Removes a job by id. |
| `queue/run`| Runs all jobs from db-queue |

### ~~`search`~~

:::warning
Removed with HumHub v.16
:::

HumHub Search Tools

| Command | Description |    
| -------- | ---------- |
| `search/find` |  Search the index |
| `search/optimize`| Optimizes the search index |
| `search/queue-rebuild` |  Queue search index rebuild |
| `search/rebuild`| Rebuilds the search index |     

### `content-search`

Content Fulltext Search (HumHub v1.16+)

| Command | Description |    
| -------- | ---------- |
| `search/find` |  Search the index |
| `search/queue-rebuild` |  Queue search index rebuild |
| `search/rebuild`| Rebuilds the search index |     


### `settings`

Provides CLI access to database settings.

| Command | Description |    
| -------- | ---------- |
| `settings/delete` |  Deletes a stored setting |
| `settings/list`| Lists all stored settings |
| `settings/list-module` |  Lists stored settings by given module id |
| `settings/set`| Adds or updates a stored setting |     
            
### `space`

Console tools for manage spaces  

| Command | Description |    
| -------- | ---------- |
| `space/assign-all-members` |  Assign all members to a given space |

### `test`

Provides some console tests

| Command | Description |    
| -------- | ---------- |
| `test/email` | Sends a test e-mail to the given e-mail address |

### `theme`

Theme CLI Tools

| Command | Description |    
| -------- | ---------- |
| `theme/info` (default) | Shows all available and active themes |
| `theme/switch` (default) | Switches the current theme |

### `user`

User management tools. (HumHub 1.7+)

| Command | Description |    
| -------- | ---------- |
| `user/create`             | Creates a new user account.                  |
| `user/make-admin`         | Add user to the admin group.                 |
| `user/set-password`       | Sets the password for a user account.        |


### `file`

Management of uploaded files. (HumHub 1.7+)

| Command | Description |    
| -------- | ---------- |
| `file/delete-variants`             | Deletes all automatically generated file variants (previews, converted versions).    |
| `file/downscale-images`            | Scales down already uploaded images to the maximum dimensions and quality.           |
| `file/index (default)`             | Overview of uploaded files and automatically generated variants.                     |

