# GRAFFLE #
application to learn graph databases in javascript. i am just using this as a learning exercise and am only working on it from time to time..

# SETUP & DEPENDENCIES #

Uses:
- Electron
- Babel 6
- Gulp 4

## INITIALISE PROJECT ##
```
npm init
```

## GLOBAL ##
```
npm install -g gulp-cli electron-prebuilt mocha electron-mocha cult
```

## PROJECT DEPENDENCIES ##
```
// none at the moment
```

## DEVELOPMENT DEPENDENCIES ##
```
npm install --save-dev \
  "gulpjs/gulp#4.0" \
  babel-core \
  babel-plugin-transform-es2015-modules-commonjs \
  babel-preset-es2015 \
  gulp-babel \
  gulp-plumber \
  gulp-regex-rename \
  gulp-nodemon \
  electron-prebuilt \
  electron-connect \
  electron-mocha \
  fs-extra \
  expect.js \
  markdown-include
```

# PROJECT STRUCTURE

- **db/** *database - [GunDB](http://gun.js.org/enterprise/)*
- **docs/**
  - github.md  
  - todo.md  
  - markdown.md
  - README.md *will be compiled to project root using markdown-include*
- **lib/** *javascript code*
  - common/
  - main/
     - app.js
  - renderer/
- **node_modules/** *this is where package dependencies are stored. some packages will also need to be installed globally*
- **src/**  *contains code that will be transpiled/compiled. ie stylus to css and es2015 using babel*
  - main/
     - app.src.js *source code for electron main process*
  - renderer/ *source code for electron renderer process*
  - stylus/
     - main.styl
- **styles/** *css compiled from stylus*
  - main.css
- **test/** *tests using [electron-mocha](https://github.com/jprichardson/electron-mocha)*
  - main.test.js
- **views/** *views are written in html but considering handlebars templating engine*
  - main.index
- .babelrc *configuration for transpiling with babel*
- .gitattributes
- .gitignore *lists what should be ignored for git repo*
- README.md  *project documentation with links to further info in the docs dir*
- gulpfile.babel.js *gulp tasks defined here*
- markdown.json *configuration to compile docs with markdown-include*
- package.json *lists project info and package dependencies*


# TO DO #

## TO DO (now): ##
- [ ] learn how to vary tasks according to environment (production/development)
- [ ] remove leveldb docs
- [ ] concatenate README.md in gulp task for easier viewing
- [ ] look at representing nodes/edges in javascript
- [ ] find suitable database for simple persistence
- [ ] learn gremlin language
- [ ] learn javascript es classes
- [ ] learn javascript es iterators

## TO DO (long term): ##
- [ ] visualization of graph database
- [ ] learn functional programming
- [ ] learn how to do testing for an application

## DONE: ##
- [x] error reporting from transpiled code (sourcemaps)
- [x] work out if you can just transpile modules (with babel) and use other es next features natively

## ABANDONED: ##



# LEARNING #
- [babel 6](./docs/babel_6.md)
- [electron](./docs/electron.md)
- [git and github](./docs/git.md)
- [gulp 4](./docs/gulp_4.md)
- [gulp and nodemon](./docs/gulp_nodemon.md)
- [npm](./docs/npm.md)
- [markdown-include](./docs/markdown_include.md)

# PLAN #
Project [plan](./docs/plan.md).
