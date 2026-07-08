// let num1=10
// let num2=20
// let num3=30
// function add(n1,n2,n3)
// {
//     console.log(n1+n2+n3)
// }
// add(num1,num2)        //to prevent of getting nan we want to assign default value for the n3 in function declaration

function add1(n1, n2, n3 = 0) {
  return n1 + n2 + n3;
}
let result = add1;
console.log(result(num1, num2));
