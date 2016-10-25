# Bootstrap Html5 input fallback
A Twitter Bootstrap based Html5 input fallback. It adds Bootstrap widgets to the 
[mvcct-enhancer](https://github.com/MvcControlsToolkit/mvcct-enhancer) basic Html5 input fallback module. 
Thus it depends on both the  `mvcct.enhancer.js `, and  `mvcct.enhancer.input.basic.js` [mvcct-enhancer](https://github.com/MvcControlsToolkit/mvcct-enhancer) modules.
It is enough to load the bootstrap.html5.fallback.js, and the selected bootstrap widgets (listed below) to enrich mvcct-enhancer html5 fallback with botsstrap modules.
More specifically, date-picker, date-time-picker, numeric-range, and color-picker 
widgets are added as needed to the falled back Html5 inputs. Please, don't forget that Html5 inputs fallback is activated
bya calling the `mvcct.enhancer.addBasicInput` method and passing it a [Globalize](https://github.com/jquery/globalize) object.

**bootstrap-html5-fallback is available both on bower and npm** 

Widget options are added to the overall mvcct-enhancer options object. 
Please refer to the [mvcct-enhancer](https://github.com/MvcControlsToolkit/mvcct-enhancer) 
for the usage of the mvcct-enhancer module. Below, all selected bootstrap widgets, and the loacation theyr options are placed.
All widgets(as well as mvcct-enhancer) are registered as dependencies, so if you use either nmp, or bower you will them have 
automatically installed when you install `bootstrap-html5-fallback`:

1. Date-picker: [smalot-bootstrap-datetimepicker](https://github.com/smalot/bootstrap-datetimepicker). Options placed in options property: `html5FallbackWidgets.date`
2. Time-picker: [smalot-bootstrap-datetimepicker](https://github.com/smalot/bootstrap-datetimepicker). Options placed in options property: `html5FallbackWidgets.time`
3. Date-time-picker: [smalot-bootstrap-datetimepicker](https://github.com/smalot/bootstrap-datetimepicker). Options placed in options property: `html5FallbackWidgets.datetime`
4. Week-picker: [smalot-bootstrap-datetimepicker](https://github.com/smalot/bootstrap-datetimepicker). Options placed in options property: `html5FallbackWidgets.week`
5. Month-picker: [smalot-bootstrap-datetimepicker](https://github.com/smalot/bootstrap-datetimepicker). Options placed in options property: `html5FallbackWidgets.month`
6. Color-picker: [mjolnic-bootstrap-colorpicker](https://github.com/mjolnic/bootstrap-colorpicker).Options placed in options property: `html5FallbackWidgets.color`. 
**Important**, we added a new option to the colorpicker, namely: `makeComponent` that when `true` transforms the input fields into a bootstrap component,
    so that the selected color is shown to the right of it. As a default this option is `false`;
7. Numeric-range [seiyria-bootstrap-slider](https://github.com/seiyria/bootstrap-slider).Options placed in options property: `html5FallbackWidgets.range`

The enhancemet of a falled back Html5 input with one of the above widget may be prevented by setting to `null` its associated `enhance` property in the `mvcct-enhancer` options object:

```
var options = {};
    options.browserSupport = {
        cookie: "_browser_basic_capabilities",
        forms: null,
        fallbacks: {
            number: {
                force: true
            }
            ...
            ...
        },
        handlers: {
            enhance: {
                datetime: null
            }
        }
    };

    mvcct.enhancer.waitAsync(options);
```

For more information about the `mvcct-enhancer` options object please refer to [mvcct-enhancer documentation](https://github.com/MvcControlsToolkit/mvcct-enhancer).

**Important**, when using this module please avoid specifying two different formats for dates end datetimes in the mvcc-enhancer .editFormats 
options property since date/time pickers just support one format, so the usage of the second format might create problems
with these widgets.

Some options property, when supported by the widgets are outomatically 
filled by the fallback module. Namely:
* date and time formats, are extracted from the options `editFormats` and from the current locale.
* initial input value, and min/max/ step property when supported by the widget are automatically filled 
with the original Html5 input corresponding property values.
(converted in the current locale when needed by the widget).
* the range/slider widget formatter property has been used to localize the numbers shown in labels. 
However, the developer may override this function.
* the color-picker format is set to hexadecimal (hex) since this is the format used by native pickers. 
However, the developer may override this setting.