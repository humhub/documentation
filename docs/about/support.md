---
id: support
title: Support
---

If you need support with HumHub related issues, this guide will help you find the right place to ask and how to
compose your issue.

:::info
Also have a look at our [Troubleshooting Guide](../admin/troubleshooting.md) for a list of common administrative issues.
:::

## Where to get support

### General questions and troubleshooting

For general questions and troubleshooting, the best place to open an issue is our [community](https://community.humhub.com/dashboard).
If you are not sure where to ask, we will guide you to the right resources or forward you to other issue trackers in the community. 

### Bug reports and feature requests

If you've found a bug or want to open feature requests, [GitHub](https://github.com/humhub/humhub) is the right place.
Please check the [Contribution Guide](contribution.md#report-issues-and-feature-requests) for more information about
the GitHub issue tracker.

### Professional Edition Support

Users of the [Professional Edition](https://www.humhub.com/professional-edition/) can request support directly
within the [administration section](../professional-edition/support.md) of their HumHub installation.

## How to get support

No matter where you post your issue, please make sure to add as much information as possible,
in order for us to reproduce your issue.

### Information about your environment

 - **HumHub version**: See `Administration -> Information` or `protected/humhub/config/common.php` 
 - **Module version**: In case the problem is module related check `Administration -> Modules` or `protected/modules/<moduleId>/module.json`
 - **PHP version**
 - Is the issue potentially related to any kind of customization of yours?
   - Non official modules
   - Custom theme
   - Manual changes in core or module files
   - Special configuration
 
### Information about the issue

 - Where does it occur?
 - Does it only occur for specific users?
 - How can you reproduce the problem?
 - Is there any recent action that may have introduced the problem, such as:
   - HumHub Update
   - Module Update
   - Installed a new Module
   - Changed server environment
   - Changed a HumHub Setting
 - Please add a screenshot if possible
 
### Errors and logs

 - Always add the backend logs from `Administration -> Information -> Logs` or from `protected/runtime/logs`
 - Check the JavaScript console of your browser for errors: 
     - [Chrome](https://developers.google.com/web/tools/chrome-devtools/console/)
     - [Firefox](https://developer.mozilla.org/en-US/docs/Tools/Web_Console/Opening_the_Web_Console)
     - [Safari](https://developer.apple.com/library/archive/documentation/NetworkingInternetWeb/Conceptual/Web_Inspector_Tutorial/EnableWebInspector/EnableWebInspector.html)
     - [Opera](https://dev.opera.com/extensions/testing/)
     - [Edge](https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide/console)
     - [IE 11](https://msdn.microsoft.com/en-us/library/hh968260(v=vs.85).aspx)
   
