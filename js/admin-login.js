// Login functionality
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('error-message');

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            // Simple authentication (for demo purposes)
            if (username === 'admin' && password === 'admin123') {
                // Store login state
                localStorage.setItem('adminLoggedIn', 'true');
                // Redirect to dashboard
                window.location.href = 'dashboard.html';
            } else {
                // Show error message
                errorMessage.style.display = 'block';
                // Hide error message after 3 seconds
                setTimeout(() => {
                    errorMessage.style.display = 'none';
                }, 3000);
            }
        });
    }
});