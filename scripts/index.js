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