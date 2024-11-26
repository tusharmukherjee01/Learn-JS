
const user ={
    username:"Tushar",
    loginCunt:8,
    signedIn:true,

    getUserDetails:function(){
        // console.log("Got user details from database");
        // console.log(`username:${username}`) //wrong you have to tell which username you want to access
        // console.log(`username:${this.username}`)
        console.log(this)
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());

function User(username,loginCunt,signedIn){
    this.username = username;
    this.loginCunt = loginCunt;
    this.signedIn = signedIn;
    
}

const userOne = new User("Tushar",8,true);
const userTwo = new User("Debu",8,true);
console.log(userOne)
console.log(userTwo)


// if don't use new keyword value will be override 