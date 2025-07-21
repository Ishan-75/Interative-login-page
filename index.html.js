document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const emailInput = document.querySelector(".emailid-input");

  // Convert to lowercase while typing
  emailInput.addEventListener("input", () => {
    emailInput.value = emailInput.value.toLowerCase();
  });

  // Validate only Gmail addresses on submit
  form.addEventListener("submit", function (e) {
    const emailValue = emailInput.value.trim().toLowerCase();
    const gmailRegex = /^[a-z0-9._%+-]+@gmail\.com$/;

    if (!gmailRegex.test(emailValue)) {
      e.preventDefault(); // Prevent form submission
      alert("Only Gmail addresses (e.g. yourname@gmail.com) are allowed.");
      emailInput.focus();
    }
  });
});
//display name
  // Get query string and parse it
  // Display the username
const params = new URLSearchParams(window.location.search);
const username = params.get('username');

if (username) {
  document.getElementById('welcome-message').innerHTML = `Thank You!!<br>${username}💖`;
} else {
  document.getElementById('welcome-message').innerHTML = "Thank You!!";
}


