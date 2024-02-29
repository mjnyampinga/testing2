document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Generate unique ID
        const id = Date.now().toString();

        // Get current time
        const currentTime = new Date().toLocaleString();

        // Create object to store user information
        const userInfo = {
            id: id,
            name: name,
            email: email,
            message: message,
            time: currentTime
        };

        // Check if local storage is supported
        if (typeof(Storage) !== "undefined") {
            // Retrieve existing data from local storage
            let userData = JSON.parse(localStorage.getItem('userData')) || [];

            // Add new user information to the array
            userData.push(userInfo);

            // Save the updated array to local storage
            localStorage.setItem('userData', JSON.stringify(userData));

            // Clear form fields
            form.reset();

            alert('Thank you for contacting us, we will get back to you soon!');
        } else {
            // Local storage is not supported
            alert('Sorry, your browser does not support local storage.');
        }
    });
});
