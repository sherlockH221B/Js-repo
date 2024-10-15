// console.log("Hello World");
// console.log(typeof "Dave");
// console.log(typeof "42");
// console.log(typeof true);

// TUT 3 String Methods & Properties


// Strings

const myVariable = "Mathematics";


//Length Property
console.log(myVariable.length);

//String Methods
console.log(myVariable.charAt(5));

//Indexof Methods
console.log(myVariable.indexOf("at"));

//Last indexof 
console.log(myVariable.lastIndexOf("ath"));

//Slice Methode
console.log(myVariable.slice(5,6));

//To Uppercase Methods
console.log(myVariable.toUpperCase());

//Includes method
console.log(myVariable.includes("Div"));

//Split Method
console.log(myVariable.split("e"));
console.log(myVariable.split(""));
console.log("John,Jessica,jonathan,hona".split(","));


//+++++++++++++++ Video 4 JavaScript Numbers and Numbers methods+++++++++++++++++++++
//Numbers

// An Integer is a whole Number 
const myNuber = 42;

//A Number with a decimal point is a float which reference the "Floating Point"

const myFloat = 42.0;

const myString = "42";

console.log(myNuber === myFloat);

console.log(Number(myString) === myFloat );
console.log(Number("Dave"));


//?????????????? Number Methods ?????????????????????????


//is Integer Mehtod
console.log(Number.isInteger(myFloat));

//Parse Float() Method returns floating point number and I number is not a number it will give NaN
console.log(Number.parseFloat(myString));
console.log(Number.parseFloat(myFloat));

//tofixed() Method
console.log(myFloat.toFixed);

//ParseInt() Method
console.log(Number.parseInt(myFloat));
console.log(Number.parseInt(myNuber));

//to string method
console.log(typeof myNuber.toString());


//Chaining = Using several method to chained together 

console.log(Number.parseFloat("4.237abc").toFixed(2).toString());


//NaN is a acronym for not a Number 

//the global isNaN() Function determines whether a value is Nan or not.

console.log(Number.isNaN("Dave"));



//+++++++++++++++++++ Math Object Methods and How to generate a random Number++++++++++++

console.log(Math.PI);
console.log(Math.trunc(Math.PI));
console.log(Math.round(Math.PI));
console.log(Math.ceil(Math.PI));
console.log(Math.floor(Math.PI));
console.log(Math.pow(2, 10));
console.log(Math.min(2, 0.5, 9));
console.log(Math.max(2, 0.5, 9));
console.log(Math.random());// Its 0 to 1 range include 0 but not include 1

// From 1 to 10
console.log(Math.floor(Math.random() * 10) + 1);

//Note : We always use floor not Ceil because using ceil method there is chnace to generate 0


//+++++++++++++++++++++++ Video 6 Problem Solving Generate Random Letter +++++++++++++++++++++++++++







































