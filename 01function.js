





// function loginUser(userName){

//     if(userName === 'undefined'){
//          console.log('User name not found');
//     }
//     return `${userName} logged in`;
// }
// console.log(loginUser('Tushar'));

const user = {
    userName:"tushar",
    price:199
}

function handelObj(anyObj){
    console.log(` username is ${anyObj.userName} and price is ${anyObj.price}`)
}

handelObj(user);
handelObj({
    userName:"Tushar",
    price:299
})

const myNewArray = [200,400,500,2000]

function returnSecondValue(anyArray){
    return `2nd element is ${anyArray[2]}`
}

console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([40,50,60,70]));