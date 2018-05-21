# Causes "Uncaught TypeError: Cannot set property '???' of undefined" in some cases. closure-loader #41

https://github.com/mxmul/closure-loader/issues/41

* Run `yarn start` to see the result by closure-loader with Webpack Dev Server.
* Run `yarn build` and `yarn run serve` to see the result by Closure Compiler.

## Expected behavior
Shows '3' in the console in the browser by the file from both closure-loader and Closure Compiler.

## Actual behavior
"Uncaught TypeError: Cannot set property 'bar' of undefined" at L6 (L7 in transformed file), by the file from closure-loader.