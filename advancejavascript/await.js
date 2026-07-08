// //it will wait until the promise is executed
// async function f1()
// {
//     let promise=new Promise((resolve,reject) =>{
//         setTimeout(() => {
//             resolve("done")
//         },5005);
//         let result= await promise
//         console.log(`${result}`)
//     })
// }
// f1()

async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done"), 6000);
  });

  //promise always gets highest priority in execution
  let result = await promise;
  console.log(`success - the resuly is ${result}`);
  console.log("hello");
  console.log("blockchain");
}

f();
