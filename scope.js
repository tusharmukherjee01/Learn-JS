
// var c = 300
// let a= 100
// const b=200
// {
// let a =10;
// const b=20;
// var c = 30;
// console.log("Inner :",a)
// console.log("Inner :",b)
// }


// console.log(a) 
// console.log(b)
//  console.log(c)

function one(){
    const username = "tushar"

    function two(){
        const website = "youtube"
        console.log(username)
    }

    // console.log(website);

    two()
}

// one()


// if(true){
//     const username = "Tushar"
//     if(username === "Tushar"){
//         const website = " Youtube"
//         console.log(username + website)
//     }
//     // console.log(website);
// }
// console.log(username);

// funcion normal
// function addOne(num){
//     return num+1;
// }
// addOne(5)

// //function expression
// const addTwo = function(num){
//     return num+2;
// }
// addTwo(5)


console.log('addOne(5): ', addOne(5));
function addOne(num){
    return num+1;
}


//function expression
// addTwo(5) // throw error
const addTwo = function(num){
    return num+2;
}
