// IIFE - Immediatly invoke function expression

// (function() {
//   var privateVar = "I'm private";
//   console.log(privateVar); // Works
// })();
// console.log(privateVar); // Error: privateVar is not defined


// ()()
//named IIFE
(function chai() {
    console.log("Tushar Mukherjee");
})();

// unnamed IIFE
((name)=> {
    console.log(`DB Connected ${name}`)
})("Tushar")