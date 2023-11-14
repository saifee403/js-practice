// let complete = true;
// let prom = new Promise(function(res, rej){
//     if(!complete){
//         console.log("failed")
//     }else{
//         console.log("success")
//     }
// })

//2nd method
// function prom(complete){
//     return new Promise(function(resolve, reject){
//         if(complete){
//             resolve("success")
//         }else{
//             reject("failed")
//         }
//     })
// }
// let onFulfuilment = (result) =>{
//     console.log(result)
// }
// let onRejection = (err) =>{
//     console.log(err)
// }
// prom(true).then(onFulfuilment)
// prom(true).catch(onRejection)

// function prom(complete){
//     return new Promise(function(resolve, reject){
//         console.log("fetching dat, please wait............");
//         setTimeout(()=>{
//             if(complete){
//                 resolve("success")
//             }else{
//                 reject("failed")
//             }
//         },2000)
//     })
// }
// let onFulfuilment = (result) =>{
//     console.log(result)
// }
// let onRejection = (err) =>{
//     console.log(err)
// }
// prom(false).then(onFulfuilment).catch(onRejection)

//5th method
function prom(a, b) {
    return new Promise(function (resolve, reject) {
        console.log("fetching dat, please wait............");
        let c = a/b
        setTimeout(() => {
            if (a,b) {
                resolve(`your answer is: ${c}`)
            } else {
                reject("Failed")
            }
        }, 2000)
    })
}

prom(5,2).then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
})