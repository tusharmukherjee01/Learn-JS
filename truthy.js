
const userEmail = "tushar@gmail.com"

if(userEmail){
    console.log("Got user email");
}else{
    console.log("Don't have user email");
}

//falsey
//falsey values: 0,BigInt,-0,0n,"", null, undefined, NaN, false
//truthy values: "0", "false", " ", [], {}, function(){}, true


if(function(){}){
    console.log("true");
}else{
    console.log("false");
}

const emptyObj = {};

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}else{
    console.log("Object is not empty");
}

//In windows
//  false == 0 => true
//  false == '' => true
//  0 == '' => true

// Nullish coalescing operator (??) => null or undefined

val1 = 5 ?? 10;
console.log(val1);

// val1 = null ?? 10;
// console.log(val1);

val1 = undefined ?? 10;
console.log(val1);

val2 = null ?? 10 ?? 20 ?? 30;  // whatever is not null first value will be printed
console.log(val2);


// Ternary operator

console.log(0 ? "true" : "false");

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");