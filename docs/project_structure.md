PROJECT STRUCTURE
=================

- **db/** *database - [GunDB](http://gun.js.org/enterprise/)*
- **docs/**
  - github.md  
  - todo.md  
  - markdown.md
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
- .babelrc
- .gitattributes
- .gitignore *lists what should be ignored for git repo*
- README.md  *links to further documentation in the docs dir*
- gulpfile.babel.js
- package.json *lists project info and package dependencies*

