#!/bin/sh
ng build helloWorld --prod --output-hashing=none && cat dist/helloWorld/runtime.js dist/helloWorld/polyfills.js dist/helloWorld/scripts.js dist/helloWorld/main.js > preview/angularapp.js