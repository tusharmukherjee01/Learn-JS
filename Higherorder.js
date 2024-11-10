// for of

const myNewArray = [200,400,500,2000]

for (const num of myNewArray) {
    // console.log(num);
}

const greetings = "Hello Tushar"

for (const char of greetings) {

    // console.log(`Each char is ${char}`);
}

//Maps 
const map = new Map()

map.set("IN", "India")
map.set("USA", "United States of America")
map.set("FR", "France")
// console.log(map);

for (const [key, value] of map) {
    // console.log(key,':-' , value);
}

for (const key in map) {
    console.log(key); // no output because map is not iterable
}


const myObj = {
    username:"Tushar",
    price:299
}

// for(const [key,value] of myObj){
//  console.log(key,':-' , value); //TypeError: myObj is not iterable
// }

