---
id: structure
title: Theme Structure
---

## Overview

Here are a few important tidbits:
- All themes have their files located in the `/themes` root or module folder.
- Each theme has its own sub-folder, in the main `themes` folder.
- Each theme is made of template files, image files, SCSS files, and sometimes even JavaScript files (.js).

## Create Own Theme Folder

> Note: Do not edit the default HumHub themes directly. All changes may overwritten on updates.

The best way to start is to copy the default theme folder `HumHub`.

Select a preferably unique theme name (e.g. MyCompanyName) for your new theme folder.

** Example: Copy theme folder (Linux)**

```
cd /path/to/HumHub
cp -rfa themes/HumHub themes/MyCompany
```

** Enable the theme **

Once you created an own theme folder, you need to enable it in the administration section of HumHub: 
`Administration -> Settings -> Appeareance` 


## Folder Structure Example

This overview shows a complete theme folder structure including own scss and view files.

```
    /themes/
        /mytheme/                       - My Theme Name
            /scss/                      - Contains SCSS files used to build your styling
                variables.scss          - Contains the `$baseTheme` variable to define the parent theme, and other variables
                build.scss              - Used to build the CSS when Flushing the Cache
                _theme.scss             - Contains your own theme definitions
                _mixins.scss            - Used to define or overwrite Sass mixins
                _root.scss              - To define or overwrite CSS root variables
            /js/                        - Additional javascript files (optional)
            /font/                      - Additional fonts (optional)
            /img/                       - Images (optional)
            /views/                     - Overwritten Views
                /moduleId/              - Id of Module (module_core Id, module Id, or base controller id)
                    /controllerId/      - Id of Controller
                        index.php       - Overwritten View File
                    /widgets/           - Links to /someModule/widgets/views/
                        someWidget.php  - Overwritten widget view
                /widgets/               - Links to /protected/widget/views
```
