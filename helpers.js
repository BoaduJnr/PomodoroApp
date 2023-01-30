

function resetTimerValue(element) {
  return () => {
    timer.pause();
    durationInput.value = element.value + ":00 ";
  };
};

