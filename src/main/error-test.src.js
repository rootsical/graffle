
let msg = 'this file is going to throw an error';
function printMsg() {
  console.log(msg);
}

let crap = function(crap){
  console.log(crap)
})mistake

export {msg, printMsg};


throw new Error("error thrown on purpose");