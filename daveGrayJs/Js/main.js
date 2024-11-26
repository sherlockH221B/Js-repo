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


//+++++++++++++++++++++++ Video 6 Problem Solving Generate Random Letter ++++++++++++++++++++++++++

//write a problem to generate random letter 

"Tushar"
console.log("tushar".charAt());
console.log(Math.floor(Math.random() * 4 + 1));


const anyName = "Jonathan";
console.log(anyName.charAt(Math.floor(Math.random() * anyName.length)));


//+++++++++++++++++++++++ Video 07 If Statement +++++++++++++++++++

// Conditional 
// let soup = "chiken noodle soup"
// let reply;
// if (soup) {
//     reply = `Here's your order of ${soup}`;    
// }
// else{
//     reply = "Sorry We're runout."
// }
// console.log(reply);

//+++++++++++++++++Else IF++++++++++++++++++++
let customerIsBanned = false;
let soup = "Hot & Sour";
let crackers = true;
let reply;

if (customerIsBanned) {
    reply = "No Soup for you!";
} else if(soup && crackers){
    reply = `Here is your order of ${soup} & crackers`;
} else if(soup ){
    reply = `Here is your order of ${soup}`;
} else {
    reply = "Sorry we are out of Soup!";
}
console.log(reply);

//++++++++++++++++++++Decision Tree+++++++++++++++++++++++++++++++

if (playerone === computer) {
        //Tie Game
} else if(playerone == "rock") {
    if (computer === "paper") {
        //computer wins
    } else {
        //player wins
    }   
} else if (playerone === sisor) {
    if (computer === "paper") {
        // Player one wins
    } else {
        // Computer wins
    }

} else if (playerone === paper) {
    if (computer === "sisor") {
        //Computer wins
    } else {
        // Player One wins
    }
}





//+++++++++++++++++++++++ Video 08 Statement 

//Syntax of switch statement


switch (expressionOrValue) {
    case value1:
        
        //Run This Code
        break;
    case value2:
        
        //Run This Code
        break;

    default:
        break;
}




























































