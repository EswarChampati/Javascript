//it will return a promise
//it is a easy way of creation of promise
async function f1() {
  return "hello";
}
f1().then((message) => {
  resolve(+message + "hello");
});
