pomodoroButton.addEventListener(
  "click",
  resetTimerValue(document.querySelector("#set-pomodoro"))
);
longButton.addEventListener(
  "click",
  resetTimerValue(document.querySelector("#set-long-break"))
);
shortButton.addEventListener(
  "click",
  resetTimerValue(document.querySelector("#set-short-break"))
);

const settings = document.querySelector("#settings");
settings.addEventListener("submit", (e) => {
  e.preventDefault();
  let radioButtons = document.getElementsByName("font");
  let selectedFont;
  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      selectedFont = radioButtons[i].value;
      break;
    }
  }
  document.body.style.fontFamily = selectedFont;

  let colors = document.getElementById("colorlist");
  let color = colors.options[colors.selectedIndex].value;
  console.log(color)
  pomodoroButton.style.backgroundColor = color
  circle.style.stroke = color
 
});
