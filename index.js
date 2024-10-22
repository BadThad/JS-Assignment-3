let username = prompt("Enter username");
let password = prompt("Enter password");

function isValidPassword(username, password) {
    if (password.match(username)) {
        return false

    } else if (password.indexOf(" ") >= 0) {
        return false

    } else if (password.length < 8) {
        return false

    } else {
        return true
    }
}

console.log(isValidPassword(username, password))
