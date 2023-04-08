// Challenge
// 1. Create a function isWindy
// 2. Add a speed parameter to the function
// 3. If speed is greater than 5, alert ‘It is windy’
// 4. Else, alert ‘It is not windy’
// 5. Call the function twice with different arguments to test both scenarios

function isWindy(speed) {
  if (speed > 5) {
    alert("It is windy.");
  } else {
    alert("It is not windy.");
  }
}

let speedMonday = 8;
let speedTuesday = 3;
isWindy(speedMonday);
isWindy(speedTuesday);

let enterSpeed = prompt("What's the wind speed today?");
isWindy(enterSpeed);
