# Angular Elements 

[Reference](https://blog.bitsrc.io/using-angular-elements-why-and-how-part-1-35f7fd4f0457)

- Angular Elements is a new package in Angular that helps us publish Angular components as custom elements.

- It does this by taking the Angular component and compiling it into a web component

- Web components are technologies to help create reusable, encapsulated element .Right now, that includes the **shadow DOM, HTML templates, HTML imports, and custom elements**

### Uses:
1. Truly reusable components (ie. can be used in other frameworks)

2. Use Angular in the Server-side

3. Publish parts of the application independently.

4. Put Angular Components inside other JavaScript Libraries/Frameworks like React and Vue.

5. Pass data from React and Vue into the Angular Component

6. Use Angular 7 component into an AngularJS app.

### Steps to Follow:

**Convert a Component into Custom Element:**

1. In the app template file, Create a button and add a click listener so that when someone clicks the button , the component will be displayed.

2. In the App component file, define the showMessage() and use innerHTML for DOM Manipulation.


3. `ng add @angular/elements`

4. In App module, add entryComponents: [reusable-component]

5. In the constructor, create a new instance `createCustomElement` and pass it `ReusableComponent`

6. Along with this , we have to pass the `injector`

> Error: HTMLElement failed to construct

`yarn add @webcomponents/webcomponentsjs`

polyfille.ts :
`import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js';`

**Compiling as a Standalone Element:**
1. Create a `preview` folder and create an `index.html` inside it. Now call the `<resuable-component>` here.

2. In the App module, add `ngDoBootstrap()`

3. `npm run build`

4. Create a shell script file (custombuild.sh) in root folder

`#!/bin/sh
ng build angular-app --prod --output-hashing=none && cat dist/angular-app/runtime.js dist/angular-app/polyfills.js dist/angular-app/scripts.js dist/angular-app/main.js > preview/angularapp.js`

5. `.\custombuild.sh`

6. A new file named `angularapp.js` created inside the preview folder. We can now insert the ReusableComponent code into the index.html file using `script` tag.

7. `npx live-server preview`

### Embedding into React App:

[Reference](https://blog.bitsrc.io/using-angular-elements-why-and-how-part-2-37d52e71b4f9)
