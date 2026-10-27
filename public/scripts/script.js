const form = document.getElementById("vacation-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  clearErrors();
  let isValid = true;

  const destination = document.getElementById("destination").value;
  const departure = document.getElementById("departure").value;
  const travelers = document.getElementById("travelers").value;
  const successMessage = document.getElementById("success-message");

  if (destination === "") {
    showError("destination", "Please choose a destination.");
    isValid = false;
  }

  if (departure === "") {
    showError("departure", "Please pick a departure date.");
    isValid = false;
  }

  if (travelers === "" || Number(travelers) <= 0) {
    showError("travelers", "Number of travelers must be greater than 0.");
    isValid = false;
  }

  if (isValid) {
    successMessage.textContent = "Searching trips to " + destination + "!";
    form.reset();
  }
});

function showError(fieldId, message) {
  document.getElementById(fieldId + "-error").textContent = message;
  document.getElementById(fieldId).classList.add("invalid");
}

function clearErrors() {
  const errors = document.querySelectorAll(".error");
  errors.forEach(function (error) {
    error.textContent = "";
  });

  const fields = document.querySelectorAll(".invalid");
  fields.forEach(function (field) {
    field.classList.remove("invalid");
  });

  document.getElementById("success-message").textContent = "";
}