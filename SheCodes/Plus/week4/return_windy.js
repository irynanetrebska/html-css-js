// Challenge 1
// 1. Modify the function is Windy and return true if the speed is greater than 5 and false if not
// 2. Call the function and alert ‘It is windy’ if it is windy, Else, alert ‘It is not windy’

function isWindy(speed) {
  return speed > 5;
}

let currentSpeed = 3;
if (isWindy(currentSpeed)) {
  alert("It is windy.");
} else {
  alert("It is not windy.");
}

// Challenge 2
// 1. Add unit parameter to isWindy
// 2. if greater than 5 and unit is metric, return true, else return false
// 3. Test both scenarios
// isWindy(2, 'imperial') should return false
// isWindy(20, 'metric') should return true
let speed2 = prompt("What is the wind speed today?");
let unit = prompt("What is the unit?");

function isWindy2(speed2, unit) {
  return speed2 > 5 && unit === "metric";
}

if (isWindy2(speed2, unit)) {
  alert("It is windy.");
} else {
  alert("It is not windy.");
}
