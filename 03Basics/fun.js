function sayMyname(){
    console.log("S");
    console.log("H");
    console.log("E");
    console.log("R");
    console.log("L");
    console.log("O");
    console.log("C");
    console.log("K");
}

//sayMyname()

// function addTwoNumone(num1, num2) {
//     console.log(num1 + num2);
// }

// addTwoNumone(3, 5)


function addTwoNum(num1, num2) {
    //let result = num1 + num2;
    //return result
    //console.log("Hitesh");//return nantar kahihi print kela tr te print hot nai tyala aadhi varchya olivar execute karava lagata.
    return num1 + num2
}

const result = addTwoNum(4, null)
console.log("Result: ", result);


function loginUserMessage(username = "User") {
    if (username === undefined) {
        console.log("please enter the username");    
        return
    }
    return `${username} just logged in` 
}

// console.log(loginUserMessage("hitesh"))
console.log(loginUserMessage());//not jaar kai pass kelach nai aala asel tar ans. undefined yet aaste.

