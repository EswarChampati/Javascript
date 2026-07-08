// // // function add(a,b)
// // // {
// // //     return a+b
// // // }
// // // let result=add(5,6)
// // // console.log(result)          //for printing lets use another function


// // function Add(a,b)
// // {
// //     let value=a+b
// //     print(value)
// // }
// // function print(result)
// // {
// //     console.log(result)
// // }
// // Add(4,5)   //we can modify the above the function for that check the down function



// function Sum(a,b,handle)
// {
//     let result=a+b
//     handle(result)           //it is a call back function
// }
// function print(result)       //reason to use the another function for printing will be know in below example
// {
//     console.log(result)
// }
// Sum(5,6,print)


function add(a,b,handle)
{
    let result=a+b;
    handle(result)
}
function print(rel)
{
    console.log(`${rel}`)
}
function sendrequest(servernumber)
{
    console.log(`wait for some time we are sending request to the port number ${servernumber}`)
}

add(2000,1000,sendrequest)   // we have the control to the which function to call