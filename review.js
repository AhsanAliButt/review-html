document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.querySelector(".alert1");
  const modal = new bootstrap.Modal(document.getElementById("exampleModal"));

  submitButton.addEventListener("click", function () {
    const selectValue = document.querySelector(".form-select").value;
    const modalTitle = document.querySelector(".modal-title");
    const modalBody = document.querySelector(".modal-body");

    if (selectValue === "1") {
      modalTitle.textContent = "Product Information";
      modalBody.textContent =
        "You selected a product and its a very good product";
    } else if (selectValue === "2") {
      modalTitle.textContent = "Thank You!";
      modalBody.textContent =
        "Thank you for your feedback. You can comeback whenever you want more information";
    }

    modal.show();
  });
});

document.getElementById("loginButton").addEventListener("click", function () {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Simulate validation, replace with actual validation logic
  if (username === "ahsan" && password === "ahsan") {
    // Redirect to another page
    window.location.href = "Review.html";
  } else {
    alert("Invalid username or password. Please try again.");
  }
});
