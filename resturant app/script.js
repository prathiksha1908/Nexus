function login() {
    var username = document.getElementById("loginUsername").value;
    var password = document.getElementById("loginPassword").value;

    // Send login credentials to backend for authentication
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.getElementById("message").innerText = "Login successful!";
        } else {
            document.getElementById("message").innerText = "Login failed. Please try again.";
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function signup() {
    var username = document.getElementById("signupUsername").value;
    var password = document.getElementById("signupPassword").value;

    // Send signup data to backend for registration
    fetch('/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.getElementById("message").innerText = "Signup successful!";
        } else {
            document.getElementById("message").innerText = "Signup failed. Please try again.";
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
