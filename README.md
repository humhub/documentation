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

```
$ npm run build
```

or 

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### Main Navigation

The main navigation is managed in [docusaurus.config.js](docusaurus.config.js) within the `links` configuration.

### Documentation Sidebars

The sidebars of the different guides are managed in [sidebars.js](sidebars.js). 
See [Docusaurus2 Sidebars](https://v2.docusaurus.io/docs/sidebar/) for more information.