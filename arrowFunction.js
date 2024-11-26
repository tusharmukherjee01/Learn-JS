//This keyword
const user={
    username:"tushar",
    price:999,

    // welcomemsg : function(){
    //     // console.log(`${this.username} welcome to website`);
    //     console.log(this);
    // }
    welcomemsg:() => {
        // console.log(`${this.username} welcome to website`);
        console.log(this);
    }
}
user.welcomemsg()
user.username = "Debu"
user.welcomemsg()
// console.log(this);

function chai(){
    let username = "Tushar"
    console.log(this)
    // console.log(this.username); // o/p => undefine 'this' only work with object you can't use in function..
}
chai()

// Arrow Function..
const chai2 = () => {
    let username = "Tushar"
    console.log('---->>>ARROW FUNCTION',this)
    console.log(this.username);
}
chai2()

//   const addTwo = (num1,num2) => {
//      return num1+num2
//   }
//   console.log(addTwo(5,5));

//Implesit Return

const addTwo = (num1,num2) => (num1+num2)

//   console.log(addTwo(5,5));

//   const addOne = () => {username:"Tushar"}  - > wrong

const addOne = () => ({username:"Tushar"})



console.log('PRINT THIS-->>',this)



// Summary:
// 1. Inside arrow function 'this' keyword is {} Object
// 2. Inside normal function 'this' keyword is window
// 3.in vs code console.log('PRINT THIS-->>',this) is {}
// 4.inside a object -> 'this' keyword is object when function is a normal function and it's {} object when it is arrow function   