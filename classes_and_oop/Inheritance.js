
class User {
    
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`Username is : ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username) // for the caal file previously we used to do like this but now we don't
                       //  super(username) get data(here usrname) from extends(syntactic sugar of __proto__ key word which we used to do previously in function ) class(here User)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A New course added by ${this.username}`)
    }
}

const chai = new Teacher("chai","chai@gmail.com","123")

chai.addCourse()

const masalaChai = new User("Tushar") 

masalaChai.logMe()

console.log(chai === masalaChai)
console.log(chai === Teacher)
console.log(chai instanceof Teacher)


