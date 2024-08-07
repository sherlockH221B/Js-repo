let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

//let myCreatedDate = new Date(2024, 0, 29)
// let myCreatedDate = new Date(2024, 0, 29)
// let myCreatedDate = new Date(2024, 0, 29, 5, 3)
//let myCreatedDate = new Date(2024-01-29);

console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Ma.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth());

//`${newDate.getDay()} and the time`

newDate.toLocaleString('Default', {
    weekday: "long",
})



