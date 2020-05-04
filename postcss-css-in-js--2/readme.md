# Removes computed property name

Refer https://github.com/stylelint/postcss-css-in-js/issues/36.

* Run `yarn start` to run dev server.
* Run `yarn process` to see the result.

## Expected behavior

Since PostCSS gets no plugin, the postcss output does not change the style behavior.

## Actual behavior

PostCSS changes computed property name to normal (static) property in css-in-js object literal (style objects).  
In this example, it changes `[MyButton]: {}` to `MyButton: {}`, so 2 buttons will have the same yellow text.
