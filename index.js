// console.log("This is my first backend");
// console.log("This okkaay ");

// // process.exit(1)
// process.exit=1

// const _ = require("lodash")
// const arr = [1,2,3,4,5]
// console.log(_.last(arr));
// const cowsay = require("cowsay")

// console.log(cowsay.say({
//     text:"Moooooo!!!",
//     e:"00",
//     t:"WW"
// }))

const {tesla,hyndai} = require("./car")

console.log(JSON.stringify(tesla, null, 2))
console.log(JSON.stringify(hyndai, null, 2))