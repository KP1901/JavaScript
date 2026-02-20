const WeatherModel = (() => {
  const apiKey = "a6446d4c283dd861e397865d928b3276";

  async function fetchWeather(cityName, signal) {
    if (!cityName) {
      throw new Error("Please Enter City Name");
    }
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`,
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    return {
      temp: 26,
      city: "udgir",
      humidity: 26,
      wind: 2,
    };
  }
  return { fetchWeather };
})();

const WeatherView = (() => {
  const buttonEl = document.querySelector(".search button");
  const inputEl = document.querySelector("#input");
  const messageEl = document.querySelector(".message");
  const weatherEl = document.querySelector(".weather");
  const imgEl = document.querySelector(".weather-icon");

  const tempEl = document.querySelector(".temp");
  const cityEl = document.querySelector(".city");
  const humidityEl = document.querySelector(".humidity");
  const windEl = document.querySelector(".wind");

  const iconMap = {
    Clear: "clear.png",
    Clouds: "clouds.png",
    Mist: "mist.png",
    Rain: "rain.png",
    Drizzle: "drizzle.png",
    Snow: "snow.png",
  };

  function showWeather(data) {
    messageEl.textContent = "";
    weatherEl.classList.remove("hide");

    tempEl.textContent = `${data.temp}°C`;
    cityEl.textContent = data.city;
    humidityEl.textContent = `${data.humidity}%`;
    windEl.textContent = `${data.wind} km/hr`;

    imgEl.src = `./Assets/${iconMap[data.condition] || "clear.png"}`;
  }

  function showError(msg) {
    weatherEl.classList.add("hide");
    messageEl.textContent = msg;
  }
  function getCityInput() {
    return inputEl.value.trim();
  }

  function reset() {
    weatherEl.classList.add("hide");
    messageEl.textContent = "";
  }

  return {
    
  }
})();
