//? helperFunction
//take one arg : number
// /return new  value for duration

function resetTimerValue(number) {
  return () => {
    if(timer.onTick){
      const answer = confirm("This will pause the timer, Do you want to continue")
    if(answer == true){
        durationInput.value = number;
        timer.pause();
    }  
    }else{
        duration.pause
    }
    
    
  };
}
