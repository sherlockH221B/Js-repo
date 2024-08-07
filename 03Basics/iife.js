//console.log("Sherlock")

//Immedaitely Invoked Function Expression (IIFE))

(function chai() {
    //Named IIFE
    console.log(`DB Connected`);
})();

( (name) => {
    //Unnamed IIFE
    console.log(`DB Connected Two ${name}`);
}) ('Sherlock')