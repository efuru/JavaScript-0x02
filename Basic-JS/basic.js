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

//Create Decimal Numbers
var myDecimal = 7.7;

//Multiply Two Decimals
const productof = 2.0 * 2.5;

//Divide One Decimal by Another 
const quotient1 = 4.4 / 2.0; 

//Finding a Remainder
const remainder = 11 % 3;

//Compound Assignment With Augmented Addition
//so instead of:
a = a + 12;
b = 9 + b;
c = c + 7;
//do this:
a += 12;
b += 9;
c += 7;

//Compound Assignment With Augmented Subtraction
//so instead of:
a = a - 6;
b = b - 15;
c = c - 1;
//do this:
a -= 6;
b -= 15;
c -= 1;

//Compound Assignment With Augmented Multiplication
//so instead of:
a = a * 5;
b = 3 * b;
c = c * 10;
//do this:
a *= 5;
b *= 3;
c *= 10;

//Compound Assignment With Augmented Division
//so instead of:
a = a / 12;
b = b / 4;
c = c / 11;
//do this:
a /= 12;
b /= 4;
c /= 11;

//Escaping Literal Quotes in Strings: escape with backslash
const myStr = "I am a \"double quoted\" string inside \"double quotes\".";

//Quoting Strings with Single Quotes
const goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"'; 
//const badStr = 'Finn responds, "Let's go!"';
const myStr1 = '<a href="http://www.example.com" target="_blank">Link</a>';

/*Escape Sequences in Strings

Code	Output
\'	single quote
\"	double quote
\\	backslash
\n	newline
\t	tab
\r	carriage return
\b	backspace
\f	form feed
*/
/*task;
Assign the following three lines of text into the single variable myStr0 using escape sequences.

FirstLine
    \SecondLine
ThirdLine
*/
const myStr0 = "FirstLine\n\t\\\SecondLine\nThirdLine"; 

//Concatenating Strings with Plus Operator
const myStr2 = "This is the start." + " This is the end.";

//Concatenating Strings with the Plus Equals Operator
let myStr3 = "This is the first sentence.";
myStr += " This is the second sentence.";

//Constructing Strings with Variables
const ourName = "freeCodeCamp";
const ourStr = "Hello, our name is " + ourName + ", how are you?";
const myName = "Efuru";
const myNameIs = "My name is " + myName + "and I am well!";

//Appending Variables to Strings
const someAdjective = "cool!";
let myStr4 = "Learning to code is ";
myStr += someAdjective;

//Find the Length of a String