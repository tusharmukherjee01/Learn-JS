
const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")

// console.log(Math.PI)

console.log(descriptor);


const chai = {
    name:'ginger chai',
    price:250,
    isAvailable:true,

    order : function(){
      console.log("code fath gayi")
    }
}

// console.log(chai)

console.log(Object.getOwnPropertyDescriptor(chai,"name"))

Object.defineProperty(chai,"name",{  //writable:false means you can't change value and same way enumerable:false means you can't iterate over that property
    writable:false,
    enumerable:false
})

console.log(Object.getOwnPropertyDescriptor(chai,"name"))

for (let key in chai) {
    if(typeof chai[key] !== 'function')
    console.log(`${key} : ${chai[key]}`)
}

for(let [key,value] of Object.entries(chai)){
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`)
    }
}