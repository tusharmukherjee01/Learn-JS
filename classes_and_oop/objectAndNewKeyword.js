
function multipleby5(num){
    return num*5
}

multipleby5.power = 2;
console.log(multipleby5(5));
console.log(multipleby5.power);
console.log(multipleby5.prototype);


function createUser(username,score){
    this.username = username;
    this.score = score;

}

createUser.prototype.incrementScore = function(){
    this.score += 1;
}
createUser.prototype.printMe = function(){
    console.log(`Score :${this.score} `)
}
// const chai =  createUser('chai',10)
const chai = new createUser('chai',10)
const tea =   createUser('tea',250)

chai.printMe()