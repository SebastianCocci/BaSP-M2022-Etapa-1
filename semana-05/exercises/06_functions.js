console.log ('--EXERCISE 6: FUNCTIONS');

/* a) Create a sum function that receives two numeric values ​​and returns the result.
 Execute the function and save the result in a variable, 
 showing the value of said variable in the browser console.*/

 console.log ('-Exercise 6.a:');

function sum(a, b) {
    return a + b;
}
var resultSum = sum(80, 150);

console.log(resultSum);

/* b) To the previous sum function, add a validation to control if any of the parameters is not a number, 
show an alert clarifying that one of the parameters has an error and return the NaN value as a result.*/

console.log ('-Exercise 6.b:');

function validateAndSum(a, b){

    if (typeof a !== number){
        alert('The first variable is not a number');
        return NaN;
    } 
    else if (typeof b !== number){
        alert('The second variable is not a number');
        return NaN;
    }
    else{
        return a + b;
    }
}
var resultAlteredSum = sum(5, 'p');
console.log(resultAlteredSum);

/* c) Create a validate integer function that takes a number as a parameter and 
returns true if it is an integer.*/

console.log ('-Exercise 6.c:');

function validateInteger(number){
    if (number % 1 == 0){
        return true;
    }
    else {
        return false;
    }
}
console.log(validateInteger(8.6));

/* d) To the sum function of exercise 6b) add a call that validates that the numbers are integers. 
In case there are decimals,show an alert with the error and return the number converted to integer (rounded).*/

 console.log ('-Exercise 6.d:');

function completeValidateAndSum(param1, param2){
    if (typeof param1 !== 'number'){
        alert('The first variable is not a number');
        return NaN;
    }
    else if (typeof param2 !== 'number'){
        alert('The second variable is not a number');
        return NaN;
    }
    else if (param1 % 1 != 0 || param2 % 1 != 0) {
        alert('One of the parameters is not integer. The result is going to be rounded.');
        return Math.round(param1 + param2);
    } 
    else{
        return param1 + param2;
    }
}
console.log(completeValidateAndSum(15, 4.98));

/* e) Convert the validation of exercise 6b) into a separate function and call it within the sum function, 
checking that everything continues to work the same.*/
 
console.log ('-Exercise 6.e:');

function validate(num){
    if(num % 1 == 0){
        return true;
    }
    else{
        return false;
    }
}

function completeValidateAndSum(param1, param2){
    if (typeof param1 === 'number' && typeof param2 === 'number'){
        if(validate(param1) && validate(param2)){
            return param1 + param2;
        }
        else{
            alert('Their are not integers');
            return Math.round(param1 + param2);
        }
    }
    else{
        alert('Their are not numbers');
 
        return NaN;
    }
}

console.log(completeValidateAndSum(5, 4.98));


















