---
id: tutorial
title: Tutorial
---

Foreword
--------
This quick tutorial shows you all necessary steps to create a custom **HumHub** theme.

- Step 1: Create a theme folder ([Theme Folder Structure](structure.md))
- Step 2: Adjust styling ([Custom Stylesheets](css.md))
- Step 3: Modify login template ([View Files](views.md))


:::caution
If you have installed HumHub via Git, make sure you have done the following steps first: [Git Installation](../develop/environment.md#gitcomposer-installation)
:::

Step 1: Create an own theme folder
---------------------------------
- Go to the HumHub installation directory
- Switch to the directory `themes`
- Copy the folder `HumHub` and rename it to `Example`
- Edit the `scss/variables.scss` file and add this line: `$baseTheme: "HumHub";`
- Enable the new `Example` theme under `Administration -> Settings -> Appearance`

Step 2: Adjust styling 
-----------------------------------

Add modified variables to the file `/themes/Example/scss/variables.scss`.

```
$link-color: #FFAA00 !default;
$font-size-root: 15px !default;
```

Test the result: `Administration -> Settings -> Flush Caches`

Step 3: Modify login template
------------------------------

In this step we're adding some text to the login template.

### Create a themed view file
Copy the view file `humhub/modules/user/views/auth/login.php` to `Example/views/user/auth/login.php`

### Modify the view file
Add some additional text below the application name.

```php
<span style="width:100px; color:white;">
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.<br />
    At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit 
    amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et 
    justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
</span>
<br />
<br />
<br />
```

Text Example:
![Example Text](images/modify-template.png)

### Result
![Result](images/modify-template-result.png)
