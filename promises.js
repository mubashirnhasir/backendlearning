// const promise = new Promise((resolve,reject)=>{
//     if(true){
//         const person = {name: "Mubashir"}
//         resolve(person)
//     }
//     else{
//         reject()
//         console.log("Failed");
//     }
// })

// promise.then((person)=>{
//     console.log(person)
// }).catch((err)=>{ err }) 



// promises Chaining, each then should return something so that the next .then will take as its argument 

// const p = Promise.resolve("Done")

// p.then((val)=>{
//     console.log(val);
//     return "done"
// }).then((val)=>{
//     console.log(val);
//     return "Done2"
// }).then((val)=>{
//     console.log(val);
//     return "Done3"
// }).then((val)=>{
//     console.log(val);
    
// })

const makeApiCall = (time)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("The API executed in:" + time)
        },time)
    })
}

let multiApiCall = [makeApiCall(100),makeApiCall(1000),makeApiCall(500)]

Promise.all(multiApiCall).then((val)=>{
    console.log(val);
})

Promise.race(multiApiCall).then((val)=>{
    console.log(val);
})