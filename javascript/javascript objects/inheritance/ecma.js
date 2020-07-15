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

class Teacher extends Person{
  constructor(first, last, age, gender, interests, subject, grade){
  super(first, last, age, gender, interests); //now this is initialized by calling parent constructor
  this._subject = subject;
  this.grade = grade;
  }

  get subject(){
  return this._subject;
  }

  set subject(newSubject){
  this._subject = newSubject;
  }
}
// We use _ to create a separate value in which to store our name property. Without using this convention, we would
//get errors every time we called get or set.

/*
Note: Because of the way JavaScript works, with the prototype chain, etc., the sharing of functionality between
objects is often called delegation. Specialized objects delegate functionality to a generic object type.
*/