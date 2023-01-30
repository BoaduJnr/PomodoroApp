const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");
const longButton = document.querySelector("#long");
const shortButton = document.querySelector("#short");
const pomodoroButton = document.querySelector("#pomodoro");
const circle = document.querySelector("circle");

pomodoroButton.addEventListener("click", resetTimerValue(document.querySelector('#set-pomodoro')));
longButton.addEventListener("click", resetTimerValue(document.querySelector('#set-long-break')));
shortButton.addEventListener("click", resetTimerValue(document.querySelector('#set-short-break')));

const perimeter = circle.getAttribute("r") * 2 * Math.PI;

circle.setAttribute("stroke-dasharray", perimeter);

let duration;



const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart(totalDuration) {
    startButton.style.display = "none";
    duration = totalDuration;   
    
  },
  onTick(timeRemaining) {
    circle.setAttribute(
      "stroke-dashoffset",
      (perimeter * timeRemaining) / duration - perimeter
    );
  },
  onComplete() {
    startButton.innerText = "Restart";
    durationInput.value = "25:00";
  },
});



