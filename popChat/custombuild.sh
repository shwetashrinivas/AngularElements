#!/bin/sh
ng build popChat --prod --output-hashing=none && cat dist/popChat/runtime.js dist/popChat/polyfills.js dist/popChat/scripts.js dist/popChat/main.js > preview/angularapp.js