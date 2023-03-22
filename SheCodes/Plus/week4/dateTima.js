// Challenge 1
let now =
  new Date().getDate() +
  "/" +
  (new Date().getMonth() + 1) +
  "/" +
  new Date().getFullYear();
console.log(now);

// Challenge 2
let milliSeconds = new Date().getMilliseconds();
console.log(milliSeconds);

// Challenge 3
/*
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[new Date().getDay()];
console.log(day);

// Challenge 4
let year = new Date().getFullYear();
console.log(year);

// Challenge 5
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
let month = months[new Date().getMonth()];
console.log(month);

// Challenge 6
let dateDay = new Date().getDate();
let currentDate = `Today is ${day}, ${month} ${dateDay}, ${year}.`;
console.log(currentDate);

let displayDate = document.querySelector(".challenge-6");
displayDate.innerHTML = `Today is ${day}, ${month} ${dateDay}, ${year}.`;
*/

// Challenge 7
function formatDate() {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let day = days[new Date().getDay()];
  let year = new Date().getFullYear();
  let month = months[new Date().getMonth()];
  let dateDay = new Date().getDate();
  return `Today is ${day}, ${month} ${dateDay}, ${year}.`;
}

console.log(formatDate());
