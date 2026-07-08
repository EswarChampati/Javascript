let promise = new Promise(function (resolve, reject) {
  let a = 1 + 1;
  if (a == 2) {
    resolve(`success`);
  } else {
    reject(`failure`);
  }
});
console.log(promise);

promise.then(function (message) {
  console.log("this message is " + message);
});
promise.catch(function (message) {
  console.log("this result of the promise is " + message);
});
