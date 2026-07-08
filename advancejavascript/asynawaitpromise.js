// const gettimeclock =()=>
// {
//     return new Date().getHours +":"+ new Date().getMinutes+":"+new Date().getSeconds
// }
// function getsynchoroulsly()
// {
//    return "hello";
// }
// function getHelloFromPromise()
// {
//     return Promise.resolve("hello Promise")
// }
// function getHelloByDelay()
// {
//     return new Promise(function(resolve)
//     {
//     setTimeout((function()
//        {
//         resolve("hello")
//        },2000)
//       )
//     }
//   )
// }
// async function caller()
// {
//     const messagehello=await getsynchoroulsly()
//     console.log(gettimeclock(),messagehello)

//     const messagehellopromise=await getHelloFromPromise()
//     console.log(gettimeclock(),messagehellopromise)

//     const messagehellobydelay= await getHelloByDelay()
//     console.log(gettimeclock(),messagehellobydelay)
// }
// caller()





const getTimeClock =() =>{

    //Date- get current time
    //curent year/hours/min/sec
    return new Date().getHours()
    +":"
    +new Date().getMinutes()
    +":"
    +new Date().getSeconds()
};

function getSynchronousMsg(){
    return "hello";
}
function getHelloFromAPromise(){
    return Promise.resolve('Hello-promise');
}

function getHollaWithDelay(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){resolve('holla');
    },4000);
    });
}

async function caller(){

    const MessageHello=  getSynchronousMsg();
    console.log(getTimeClock(),MessageHello);

    const MessageHelloPromise= await getHelloFromAPromise();
    console.log(getTimeClock(),MessageHelloPromise);

    const MessageHolla= await getHollaWithDelay();
    console.log(getTimeClock(),MessageHolla);
}
caller();