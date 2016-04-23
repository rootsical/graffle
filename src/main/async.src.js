
function run(generator) {
  let iterator;
  function process(result) {
    result.value.then(function(value){
      if(!result.done){
        process(iterator.next(value));
      } 
    });
  };
  iterator = generator();
  let next = iterator.next();
  process(next);
};


let async = {
  run
};

export default async;