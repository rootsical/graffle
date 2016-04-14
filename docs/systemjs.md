SYSTEM JS
=========

https://github.com/systemjs/systemjs  

first install using npm:  
`npm install --save systemjs`  

location of script is:
/noted/node_modules/systemjs/dist/system.js

this will be used with babel, and so you need the babel-core package also installed.  
however the latest babel-core package is not currently compatible, so we have to install a version earier than 6.0.0:  
`npm remove babel-core babel-preset-es2015 babel-plugin-transform-es2015-modules-commonjs gulp babel --save-dev`  
`npm install babel-core@"<6.0.0" gulp-babel@"<6.0.0" --save-dev`
location of browser.js is:  
node_modules/babel-core/browser.js

add this to your html file:  
```html
<script src="../node_modules/babel-core/browser.js"></script>
<script src="../node_modules/systemjs/dist/system.js"></script>
<script>
  System.transpiler = 'babel';
  System.import('module.js').then(function() {
    console.log('module imported');
  });
</script>
```