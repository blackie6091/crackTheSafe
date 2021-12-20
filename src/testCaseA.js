const { validate } = require("./utils/validate");
const { countdown } = require("./utils/timer");
const { setHints } = require("./utils/hints");
const { autoFocus } = require("./utils/autoFocus");

const loadTestCaseA = () => {
  const numbers = [4, 0, 9];

  // Hints
  const first = [1, numbers[1], 8];
  const second = [3, 1, numbers[0]];
  const third = [numbers[1], numbers[2], 7];
  const fourth = [3, numbers[1], numbers[2]];

  setHints("testCaseA", { first, second, third, fourth });
  const message = document.querySelector(".message");
  const button = document.querySelector("button");
  button.onclick = () => validate(numbers[0], numbers[1], numbers[2]); // Ensure we're validating against the correct values
  autoFocus();

  // We want to avoid people just guessing the numbers incrementally so we'll throw in some logic
  // that will track their guesses and make them wait. This logic survives refreshes as well.
  if (localStorage.getItem("guessCount") > 4) {
    button.disabled = true;
    message.innerHTML =
      "(┛ಠ_ಠ)┛彡┻━┻ You're just putting yourself at a disadvantage with all of this.";
    countdown(5, button, message);
  }
};

module.exports = { loadTestCaseA };
