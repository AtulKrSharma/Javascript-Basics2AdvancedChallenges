// Sample program to verify login status using boolean values

// Simulated user data
const isUserLoggedIn = true;
const hasAdminAccess = false;

if (isUserLoggedIn) {
    console.log("Welcome, user! You are logged in.");

    // Check if the user has admin privileges
    if (hasAdminAccess) {
        console.log("You have admin access. You can manage the application.");
    } else {
        console.log("You do not have admin access. Limited functionality is available.");
    }
} else {
    console.log("Please log in to access the system.");
}

// Using booleans with a ternary operator
const message = isUserLoggedIn 
    ? "Enjoy your session!" 
    : "Please log in to continue.";
console.log(message);
