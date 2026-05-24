import getAssetPath from "./util.js";

const weatherInputFormEl = document.querySelector(".weather-input-form");
const cityInput = document.getElementById("cityInput");
const weatherImg = document.getElementById("weather-img");
const temperatureEl = document.querySelector(".temperature");
const humidityEl = document.querySelector(".humidity");
const windEl = document.querySelector(".wind");
const cityEl = document.querySelector(".city");
const weatherHideContainer = document.querySelector(".weather-hide-container");
const message = document.getElementById("message");

weatherHideContainer.style.display = "none";

const apiKey = "a6446d4c283dd861e397865d928b3276";

https: weatherInputFormEl.addEventListener("submit", (e) => {
  e.preventDefault();
  let cityName = cityInput.value;

  if (!cityName) {
    message.style.display = "block";
    message.textContent = "Enter City Name....";
    weatherHideContainer.style.display = "none";
    return;
  }

  getWeatherData(cityName);
  cityInput.value = "";
});

async function getWeatherData(cityName) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`,
    );

    if (!response.ok) {
      message.style.display = "block";
      message.textContent = "Invalid City Name";
      weatherHideContainer.style.display = "none";

      throw new Error("HTTP Error", response.status);
    }

    weatherHideContainer.style.display = "block";
    message.style.display = "none";
    message.textContent = "";
    const weatherData = await response.json();

    weatherImg.src = getAssetPath(weatherData.weather[0].main);
    temperatureEl.textContent = `${Math.ceil(weatherData.main.temp)}°C`;
    humidityEl.textContent = `${weatherData.main.humidity}%`;
    cityEl.textContent = weatherData.name;
    windEl.textContent = `${weatherData.wind.speed} km/hr`;
  } catch (error) {
    console.log(error);
  }
}
