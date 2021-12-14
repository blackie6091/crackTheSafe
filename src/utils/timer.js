/********************************************************************************************************************
Countdown.js is a simple script to add a countdown timer
for your website. Currently it can only do full minutes
and partial minutes aren't supported. This script is a fork of http://jsfiddle.net/HRrYG/ with some 
added extensions. Since the original code that I forked was released under Creative Commons by SA license, 
I have to release this code under the same license. You can view a live demo of this code at http://jsfiddle.net/JmrQE/2/.
********************************************************************************************************************/
const countdown = (minutes, button, message) => {
  var seconds = 60;
  var mins = minutes;
  function tick() {
    var counter = document.getElementById("counter");
    counter.style.display = "block";
    var current_minutes = mins - 1;
    seconds--;
    counter.innerHTML =
      current_minutes.toString() +
      ":" +
      (seconds < 10 ? "0" : "") +
      String(seconds);
    if (seconds > 0) {
      setTimeout(tick, 1000);
    } else {
      console.log(mins, button, message);
      if (mins > 1) {
        countdown(mins - 1);
      } else {
        button.disabled = false;
        counter.style.display = "none";
        message.innerHTML = "";
      }
    }
  }
  tick();
};

module.exports = { countdown };
