console.log ('--EXERCISE 3: ARRAYS');

/* Given the following array: ["January", "February", "March", "April", "May", "June", "July", "August", 
"September", "October", "November", "December"] show by console the months 5 and 11 (use console.log). */

console.log ('-Exercise 3.a:');

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 
'September', 'October', 'November', 'December'];

console.log('months indicated', months[5], 'and', months[11]);

/* Sort the month array alphabetically and display it on the console (use sort). */

console.log ('-Exercise 3.b:');

console.log('months in alphabetical order: ', months.sort());

/* Agregar un elemento al principio y al final del array (utilizar unshift y push). */

console.log ('-Exercise 3.c:');

months.unshift('Argentina');

months.push('Uruguay');

console.log(months);

/* Remove an element from the beginning and the end of the array (use shift and pop). */

console.log ('-Exercise 3.d:');

months.shift();

months.pop();

console.log(months);

/* Reverse the order of the array (use reverse). */

console.log ('-Exercise 3.e:');

console.log(months.reverse());

/* Join all the elements of the array into a single string
where each month is separated by a hyphen - (use join). */

console.log ('-Exercise 3.f:');

var listMonth = (months.join('-'));

console.log(listMonth);

/* Create a copy of the month array containing May through November (use slice). */

console.log ('-Exercise 3.g:');

var newMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 
'September', 'October', 'November', 'December'];

var copyArray = newMonths.slice(4, 11);

console.log(copyArray);