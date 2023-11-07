// Define variables
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let stopwatchInterval = null;
const display = document.querySelector(".display");
const startButton = document.querySelector(".start");
const pauseButton = document.querySelector(".pause");
const resetButton = document.querySelector(".reset");

// Update the display
const updateDisplay = () => {
  let h = formatTime(hours);
  let m = formatTime(minutes);
  let s = formatTime(seconds);
  let ms = formatTime(milliseconds)
  display.textContent = `${h} : ${m} : ${s} : ${ms}`;
};

// Format time
const formatTime = (value) => {
  if (value < 10) {
    return `0${value}`;
  } else {
    return value;
  }
};

// Initial display
updateDisplay();

// Start the stopwatch
const startStopwatch = () => {
  if (stopwatchInterval === null) {
    stopwatchInterval = setInterval(() => {
      milliseconds += 1;
      if (milliseconds === 100) {
        milliseconds = 0;
        seconds++;
        if (seconds === 60) {
          seconds = 0;
          minutes++;
          if (minutes === 60) {
            minutes = 0;
            hours++;
          }
        }
      }
      updateDisplay();
    }, 10);
  }
};

// Event listeners
startButton.addEventListener("click", startStopwatch);
pauseButton.addEventListener("click", () => {
  clearInterval(stopwatchInterval);
  stopwatchInterval = null;
});
resetButton.addEventListener("click", () => {
  clearInterval(stopwatchInterval);
  stopwatchInterval = null;
  milliseconds = seconds = minutes = hours = 0;
  updateDisplay();
});
