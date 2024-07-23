//array

const myArr = [0, 1, 2, 3, 4, 5]
const myHero = ["arrow", "flash"]

const myArr2 = new Array(1, 2, 3, 4)
//console.log(myArr[0]);

//Array methods

// myArr.push(6)
// myArr.push(8)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()


// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));


const newArr = myArr.join()
// console.log(myArr);
// console.log(typeof newArr)
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Slice, Splice
//  console.log("A ", myArr);

 const myn1 = myArr.slice(1, 3)
 
//  console.log(myn1);
//  console.log(" B", myArr);


 const myn2 = myArr.splice(1, 3)
//  console.log("C ", myArr);
//  console.log(myn2);


 //===========================+++++++++++++


// Array 2
const marvel_heros = ["Thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);


const another_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, 10. [11, 12, 13]]]
const simplified_another_array = another_array.flat(Infinity)
console.log(simplified_another_array);


console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({name: "hitesh"})); //Intresting... ...

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));











































