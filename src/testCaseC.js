const { validate } = require("./utils/validate");
const { countdown } = require("./utils/timer");
const { setHints } = require("./utils/hints");

const loadTestCaseC = () => {
  const numbers = [8, 3, 1];

  // Hints
  const first = [2, 5, numbers[2]];
  const second = [4, 6, numbers[1]];
  const third = [numbers[1], numbers[0], 7];
  const fourth = [0, 2, 7];

  setHints("testCaseC", { first, second, third, fourth });
  const message = document.querySelector(".message");
  const button = document.querySelector("button");
  button.onclick = () => validate(num1, num2, num3); // Ensure we're validating against the correct values

  // We want to avoid people just guessing the numbers incrementally so we'll throw in some logic
  // that will track their guesses and make them wait. This logic survives refreshes as well.
  if (localStorage.getItem("guessCount") > 4) {
    button.disabled = true;
    message.innerHTML =
      "Hmmm ... I expected more from you. Sadly, the punishment will simply cause more impatience.";
    countdown(5, button, message);
  }
};

module.exports = { loadTestCaseC };
