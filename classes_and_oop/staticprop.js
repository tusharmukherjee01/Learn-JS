
class User{
   
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`Username : ${this.username}`)
    }

   static createId(){
        return `123`
    }
}


const tushar = new User("Tushar")
// console.log(tushar.createId())


class Teacher extends User{
    constructor(email,username){
        super(username)
        this.email=email
    }
}

const iphone = new Teacher("@chai.com","Tushar")

iphone.logMe()

console.log(iphone.createId())
console.log(User.createId())   //thats how you can use static methods or variable
console.log(Teacher.createId())
