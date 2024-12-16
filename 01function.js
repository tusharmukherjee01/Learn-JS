





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

// function calculateCartPrice(num){
//     return num
// }

function calculateCartPrice(val1,val2,...num){
    console.log("val1 :",val1,"val2:",val2);
    return num
}

console.log(calculateCartPrice(200,400,600,800,8000,700));