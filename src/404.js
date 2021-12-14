const load404 = () => {
  // Show 404 page
  document.querySelector(
    ".text-center.message"
  ).innerHTML = `These are not the hints you're looking for. Please correct your url to receive the hints you desire.`;
  document
    .querySelector(".text-center.message")
    .classList.add("message-failure");
  document.querySelectorAll("input").forEach((input) => {
    input.disabled = true;
  });
  document.querySelector("button.mt-4").disabled = true;
};

module.exports = { load404 };
