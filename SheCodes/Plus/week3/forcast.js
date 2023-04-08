let forcast = [
  {
    day: "Monday",
    temperature: 13,
  },
  {
    day: "Tuesday",
    temperature: 9,
  },
  {
    day: "Wednesday",
    temperature: 15,
  },
  {
    day: "Thursday",
    temperature: 18,
  },
];

for (let i = 0; i < forcast.length; i++) {
  console.log(
    `The temperature for ${forcast[i].day} will be ${forcast[i].temperature} degrees`
  );
}
