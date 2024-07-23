// Singleton || it made by only constructor not with literals 

// Objects literal

const mySym = Symbol("Key1");


const JsUser = {
    name: "Sherlock",
    age: "18",
    [mySym]: "myKey1",
    location: "Jaipur",
    email: "sher@lock.com",
    lastLoginDays: ["Monday", "Saturday"]
    
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser[mySym]);


// JsUser.email = "sher@locked.com"
// Object.freeze(JsUser)
// JsUser.email = "sher@homes.com"
// console.log(JsUser);





JsUser.greeting = function(){
    console.log("Hello Js User");
}
console.log(JsUser.greeting());
JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}
console.log(JsUser.greetingTwo());


//+++++++++++++++++++++++++++++++++++++++++++++

//Object vPart 2

