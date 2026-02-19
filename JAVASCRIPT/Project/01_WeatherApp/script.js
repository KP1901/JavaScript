const apiKey = "a6446d4c283dd861e397865d928b3276";

// DOM elements
const buttonEl = document.querySelector(".search button");
const inputEl = document.querySelector("#input");
const messageEl = document.querySelector(".message");
const weatherEl = document.querySelector(".weather");
const imgEl = document.querySelector(".weather-icon");

const tempEl = document.querySelector(".temp");
const cityEl = document.querySelector(".city");
const humidityEl = document.querySelector(".humidity");
const windEl = document.querySelector(".wind");

// weather → icon map
const iconMap = {
  Clear: "clear.png",
  Clouds: "clouds.png",
  Mist: "mist.png",
  Rain: "rain.png",
  Drizzle: "drizzle.png",
  Snow: "snow.png",
};
let controller;

async function getWeatherData(cityName) {
  try {
    // empty input guard
    if (!cityName) {
      weatherEl.classList.add("hide");
      messageEl.textContent = "Please enter a city name";
      return;
    }
    messageEl.textContent = "loading...";

    if (controller) {
      controller.abort();
    }

    controller = new AbortController();

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`,
      { signal: controller.signal },
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    // UI update
    weatherEl.classList.remove("hide");
    messageEl.textContent = "";

    tempEl.textContent = `${Math.round(data.main.temp)} °C`;
    cityEl.textContent = data.name;
    humidityEl.textContent = `${data.main.humidity}%`;
    windEl.textContent = `${data.wind.speed} km/hr`;

    const weatherDesc = data.weather[0].main;
    imgEl.src = `./Assets/${iconMap[weatherDesc] || "clear.png"}`;
  } catch (error) {
    if (error.name == "AbortError") {
      return;
    } else {
      weatherEl.classList.add("hide");
      messageEl.textContent = error.message || "Something Went Wrong";
    }
  }
}

function debounce(fn, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}
const debounceWeather = debounce(getWeatherData, 400);

// button click
buttonEl.addEventListener("click", () => {
  debounceWeather(inputEl.value.trim());
});

// Enter key support
inputEl.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    debounceWeather(inputEl.value.trim());
  }
});

/*
async does three things:

1️⃣ Always returns a Promise
2️⃣ Allows the use of await
3️⃣ Pauses the function without blocking the call stack while awaiting a Promise
*/

/*
Problems :

1: 
buttonEl.addEventListener("click", getWeatherData(inputEl.value));

What actually happens here ❗

-getWeatherData(inputEl.value) executes immediately
👉 because JavaScript evaluates arguments first and sees ()

-Its return value (a Promise, because the function is async) is passed to addEventListener

-addEventListener expects a function reference, but receives a Promise

-o when the button is clicked → nothing runs

👉 addEventListener expects a function reference, not a function call.

✅ Corrected final statement

That’s why we use a callback: so the function runs only when the button is clicked, reads the current input value at that moment, and then passes it to getWeatherData — not during page load.

2 Problem solved : 

-store image path in Array (optmization)

3 Problems solve :

-key even even though not used form
*/
