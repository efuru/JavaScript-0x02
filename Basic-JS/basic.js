// inline comments

/* this is 
  a 
  multiple
  line
  comments*/

  var myName;

  //Storing Values with the Assignment Operator
var a;
a = 7;

//Assigning the Value of One Variable to Another
var a;
a = 7;
var b;
b = a;

//initializing variables with assignment operators
var a = 9;

//Declare string variables
var myFirstName = "Efuru";
var myLastName = "Anthony";

//uninitialized variables
var a = 5;
var b = 10;
var c = "I am a";
//
a = a + 1; //will give us 6
b = b + 5;//will give us 15
c = c + " String!"; //should give us "I am a String!"

//Understanding Case Sensitivity in Variables
// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

 //Differences Between the var and let Keywords
 //you can not delete a variable declared with var, you can only assign its value to another
 //So unlike var, when you use let, a variable with the same name can only be declared once.
let catName = "Oliver";
let catSound = "Meow!"; //idea way to go.

//Read-Only Variable with the const Keyword
// once a variable is declared with const it can not be reassigned
const favoritePet = "Dog";
favoritePet = Cat;

//const
const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line 

//addition
const sum = 10 + 10;

//substraction
const difference = 45 - 33;

//Multiplication
const product = 8 * 10;

//Division
const quotient = 66 / 33;

//incrementation
//this:
let myVariable = 87;
myVariable = myVariable + 1;
//gets to be this:
let myVar = 87;
myVar++;

//decrementation
//this:
let myVar1 = 11;
myVar1 = myVar1 - 1;
//gets to be this:
let myVar2 = 11;
myVar2--;