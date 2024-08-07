//++++++++++++Global ANd Local
// let a = 10
// const b = 20
// var c = 30
var c = 300
let a = 300
// {} curly braces used in function and use in loop will define the scope

if(true){
    let a = 10
    const b = 20
    //var c = 30
    //console.log("INNER: a", a);
}

// console.log(a);
// console.log(b);
// console.log(c);


//+++++++++++ Scope 2 ++++++++++++++++



function one() {
    const username = "Sherlock"

    function two(){
        const website = "youtube"
        //console.log(username);
    }
    // console.log(website);

    //two()

}

one()

if (true) {
    const username = "Sherlock"
    if (username === "Sherlock") {
        const website = " sher"
        //console.log(username + website);
    }
    //console.log(website);
}

console.log(addone(5))
function addone(num) {
    return num + 1
}


//addTwo(5)
const addTwo = function(num) {
        return num + 2
}

