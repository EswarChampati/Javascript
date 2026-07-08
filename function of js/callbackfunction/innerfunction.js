// function outer()
// {
//     function inner(){
//         console.log("this is the inner function ")
//     }
//     console.log ("this is the outer function")
// }
// outer()

function outer()
{
    function inner(){
        console.log("this is the inner function ")
    }
    console.log ("this is the outer function")
    inner()
}
outer()