const userEmail = "s@herlock.com"

if (userEmail) {
    console.log("Got user Email");          
} else {
    console.log("Dont have user email");    
}

// Falsy Value 
//false, 0, -0, BigInt 0n, "", null, undefined, NaN.

//Truthy Value
// "0", 'false', " ", [], {}, function(){},


// Nullish Coalescing Operator (??): null undefined

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ?? 15
val1 = null ?? 10 ?? 50

console.log(val1);
console.log(val1);
console.log(val1);

//++++++++++++++++++++++++++++++++++++++++++++

// Terniary Operator
//condition ? true : false

const iceTeaprice = 100
iceTeaprice <= 80 ? console.log("Less then 80") : console.log("More than 80");



