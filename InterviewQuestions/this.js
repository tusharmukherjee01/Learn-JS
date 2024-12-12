
// WhaT IS THIS ??

// let user = {
//     name: "Tushar",
//     age: 23,
//     getDetails(){
//         console.log(this)
//     }
// }

// user.getDetails()
//==> FOR NORMAL FUNCTION
// let user = {
//     name: "Tushar",
//     age: 23,
//     chailObj:{
//         newName:"Mukherjee",
//         getDetails(){
//         console.log(this.newName + " " + this.name) 
//     }
//     }
// }

// user.chailObj.getDetails() // name is not recognized because "this" point to current object which is childObj not the parent object user

//==>>FOR ARROW FUNCTION...


// let user = {
//     name: "Tushar",
//     age: 23,
//     getDetails:()=>{
//         console.log(this)
//     }
// }
// user.getDetails()


// let user = {
//     name: "Tushar",
//     age: 23,
//     chailObj:{
//         newName:"Mukherjee",
//         getDetails : () => {
//         console.log(this.newName + " " + this.name) 
//     }
//    }
// }

// user.chailObj.getDetails()


// let user = {
//     name: "Tushar",
//     age: 23,
//     getDetails(){
//         const nestedArrow=()=>{
//         console.log(this)
//       }
//       nestedArrow()
//     }
// }
// user.getDetails()


// class user {
//     constructor(name){
//         this.name = name
//     }

//     getName(){
//         console.log(this.name)
//     }
// }

// const User = new user("Tushar");
// User.getName()


//Q:1

// let user = {
//     firstName:"Tushar",
//     getName(){
//         const firstName = "Mukherjee"
//         console.log(this.firstName)
//         console.log(firstName)
//     }
// }
// user.getName()

//Q:2

// function makeUser(){
//     return {
//         name:"Tushar",
//         ref:this, // this ref pointing to window object acctually that is its parent...
//     };
// }

// let user = makeUser();
// console.log(user.ref.name) // window object does't have any name so, how to print Tushar ???...


// function makeUser(){
//     return {
//         name:"Tushar",
//         ref(){
//            return this
//         }, // this ref pointing to window object acctually that is its parent...
//     };
// }

// let user = makeUser();
// console.log(user.ref().name) 

// const user = {
//     name:"Tushar",
//     loggedMe(){
//         console.log(this.name)
//     }
// }

// setTimeout(user.loggedMe,1000); // undefined because setTimeout take it as a callback which is no longer access of this user object access
// how you can fix this code ?
//==>>
// setTimeout(function(){
//     user.loggedMe()
// },1000)

// create object calculator

// let calculator = {
//     read(){
//         this.a = +prompt("a = ",0);
//         this.b = +prompt("b = ",0);
//     },

//     Sum(){
//         return this.a+this.b;
//     },
//     mul(){
//         return this.a * this.b;
//     }

// }

// calculator.read();

// console.log(calculator.Sum());
// console.log(calculator.mul());

// var length = 4;
// function callback(){
//     console.log(this.length)
// }

// const object = {
//     length:5,
    
//     method(fn) {
//        fn(); 
//     },
// }

// object.method(callback);


// var length = 4;
// function callback(){
//     console.log(this.length)
// }

// const object = {
//     length:5,
    
//     method() {
//         console.log(arguments)
//        arguments[0]();  // arguments = > [callbak,2,3]
//     },
// }

// object.method(callback,2,3); // print 3 becaue argument has one propety length which is refer to array length



const calc = {
    total:0,
    add(a){
        this.total += a;
        return this
    },
    multiply(b){
        this.total *= b;
        return this
    },
    subtract(c){
        this.total -= c;
        return this
    }
}


const result = calc.add(10).multiply(5).subtract(30).add(10)
console.log(result.total)