
// const promiseOne = new Promise((resolve,reject) => {
//     //Do an  async task
//     // Db calls,crypographic,network related taks you generally do in promise

//     setTimeout(() => {
//         console.log("Async task is complete")
//         resolve()
//     }, 1000);
// })

// promiseOne.then(() => {
//     console.log("Promise consumed")
// })


// new Promise((res,rej) =>{
//     setTimeout(() => {
//         console.log("Async task two")
//         res()
//     }, 2000);
// }).then(() =>{
//     console.log("Promise two consumed")
// })

// const  promiseThree = new Promise((resolve,reject) =>{
//     setTimeout(()=>{
//     resolve({username:"Tushar",email:"chai@chaiaurcode.com"})
//     },2000)
// })

// promiseThree.then((user)=>{
//   console.log(user)
// })


// const promiseFour = new Promise((resolve,reject) =>{
//  setTimeout(()=>{
//     let error = true
//     if(!error){
//         resolve({username:"tushar",password:"123"})
//     }else{
//         reject('ERROR:something went wrong')
//     }
//  },2000)
// })

// promiseFour
// .then((user) => {
// console.log(user)
// return user.username
// }).
// then((username) => {
// console.log(username)
// }).
// catch((error) => {
//     console.log(error)
// })
// .finally(()=>{
//     console.log("The promise is resolve or rejected")
// })

// //async await 

// const promisefive = new Promise((resolve,reject) => {

//    setTimeout(()=>{
//     let error = true
//     if(!error){
//         resolve({username:"Java Script",password:"123"})
//     }else{
//         reject('ERROR:Js went wrong')
//     }
//  },2000)
// })

// async function consumePromiseFive(){
    
//    try{
//     const response = await promisefive
//     console.log(response)
//    }catch(error){
//     console.log(error)
//    }
// }
// consumePromiseFive()


async function getAllUsers() {
   try{
   const response =  await fetch('https://jsonplaceholder.typicode.com/user')
//    console.log(response)
   const data = await response.json()
   console.log(data)
   }catch(error){
     console.log(error)
   }
}
getAllUsers()

fetch('https://jsonplaceholder.typicode.com/user').then((res)=>{
    return   res.json()
})
.then((data) => console.log(data))
.catch((error)=>{console.log(error)})
