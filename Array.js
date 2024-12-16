
// const myArray = [1,2,3,true,"Hitesh"]

const myarray = new Array(1,2,3,4,6,"Tushar")
//  console.log(myarray[5])
//Array Methods

// myarray.push(90) // 
// myarray.push(80) 
// myarray.pop()
// myarray.unshift(100) // for pushing value in front => not a good practice because have to shift all elelemt of array by onr index right
// myarray.shift() // remove from front

// console.log(myarray.includes(4)) // just say 4 present of not using true of false
// console.log(myarray.indexOf(4))

// const newArr = myarray.join() // convert array element into string...

// console.log(newArr)
// console.log(typeof newArr) // 

//slice and splice

//=> Slice:-
// console.log('Slice :')
// console.log("A->",myarray)

// const myn1 = myarray.slice(1,3) // 1,2 and , 3 not included

// console.log(myn1)

// console.log("B->",myarray)

// //=> Splice:-
// console.log('Splice :')
// console.log("A->",myarray)

// const myn2 = myarray.splice(1,3) // 1,2 and , 3 also included.. which is not in slice

// console.log(myn2)

// console.log("B->",myarray)

// console.log(myarray)

const a = ["a","b","c"]
const b = ["x","y","z"]

// a.push(b)
// console.log(a)
// const all = a.concat(b) // concat return new array
// console.log(all)

const all = [...a,...b]
console.log(all)

let abc = "Tushar"
// console.log([...abc])

console.log(Array.from(abc))
console.log(Array.from({name:"Tushar"})) // Remember this point please -> here from method not understanding which one convert in array key or value in object..

let s1 = 100
let s2 = 200
let s3 = 300

console.log(Array.of(s1,s2,s3)) // create array from set of element...

