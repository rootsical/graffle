import assert from 'assert';
import fs from 'fs-extra';
import path from 'path';

describe('file system utils', function(){

  let dir, file;

  before(function(done){
    dir = path.join(__dirname, 'tmp');
    file = path.join(dir, 'test.txt');
    fs.mkdirs(dir, function(err){
      if(err) return console.log('error: ', err);
      done();
    });
  });

  after(function(done){
    fs.remove(file, function(err){
      if(err) return console.log('error: ', err);
      // console.log('clean up complete');
      done();
    });
  });

  it('write simple message to a file', function(){
    let msg = 'Hello, World!';
    fs.writeFile(file, msg, function (err) {
      if (err) return console.log('write simple message to a file: ', err);
      fs.readFile(file, 'utf8', function(err, value){
        if (err) return console.log('error: ', err);
        assert.equal(value, msg, 'value should be equal to msg');
      });
    });

  });
});