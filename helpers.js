//? helperFunction
//take one arg : number
// /return new  value for duration

function resetTimerValue(number) {
  return () => {
    timer.pause();
    durationInput.value = number;
  };
}


