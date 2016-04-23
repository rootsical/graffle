## markdown-include ##

- install:  
`npm install markdown-include`

- create markdown.json file:  
```js
{
  "build" : "./README.md",
  "files" : ["./docs/README.md"]
}
```

- gulpfile:  
```js
import markdownInclude from 'markdown-include';

gulp.task('docs', function(){
  return markdownInclude('./markdown.json');
});
```