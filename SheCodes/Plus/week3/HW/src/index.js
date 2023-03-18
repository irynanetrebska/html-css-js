// https://codesandbox.io/s/cool-northcutt-7y4vmu?file=/src/index.js

let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};

// write your code here
let city = prompt("What's your city/town?");
city = city.toLowerCase().trim();

function forcast() {
  if (weather.hasOwnProperty(city) === false) {
    alert(
      `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
    );
  }
  for (let i = 0; i < 5; i++) {
    let prop = Object.keys(weather)[i];
    let val = Object.values(weather)[i];
    let round = Math.round(val.temp);
    let tempFar = (round * 9) / 5 + 32;
    if (city !== prop) {
      continue;
    } else {
      let cityCap = city.charAt(0).toUpperCase() + city.slice(1);
      alert(
        `It's currently ${round}°C (${tempFar}°F) in ${cityCap} with a humidity of ${val.humidity}%`
      );
    }
  }
}
forcast();

/* I have no idea what's wrong, and why the sandbox shows the erreur. 
I replicated the files in the VSCode, opened the html from there and the Inspector shows no erreurs.*/
