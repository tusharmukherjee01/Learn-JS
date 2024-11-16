
// ES6

// class User {

//     constructor(username,email,password){
//         this.username = username
//         this.email=email
//         this.password=password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUsername(){
//         return `${this.username} => ${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("chai","chai@gmail.com","123")

// console.log(chai.encryptPassword())

// console.log(chai.changeUsername())


// Behind the scene

function User(username,email,password){
        this.username = username
        this.email=email
        this.password=password
}
Object.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

Object.prototype.changeUsername = function(){
    return `${this.username} => ${this.username.toUpperCase()}`
}
const chai = new User("chai","chai@gmail.com","123")

console.log(chai.encryptPassword());
console.log(chai.changeUsername())

