// Read Evaluate Print Loop
const repl = require("repl")

const local = repl.start("$")

local.on("exit",()=>{
    setTimeout(()=>{
        console.log("Exiting the paneel");
        process.exit()
    }, 1000)
    
})