Cascading Style Sheets
===========

This CSS folder is for the Less CSS preprocessor. Compiled CSS files should not be directly edited. Please review http://lesscss.org/ for more information.

Folder Structure:

## Modules
Modules are custom Less rules that DO NOT output CSS rules. These are typically mix-ins or utility classes that do not echo any output, but are used within another rule

## Partials
Partials are custom Less rules that DO output a CSS rule. In other words, it's in here if it echoes output.

## Root
The files within this directory should be copied/moved to the base CSS directory when creating a new site. It contains it's own modules and partials subdirectory that will not be updated within the WP-Assets folders and thus remain custom to the site it is used within.