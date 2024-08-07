const user = {
    username: "Sherlock",
    price: 999,
    
    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
console.log(this);

// function chai() {
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

const chai = () => {
    let username = "hitesh"
    console.log(this);
}


chai()

// Explicite Return arrow Function
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3, 4));



//Implecite Return arrow Function 
//const addTwo = (num1, num2) => ( num1 + num2 )
//console.log(addTwo(3, 4));


const addTwo = (num1, num2) => ({username: "Sherlock"})
console.log(addTwo(3, 4));

const myArry = [2, 3, 8, 9]
myArry.forEach(() => ());

