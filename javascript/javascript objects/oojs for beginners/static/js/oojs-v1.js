function createNewPerson(name){
const obj = {};
obj.name = name;
obj.greeting = function(){
  alert('hi i m '+ obj.name+ '.');
 };
 return obj;
}

function Person(first, last, age, gender, interests){
this.name = {
     first: first,
     last: last
     };
this.age = age;
this.gender = gender;
this.interests = interests;
this.bio = function(){
alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests.join(',')+ '.');
 };
this.greeting = function(){
 alert('hi i am '+this.name.first+'.');
 };
}

let person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);