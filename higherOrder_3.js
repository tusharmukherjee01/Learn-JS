
const coding =["js","rb","py","java","php","swift"]

 coding.forEach((item)=>{
    console.log(item)
 })

function printMe(item){
  console.log(item)
}

coding.forEach(printMe)

// coding.forEach((item,index,arr)=>{
//  console.log(item,index,arr);
// })

const mycoding = [
    {
        language:"js",
        languageFileName:"js"
    },
    {
        language:"python",
        languageFileName:"py"
    },
    {
        language:"java",
        languageFileName:"java"
    }
]

 mycoding.map((item) => console.log(`${item.language}`));

// console.log(newLan)
mycoding.forEach((item)=>{
   console.log(`Language :- ${item.language} and File Name :- ${item.languageFileName}`)
      console.log(`${item.language}`)
})

