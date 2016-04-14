#GunDB

using gun-level v3.1.0 which uses gun v0.3.7

install:  
```js
npm install gun-level --save
```

to start a new database:  
```js
var db = new Gun();
```  
the database will be created in project root at *'./level'*.

if you would like a different location for the database do:  
```js
var db = new Gun({level: {path: 'db'}});
```
the database will be created in project root at *'./db'*.

add a node and index it with a key:  
```js
var hello = gun.put({
  title: 'hello',
  content: 'hello from gundb!'
})
.key('notes/hello', function(err){
  if(err) console.log('error on setting key');
  console.log('success on setting key');
});
```

get a node by its key:
```js
var hello = db.get('notes/hello');
```
if the key doesn't exist, it will be created with an empty object assigned


get a value from a node, without subscribing to changes:
```js
db.get('notes/hello').path('content')val(function(data){
    console.log('val returns: ', data);
});
```

using `set` to add a unique node to an unordered list:  
```js
var cool = gun.put({
  type: 'comment',
  title: 'cool',
})
db.get('notes/hello').path('comments').set(cool);
```
you can also create an empty set using `set()`.
