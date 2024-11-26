
const promiseOne = new Promise((resolve,reject)=>{
    
    setTimeout(()=>{
        console.log(`Async task is complete`)
        resolve()
    },2000)
})

promiseOne.then(()=>{
    console.log(`Promise Consumed`)
})

new Promise((resolve,reject) =>{

    setTimeout(()=>{
        console.log(`HELLLOOOWWW!!!`)
        resolve()
    },5000)
}).then(()=>{
    console.log(`Promise Two comsumed`)
})


const promiseThree = new Promise((res,rej) => {

    setTimeout(() => {
        res({username:"Tushar",password:"123"})
    }, 1000);
})

promiseThree.then((userrrrr) => {
    // console.log(userrrrr)
    // console.log(userrrrr.username) // you cant acess here in next then you will get see lower code.. 
})


const promisefour = new Promise((ressolve,reject) => {

    setTimeout(() => {
       let error =true
       if(!error){
        ressolve({username:"Tushar",password:"123"})
       }
       else{
        reject('ERROR: smething went wronggg')
       }
    }, 1000);
})

promisefour.then((user) => {
    console.log(user)
    return user.username
    }).then((username) => {
       console.log(username)
    }).catch((error)=>{
        console.log("ERrror",error)
    }).finally(()=>{
        console.log('The Pomise is either resolve or reject')
    })

    const promisefive = new Promise((resolve,reject)=>{
        setTimeout(() => {
       let error =true
       if(!error){
        resolve({username:"Tushar",password:"123"})
       }
       else{
        reject('ERROR: smething went wronggg')
       }
    }, 1000);

    })

    async function consuemePromise() {
      try{
     const response =  await promisefive
      console.log(response)
      }catch(error){
        console.log("ERROR",error)
      }
    }
    consuemePromise()

    async function getAllUsers() {
      try{
      const response =  await fetch('https://jsonplaceholder.typicode.com/todos/1')
      const data = await response.json()
      console.log(data)
      }catch(error){
        console.log(error)
      }
    }
    // getAllUsers()

    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((res)=>{return res.json()})
    .then((data)=>{console.log(data)})
    .catch((error)=>{console.log(error)})

