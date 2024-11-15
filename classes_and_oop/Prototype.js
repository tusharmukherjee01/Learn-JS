
let myName = "Tushar";

// console.log(myName.length);
// console.log(myName.trueLength())

let myHeros = ["thor","spiderman"]

let heroPower = {
    thor:"hamer",
    spiderman:"sling",

    getSpiderPower: function(){
        console.log(`Spid power is ${this.spiderman}`)
    }
}

Object.prototype.tushar = function(){
    console.log(`tushar is present is all objects`);
}

// heroPower.tushar()
myHeros.tushar()    

Array.prototype.heyTushar = function(){
     console.log(`Hitesh says hello`)
}

myHeros.heyTushar()
// heroPower.heyTushar()


*/ Inheritane */

const User = {
    name:"chai",
    email:"chail@google.com"
}
const Teacher = {
    makeVideo:true
}

const TeachingSupport = {
    isAvailable:true
}

const TAsupport = {
    makeAssignment:"JS assignment",
    fulltime:true,
    __proto__:TeachingSupport
}

Teacher.__proto__ = User


*/ Mordern Syntax */

Object.setPrototypeOf(TeachingSupport,Teacher) // 



let anotherUserName = "chaiaurcode          "

String.prototype.trueLength = function(){
     console.log(`${this}`)
    //  console.log(`${this.name}`)
     console.log(`True length is: ${this.trim().length}`)
}

anotherUserName.trueLength()
"tushar".trueLength()
"iceTea".trueLength()