import async from '../../lib/main/async.js';

describe('generators', function(done){

  function getStockPrice() {
    return new Promise(function(resolve, reject){
      setTimeout(function(){
        // resolve promise with the value 50
        resolve(50);
      }, 300);
    });
  };  

  function executeTrade() {
    return new Promise(function(resolve, reject){
      setTimeout(function(){
        console.log('trade completed');
        resolve();
      }, 300);
    });
  };

  it('use generator with promises', function(done){
    
    function *main(){
      try {
        let price = yield getStockPrice();
        if (price > 45) {
          yield executeTrade();
        } else {
          console.log('trade not made');
        }
      } catch (exception) {
        console.log('error!', exception.message);
      }
      done();
    };

    async.run(main);
  });

});