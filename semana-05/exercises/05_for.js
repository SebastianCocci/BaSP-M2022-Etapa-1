console.log ('--EXERCISE 5: FOR');

/* Create an array containing 5 words and iterate through that array using a JavaScript 
for loop to display an alert using each of the words. */

console.log ('-Exercise 5.a:');

var nombres = [ 'charlie', 'alexis', 'santiago', 'samuel', 'rodrigo'];

for(var i= 0; i< nombres.length; i++){
    alert(nombres[i]);
}

/* To the previous array, convert the first letter 
of each word to uppercase and show an alert for each modified word. */

console.log ('-Exercise 5.b:');

for(var i= 0; i< nombres.length; i++){
    nombres[i]= nombres[i].substring(0, 1).toUpperCase() + nombres[i].substring(1);
    alert(nombres[i]);
}

/* Crear una variable llamada “sentence” que tenga un string vacío, 
luego al array del punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable 
sentence. Al final mostrar una única alerta con la cadena completa. */

console.log ('-Exercise 5.c:');

var sentence = '';

for(var i= 0; i< nombres.length; i++){
    console.log(nombres[i]);
    sentence = sentence + nombres[i];
}

alert(sentence);

/* Create an empty array and with a for loop of 10 repetitions. Fill the array with the repetition number,
that is to say that at the end of the execution of the for loop there should be 10 elements inside the array,
from number 0 to number 9. Show the final array in the browser console (use console.log). */

console.log ('-Exercise 5.d:');

var emptyA = [];

for(var i= 0; i< 10; i++){
    emptyA.push(i);
}

console.log(emptyA);




