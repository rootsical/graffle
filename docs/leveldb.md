#leveldb

from:  
https://github.com/level/levelup#basic-usage  
`npm install levelup leveldown`  

```js
import levelup from 'levelup';

//create database in 'db' directory within the project root
let db = levelup('./db');

```

put an entry into the database:  
```js
db.put('surname', 'smith', function (err) {
  if (err) return console.log('error is: ', err)
};
```

get an entry from the database:  
```js
db.get('surname', function(err, value){
   if (err) return console.log('error is: ', err);
   //if no error, we have the value!
   console.log('surname: ', value);
   // logs out 'surname: smith'
});
```
a great article:  
http://dailyjs.com/2013/05/02/leveldb-and-node-2/

