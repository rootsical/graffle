import gulp from 'gulp';
import babel from 'gulp-babel';
import nodemon from 'gulp-nodemon';
import plumber from 'gulp-plumber';
import rename from 'gulp-regex-rename';
import electronConnect from 'electron-connect';
import childProcess from 'child_process';

// using cult (https://github.com/typicode/cult) instead of gulp in order to restart gulp on changes to this gulpfile

let spawn = childProcess.spawn;
let electron = electronConnect.server.create();

gulp.task('start', function() {
  electron.start();
});

gulp.task('transpile', function() {
  return gulp.src(['src/**/*.src.js'], {
      base: 'src'
    })
    .pipe(plumber())
    .pipe(babel({
      babelrc: false,
      plugins: ['babel-plugin-transform-es2015-modules-commonjs']
    }))
    .pipe(rename(/\.src\.js$/, '.js'))
    .pipe(gulp.dest('lib'));
});

let electronMocha = function(type, done){
  let test = false;
  if(type === "main"){
    test = spawn('electron-mocha', [
      '--require',
      'babel-core/register', 
      '--no-timeouts',
      'test/main'
    ]);
  } else if (type === "renderer") {
    test = spawn('electron-mocha', [
      '--renderer',
      '--require',
      'babel-core/register', 
      '--no-timeouts',
      'test/renderer'
    ]);
  } else {
    console.log("please specify 'main' or 'rendered'");
    return;
  }

  if(test){
    // electronMocha.stdout.setEncoding('utf8');
    test.stdout.on('data', function (data) {
      // console.log('stdout.on');
      process.stdout.write(data.toString());
    });

    test.on('error', function (err) {
      // console.log('on');
      console.log('Failed to start child process.');
    });

    test.on('close', function (code, signal) {
      // console.log('child process terminated with code: ' + code);
      // console.log('child process terminated due to receipt of signal: ' + signal);
      done();
    });
  };
};

gulp.task('test:main', function(done){
  // console.log('starting test:main');
  electronMocha("main", done);
});

gulp.task('test:renderer', function(done){
  electronMocha("renderer", done);
});

gulp.task('watch', function() {
  gulp.watch(['src/**/*.src.js'], gulp.series('transpile', electron.restart));
  gulp.watch(['views/**/*.html'], gulp.series(electron.reload));
});

gulp.task('default',
  gulp.series(
    'transpile',
    gulp.parallel('start', 'watch')
  )
);