function validateForm(event) {
    // Get form elements
    var name = document.querySelector('input[type="text"]').value;
    var email = document.querySelector('input[type="email"]').value;
    var password = document.querySelector('input[type="password"]').value;
    
    // Check if all fields are filled
    if (name === "" || email === "" || password === "") {
        alert("Please fill all the fields.");
        return false;  // Don't proceed if validation fails
    }
    
    // Check if the password meets the pattern requirement
    var passwordPattern = /[A-Z]+[0-9]+/;
    if (!passwordPattern.test(password)) {
        alert("Password must contain at least one uppercase letter and one number.");
        return false;  // Don't proceed if password validation fails
    }

    // If everything is correct, prevent the form from submitting
    event.preventDefault();

    // Show the success message and redirect to the home page
    alert("congratulation! Your account successfully create");
    window.location.href = "home.html";  // Redirect to home page after success
    return true;
}