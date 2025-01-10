/*
In JavaScript, call, apply, and bind are methods used to explicitly set the this context for a function

1.call: Invokes a function immediately, with a specified this context and arguments passed individually.

2.apply: Similar to call, but arguments are passed as an array or array-like object

3.bind: Returns a new function with the this context and optional arguments pre-set. The new function can be invoked later.
*/

//what is call ?
// var obj = {name:"Tushar"}

// function sayHello(age){
//     return "Hello " + this.name + age;
// }

// console.log(sayHello.call(obj, 24))

// what is apply ?

// var obj = {name:"Tushar"}

// function sayHello(age,proffesion){
//     return "Hello " + this.name + age + proffesion;
// }

// console.log(sayHello.apply(obj,[24,"Student"]))


//what is bind

var obj = {name:"Tushar"}

function sayHello(age,proffesion){
    return "Hello " + this.name + age + proffesion;
}

const bindFunc = sayHello.bind(obj);

console.log(bindFunc(24,"SWE"))
console.log(bindFunc(87,"MEE"))

//Q-1

// const person = {name:"Tushar"}

// function sayHii(age){
//     return `${this.name} is ${age}`;
// }

// console.log(sayHii.call(person,24));
// console.log(sayHii.bind(person,29))

//Q-3
const age = 10;

var person = {
    name:"Tushar",
    age:20,
    getAge:function(){
        return this.age
    }
}

var person2 = {age2:30}

console.log(person.getAge.call(person2))

//Q-4

const animal = [
    {species:"Lion",name:"King"},
    {species:"Whale",name:"Queen"}
];


function printAnimals(i){
    this.print = function(){
        console.log("#"+i+" "+this.species+":"+this.name)
    }
    this.print()
}

for(let i=0;i<animal.length;i++){
printAnimals.call(animal[1],1)
}

//Q-5 = > append an array into another array ?
const array=["a","b"]
const element = [0,1,2];

// array.push(...element);

// console.log(array)

//other way
array.push.apply(array,element)

console.log(array)

//Q-8

//Find min max number in an array ?

const number = [5,6,3,2,7]

console.log(Math.max.apply(null,number))

console.log(Math.min.apply(null,number))

//Q-8

function f(){
    console.log(this)
}

let user = {
    g:f.bind(null)
};

// user.g();

//bind chaining.?

function f(){
    console.log(this.name)
}

f = f.bind({name:"jhon"}).bind({name:"Ann"}) // bind chaining is not possible always only bind possible.

f()

