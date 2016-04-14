import expect from 'expect.js';

describe('renderer', function(){

  it('runs a simple renderer test to access document.body', function(){
    expect(document.body.tagName.toLowerCase()).to.be('body');
  });

  it('runs a simple test', function(){
    expect(1).to.be(1);
  });
});