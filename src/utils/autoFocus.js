const autoFocus = () => {
  document.querySelectorAll("input.answer").forEach((element, index) => {
    element.onkeyup = () => {
      if (element.value.length >= element.maxLength) {
        // Focus on next element
        const nextElement = document.querySelector(`#b${index + 2}`);
        if (nextElement) nextElement.focus();
      }
    };
  });
};

module.exports = { autoFocus };
