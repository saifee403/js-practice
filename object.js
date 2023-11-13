function cartItem(...num){
    return num
}
console.log(cartItem(23,24,25,26))



const obj = {
    fName: "saif",
    lName: "Rehman",
    age: 23,
    education:"BSCS"
}

function getDetails(anyObj){
    return (`my name is ${anyObj.fName} ${anyObj.lName} my age is ${anyObj.age}`)
}
 console.log(getDetails(obj))