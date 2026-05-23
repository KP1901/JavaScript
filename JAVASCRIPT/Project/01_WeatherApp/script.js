import getAssetPath from "./util.js";

const weatherInputFormEl = document.querySelector(".weather-input-form");
const cityInput = document.getElementById("cityInput");
const weatherImg = document.getElementById("weather-img");
const temperatureEl = document.querySelector(".temperature");
const humidityEl = document.querySelector(".humidity");
const windEl = document.querySelector(".wind");
const cityEl = document.querySelector(".city");

const apiKey = "a6446d4c283dd861e397865d928b3276";

https: weatherInputFormEl.addEventListener("submit", (e) => {
  e.preventDefault();
  let cityName = cityInput.value;
  getWeatherData(cityName);
});

async function getWeatherData(cityName) {
  const weatherDataRes = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`,
  );

  const weatherData = await weatherDataRes.json();

  console.log(weatherData);

  weatherImg.src = getAssetPath(weatherData.weather[0].main);
  temperatureEl.textContent = `${weatherData.main.temp}C`;
  humidityEl.textContent = `${weatherData.main.humidity}C`;
  cityEl.textContent = weatherData.name;
  windEl.textContent = `${weatherData.wind.speed} km/hr`;
}
