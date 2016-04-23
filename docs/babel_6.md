#BABEL 6 SETUP

###install babel
`npm install --save-dev babel-core babel-plugin-transform-es2015-modules-commonjs gulp-babel gulp-plumber`  
- gulp-babel is necessary for use with gulp. gulp-plumber is also recommended as it suppresses errors which can break things a bit.

###gulpfile  
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

###.babelrc  
create .babelrc file
```javascript
//.babelrc
{
  "plugins": ["transform-es2015-modules-commonjs"]
}
```

if you want support for generators:  
`npm install babel-plugin-transform-runtime`

and in .babelrc add:
`
{
  "plugins": ['transform-runtime']
}
`