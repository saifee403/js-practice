const myNum = [1,2,3,4,5,6,7]
// const myTotal = myNum.reduce(function (acc, currVal){
//     console.log(`accumulator: ${acc} and curent value ${currVal}`)
//     return acc+currVal
// },0)
// console.log(myTotal);

//arrow function
const myTotal = myNum.reduce((acc,currVal)=>{
    console.log(`accumulator: ${acc} and curent value ${currVal}`)
    return acc+currVal
}, 2)
console.log(myTotal);


const shoopingCartc =[
    {
        item:"Python",
        price: 6000
    },
    {
        item:"Web dev",
        price: 10000
    },
    {
        item:"Full Stack",
        price: 13000
    },
    {
        item:"Data Science",
        price: 15000
    },
    {
        item:"Software eng",
        price: 10000
    },

]
const finalPrice = shoopingCartc.reduce((acc, item)=>{
    return acc + item.price
},0)
console.log(finalPrice)