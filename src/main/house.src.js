export default class House {

  constructor(type='wood', cb){
    this.type = type;
    setTimeout(function( ){
      cb();
    },2000)
  };

  static factory(type, cb){
    return new House(type, cb);
  }
};
