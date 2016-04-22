import fs from 'fs-extra';
import path from 'path';

export default class Graph {
  
  constructor(dir='db'){
    console.log('hello from constructor');
    this.dir=path.join(process.cwd(), dir);
  };

  static open(dir='db'){

    return new Promise((resolve, reject) => {
      fs.ensureDir(path.join(process.cwd(), dir), function(err){
        if(err) reject(err);
        resolve(new Graph(dir));
      });
    });
  };
};
