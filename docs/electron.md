#ELECTRON

- install `electron` command globally:  
`npm install electron-prebuilt -g`  
(download seems really slow at times, around 50 kB/s)

- it's important to install as a development dependency as well:  
`npm install --save-dev electron-prebuilt`

###electron-connect
- to use with, gulp i like electron connect  
https://github.com/Quramy/electron-connect  
```
npm install --save-dev electron-connect
```
```javascript
//gulpfile.babel.js
import electronConnect from 'electron-connect';

let electron = electronConnect.server.create({'path':'app'});

gulp.task('start', function(){
    electron.on('closed', function(){
        console.log('closed message received...');
        process.exit();
    });
    electron.start();
});

gulp.task('watch', function(){
    gulp.watch(['*.js'], electron.restart);
    gulp.watch(['*.html'], electron.reload);
});
```

###learning resources
- there is some interesting boilerplate here:  
https://github.com/Quramy/electron-jsx-babel-boilerplate


