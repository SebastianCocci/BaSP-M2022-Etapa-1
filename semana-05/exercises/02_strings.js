console.log ('--EXERCISE 2: STRINGS');

/*Create a variable of type string with at least 10 characters 
and convert all text to uppercase (use toUpperCase).*/

console.log ('-Exercise 2.a:');

var rengaString = 'and in the untimely addition of the squared sides, one side would be missing';

console.log (rengaString.toUpperCase());

/* Create a variable of type string with at least 10 characters and generate a new string 
with the first 5 characters saving the result in a new variable (use substring). */

console.log ('-Exercise 2.b:');

var halfString = rengaString.substring(0, 5);

console.log(halfString);

/* Create a variable of type string with at least 10 characters and generate 
a new string with the last 3 characters saving the result in a new variable (use substring). */

console.log ('-Exercise 2.c:');

var finalPart = rengaString.substring(73)

console.log (finalPart);

/* Create a variable of type string with at least 10 characters and generate a new string 
with the first letter in uppercase and the rest in lowercase. 
Save the result in a new variable (use substring, toUpperCase, toLowerCase and the + operator). */

console.log ('-Exercise 2.d:');

var radiumRocket = 'radium Rocket';

var firstLetter = radiumRocket.substring(0, 1).toUpperCase();

var lowerLetter = radiumRocket.substring(1).toLocaleLowerCase();

var capitalLetter = firstLetter + lowerLetter;

console.log (capitalLetter);

/* Create a variable of type string with at least 10 characters and some white space.
 Find the position of the first white space and store it in a variable (use indexOf) */

console.log ('-Exercise 2.e:');

var courseRadium = 'radium rocket course'

var blanckSpace = courseRadium.indexOf(' ');

console.log(blanckSpace);

/* Create a variable of type string with at least 2 words long (10 characters and some space in between).
Use the methods from the previous exercises to generate a new string
have the first letter of both words capitalized and the other letters lowercase
(use indexOf, substring, toUpperCase, toLowerCase and the + operator). */

console.log ('-Exercise 2.f:');

var difficultJs = 'javascript difficulty';

var blanckSpace = difficultJs.indexOf(' ');

var firstWord = (difficultJs.substring(0, 1).toUpperCase()) + (difficultJs.substring(1, 11).toLowerCase());

var secondWord = (difficultJs.substring(11, 12).toUpperCase()) + (difficultJs.substring(12).toLowerCase());

var completeWord = firstWord + secondWord;

console.log(completeWord);