import assert from 'assert';
import levelup from 'levelup';
import fs from 'fs-extra';

let db = null;

describe.skip('levelup', function(){

  describe('simple levelup', function(){

    before(function(done){
      // create a database before carrying out tests
      // console.log('creating db');
      db = levelup('db');
      // console.log('db created');

      // populate database with some data
      db.put('surname', 'smith', function(err){
        if(err) return console.log('error: ', err);
        // console.log('data added to database');
        done();
      });
    });

    after(function(done){
      
      // delete the database dir when tests are complete
      // console.log('removing db');
      fs.remove('db', function (err) {
        if (err) {
          return console.error('database dir not deleted: ', err);
        } else {
          // console.log('database dir deleted');
          done();
        }
      });
    });

    it('creates a database', function(done){
      
      // check that the db directory 
      fs.ensureDir('db', function(err){
        assert.ifError(err);
        // expect(err).not.to.be(true);
        done();
      });

    });

    it('returns a value from an existing entry', function(done){
      db.get('surname', function(err, value){
        if(err) return console.log('error: ', err);
        assert.equal(value, 'smith', 'value should equal "smith"');
        // expect(value).to.be('smith');
        done();
      });
    });

    it('creates a new node', function(done){
      db.put('age', '21', function(err){
        if(err) return console.log('error: ', err);
        // put has been successful, now get the value
        db.get('age', function(err, value){
          if(err) return console.log('error: ', err);
          // console.log('value is: ', value);
          assert.equal(value, 21, 'value should be equal to 21');
          // expect(value).to.be('21');
          done();
        });
      });
    });

  });

  describe('levelup with json', function(){

    before(function(done){
      // create a database before carrying out tests
      // console.log('creating db');
      db = levelup('./db', {
        valueEncoding: 'json'
      });
      // console.log('db created');

      let derossi = {
        lastName: 'De Rossi',
        number: 16
      };

      // populate database with some data
      db.put('derossi', derossi, function(err){
        if(err) return console.log('error: ', err);
        // console.log('derossi added to database');
        done();
      });
    });

    after(function(done){
      
      // delete the database dir when tests are complete
      // console.log('removing db');
      fs.remove('db', function (err) {
        if (err) {
          return console.error('database dir not deleted: ', err);
        } else {
          // console.log('database dir deleted');
          done();
        }
      });
    });

    it('creates a database', function(done){
      
      // check that the db directory 
      fs.ensureDir('db', function(err){
        assert.ifError(err);
        // expect(err).not.to.be(true);
        done();
      });

    });

    it('returns a value from an existing entry', function(done){
      db.get('derossi', function(err, data){
        if(err) return console.log('error: ', err);
        // expect(data.number).to.be(16);
        assert.equal(data.number, 16, 'data.number should be equal to 16');
        done();
      });
    });

    it('creates a new node', function(done){
      let florenzi = {
        lastName: 'Florenzi',
        number: 24
      };
      db.put('florenzi', florenzi, function(err){
        if(err) return console.log('error: ', err);
        // put has been successful, now get the value
        db.get('florenzi', function(err, data){
          if(err) return console.log('error: ', err);
          // console.log('data is: ', data);
          assert.equal(data.number, 24, 'data.number should be equal to 24');
          // expect(data.number).to.be(24);
          done();
        });
      });
    });

  });
});

