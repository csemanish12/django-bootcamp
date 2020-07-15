//ecmaScript introduces class syntax
/*
Note: This modern way of writing classes is supported in all modern browsers, but it is still worth knowing about the
underlying prototypal inheritance in case you work on a project that requires supporting a browser that doesn't support
this syntax (most notably Internet Explorer).
*/

class Person{
constructor(first, last, age, gender, interests){
 this.name = {first, last};
 this.age = age;
 this.gender = gender;
 this.interests = interests;

 }

 greeting(){
 console.log(`Hi this is ${this.name.first}`);
 };

 farewell(){
 console.log(`${this.name.first} has left`);
 };
}