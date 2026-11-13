# HumHub Documentation

>⚠️ Under construction.

This documentation is built using [Docusaurus 3](https://docusaurus.io/).

Check [docs.humhub.org](http://docs.humhub.org) for a live version!

This project uses [npm](https://www.npmjs.com/) as its package manager and requires Node.js 18 or newer.

No lockfile is committed: dependencies are resolved fresh from `package.json`
on every install. This mirrors the deploy workflow (see [Deployment](#deployment)),
which builds the site the same way. If you need a reproducible tree while developing, keep the
`package-lock.json` that `npm install` generates locally — it is ignored by git.

### Installation

```
$ npm install
```

### Local Development

```
$ npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build
May need to execute the command:
```
$ npx update-browserslist-db@latest
```
After this command run:
```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Troubleshooting
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

There is nothing to deploy by hand. Every push to `master` triggers the
[Deploy documentation](.github/workflows/deploy.yml) GitHub Action, which runs
`npm run build` and syncs the `build/` directory to the web server behind
[docs.humhub.org](https://docs.humhub.org) via `rsync --delete` over SSH.

To redeploy without a new commit, run the workflow manually: Actions → Deploy
documentation → Run workflow, or

```
$ gh workflow run deploy.yml -R humhub/documentation
```

The connection settings (`DEPLOY_*`) are secrets of the `production`
environment of this repository. The server side (deploy user, rrsync
restriction, web server config) is documented in `DEPLOYMENT.md` of the
internal `humhub/website` repository. Redirects for old or moved pages are
also configured there, not in this repository. If you rename or remove a
page, ask for a redirect to be added.

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
See [Docusaurus Sidebars](https://docusaurus.io/docs/sidebar) for more information.
