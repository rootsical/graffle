import expect from 'expect.js';
import Gun from 'gun-level';
import fs from 'fs-extra';

let db = null;

describe.only('gundb', function(){

  before(function(){
    // create a database before carrying out tests
    // console.log('creating db');
    db = new Gun({level: {path: 'db'}});
    // console.log('db created');
    db.put({
      title: 'hello note',
      contents: 'hello from gundb!'
    }).key('notes/hello', function(err){
      if(err) {
        console.log('error on setting key');
      } else {
        console.log('success on setting key');
      }
    });
    // populate database with some data

  });

  after(function(){
    
    // delete the database dir when tests are complete
    // console.log('removing db');
    fs.remove('db', function (err) {
      if (err) {
        return console.error('database dir not deleted: ', err);
      } else {
        console.log('database dir deleted');
      }
    });
  });

  it('creates a database', function(done){
    
    // check that the db directory 
    fs.ensureDir('db', function(err){
      expect(err).not.to.be(true);
      done();
    });

  });

  it('returns a value from an existing node', function(done){
    db.get('notes/hello').path('contents').val(function(data){
      expect(data).to.equal('hello from gundb!');
      done();
    });
  });

  it('creates a new node', function(done){
    db.put({
      title: 'new note',
      contents: 'this is a new note'
    }).key('notes/new', function(err){
      if(err) {
        console.log('error on setting key');
      } else {
        console.log('success on setting key');
      }
    });

    db.get('notes/new').path('contents').val(function(data){
      expect(data).to.equal('this is a new note');
      done();
    });
  });

});