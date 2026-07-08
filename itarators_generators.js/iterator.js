const frontend = ["HTMl", "CSS", "javascript", "ReactJS"];
let itr = frontend[Symbol.iterator]();
let firstone = itr.next().value;
console.log(firstone);

let secondone = itr.next();
console.log(secondone);

let thirdone = itr.next();
console.log(thirdone);

let fourthone = itr.next();
console.log(fourthone);

console.log(itr.next());
