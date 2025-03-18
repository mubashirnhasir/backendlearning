// console.log("Task Start");

// function asyncTask(cb){
//     console.log("Task Running");
//     setTimeout(cb,0)
// }

// asyncTask(()=> console.log(name))
// console.log("Task End");
// const name ="Mubashir"

function asyncTask(cb){
        setTimeout(()=>{
            cb(null, "This is the message from server")
        },0)
}

asyncTask((err,data)=>{
    if(err) {
        throw err
    }
    else{
        console.log("data",data);
    }
})