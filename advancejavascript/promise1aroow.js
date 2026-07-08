let promise=new Promise((resolve,reject) =>
                       {
                         let a=1+1
                         if(a==2)
                          resolve(`successful`)  
                         else
                          reject(`failured`)
                       })
promise.then((message)=>
    console.log("this message is "+message)
)
promise.catch((message)=>
    console.log("this result of the promise is "+message)
)