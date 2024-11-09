//This keyword
const user={
    username:"tushar",
    price:999,

    welcomemsg : function(){
        console.log(`${this.username} welcome to website`);
        console.log(this);
    }
}
// user.welcomemsg()
// user.username = "Debu"
// user.welcomemsg()
// console.log(this);

// function chai(){
//     let username = "Tushar"
//     // console.log(this)
//     console.log(this.username); // o/p => undefine this only work with object yu can't use in function..
// }
// chai()

//Arrow Function..
const chai = () => {
    let username = "Tushar"
    console.log(this)
    console.log(this.username);
}
chai()


//   const addTwo = (num1,num2) => {
//      return num1+num2
//   }
//   console.log(addTwo(5,5));

//Implesit Return

const addTwo = (num1,num2) => (num1+num2)

  console.log(addTwo(5,5));

//   const addOne = () => {username:"Tushar"}  - > wrong

const addOne = () => ({username:"Tushar"})