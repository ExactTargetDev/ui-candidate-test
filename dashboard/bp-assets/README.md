wpbp-assets
===========

WordPress Boilerplate 
This repository contains assets to bootstrap or boilerplate projects. It contains many third-party plugins (JS and CSS) and utilizes LESS CSS for CSS pre-processing. Javascript files are setup to be concatenated and minified by CodeKit locally.

##Third-party libraries 
- URL: /assets/wpbp-assets/css/vendor/
- These are typically externally-based git submodules loaded first, so they can be overwritten.

##Modules
- URL: /assets/wpbp-assets/css/modules/
- Files such as mix-ins that DO NOT get outputted.
- To import all modules, import /assets/wpbp-assets/css/modules/_all.less

##PARTIALS: Files such as reset.less that DO get outputted.
- URL: /assets/wpbp-assets/css/partials/

##Per project files
Copy these files to root CSS and do not import them.
- URL: /assets/wpbp-assets/css/root/
- style.less - Main stylesheet, imports everything
- pages.less - Per page templates file, typically based on the <body> class
- colors.less - Color variables
- typography.less - Type variables, fonts

##Javascript
- URL: /assets/wpbp-assets/js/
- Copy files in /js/root/ to /assets/

# Third-party libraries 
- URL: /assets/wpbp-assets/js/vendor/
- These are typically externally-based git submodules loaded first, so they can be overwritten.


