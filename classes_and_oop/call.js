
function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("CALLED!!")
}

function createUser(username,email,password){

    // SetUsername(username)
    // SetUsername.call(username)
    SetUsername.call(this,username)
    this.email=email
    this.password=password

}

const chai = new createUser("chai","chai@fb.com","123")

console.log(chai)