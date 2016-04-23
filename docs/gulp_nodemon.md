## nodemon ##

```
npm install --save-dev gulp-nodemon
```

```js
//gulpfile.babel.js
import nodemon from 'gulp-nodemon';

gulp.task('node', function() {
    nodemon({
        script: 'app/main.js'
        //watch: ['dest', 'test']
    });
});
```
