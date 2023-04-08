let paris = {
  name: "Paris",
  country: "France",
  language: "French",
  temperature: 18,
  capitalCity: true,
};

// Challenge 1
console.log(paris.temperature);

// Challenge 2
let sydney = {
  name: "Sydney",
  country: "Australia",
  language: "English",
  temperature: 23,
  capitalCity: false,
};
console.log(sydney["temperature"]);

// Challenge 3
let australia = ["Canberra", "Melbourne", "Perth"];
console.log(australia[0]);
console.log(australia[1]);
console.log(australia[2]);

// Challenge 4
let cities = [
  {
    name: "Lviv",
    country: "Ukraine",
    language: "Ukrainian",
    temperature: 8,
    capitalCity: false,
  },
  {
    name: "Brasilia",
    country: "Brazil",
    language: "Portuguese",
    temperature: 31,
    capitalCity: true,
  },
  {
    name: "Tokyo",
    country: "Japan",
    language: "Japanese",
    temperature: 12,
    capitalCity: true,
  },
];

console.log(cities[0].name, "\n", cities[0].temperature);
console.log(cities[1].name, "\n", cities[1].temperature);
console.log(cities[2].name, "\n", cities[2].temperature);
