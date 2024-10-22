let username = prompt("Enter username");
let password = prompt("Enter password");

function isValidPassword(username, password) {
    if (password.match(username)) {
        console.log(false)
    } else if (password.indexOf(" ") >= 0) {
        console.log(false)
    } else {
        console.log(true)
    }
}

console.log(isValidPassword(username, password))
