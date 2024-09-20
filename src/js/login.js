function validateForm(event) {
    var email = document.querySelector('input[type="email"]').value;
    var password = document.querySelector('input[type="password"]').value;

    if (email === "" || password === "") {
        alert("Please fill all the fields.");
        return false;
    }

    event.preventDefault();
    alert("Login successful!");
    window.location.href = "Home.html";
    return true;
}

function togglePasswordVisibility() {
    var passwordField = document.getElementById('password');
    var toggleIcon = document.getElementById('toggle-icon');

    // Toggle between showing and hiding password
    if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleIcon.src = "https://img.icons8.com/ios-filled/50/000000/visible.png"; // Show icon
    } else {
        passwordField.type = "password";
        toggleIcon.src = "https://img.icons8.com/ios-filled/50/000000/invisible.png"; // Hide icon
    }
}