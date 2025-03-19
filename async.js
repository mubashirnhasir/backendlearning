// console.log("Mubashir")


// async function sleep(milliseconds){

//     console.log("Operation is running");
//     setTimeout(()=>{
//         console.log("Operation is done")
//     }, milliseconds)
// }

// sleep(1000)

// console.log("HEHEHHEHEH");

const userLogin = () => {
    console.log("Enter username & password");
    const username = prompt("Enter username")
    const password = prompt("Enter your password")

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Performing user authentication");
            if (username === "mubashir" && password === "1234") {
                resolve("User authenticated")
            }
            else {
                reject("Authentication Failed")
            }
        }, 1000);
    })

}

function goToHomePage(userAuthStatus){
    return Promise.resolve(`Go to home page : ${userAuthStatus}`)
}


async function performTask() {
    const response = await userLogin();
    console.log("Validated User!");
    const userAuthStatus = await goToHomePage(response)
    console.log(userAuthStatus);
}

performTask()