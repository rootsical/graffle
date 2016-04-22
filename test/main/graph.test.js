import assert from 'assert';
import path from 'path';
import fs from 'fs-extra';
import Graph from '../../lib/main/graph.js';

describe('graph', function(){
  
  // console.log(`__dirname is ${__dirname}`);
  // console.log(`cwd is ${process.cwd()}`);

  it('simple test', function(){
    assert.equal(1,1);
  });

  describe('constructor', function(){

    it('constructor sets default database dir path', function(){
      let g = new Graph();
      assert.equal(g.dir, path.join(process.cwd(), 'db'));
    });

    it('constructor sets provided database dir path', () => {
      let g = new Graph('myDir');
      assert.equal(g.dir, path.join(process.cwd(), 'myDir'));
    });
    
  });

  describe('open', function(){
    it('handle to existing graph', function(done){
      var g = Graph.open('db')
        .then(function(graph){
          console.log('promise returned');
          assert.equal(graph.dir, path.join(process.cwd(), 'db'));
          done();
        })
        .catch(function(err){
          console.err(err);
        });
    });
  });

});