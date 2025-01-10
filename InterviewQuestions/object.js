
const user  = {
    name:"Tushar",
    age:23
}

user.name="Ganduu"
delete user.age
// console.log(user);

const func = (function(a){
    delete a // delete only work with object and not with local variable
    return a
})(5)

// console.log(func)

// how do you write one propeerty like this {i want to buy}

const userr  = {
    name:"Tushar",
    age:23,
   "i want to buy":true,
}
 
// console.log(userr["i want to buy"]);

delete user["i want to buy"] // we can aslo delete like this

// how you add dynamic property ??
const property = "firstName"
const name = "Tushar Mukherjee"

const xyz = {
   
    [property]:name // like this you have to do and not" proerty:name" 
}
// create a function multiplyByTwo(obj) that multiplies all numeric property values of nums by 2

let nums = {
    a:100,
    b:200,
    title:"My Nums"
}

// for(key in nums){
//   console.log(nums[key])
// }
multiplyByTwo(nums)
console.log(nums)
function multiplyByTwo(obj){

    for (const key in obj) {
        
        if(Number(obj[key])){

            obj[key] = 2*obj[key]

           }   
        }
}

// Q-3

const a = {}
const b = {key:"b"}
const c = {key:"c"}

a[b] = 100
a[c] = 200

// console.log(a[b])   // a["object object"] and 2nd one also a["object object"] "2nd" value is overlapping 1st value that is why output is 200
// console.log(a)

// Q:4
// what is JSON.stringify and what is JSON.parse ?!..
const obj = {
    name:"Tushar",
    age:23
}
const strObj = JSON.stringify(obj)
// console.log(strObj) // object to string convert
// where to use this ? => in local storage we can't store object 1st convert in string using JSON.stringify then store -> tell him this code
//localStorage.setItem("user",strObj) // localStorage.setItem("user",obj) => ["object object"] =>>> add html file to see this output in browser

// console.log(JSON.parse(strObj)) // string to object convert


// Q:5
//what is the output ??
// console.log([..."Tushar"]) // ['T','u','s','h','a','r']
const user1 = {name:"tushar",age:23}
const admin = {admin:true,...user1}

// console.log(admin)

// Q:6
const settings = {
    username:"Tushar",
    level:200,
    health:500
}
const data = JSON.stringify(settings,["level","health"]) // when we pass objet and only give one or two key mentioned it will only stringify those two keys

console.log(data)

  const shape = {
    radious:10,
    diameter(){
        return 2*this.radious
    },
    perimeter:()=>2*Math.PI*this.radious
  };

  console.log(shape.diameter()) // 22
  console.log(shape.perimeter())// NaN =>in arrow function this keyword is undefined

  let obj1 = {
    namee:"Tushar",
    age:23,
    firstName:{
        first:"abc",
        last:"xyz"
    }
  }

   const namee = "Pochaa"
  const { namee:myName } = obj1 // thats how you can change the name

  const {firstName:{first}} = obj1
  console.log(first)

  function getItem(fruitList,FavouriteFruit,...args){
    return [...args,...fruitList,FavouriteFruit]
  }

  console.log(getItem(["apple","mango"],"banana","orange"))

  // what is the output

  let x = {greeting:"Hey!"}
  let y ;

  y = x // possible => object actually working on reference not on value   

  x.greeting="Hello!!"
  console.log(y.greeting)
   
//   console.log({z:1} === {z:1})
  console.log({z:1} == {z:1})

  let person = {name:"Tushar"}

  const member=[person]
  person=null // person.name=null
  console.log(member)

  // what is the output ??

  const value = {num:10}

  const multiply = (x={...value}) =>{
    console.log(x.num *= 2)
  }

  multiply()//20 => object cloning
  multiply()//20 => object cloning
  multiply(value) //20 user that value and update num =20
  multiply(value)//40 user that value and update num =40