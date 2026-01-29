---
id: css
title: Style Sheets
---

# Build custom CSS package

Since HumHub 1.18 it is recommended to use the `theme.scss` and `variables.scss` files to define your custom theme styles.

## Create custom SCSS files

Typically, your theme should have the following files:

- `scss/variables.scss`: Contains the `$baseTheme` variable to define the parent theme, and other variables
- `scss/build.scss`: Used to build the CSS when Flushing the Cache
- `scss/_theme.scss`: Contains your own theme definitions
- `scss/_mixins.scss`: Used to define or overwrite Sass mixins
- `scss/_root.scss`: To define or overwrite CSS root variables

If you wish to overwrite default theme variables as text and background colors, just copy and edit your variables from `humhub/static/scss/variables.scss` into your themes `variables.scss` file.

> Info: All variables defined in `variables.scss` can also be accessed in your views by calling `Yii::$app->view->theme->variable('my-variable');`, and are used in the mail views by default.
> For styling HTML elements, since all Sass variables values from `variables.scss` are copied to CSS variables, it is recommended to use pure CSS variables `var(--my-variable)` to allow dynamic color changes such as dark theme.

## Parent themes

Since HumHub 1.18 you must define a `$baseTheme` variable in order to specify the parent theme. Using this technique both theme css will be loaded in your views. 
In case your parent theme includes new changes they will automatically be available. 
Another advantage of this technique is, that you don't have to copy the parent themes view files unless you require changes in those views. 

The theme component will try to find a view in the following order:

1. Child theme view
2. Parent theme view
3. Core theme view
 
For themes based on the standard Community Edition theme:

```scss
$baseTheme: "HumHub";
```

For Enterprise Edition based themes:

```scss
$baseTheme: "enterprise";
```

>Note: After configuring a base theme, you can delete all unmodified view files from your derived theme's `/views` folder.
The views will be automatically loaded from the base theme.

## Compile CSS

SCSS files are compiled into CSS automatically when flushing cache: Administration -> Settings -> Flush Cache


## Prevent default component file imports

If you wish to exclude a specific default component file defined in `humhub/static/scss/build.scss`, you can overwrite certain variables to prevent the file import in your build.

By setting for example the variable `$prev-login: true;` in your `build.scss` file, you can prevent the inclusion of the default `login.scss` file into your theme. 
This approach can be handy if your theme requires major style changes for a default component.

See full [list of available variables here](https://github.com/humhub/humhub/blob/master/static/scss/build.scss).
