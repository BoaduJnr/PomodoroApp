const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");
const longButton = document.querySelector("#long");
const shortButton = document.querySelector("#short");
const pomodoroButton = document.querySelector("#pomodoro");
const circle = document.querySelector("circle");


pomodoroButton.addEventListener('click', resetTimerValue(25))
longButton.addEventListener('click', resetTimerValue(15))
shortButton.addEventListener('click', resetTimerValue(5))






const perimeter = circle.getAttribute("r") * 2 * Math.PI;

circle.setAttribute("stroke-dasharray", perimeter);

let duration;

const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart(totalDuration) {
    duration = totalDuration;
  },
  onTick(timeRemaining) {
    circle.setAttribute(
      "stroke-dashoffset",
      (perimeter * timeRemaining) / duration - perimeter
    );
  },
  onComplete() {
    // alert("Time completed!!");
  },
});



