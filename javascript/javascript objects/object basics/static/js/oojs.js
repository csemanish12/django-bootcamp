const person = {
  name: ['Bob', 'Smith'],
  age: 32,
  gender: 'male',
  interests: ['music', 'skiing'],
  bio: function() {
    alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
  },
  greeting: function() {
    alert('Hi! I\'m ' + this.name[0] + '.');
  }
};

/*
an object is made up of multiple members, each of which has a
name (e.g. name and age above), and a value (e.g. ['Bob', 'Smith']
and 32). Each name/value pair must be separated by a comma, and the
name and value in each case are separated by a colon. The
syntax always follows this pattern:

const objectName = {
  member1Name: member1Value,
  member2Name: member2Value,
  member3Name: member3Value
};
*/

/* An object like this is referred to as an object literal — we've literally written out the object
contents as we've come to create it..
you accessed the object's properties and methods using dot notation. The object name (person) acts as
the namespace — it must be entered first to access anything encapsulated inside the object. Next you write a dot,
then the item you want to access — this can be the name of a simple property, an item of an array property, or a call
to one of the object's methods, for example:

## bracket notation:
Bracket notation
There is another way to access object properties — using bracket notation. Instead of using these:
eg; person['name']

It is no wonder that objects are sometimes called associative arrays — they map strings to values in the same way
that arrays map numbers to values.

## THIS keyword
The this keyword refers to the current object the code is being written inside — so in this case this is equivalent
to person.

*/
