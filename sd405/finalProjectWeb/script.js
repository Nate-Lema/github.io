function signup() {
    const fName = document.getElementById('fname').value;
    const lName = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('signupPassword').value;
    const cPassword = document.getElementById('signupCpassword').value;
    const rememberMe = document.getElementById('rememberMe').value;
    // Dummy check for unique username (replace this with actual validation logic)
    if (fName  && lName && email && password && cPassword && rememberMe) {
        // Generate a unique ID (for simplicity, this example uses a timestamp as an ID)
        const userId = new Date().getTime();
        // Create a user object with ID, username, and password
        const user = {
            id: userId,
            fName: fName,
            lName:lName,
            email:email,
            password: password,
            cPassword:cPassword
        };

        // Retrieve existing users from local storage or initialize an empty array
        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

        // Add the new user to the array
        existingUsers.push(user);

        // Save the updated user list back to local storage
        localStorage.setItem('users', JSON.stringify(existingUsers));

        alert('you signed up successfully.');
    } else {
        console.error('Signup failed. Please fill out both username and password fields.');
    }
}

function login() {
    const email = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Retrieve users from local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the provided credentials match any user in the stored data
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        window.location.href = "games.html"
    } else {
        alert('Invalid credentials. Please try again.');
    }
}

