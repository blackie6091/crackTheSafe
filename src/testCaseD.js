const { validate } = require("./utils/validate");
const { countdown } = require("./utils/timer");
const { setHints } = require("./utils/hints");

const loadTestCaseD = () => {
  const numbers = [5, 6, 9];

  // Hints
  const first = [numbers[0], 8, 2];
  const second = [4, 1, numbers[1]];
  const third = [numbers[1], numbers[2], 7];
  const fourth = [7, 2, 8];

  setHints("testCaseD", { first, second, third, fourth });
  const message = document.querySelector(".message");
  const button = document.querySelector("button");
  button.onclick = () => validate(numbers[0], numbers[1], numbers[2]); // Ensure we're validating against the correct values

  // We want to avoid people just guessing the numbers incrementally so we'll throw in some logic
  // that will track their guesses and make them wait. This logic survives refreshes as well.
  if (localStorage.getItem("guessCount") > 4) {
    button.disabled = true;
    message.innerHTML =
      "It isn't cheating if they don't catch you. Sadly ... we caught you. As such, you'll have to pay with wasted time.";
    countdown(5, button, message);
  }
};

module.exports = { loadTestCaseD };
