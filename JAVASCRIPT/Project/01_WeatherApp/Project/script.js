function init() {
  const weatherDetails = document.querySelector(".weather-details");
  const searchBar = document.querySelector(".search-bar");
  const searchCity = document.getElementById("searchCity");
  const weatherIcon = document.getElementById("weather-icon");
  const temperature = document.querySelector(".temperature");
  const city = document.querySelector(".city");
  const humidity = document.querySelector(".humidity");
  const wind = document.querySelector(".wind");
  const message = document.getElementById("message");

  const apiKey = "a6446d4c283dd861e397865d928b3276";

  let weatherMap = {
    clear: "../Assets/clear.png",
    clouds: "../Assets/clouds.png",
    rain: "../Assets/rain.png",
    drizzle: "../Assets/drizzle.png",
    mist: "../Assets/mist.png",
    snow: "../Assets/snow.png",
  };

  weatherDetails.style.display = "none";

  async function getWeatherDetails() {
    try {
      let cityInput = searchCity.value;

      if (!cityInput) {
        message.textContent = "Please Enter a City Name!";
        weatherDetails.style.display = "none";
        return;
      }

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`,
      );

      if (!response.ok) {
        weatherDetails.style.display = "none";
        message.textContent = "City Not Found!";
        return;
      }
      weatherDetails.style.display = "block";

      const data = await response.json();

      let weatherDesc = String(data.weather[0].main).toLowerCase();

      weatherIcon.src = weatherMap[weatherDesc] || "../Assets/default.png";

      temperature.textContent = `${Math.floor(Number(data.main.temp))}°C`;

      city.textContent = data.name;
      humidity.textContent = `${data.main.humidity}%`;
      wind.textContent = `${Math.floor(data.wind.speed * 3.6)} Km/hr`;

      message.textContent = "";
      searchCity.value = "";
    } catch (error) {
      message.textContent = "Something Went Wrong";
      weatherDetails.style.display = "none";
      console.log(error.message);
    }
  }

  searchBar.addEventListener("submit", (e) => {
    e.preventDefault();
    getWeatherDetails();
  });
}

function runApp() {
  init();
}
runApp();
