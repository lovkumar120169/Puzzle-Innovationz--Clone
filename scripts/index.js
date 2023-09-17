const email = document.getElementById("emailID");
        const form = document.getElementById("startform");

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            
            // Trim and validate the email
            const enteredEmail = email.value.trim();
            if (enteredEmail === '' || !isValidEmail(enteredEmail)) {
                // Show SweetAlert error message
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Please enter a valid email!',
                });
                return;
            }

            // If email is valid, proceed with storage and redirection
            localStorage.setItem("bootcampemail", enteredEmail);
            window.location.href = "./pages/FORM/form.html";
        });

        // Function to validate email using a simple regular expression
        function isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }