document.addEventListener("DOMContentLoaded", function () {
  // Toggle password visibility
  const eyeIcon = document.querySelector(".eye-icon");
  const passwordInput = document.querySelector(".password");

  eyeIcon.addEventListener("click", function () {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      eyeIcon.classList.add("fa-eye-slash");
      eyeIcon.classList.remove("fa-eye");
    } else {
      passwordInput.type = "password";
      eyeIcon.classList.remove("fa-eye-slash");
      eyeIcon.classList.add("fa-eye");
    }
  });

  // Form submission handling
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from submitting

    // Validate email and password
    const emailInput = document.querySelector(".email");
    const passwordInput = document.querySelector(".password");

    if (!validateEmail(emailInput.value)) {
      showError(emailInput, "Invalid email address");
      return;
    }

    if (!validatePassword(passwordInput.value)) {
      showError(passwordInput, "Password must be at least 6 characters");
      return;
    }

    // If the form is valid, you can submit it or perform other actions
    alert("Form submitted successfully!");
    // form.submit();
  });

  // Validation functions
  function validateEmail(email) {
    // Simple email validation using regex
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
  }

  function validatePassword(password) {
    // Password should be at least 6 characters
    return password.length >= 6;
  }

  // Function to display error message
  function showError(inputElement, message) {
    const errorElement = document.createElement("div");
    errorElement.className = "error-message";
    errorElement.textContent = message;

    // Remove any existing error message
    const parent = inputElement.parentElement;
    const existingError = parent.querySelector(".error-message");
    if (existingError) {
      parent.removeChild(existingError);
    }

    // Add the new error message
    parent.appendChild(errorElement);
  }
});




document.addEventListener("DOMContentLoaded", function () {
  const passwordInput = document.getElementById("password");
  const togglePasswordButton = document.getElementById("togglePassword");

  togglePasswordButton.addEventListener("click", function () {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      togglePasswordButton.classList.remove("fa-eye-slash");
      togglePasswordButton.classList.add("fa-eye");
    } else {
      passwordInput.type = "password";
      togglePasswordButton.classList.remove("fa-eye");
      togglePasswordButton.classList.add("fa-eye-slash");
    }
  });
});




