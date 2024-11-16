

const User={

    _email:'t@abc.com',
    _password:'abc',

    get email(){
       return this._email.toUpperCase()
    },

    set email(value){
      this._email=value
    }
} 


const tea = Object.create(User)

console.log(tea.email)    // callin this email function not 