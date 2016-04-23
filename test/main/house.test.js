import assert from 'assert';
import House from '../../lib/main/house.js';

describe('house', function(){

  it('should have access to class properties', function(done){
    let stoneHouse = House.factory('stone', function(){
      // console.dir(stoneHouse);
      assert.equal(stoneHouse.type, 'stone');
      done();
    });
  });

});