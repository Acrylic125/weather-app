const util = require("util");


util.promisify()

// Adapted from https://javascript.info/promisify
function promisify(f) {
  return function (...args) {
    // return a wrapper-function (*)
    return new Promise((resolve, reject) => {
      function callback(err, result) {
        // our custom callback for f (**)
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      }

      console.log(args);
      args.push(callback); // append our custom callback to the end of f arguments

      f.call(this, ...args); // call the original function
    });
  };
}

const p1 = promisify(([args, executor]) => {
  console.log("ABC " + a);
  executor(null, "hello");
});

p1();
p1(3).then((v) => console.log(v));
p1();
p1();
p1();
