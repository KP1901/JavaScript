/***********************
        MODEL
************************/
const WeatherModel = (() => {
  const apiKey = "a6446d4c283dd861e397865d928b3276"; // <-- put your key here

  async function fetchWeather(cityName, signal) {
    if (!cityName) {
      throw new Error("Please enter city name");
    }

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`,
      { signal },
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    // return only needed structured data
    return {
      temp: Math.round(data.main.temp),
      city: data.name,
      humidity: data.main.humidity,
      wind: data.wind.speed,
      condition: data.weather[0].main,
    };
  }

  return { fetchWeather };
})();

/***********************
        VIEW
************************/
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

  function showLoading() {
    weatherEl.classList.add("hide");
    messageEl.textContent = "Loading...";
  }

  function showError(msg) {
    weatherEl.classList.add("hide");
    messageEl.textContent = msg;
  }

  function showWeather(data) {
    messageEl.textContent = "";
    weatherEl.classList.remove("hide");

    tempEl.textContent = `${data.temp}°C`;
    cityEl.textContent = data.city;
    humidityEl.textContent = `${data.humidity}%`;
    windEl.textContent = `${data.wind} km/hr`;

    imgEl.src = `./Assets/${iconMap[data.condition] || "clear.png"}`;
  }

  function getCityInput() {
    return inputEl.value.trim();
  }

  function reset() {
    weatherEl.classList.add("hide");
    messageEl.textContent = "";
  }
  return {
    buttonEl,
    inputEl,
    showLoading,
    showError,
    showWeather,
    getCityInput,
    reset,
  };
})();

/***********************
      CONTROLLER
************************/
const WeatherController = (() => {
  let controller;

  function debounce(fn, delay) {
    let timeoutId;

    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        fn.apply(this, args);
      }, delay);
    };
  }

  async function handleWeatherRequest() {
    const city = WeatherView.getCityInput();

    if (controller) {
      controller.abort();
    }

    controller = new AbortController();

    try {
      WeatherView.showLoading();

      const data = await WeatherModel.fetchWeather(city, controller.signal);

      WeatherView.showWeather(data);
    } catch (error) {
      if (error.name === "AbortError") return;

      WeatherView.showError(error.message || "Something went wrong");
    }
  }

  const debouncedRequest = debounce(handleWeatherRequest, 400);

  function init() {
    WeatherView.buttonEl.addEventListener("click", debouncedRequest);

    WeatherView.inputEl.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        debouncedRequest();
      }
    });

    WeatherView.inputEl.addEventListener("input", () => {
      if (WeatherView.getCityInput().length === 0) {
        WeatherView.reset();
      }
    });
  }

  return { init };
})();

/***********************
        START APP
************************/
WeatherController.init();
