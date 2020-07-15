class Shape{
constructor(name, sides, sideLength){
 this.name = name;
 this.sides = sides;
 this.sideLength = sideLength;

 }

 calcPerimeter(){
 console.log(`${this.sides * this.sideLength}`);
 }
}

let square = new Shape('square', 4, 5);
square.calcPerimeter();

let triangle = new Shape('triangle', 3, 3);
triangle.calcPerimeter();

//class Square extends Shape{
// constructor(name, sides, sidesLength){
// super(sidesLength);
// this.sides = 4;
// this.name = 'square';
// }
//
// calcArea(){
//
// }
//}