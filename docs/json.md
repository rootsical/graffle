## json ##

you can use *'fs-extra'* to read/write json files:  
https://github.com/jprichardson/node-fs-extra

- install:  
`npm install --save fs-extra`

- use (es module syntax, via babel):  
`import fs from 'fs-extra';`

- to convert object to json file:
```js
let file = './tmp/test.json';

derossi = {
  lastName: 'De Rossi',
  team: 'AS Roma',
  number: 16
};

fs.writeJSON(file, derossi, function (err) {
  if(err) console.log('error: ', err);
  console.log('json file written successfully');
});
```
- to convert json file to object:  
```js
let file = './tmp/test.json';

fs.readJSON(file, function(err, obj) {
  if(err) return console.log('error: ', err);
  console.dir(obj)
})
```