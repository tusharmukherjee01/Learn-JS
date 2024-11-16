
class User{
    constructor(email,password){
        this.email = email
        this.password=password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email=value
    }
    get password(){
      return `${this._password}@29701`
    }
    set password(value){
       this._password=value
    }
}

const tushar = new User("abc@gmail","abc")
console.log(tushar.password)
console.log(tushar.email)