
//Q1.--------------------------------------------------------------------
// what is scope chain => the order in which variable are access local scope to global scope first num -> then -> name -> then -> username 
var username="tushar";
function init() {
    let name = "Mozilla";
       function displayName(num) {
       console.log(name,username,num); 
  }
  return displayName;
}
init()(5); // when you return a function...

function abc(){
  var x = "Tushar"
  function xyz(){
    console.log(x,"Mukherjee")
  }
  xyz();
}

abc();

//example-2
const e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      // outer functions scope
      return function (d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}
//sum(1)(2)(3)(4)
console.log(sum(1)(2)(3)(4));

// write a function that allow you to do this.

var addSix = createBase(6);
addSix(10) // return 16
addSix(15) // return 21

 function createBase(num){
    return function(innerNum){
      return num + innerNum;
    } 
 }

 var addSix = createBase(10);
console.log(addSix(10)) // return 16
console.log(addSix(15)) // return 21


// function a(){
//   for(var i=0;i<3;i++){
//     setTimeout(()=>{
//       console.log(i)
//     },i*1000);
//   }
// }

// function a(){
//   for(let i=0;i<3;i++){
//     setTimeout(()=>{
//       console.log(i)
//     },i*1000);
//   }
// }

// a();

// but what if you can't change in let you have to use var ?!....
// answer = > by the help of closour 
function a(){
  for(var i=0;i<3;i++){
    function inner(i){
    setTimeout(()=>{
      console.log(i)
    },i*1000);
  }
  inner(i);
}
}

a();

// how would you use a closure to create a private counter ?

function counter(){
  var _counter = 0;

  function add(increment){
    _counter += increment
  }

  function retrive(){
    console.log("Counter",_counter)
  }
  return {
    add,
    retrive
  }
}

const c = counter();

c.add(5);
c.add(10);
c.retrive()

// What is module patter ?
// => when inside a iife(see code for better understanding) a private method and a public method present and 
// public method can access private method but outside private 
// method can't access , outside only public method access
// iy user want api call in private method he don't wanna make it public like this 
var Module = (function (){

  function PrivateMethod(){
     console.log("Private")
  }

  return {
    publicMethod:function(){
    console.log("Public")
    PrivateMethod()
  },
  };
})();

Module.publicMethod()
// Module.PrivateMethod() => here it is not accessable

/*
Modern JavaScript Alternative
With the introduction of ES6 modules, the module pattern can now be 
implemented more naturally using the import and export syntax.
// Private members are simply not exported
const privateValue = 42;

export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

so, not exported variable or functions can't be accessed in other module of code.
*/

// how you can make a function run only once ?...

let view;
function likeTheVideo(){
  view = "ABC"
  let called=0;

  return function(){
    if(called > 0){
      console.log("Already Called!")
    }else{
      view = "ABC"
      console.log(view);
      called++;
    }
  }
}

let isSubscribed = likeTheVideo();

isSubscribed();
isSubscribed();
isSubscribed()

// Implementation caching/Memoize function in js ?
const square = (num1,num2)=>{
  for(let i=1;i<=100000000;i++){}
    return num1*num2;
}

console.time("First Call")
console.log(square(2345,5544));
console.timeEnd("First Call")

console.time("second Call");
console.log(square(9876,6654));
console.timeEnd("second Call")


function myMemoize(fn){
  const res = {}
}