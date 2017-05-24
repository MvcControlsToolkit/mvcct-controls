# mvcct-controls
Base JavaScript code for assisting Mvc Controls Toolkit controls on the client side. 

This project is part of the Mvc Controls Toolkit. Below you may find just information on the content and 
usage of this package. You may find more information, and documentation on the Mvc Controls Toolkit in general
in the [Home repository](https://github.com/MvcControlsToolkit/Home)

This package contains the core JavaScript code for all controls + all Server Controls specific JavaScript Files. 
It must be installed with any TagHelpers providers. The server controls default TagHelper provider needs just this package on the client
side to work properly. Future client controls providers will come each with its provider specific JavaScript package 
to add to mvcct-controls.

Public classes, methods and functions contained in this package are intended just for Controls developers. 
**Mvc Controls Toolkit users need just to include package files in their Views to have all controls working 
properly.** 

**mvcct.controls** must be included in each page using Mvc Controls Toolkit controls.

**mvcct.controls.ajax** must be included with all server (and future client) controls that need ajax
 assistance, the only exception being the autocomplete, that needs just trivial ajax. 
 It is needed with immediate grid when editable, and with the batch grids using ajax based detail forms.
 It is needed also with links and pagers with data-operation="ajax-html", or data-operation="ajax-json", 
 that is, with links that trigger ajax, or router operations.

 **mvcct.controls.serverGrid** must be included when using any server grid.

 **mvcct.controls.query** must be included when using query windows/buttons. In turn, it requires  mvcct.odata.js located in the mvcct-odata dependency.

 **mvcct.controls.autocomplete** must be included when using autocomplete (also when using grid with autocomplete based columns).
 In this case you must include also JavaScript and Css files from the awesomplete package.

 Everything is customizable, and mvcct-controls do not depend on bootstrap of jQUery also if they use Unobrrusibe validation for client side 
 validation and Bootstrap modals for Grid detail forms, as a default (if available). Alternative modlas, and validation providers may be specifie the mvcct options object. 
 However, users non need to worry about this, since alternative plug-ins, once included, are expected to set 
 automatically the optiosn object.  

