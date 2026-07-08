function person(firstname, lastname, age) {
  const person = {};
  person.firstname = firstname;
  person.lastname = lastname;
  person.age = age;
  return person;
}
const mike = person("eswar", "champati", 19);
console.log(mike);

//factory function is a function in which we create an object without the new keyword and we return that object
