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

// const {tesla,hyndai} = require("./car")

// console.log(JSON.stringify(tesla, null, 2))
// console.log(JSON.stringify(hyndai, null, 2))

const path = require("path")

const file = "C:/Users/talen/OneDrive/Desktop/backendlearning/files/sample.txt"

// // nam of the file
// console.log(path.basename(file));

// //name of the extention
// console.log(path.extname(file));

// //name of the directory
// console.log(path.dirname(file));

const fs = require("fs")
const fsPromise = require("fs/promises")
// fs.readFile(file, "utf-8", (err,data )=>{
//     if(err) throw new Error("Not a file you are looking for ")
//         console.log(data);

// })

const textFile = path.join(__dirname, "files", "text.txt")
const content = "I love fasting during ramadan"

// fs.writeFile(textFile, content, (error) => {
//     if (error) throw new Error("Something went wrong")
//     console.log("Write operation completed Succesfylly");
//     fs.readFile(textFile, "utf-8", (error, data) => {
//         if (error) throw new Error("Unable to read file from the system")
//         console.log(data);

//     })
// })

const writingData = async () => {
    try {
        await fsPromise.writeFile(textFile, content)
        await fsPromise.appendFile(textFile, "\n This is an appending file data")
        const data = await fsPromise.readFile(textFile, "utf-8")
        console.log(data);
        
    } catch (error) {
        console.log(error);
    }
}

writingData()