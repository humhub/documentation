# HumHub Documentation

>⚠️ Under construction.

This documentation is built using [Docusaurus 2](https://v2.docusaurus.io/).

Check [docs.humhub.org](http://docs.humhub.org) for a live version!

### Installation

```
$ npm install
```

or

```
$ yarn
```

### Local Development

```
$ npm run start
```

or

```
$ yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### Build
May need to execute the command:
```
$ npx update-browserslist-db@latest
```
After this command run:
```
$ npm run build
```

or 

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

If you encounter errors:
```
[ERROR] Client bundle compiled with errors therefore further build is impossible.
Error: error:0308010C:digital envelope routines::unsupported
    at String.replace (<anonymous>)
```

try running the command to enable the legacy OpenSSL provider:

On Unix-like (Linux, macOS, Git bash, etc.):
```
$ export NODE_OPTIONS=--openssl-legacy-provider
```
On Windows command prompt:
```
set NODE_OPTIONS=--openssl-legacy-provider
```
On PowerShell:
```
$env:NODE_OPTIONS = "--openssl-legacy-provider"
```

### Deployment

```
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### Guidelines

- Wrap file names and paths into inline code: `index.php`
- Use `>⚠️ Under construction` for missing parts
- Use [Admonitions](docs/doc1.md#Admonitions) as warning,info etc block
- Add code types to code blocks
- Add the filename as comment to the code block (if possible):

```php
// protected/config/web.php
return [
    //..
    'someValue' => [
        'newValue'
    ]
    //..
]
```

- Check the [Style Guide](docs/doc1.md)

### Main Navigation

The main navigation is managed in [docusaurus.config.js](docusaurus.config.js) within the `links` configuration.

### Documentation Sidebars

The sidebars of the different guides are managed in [sidebars.js](sidebars.js). 
See [Docusaurus2 Sidebars](https://v2.docusaurus.io/docs/sidebar/) for more information.
