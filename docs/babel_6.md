# BABEL 6 SETUP #

### install babel ###
`npm install --save-dev babel-core babel-plugin-transform-es2015-modules-commonjs gulp-babel gulp-plumber`  
- gulp-babel is necessary for use with gulp. gulp-plumber is also recommended as it handles errors which can break your process. for example, you might make a mistake whilst your files are being watched. in such cases it is more convenient that the error shows up in the console, allowing you to make necessary corrections but leaving gulp still running and watching your files. this saves you from having to restart again.

### gulpfile ###
```javascript
//gulpfile.babel.js
import babel from 'gulp-babel';
import plumber from 'gulp-plumber';

gulp.task('transpile', function() {
	return gulp.src(['src/*.js'], {base:'src'})
		.pipe(plumber())
		.pipe(babel())
		.pipe(gulp.dest('dest'));
});
```

### .babelrc
create .babelrc file
```javascript
//.babelrc
{
  "plugins": ["transform-es2015-modules-commonjs"]
}
```

### generators ###
if you want support for generators:  
`npm install babel-plugin-transform-runtime`

and in .babelrc add:
`
{
  "plugins": ['transform-runtime']
}
`
### source maps ###
to implement source-maps so that errors point to your original code, rather than the transpiled code:  
`npm install gulp-sourcemaps --save-dev`  

in your gulpfile:  
```js
import sourcemaps from 'gulp-sourcemaps';

//..
//..

gulp.task('transpile', function() {
  return gulp.src(['src/**/*.src.js'], {
      base: 'src'
    })
    .pipe(plumber())
    //initialize sourcemaps
    .pipe(sourcemaps.init())
      .pipe(babel({
        babelrc: false,
        plugins: ['babel-plugin-transform-es2015-modules-commonjs']
      }))
      .pipe(rename(/\.src\.js$/, '.js'))
    //write sourcemaps
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('lib'));
});
```