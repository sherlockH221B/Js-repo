//DataTypes


//Note: Check all the String Methods Available in browser
//console.log("Hello " + " World");
const name = "Sherlock"
const repoCount = 50;

console.log(`Hello my name is ${name} and my repo ${repoCount}`);

const gameName = new String('Sherlock')

console.log(gameName.lenth);
console.log(gameName.toLowerCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = " hitesh   ";
console.log(newStringOne)
console.log(newStringOne.trim());


const url = "https://sherlock.com/sherlock%20homes"
console.log(url.replace('%20','-'))
console.log(url.includes('sher'))
console.log(url.includes('sher'))
console.log(url.split('-'));