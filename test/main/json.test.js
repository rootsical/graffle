import assert from 'assert';
// import expect from 'expect.js';
import fs from 'fs-extra';
import path from 'path';

describe('json', function(){

  // console.log('testing');
  let roma, derossi, dir, file;

  before(function(done){
    roma = {
      type: 'team',
      location: 'italy',
      name: 'AS Roma'
    };

    derossi = {
      type: 'player',
      lastName: 'De Rossi',
      team: roma,
      number: 16
    };

    dir = path.join(__dirname, 'tmp');
    file = path.join(dir, 'test.json');
    fs.mkdirs(dir, function(err){
      if(err) return console.log('error: ', err);
      done();
    });
  });

  after(function(done){
    fs.remove(dir, function(err){
      if(err) return console.log('error: ', err);
      
      // console.log('clean up complete');
      done();
    });
  });

  // TEST
  it('convert a nested object to a json string', function(){
    
    // console.log(derossi);
    // console.log(JSON.stringify(derossi));
    let json = JSON.stringify(derossi);
    assert.equal(json, '{"type":"player","lastName":"De Rossi","team":{"type":"team","location":"italy","name":"AS Roma"},"number":16}', "json should be equal to string");
    // expect(json).to.be();
  });

  // TEST
  it('write and read an object to a json file', function(done){
    // console.log('testing');
    fs.writeJSON(file, derossi, function (err) {
      
      if(err) return console.log('error: ', err);
      
      // console.log('json file written successfully');
      fs.readJSON(file, function(err, obj) {
        if(err) return console.log('error: ', err);
        
        // console.dir(obj);
        // console.log(JSON.stringify(obj));
        // console.log(JSON.stringify(derossi));
        assert.equal(JSON.stringify(obj), JSON.stringify(derossi));
        done();
      });
    });
    
  });

});