// if

const isUserLoggedIn = true

if (2 != 3) {
    console.log("Executed");
}   

// 2 <= 2
// <, >, <=, >=, ==, !=, ===, !==

const temperature = 41

if (temperature != 50) {
    console.log("Temprature is less than 50");
}
console.log("Executed");


//++++++++++++++++++++++++++++++++++++++++++++++++


const score = 200

if (score > 100) {
    const power = "fly"
    console.log(`User power: ${power}`);
}
//++++++++++++++++++++++++++++++++++++++++

//const balance = 1000
//if (balance > 500) console.log("test"), console.log("test2");
//Not to write like above 

const balance = 1000
if (balance > 500) {
    console.log("Less than");
} else if (balance < 750) {
    console.log(("Less than 750"));   
} else if (balance < 1250) {
    console.log("balance less than 1250");
}


const UserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (UserLoggedIn && debitCard && 2==3){
    console.log("Allow to Buy Course");
}

if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("User Logged In");
}







