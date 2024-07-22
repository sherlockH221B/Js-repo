//Datatypes of JS
// Js is Dynamically Type language() 

//premitive 
//(7) String, Number, Boolean, Null, Undefined, Symbol, BigInt.

const score = 100;
const scoreValue = 100.3
const isLoggedIn = false
let userEmail;
const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

const bigNumber = 3416849684651321654684684n



//non-premitive(Refrence Type)
//(3) Array, Objects, Functions.

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "Sherlock",
    age: 25,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof scoreValue);



//++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Lect 10 

// Stack(Primitive) and Heap(Non-Primitive)

let myYoutubename = "sherlock-homes.com"

let anotherName = myYoutubename
anotherName = "chaiAurCode"

console.log(myYoutubename)
console.log(anotherName)

let userOne{
    emai: "user@google",
    UPI: "hitesh@ybl"
}

