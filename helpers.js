//? helperFunction
//take one arg : number
// /return new  value for duration

function resetTimerValue(element) {
  return () => {
    timer.pause();
    durationInput.value = parseInt(element.value);
  };
}


// class Button{
//   constructor (button){
//     this.button = button

//   }
//   hideButton(button) {
//   this.button.addEventListener("click", function() {
//     this.button.style.display = "none";
//   });
  
// }

//  showButton(button) {
//   this.button.addEventListener("click", function() {
//     button.style.display = "block";
//   });
  
// }}