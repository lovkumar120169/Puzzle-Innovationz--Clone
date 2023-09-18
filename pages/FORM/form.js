
    document.getElementById('enrollmentForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting normally

        const emailID = localStorage.getItem("bootcampemail")


        // Get form values
        const course = document.getElementById('course').value;
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const phoneNumber = document.getElementById('phoneNumber').value;
        const location = document.getElementById('location').value;
        const degree = document.getElementById('degree').value;
        const experience = document.getElementById('experience').value;
        const linkedin = document.getElementById('linkedin').value;

        const userObj = {
            emailID,
            course,
            firstName,
            lastName,
            phoneNumber,
            location,
            degree,
            experience,
            linkedin
        }
        Swal.fire({
            title: 'Submitting...',
            html: 'Please wait while your form is being submitted',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });
        
        fetch('https://mailsender-22av.onrender.com/submit', {
            method: 'POST',
            body: JSON.stringify(userObj),
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then(response => response.text())
        .then(data => {
            Swal.close();
            console.log(data)
            if (data === 'your form has been submitted.') {
                Swal.fire({
                    title: 'Success',
                    text: 'Your form has been submitted successfully',
                    icon: 'success'
                });
            } else {

                Swal.fire({
                    title: 'Error',
                    text: 'Your form was not submitted',
                    icon: 'error'
                });
            }
        })
        .catch(error => {
            Swal.close();
            console.error('Error:', error);
            Swal.fire({
                title: 'Error',
                text: `${error.message}`,
                icon: 'error'
            });
        });


    });



    
        
$(document).ready(function () {

    $('.first-button').on('click', function () {
  
      $('.animated-icon1').toggleClass('open');
    });
    $('.second-button').on('click', function () {
  
      $('.animated-icon2').toggleClass('open');
    });
    $('.third-button').on('click', function () {
  
      $('.animated-icon3').toggleClass('open');
    });
  });
  
  
  
  let hamburgur = document.getElementById("hamburgur")
  let logo = document.getElementById("logo-site")
  
  
  hamburgur.addEventListener("click", () => {
  
  })
  
  const applyBtn = document.getElementById("apply-now");
  const hamCollapse = document.getElementById("ham-collapse");
  const hideDiv = document.getElementById("navbarSupportedContent20");
  const crossIcon = document.querySelector(".animated-icon1");
  
  applyBtn.addEventListener("click", () => {
    console.log(hamCollapse);
    console.log("---------")
    hamCollapse.className = "navbar-toggler first-button collapsed";
    hamCollapse.setAttribute("aria-expanded", "false");
    hideDiv.className = "collapse navbar-collapse";
    crossIcon.className="animated-icon1";
    console.log(hamCollapse);
  })
