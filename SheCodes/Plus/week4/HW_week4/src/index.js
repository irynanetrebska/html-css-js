// Feature 1
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let day = new Date().getDay();
let hours = new Date().getHours();
if (Math.floor(hours / 10) === 0) {
  hours = `0${hours}`;
}
let minutes = new Date().getMinutes();
if (Math.floor(minutes / 10) === 0) {
  minutes = "0" + minutes;
}
let dayTime = document.querySelector("h4");
dayTime.innerHTML = `${days[day]} ${hours}:${minutes}`;

// Feature 2
function displayCity() {
  let city = document.querySelector("#enter-city");
  let cityOutput = document.querySelector("#city-display");
  city = city.value.trim();
  if (city) {
    cityOutput.innerHTML = city;
  }
}

let search = document.querySelector("#search-button");
search.addEventListener("click", displayCity);

function returnCity() {
  let cityDefault = document.querySelector("#city-display");
  cityDefault.innerHTML = "Talence";
}

let current = document.querySelector("#current-button");
current.addEventListener("click", returnCity);

// Bonus Feature
function switchTemp(event) {
  event.preventDefault();
  let CelTemp = document.querySelector("#temp-display");
  CelTemp.innerHTML = Math.round((21 * 9) / 5 + 32) + "°F";
}

let fahrenheitTemp = document.querySelector("#fahrenheit");
fahrenheitTemp.addEventListener("click", switchTemp);

function switchTempBack(event) {
  event.preventDefault();
  let CelTemp = document.querySelector("#temp-display");
  CelTemp.innerHTML = Math.round(((70 - 32) * 5) / 9) + "°C";
}

let celciusTemp = document.querySelector("#celcius");
celciusTemp.addEventListener("click", switchTempBack);
