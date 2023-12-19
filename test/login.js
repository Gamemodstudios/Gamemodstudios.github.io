// Function to generate a random authentication token
function generateAuthToken() {
    return `${Math.random().toString(36).substring(2, 15)}${Math.random().toString(36).substring(2, 15)}`;
}

// Function to set a cookie
function setCookie(name, value, days) {
    const expires = days ? `; expires=${new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString()}` : '';
    document.cookie = `${name}=${value}${expires}; path=/`;
}

// Function to get the value of a cookie
function getCookie(name) {
    const nameEQ = `${name}=`;
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length);
    }
    return null;
}

// Array of valid users and their passwords
const validUsers = {
    "admin": "12345",
    "user2": "password2",
    // Add more users as needed
};

// Example: Read the authentication token cookie
const authToken = getCookie("authToken");
console.warn("started loggin")
// If there's a valid authentication token, skip asking for the username and password
if (authToken) {
    console.clear()
    console.log("logged in as authenticated user");
    console.log("Access granted! Welcome back!");
} else {
    // No valid authentication token, ask for the username and password
    console.clear()
    const username = prompt("Please enter your username:");
    const password = prompt("Please enter your password:");

    // Check if the entered username and password match any valid user
    if (validUsers[username] === password) {
        console.log("Access granted! Welcome!");
        const newAuthToken = generateAuthToken();
        setCookie("authToken", newAuthToken, 7); // Set cookie with a 7-day expiration
    } else {
        console.log("Incorrect username or password. Access denied.");
        setCookie("authToken", "", -1); // Expire the cookie immediately
        window.location.href = "http://gamemodstudios.servehttp.com"; // Replace with your desired website URL
    }
}
