const apiKey = "ad2593663e974d97942184440251211";

const weatherDataEl = document.getElementById("weather-data");
const cityInputEl = document.getElementById("city-input");
const formEl = document.querySelector("form");

formEl.addEventListener("submit", async (event) => {
  event.preventDefault();
  const cityValue = cityInputEl.value;
  const newValue =
    cityValue.charAt(0).toUpperCase() + cityValue.slice(1, cityValue.length);
  getWeatherData(newValue);
  console.log(newValue);
});

async function getWeatherData(cityValue) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityValue}&aqi=yes`
    );

    const data = await response.json();
    console.log(data);

    const cityName = data.location.name;

    if (!response.ok || cityValue !== cityName) {
      throw new Error("Network response was not ok");
    }

    const temperature = Math.round(data.current.temp_c);

    const description = data.current.condition.text;

    const iconSrc = data.current.condition.icon;

    const details = [
      `Feels Like : ${Math.round(data.current.temp_c)}°C`,
      `Humidity : ${data.current.humidity}%`,
      `Wind Speed : ${data.current.wind_kph}km/h`,
    ];

    const iconContainer = weatherDataEl.querySelector(".icon");
    if (iconContainer) {
      iconContainer.innerHTML = `<img src="${iconSrc}"/>`;
    }

    const tempContainer = weatherDataEl.querySelector(".temperature");
    if (tempContainer) {
      tempContainer.textContent = `${temperature}°C`;
    }

    const descContainer = weatherDataEl.querySelector(".description");
    if (descContainer) {
      descContainer.textContent = `${description}`;
    }

    const detailContainer = weatherDataEl.querySelector(".details");
    if (detailContainer) {
      detailContainer.innerHTML = details
        .map((el) => {
          return `<div>${el}</div>`;
        })
        .join("");
    }
  } catch (error) {
    const iconContainer = weatherDataEl.querySelector(".icon");
    if (iconContainer) {
      iconContainer.innerHTML = "";
    }

    const tempContainer = weatherDataEl.querySelector(".temperature");
    if (tempContainer) {
      tempContainer.textContent = "";
    }

    const descContainer = weatherDataEl.querySelector(".description");
    if (descContainer) {
      descContainer.textContent = `an Error Occurs please try again!`;
    }

    const detailContainer = weatherDataEl.querySelector(".details");
    if (detailContainer) {
      detailContainer.innerHTML = "";
    }
  }
}
// normal function  = synchrnous = dealiy can use await
// async function = non blocking = can await use inside

// the problem which i faced

// 1.thinkg of hardcoded data => first add it in html then you can remove it in catch block if its not accoding to you

/*
1. fetch() returns a Promise that resolves to a Response object.
2. The Response object contains the body as a stream , status like that.
3. response.json() reads the stream and returns a Promise and when promise resolved we get real usable data.


**await does NOT block the entire program.
✅ Perfect way to say it:
✔ async allows the use of await.
✔ await pauses the async function until the Promise resolves.
✔ The rest of the program keeps running (non-blocking).



✅ Why response.json() returns a Promise
✔ It’s NOT because we are fetching again.
✔ It’s because the body is a stream, and reading a stream takes time.
So JavaScript cannot return the data instantly.
It must read the stream → convert to JSON → finish processing.
That whole process is asynchronous, so:
response.json() → returns a Promise


✅ Final Rule (Simple & Correct)
If an operation takes time (is asynchronous), JavaScript returns a Promise.
Examples:
✔ fetch() → network takes time → returns a Promise
✔ response.json() → reading a stream + parsing JSON takes time → returns a Promise


Examples
Asynchronous (takes time → returns Promise)
fetch()
response.json()
navigator.geolocation.getCurrentPosition (callback)
indexedDB
FileReader (promise or event)
async functions
import() dynamic modules

Synchronous (instant → no Promise)
JSON.parse() → parses instantly
localStorage.getItem() → instant
mathematical operations
string operations


⭐ Summary Sentence
Whenever an API needs time to finish and is designed to be asynchronous, it returns a Promise — like fetch() and response.json().

✅ Final Correct Understanding
✔ When we know an operation cannot finish instantly,
✔ we design it as asynchronous,
✔ and we return a Promise (or use callbacks).

This allows the rest of the JavaScript code to keep running without waiting.
*/
