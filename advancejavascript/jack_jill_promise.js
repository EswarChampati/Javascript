let promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(`"hurray jack and jill are back with the water`);
  }, 2000);

  // setTimeout(function()
  // {
  //    reject(new Error("jack felt down and broke his crown,and the jill can tumbling after"))
  // },2000)
});

const grandparentscooking = () => {
  promise.then(function (result) {
    console.log(`${result} finally cooking of the vegtables are started`);
  });
  promise.catch(function (error) {
    console.log(`OMG  ${error}`);
  });
};
grandparentscooking();
console.log(promise);
