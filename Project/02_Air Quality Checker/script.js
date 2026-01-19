const apiKey = "e23bcef7499d4b6eae52c2f52db26588";

const containerEl = document.getElementById("container");
const inputEl = document.getElementById("cityInput");
const aqiBtnEl = document.getElementById("aqiBtn");

const formEl = containerEl.querySelector("form");

const airQualityDataEL = document.getElementById("air-quality-data");

const aqiIndexEl = document.getElementById(".");

formEl.addEventListener("submit", function (e) {
  const cityNameFromIp = inputEl.value.trim();
  getAQIData(cityNameFromIp);
  e.preventDefault();
});

async function getAQIData(cityName) {
  try {
    const repsonse = await fetch(
      `https://api.weatherbit.io/v2.0/current/airquality?city=${cityName}&key=${apiKey}`
    );
    const data = await repsonse.json();

    const cityNameOfData = data.city_name;

    cityName = cityName.replace(/\b\w/g, (ch) => ch.toUpperCase());

    if (!repsonse.ok || !cityNameOfData.split(" ").includes(cityName)) {
      throw new Error("hi");
    } else {
      console.log(data);

      const details = [
        `CO (Carbon Monoxide): ${data.data[0].co} μg/m3`,
        `NO₂ (Nitrogen Dioxide):${data.data[0].no2} μg/m3`,
        `O₃ (Ozone): ${data.data[0].o3} μg/m3`,
        `SO₂ (Sulfur Dioxide): ${data.data[0].so2} μg/m3`,
        `PM2.5 (Fine Particles): ${data.data[0].pm25} μg/m3`,
      ];
      console.log(details);
      airQualityDataEL.querySelector(".details").innerHTML = details
        .map((el) => {
          return `<div>${el}</div>`;
        })
        .join("");

      airQualityDataEL.querySelector(
        "#aqi-index"
      ).innerHTML = `AQI: ${data.data[0].aqi}`;

      const pmValue = data.data[0].pm25;

      function getReview(pmValue) {
        switch (true) {
          case pmValue >= 0 && pmValue <= 12:
            return "Good";
          case pmValue >= 12.1 && pmValue <= 35.4:
            return "Moderate";
          default:
            console.log("hi");
            break;
        }
      }

      airQualityDataEL.querySelector(
        "#aqi-review"
      ).innerHTML = `Quality of Air : <div>${getReview(pmValue)}</div>`;

      airQualityDataEL.style.display = "block";

      inputEl.value = "";
    }
  } catch (error) {
    console.log("hi");
  }
}
/*
problems i faced

1.input and data fetch name is differnet => used uppcase and then split and search it contians or not
2.let all data fetch then will display the container => so show after data fetched

*/
