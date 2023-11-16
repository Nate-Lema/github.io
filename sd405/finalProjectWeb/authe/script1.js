function signup() {
    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;

    // Dummy check for unique username (replace this with actual validation logic)
    if (username && password) {
        // Generate a unique ID (for simplicity, this example uses a timestamp as an ID)
        const userId = new Date().getTime();

        // Create a user object with ID, username, and password
        const user = {
            id: userId,
            username: username,
            password: password
        };

        // Retrieve existing users from local storage or initialize an empty array
        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

        // Add the new user to the array
        existingUsers.push(user);

        // Save the updated user list back to local storage
        localStorage.setItem('users', JSON.stringify(existingUsers));

        console.log('User signed up successfully.');
    } else {
        console.error('Signup failed. Please fill out both username and password fields.');
    }
}

function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Retrieve users from local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the provided credentials match any user in the stored data
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        console.log('Login successful.');
    } else {
        console.error('Invalid credentials. Please try again.');
    }
}