function logA()
{
    console.log("in LogA")
}
function logB()
{
    console.log("in LogB")
}
function logC()
{
    console.log("in LogC")
}
function logD()
{
    console.log("in LogD")
}

logA()                         //goto call stack
setTimeout(logB,2004)          //goto call back queue
Promise.resolve().then(logC)   //goto micro task quue 
logD()                         //goto call stack
    
