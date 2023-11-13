// let complete = true;
// let prom = new Promise(function(res, rej){
//     if(!complete){
//         console.log("failed")
//     }else{
//         console.log("success")
//     }
// })

//2nd method
function prom(complete){
    return new Promise(function(resolve, reject){
        if(!complete){
            resolve("failed")
        }else{
            reject("success")
        }
    })
}
