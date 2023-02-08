//? timer Class
//arg: duration, startButton, PauseButton , callbacks
//returns Timer Object

class Timer {
  constructor(durationInput, startButton, pauseButton, callbacks) {
    this.durationInput = durationInput;
    this.pauseButton = pauseButton;
    this.startButton = startButton;

    if (callbacks) {
      this.onStart = callbacks.onStart;
      this.onTick = callbacks.onTick;
      this.onComplete = callbacks.onComplete;
    }

    this.startButton.addEventListener("click", this.start);
    this.pauseButton.addEventListener("click", this.pause);
  }

  start = () => {
    if (this.onStart) {
      this.pauseButton.style.display = "block";
      this.onStart(this.timeRemaining);
    }
    this.interval = setInterval(this.tick, 1000);
  };

  pause = () => {
    this.pauseButton.style.display = "none";
    this.startButton.innerText = "Start";
    this.startButton.style.display = "block";
    clearInterval(this.interval);
  };

  tick = () => {
    if (this.timeRemaining <= 0) {
      this.pause();
      if (this.onComplete) {
        this.onComplete();
      }
    } else {
      let text = this.timeRemaining.toString();
      let seconds = text.split(".")[1];
      if (seconds > 59) {
        this.timeRemaining = parseFloat(`${text.split(".")[0]}.60`)
      }  
      this.timeRemaining = this.timeRemaining - 0.01;


      if (this.onTick) {
        this.onTick(this.timeRemaining);
      }
    }
  };

  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }

  set timeRemaining(time) {


    this.durationInput.value = time.toFixed(2);
  }
}
