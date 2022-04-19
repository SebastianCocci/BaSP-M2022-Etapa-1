console.log ('--EXERCISE 4: If Else');

/* Create a random number between 0 and 1 using the Math.random() function,
if the value is greater than or equal to 0.5, display an alert with the message “Greater than 0.5”
and if not an alert with the message “Lower than 0.5”. */

console.log ('-Exercise 4.a:');

    var num = Math.random();

    console.log(num);

if (num >= 0.5){
    alert('Greater than 0,5');
}
else{
    alert('Lower than 0,5');
}

/* Create a variable “Age” that contains an integer between 0 and 100
and display the following alert messages:*/

console.log ('-Exercise 4.b:');

var age = Math.floor(Math.random() *100);

console.log(age);

if (age < 2){
/* if the age is less than 2 years */
    alert('Baby');
}
else if(age>=2, age<= 12){
/* between 2 and 12 years */
    alert('Kid');
}
else if(age>=13, age<=19){
/* between 13 and 19 years */
    alert('Teenager');
}
else if(age>=20, age<=30){
/* between 20 and 30 years */
    alert('Young');
}    
else if(age>=31, age<=60){
/* between 31 and 60 years */  
    alert('Adult');
}
else if(age>=61, age<=75){
/* between 61 and 75 years */    
    alert('Elderly');
}
else{
/* older than 75 years */    
    alert('Old man');
}
