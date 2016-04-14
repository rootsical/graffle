#NODEMON

```
npm install --save-dev gulp-nodemon
```

```javascript
//gulpfile.babel.js
import nodemon from 'gulp-nodemon';

gulp.task('node', function() {
    nodemon({
        script: 'app/main.js'
        //watch: ['dest', 'test']
    });
});
```
