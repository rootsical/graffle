import assert from 'assert';

describe('renderer', function(){

  it('runs a simple renderer test to access document.body', function(){
    assert.equal(document.body.tagName.toLowerCase(), 'body');
  });

  it('runs a simple test', function(){
    assert.equal(1, 1);
  });
});