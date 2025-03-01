let userName = prompt("Enter your name:");

if (userName === "ADMIN") {
    let password = prompt("Enter your password:");
    if (password === "TheMaster") {
        alert("Welcome");
    } else if (password === null) {
        alert("Cancelled");
    } else {
        alert("Wrong password");
    }
} else if (userName === null) {
    alert("Cancelled");
} else {
    alert("I Don’t know you");
}
