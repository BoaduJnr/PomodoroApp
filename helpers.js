//? helperFunction
//take one arg : number
// /return new  value for duration

function resetTimerValue(element) {
  return () => {
    timer.pause();
    durationInput.value = parseInt(element.value);
  };
}
