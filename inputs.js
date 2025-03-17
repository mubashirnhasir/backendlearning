const readline = require("readline")
const prompt = require("prompt-sync")()

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

// without promptSync
rl.question("What is your name? " , Name =>{
    console.log(`My Name is ${Name}`);
    rl.close()
})

// whith promptSync
const name = prompt("What is your name")
console.log(`My Name is ${name}`);
process.exit()