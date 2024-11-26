
// function declearations..

function add(num1,num2){    
    return num1+num2
}

//function expressions..
// const addTwo = function(num1,num2){    
//     return num1+num2
// }

// //what is first class function => when a function pass to a function as an argument or when return from a function we say it is first class function

// function disPlayAddTwo(func){
//     console.log(func(5,5))
// }

// disPlayAddTwo(add);

// function disPlayAddTwo(func){
//     return func(5,5);
// }

// console.log(disPlayAddTwo(add));

// // IIFE => Immediately Invoked Function Expression

// (function square(num){
//     console.log(num*num)
// })(10);  // (10) is the function calling with argument num value 10.

// (function (x){
//     return (function (y){
//         console.log(x)
//     })(5);
// })(3);

// x->3,y->5 pass as a argument.

// function scope

var num1 = 10;
var num2 = 20;
var namee = "Tushar"
function add(){
    return num1+num2;
}

// console.log(add()); // return 30

function getScore(){
    var num1 = 2;
    var num2 = 3;

    function multiply(){
        return namee +'----'+ num1*num2;
    }
    return multiply();
}
// console.log(num1+num2);
// console.log("getScore",getScore()); 


//Q7.---------------------------------------------------------------------

// for(let i = 0;i<=10;i++){

//     setTimeout(()=>{
//      console.log(i,'->'+ Date.now())
//     },i*1000)
// }
// let have block scope but var have global scope
// for(var i = 0;i<10;i++){

//     setTimeout(()=>{    
//      console.log(i,'->'+ Date.now())
//     },i*1000)
// }

//Q8.---------------------------------------------------------------------

// functionName()
function functionName(){
    console.log("functionNameRun")
}
// functionName()

// both cases o/p -> functionNameRun because is hoisted completely.not like a variable

//Q9.---------------------------------------------------------------------

var x = 21
var fun = () =>{
  console.log(x)
  var x = 20
};

fun()

// when it goes to function Execution context(local of x) x agian hoisted and then it will get undefine 

//Q10.---------------------------------------------------------------------
// spread vs rest operator

function adds(...args){ // rest operator when we use aa s parameter
    console.log(args)
}

// const arr = [1,4,5] 
// adds(...arr) // spread operator when we use a argument

// const fn = (x,r,a,b,...arr) => {
//  console.log(a,b)
// }

const arr = [1,2,3,4,5]
// fn(...arr)

//Q11.---------------------------------------------------------------------

//example of call back function

// document.addEventListener("click",()=>{
   

// },false)

//Q12.---------------------------------------------------------------------

//arrow vs normal function

// 1.synax
// function square(x){
//  return (x*x)
// }

// const square = (x) => (x*x)

// 2.implecit return Keyboard

// 3. arguments keyword => can't have argument keyword in arrow function

// function fn(){
//     console.log(arguments)
// }
// fn(1,2,3,4,5)
// const fn = () => {
//     console.log(arguments)
// }
// fn(1,2,3,4,5)

// 4. this keyword

 const user={
     username:"tushar",
     rc1:()=>{
         console.log("inside arrow function -> "+this.username)
     },
     rc2(){
        console.log("inside normal function-> "+this.username)
     }
 }

 user.rc1()
 user.rc2()