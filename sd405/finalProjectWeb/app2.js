
const fnameEl = document.querySelector('#fname');
const lnameEl = document.querySelector('#lname');
const emailEl = document.querySelector('#email');
const passwordEl = document.querySelector('#password');
const cpasswordEl = document.querySelector('#cpassword');

const form = document.querySelector('#signup');


const checkfname = () => {

    let valid = false;function signup() {
        const fnameEl = document.getElementById('fname');
        const lnameEl = document.getElementById('lname');
        const emailEl = document.getElementById('email');
        const passwordEl = document.getElementById('signupPassword');
        const cpasswordEl = document.getElementById('signupCpassword');
    
        // ... (your existing validation code)
        const form = document.getElementById('signupForm');
    const checkfname = () => {
    
        let valid = false;
    
        const min = 3,
            max = 25;
    
        const fname = fnameEl.value.trim();
    
        if (!isRequired(fname)) {
            showError(fnameEl, 'Username cannot be blank.');
        } else if (!isBetween(fname.length, min, max)) {
            showError(fnameEl, `Username must be between ${min} and ${max} characters.`)
        } else {
            showSuccess(fnameEl);
            valid = true;
        }
        return valid;
    };
    const checklname = () => {
    
        let valid = false;
    
        const min = 3,
            max = 25;
    
        const lname = lnameEl.value.trim();
    
        if (!isRequired(lname)) {
            showError(lnameEl, 'Username cannot be blank.');
        } else if (!isBetween(fname.length, min, max)) {
            showError(lnameEl, `Username must be between ${min} and ${max} characters.`)
        } else {
            showSuccess(lnameEl);
            valid = true;
        }
        return valid;
    };
    
    
    // const checkEmail = () => {
    //     let valid = false;
    //     const email = emailEl.value.trim();
    //     if (!isRequired(email)) {
    //         showError(emailEl, 'Email cannot be blank.');
    //     } else if (!isEmailValid(email)) {
    //         showError(emailEl, 'Email is not valid.')
    //     } else {
    //         showSuccess(emailEl);
    //         valid = true;
    //     }
    //     return valid;
    // };
    
    const checkPassword = () => {
        let valid = false;
        const password = passwordEl.value.trim();
    
        if (!isRequired(password)) {
            showError(passwordEl, 'Password cannot be blank.');
        } else if (!isPasswordSecure(password)) {
            showError(passwordEl, 'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)');
        } else {
            showSuccess(passwordEl);
            valid = true;
        }
    
        return valid;
    };
    
    const checkCPassword = () => {
        let valid = false;
        // check confirm password
        const cpassword = cpasswordEl.value.trim();
        const password = passwordEl.value.trim();
    
        if (!isRequired(cpassword)) {
            showError(cpasswordEl, 'Please enter the password again');
        } else if (password !== cpassword) {
            showError(cpasswordEl, 'The password does not match');
        } else {
            showSuccess(cpasswordEl);
            valid = true;
        }
    
        return valid;
    };
    
    const isEmailValid = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    
    const isPasswordSecure = (password) => {
        const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        return re.test(password);
    };
    
    const isRequired = value => value === '' ? false : true;
    const isBetween = (length, min, max) => length < min || length > max ? false : true;
    
    
    const showError = (input, message) => {
        // get the form-field element
        const formField = input.parentElement;
        // add the error class
        formField.classList.remove('success');
        formField.classList.add('error');
    
        // show the error message
        const error = formField.querySelector('small');
        error.textContent = message;
    };
    
    const showSuccess = (input) => {
        // get the form-field element
        const formField = input.parentElement;
    
        // remove the error class
        formField.classList.remove('error');
        formField.classList.add('success');
    
        // hide the error message
        const error = formField.querySelector('small');
        error.textContent = '';
    }
    
    
    // form.addEventListener('button', function (e) {
    //     // prevent the form from submitting
    //     e.preventDefault();
    
    
        const isfnameValid = checkfname();
        const islnameValid = checklname();
        // const isEmailValid = checkEmail();
        const isPasswordValid = checkPassword();
        const isCPasswordValid = checkCPassword();
    
        const isFormValid = isfnameValid &&
                            islnameValid &&
                            isEmailValid &&
                            isPasswordValid &&
                            isCPasswordValid;
    
        if (isFormValid) {
            // Generate a unique ID (for simplicity, this example uses a timestamp as an ID)
            const userId = new Date().getTime();
    
            // Create a user object with ID, username, and password
            const user = {
                id: userId,
                fname: fnameEl.value,
                lname: lnameEl.value,
                email: emailEl.value,
                password: passwordEl.value,
                cpassword: cpasswordEl.value
            };
    
            // Retrieve existing users from local storage or initialize an empty array
            const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    
            // Add the new user to the array
            existingUsers.push(user);
    
            // Save the updated user list back to local storage
            localStorage.setItem('users', JSON.stringify(existingUsers));
    
            console.log('User signed up successfully.');
        } else {
            console.error('Signup failed. Please fill out all fields correctly.');
        }
    
    // Rest of your code for input validation and event listeners...
    const debounce = (fn, delay = 500) => {
        let timeoutId;
        return (...args) => {
            // cancel the previous timer
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            // setup a new timer
            timeoutId = setTimeout(() => {
                fn.apply(null, args)
            }, delay);
        };
    };
    
    form.addEventListener('input', debounce(function (e) {
        switch (e.target.id) {
            case 'fname':
                checkfname();
                break;
            case 'lname':
                checklname();    
            case 'email':
                checkEmail();
                break;
            case 'password':
                checkPassword();
                break;
            case 'cpassword':
                checkCPassword();
                break;
        }
    }));
    }

    const min = 3,
        max = 25;

    const fname = fnameEl.value.trim();

    if (!isRequired(fname)) {
        showError(fnameEl, 'Username cannot be blank.');
    } else if (!isBetween(fname.length, min, max)) {
        showError(fnameEl, `Username must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(fnameEl);
        valid = true;
    }
    return valid;
};
const checklname = () => {

    let valid = false;

    const min = 3,
        max = 25;

    const lname = lnameEl.value.trim();

    if (!isRequired(lname)) {
        showError(lnameEl, 'Username cannot be blank.');
    } else if (!isBetween(fname.length, min, max)) {
        showError(lnameEl, `Username must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(lnameEl);
        valid = true;
    }
    return valid;
};


const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
        showError(emailEl, 'Email cannot be blank.');
    } else if (!isEmailValid(email)) {
        showError(emailEl, 'Email is not valid.')
    } else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
};

const checkPassword = () => {
    let valid = false;
    const password = passwordEl.value.trim();

    if (!isRequired(password)) {
        showError(passwordEl, 'Password cannot be blank.');
    } else if (!isPasswordSecure(password)) {
        showError(passwordEl, 'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)');
    } else {
        showSuccess(passwordEl);
        valid = true;
    }

    return valid;
};

const checkCPassword = () => {
    let valid = false;
    // check confirm password
    const cpassword = cpasswordEl.value.trim();
    const password = passwordEl.value.trim();

    if (!isRequired(cpassword)) {
        showError(cpasswordEl, 'Please enter the password again');
    } else if (password !== cpassword) {
        showError(cpasswordEl, 'The password does not match');
    } else {
        showSuccess(cpasswordEl);
        valid = true;
    }

    return valid;
};

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};

const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;


const showError = (input, message) => {
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message
    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    // get the form-field element
    const formField = input.parentElement;

    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');

    // hide the error message
    const error = formField.querySelector('small');
    error.textContent = '';
}


form.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault();

    // validate fields
    let isfnameValid = checkfname(),
        islnameVaild = checklname(),
        isEmailValid = checkEmail(),
        isPasswordValid = checkPassword(),
        iscpasswordValid = checkCPassword();

    let isFormValid = isfnameValid &&
        islnameVaild && 
        isEmailValid &&
        isPasswordValid &&
        iscpasswordValid;

    // submit to the server if the form is valid
    if (isFormValid) {

    }
});


const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};

form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'fname':
            checkfname();
            break;
        case 'lname':
            checklname();    
        case 'email':
            checkEmail();
            break;
        case 'password':
            checkPassword();
            break;
        case 'cpassword':
            checkCPassword();
            break;
    }
}));
Code