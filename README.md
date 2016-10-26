# mvcct-controls
Base JavaScript code for assisting Mvc Controls Toolkit controls on the client side. 

This project is part of the Mvc Controls Toolkit. Below you may find just information on the content and 
usage of this package. You may find more information, and documentation on the Mvc Controls Toolkit 
in the [Home repository](https://github.com/MvcControlsToolkit/Home)

This package contains the core JavaScript code for all controls + all Server Controls specific JavaScript Files. 
It must be installed with all TagHelpers provider. The server controls TagHelper provider needs just it on the client
side. Future client controls provider will come each with its provider specific JavaScript package 
to add to mvcct-controls.

Public classes, methods and function contained in this package are intended just for Controls developers. 
Mvc Controls Toolkit users need just to include package files in their Views to have all controls working 
properly. 

**mvcct.controls** must be included in each page using Mvc Controls Toolkit controls.

**mvcct.controls.ajax** must be included with all server (and future client) controls that need ajax
 assistance, the only exception being the autocomplete, that needs just trivial ajax. 
 It is needed with immediate grid when editable, and with the batch grids using ajax based detail forms.
 It is needed also with links and pagers with data-operation="ajax-html", or data-operation="ajax-json", 
 that is, with links that trigger ajax, or router operations.

 **mvcct.controls.serverGrid** must be included when using any server grid.

 **mvcct.controls.autocomplete** must be included when using autocomplete (also when using grid with autocomplete based columns).
 In this case you must include also JavaScript and Css files from the awesomplete package.

