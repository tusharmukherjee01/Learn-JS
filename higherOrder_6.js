

// const myNumbers = [1,2,3,4,5,6,7,8,9,10]
const myNumbers = [1,2,3]

const value = myNumbers.reduce( (acc,curr) =>{

    console.log(`acc : ${acc} and currVal : ${curr}`)
    return acc + curr

},0)
console.log(value)

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

//add all price of courses...
 const total = shoppingCart.reduce( (acc,curr) => {
      return acc + curr.price
},0)

 total = shoppingCart.reduce( (acc,curr) => acc + curr.price,0)

// const total = shoppingCart.reduce( (acc,curr) => acc + curr.price,0)

console.log(total)