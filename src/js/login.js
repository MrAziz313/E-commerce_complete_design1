// function validateForm(event) {
    // Get form elements

    // var email = document.querySelector('input[type="email"]').value;
    // var password = document.querySelector('input[type="password"]').value;

    // Check if all fields are filled

    // if (email === "" || password === "") {
    //     alert("Please fill all the fields.");
    //     return false;  // Don't proceed if validation fails
    // }

    // Check if the password meets the pattern requirement

    // var passwordPattern = /[A-Z]+[0-9]+[a-z]+/; // At least one uppercase letter
    // if (!passwordPattern.test(password)) {
    //     alert("Password must contain at least one uppercase letter.");
    //     return false;  // Don't proceed if password validation fails
    // }

    // If everything is correct, prevent the form from submitting

    // event.preventDefault();

    // Show the success message and redirect to the home page

//     alert("Login successful!");
//     window.location.href = "Home.html";  // Redirect to home page after success
//     return true;
// }

function validateForm(event) {
    var email = document.querySelector('input[type="email"]').value;
    var password = document.querySelector('input[type="password"]').value;

    if (email === "" || password === "") {
        alert("Please fill all the fields.");
        return false;
    }

    var passwordPattern = /[A-Z]+/; // At least one uppercase letter
    if (!passwordPattern.test(password)) {
        alert("Password must contain at least one uppercase letter.");
        return false;
    }

    event.preventDefault();
    alert("Login successful!");
    window.location.href = "Home.html";
    return true;
}

function togglePasswordVisibility() {
    var passwordField = document.querySelector('input[type="password"]');
    var toggleIcon = document.getElementById('toggle-icon');
    if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleIcon.src = "https://img.icons8.com/ios-filled/50/000000/visible.png"; // Icon for showing password
    } else {
        passwordField.type = "password";
        toggleIcon.src = "https://img.icons8.com/ios-filled/50/000000/invisible.png"; // Icon for hiding password
    }
}