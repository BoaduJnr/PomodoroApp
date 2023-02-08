function resetTimerValue(element) {
  return () => {
    timer.pause();
    durationInput.value = element.value + ":00 ";
  };
}

function convertToSeconds(time) {
  let text = time.toString();
  console.log(text);
  let seconds = text.split(".")[1];
  console.log(seconds);
  if (seconds > 60) {
    seconds = 60;
  } else{
    seconds = seconds;
  }
  return parseFloat(`${parseInt(text.split(".")[0])}.${parseInt(seconds)}`);
}

// function startTimer(duration, display) {
//   var timer = duration, minutes, seconds;
//   setInterval(function () {
//     minutes = parseInt(timer / 60, 10);
//     seconds = parseInt(timer % 60, 10);

//     minutes = minutes < 10 ? "0" + minutes : minutes;
//     seconds = seconds < 10 ? "0" + seconds : seconds;

//     display.textContent = minutes + ":" + seconds;

//     if (--timer < 0) {
//       timer = duration;
//     }
//   }, 1000);
// }

// // Example usage:
// var fiveMinutes = 60 * 5,
//     display = document.querySelector('#time');
// startTimer(fiveMinutes, display);
