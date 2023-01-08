//? helperFunction
//take one arg : number
// /return new  value for duration

function resetTimerValue(number) {
  return () => {
    timer.pause();
    durationInput.value = number;
  };
}

// function startPauseSwitch(event) {
//   const start = document.getElementById("start");
//   const pause = document.getElementById("pause");
//   if (start.style.display != "none") {
//     start.style.display == "none";
//     pause.style.display == "block";
//   } else {
//     pause.style.display == "none";
//     start.style.display = "block";
//   }
// }

// function changeColor(event) {
//     const el = event.target;
//     el.setAttribute('style', 'display: none');
    
//   }
