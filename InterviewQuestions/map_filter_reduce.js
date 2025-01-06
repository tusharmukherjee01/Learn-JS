// map filter reduce

// const nums = [1,2,3,4,5]

// const multiplyThree = nums.map((num,i,nums) => {
//     return num*3;
// })

// console.log(multiplyThree)

// const even = nums.filter((num) => num%2 === 0)

// console.log(even)

// const sum = nums.reduce((curr,acc) => {
//     return acc+curr;
// },0)

// console.log(sum)

//---------------- Polyfill for map() ----------------------------

Array.prototype.myMap = function(cb){   // you can give this method direct to Object.prototype => in Js everything object
    let temp=[];
    for(let i=0;i<this.length;i++){   // this gonna reference our parent array
       temp.push(cb(this[i],i,this)) // map((num,i,arr))
    }
    return temp;
}
const nums = [1,2,3,4,5]

const multiplyThree = nums.myMap((num,i,nums) => {
    return num*3;
})
// console.log(multiplyThree)

//---------------- Polyfill for filter() ----------------------------

 Array.prototype.myFilter = function(cb){
    let temp =[]
    for(let i=0;i<this.length;i++){
       if(cb(this[i],i,this)){
        temp.push(cb(this[i],i,this));
       }
    }
    return temp;
 }

 const even = nums.filter((num) => num%2 === 0)

// console.log(even)

//---------------- Polyfill for reduce() ----------------------------

Array.prototype.myReduce = function(cb,initialVal){
   let acc=initialVal;
   for(let i=0;i<this.length;i++){
   acc = acc?  cb(acc,this[i],i,this):this[i];
   }
   return acc;
}

const sum = nums.myReduce((curr,acc) => {
    return acc+curr;
},10)

// console.log(sum)

//---------------- map() vs forEach()----------------------------
const arr = [2,3,4,5,6]

const mapResult = arr.map((num)=>num+2) // return one modified array => usecase when need one new array

const forEachResult = arr.forEach((num)=>num+2) // it will not return anything => usecase when we need to modify our own array

//---------------- output based question----------------------------

const students = [
  {
    "name": "Arjun Sen",
    "roll": 101,
    "marks": 85
  },
  {
    "name": "Priya Das",
    "roll": 102,
    "marks": 92
  },
  {
    "name": "Rahul Gupta",
    "roll": 103,
    "marks": 76
  },
  {
    "name": "Sneha Roy",
    "roll": 104,
    "marks": 88
  },
  {
    "name": "Vikram Singh",
    "roll": 105,
    "marks": 79
  }
]

// students.map((stu)=>{
//     console.log(stu.name.toUpperCase())
// })

students.filter((stu)=>stu.marks>80).map((name)=>console.log(name.name))

const sums = students.reduce((sum,stu)=>
    sum + stu.marks
,0)
console.log(sums)