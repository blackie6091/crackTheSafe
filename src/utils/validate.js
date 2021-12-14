const { countdown } = require("./timer");

// Function to check whether game is solved or not
const validate = (num1, num2, num3) => {
  // Getting value of user though input fields.
  let a = document.querySelector("#b1").value;
  let b = document.querySelector("#b2").value;
  let c = document.querySelector("#b3").value;
  let message = document.querySelector(".message");
  let button = document.querySelector("button");
  message.innerHTML = "";
  message.classList.remove("message-failure");

  // Checking whether input fields is blank or not
  if (a != "" && b != "" && c != "") {
    if (a == num1 && b == num2 && c == num3) {
      // Print success message
      message.innerHTML =
        "You got it! Now stop wasting time and put it in your safe. Those children need presents!";
      button.disabled = true;
    } else {
      // Print failure message
      message.innerHTML =
        "Are you guessing? You'll have to wait 60 seconds before guessing again.";
      message.classList.add("message-failure");

      // Add guess count to avoid refresh bypass
      const guessCount = localStorage.getItem("guessCount") || 0;
      localStorage.setItem("guessCount", Number(guessCount) + 1);

      // Set timer so they can't guess blindly
      button.disabled = true;
      countdown(1, button, message);
    }
  } else {
    // Print incomplete message
    message.innerHTML = "Maybe try filling in all the answers?";
    message.classList.add("message-failure");
  }
};

module.exports = { validate };
