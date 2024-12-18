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
})();  // if you want to write two iife in a code you need to write this ; otherwise JS will not understand where iife end where next iife start

// unnamed IIFE

(()=>{
    console.log("Tushar---->")
})()
((name)=> {
    console.log(`DB Connected ${name}`)
})("Tushar")

(function(name){
    console.log(`My Name is ${name}`)
})("Khan")
/*
WHY NEED IIFE ?!...

Avoiding Global Scope Pollution:
IIFE creates a local scope, ensuring that variables inside it don't 
interfere with or pollute the global scope.

Data Privacy:
Variables declared inside an IIFE are not accessible outside, 
which helps in encapsulating data and keeping it private.

Avoiding Name Conflicts:
It helps prevent conflicts with other code or libraries by wrapping code 
in its own scope.

Initialization:
IIFEs are ideal for running initialization code once without creating 
unnecessary global variables.

In short: IIFEs are useful for isolating code, maintaining clean global 
scope, and executing code immediately.
*/