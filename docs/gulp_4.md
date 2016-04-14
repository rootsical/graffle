GULP 4 SETUP
============

### global ###
`npm install -g gulp-cli`
(The command used to be `npm install -g "gulpjs/gulp-cli#4.0"`).

### local ###
`npm install --save-dev "gulpjs/gulp#4.0"`

more info here:  
https://www.liquidlight.co.uk/blog/article/how-do-i-update-to-gulp-4/

### gulpfile ###
create gulpfile to work with babel 6:  
`touch gulpfile.babel.js`

### gulp-regex-rename ###
`npm install --save-dev gulp-regex-rename`  
- example  
```js
import rename from 'gulp-regex-rename';

gulp.task('transpile', function() {
  return gulp.src(['src/*.src.js'], {base: 'src'})
    .pipe(babel())
    .pipe(rename(/\.src.\.js$/, '.js'))
    .pipe(gulp.dest('dist'));
});
```

### cult ###
to monitor gulpfile and reload gulp  
https://github.com/typicode/cult
>npm install -g gulp cult
