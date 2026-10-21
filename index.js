const url = "https://jsonplaceholder.typicode.com/users"

// then-catch dengan built-in method
fetch(url)
    .then(response => response.json())
    .then(users => {
        const emailList = users.map(user => user.email.toLowerCase())
        console.log("\nThen-Catch & Built-in method")
        console.log(`Email: ${emailList}\n`)
    })


// then-catch tanpa built-in method
function toLowerCaseManual(str) {
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let lower = "abcdefghijklmnopqrstuvwxyz"
    let result = ""

    for (let i = 0; i < str.length; i++) {
        let found = false

        for (let j = 0; j < upper.length; j++) {
            if (str[i] === upper[j]) {
                result += lower[j];
                found = true
                break
            }
        }

        if (!found) {
            result += str[i]
        }
    }

    return result;
}

fetch(url)
    .then(response => response.json())
    .then(users => {
        let emailList = [];
        console.log("\nThen-Catch & tanpa Built-in method")
        for (let i = 0; i < users.length; i++) {
            emailList[emailList.length] =
                toLowerCaseManual(users[i].email);
        }

        console.log("Email:");
        for (let i = 0; i < emailList.length; i++) {
            console.log(emailList[i]);
        }
    })

// Async-Await dengan built-in method
async function emailAsync() {
    const response = await fetch(url);
    const users = await response.json();

    const emailList = users.map(user => user.email.toLowerCase());
    console.log("\nAsync-Await & Built-in method")
    console.log(`Email: ${emailList.join(",")}`);
}


emailAsync()

// Async-Await tanpa built-in method
async function emailAsyncManual() {
    const response = await fetch(url);
    const users = await response.json();
        let emailList = [];
        console.log("\nAsync-Await & tanpa Built-in method")
        for (let i = 0; i < users.length; i++) {
            emailList[emailList.length] =
                toLowerCaseManual(users[i].email);
        }

        console.log("Email:");
        for (let i = 0; i < emailList.length; i++) {
            console.log(emailList[i]);
        }
}


emailAsyncManual()
