const weatherMap = {
  clear: "clear",
  clouds: "clouds",
  rain: "rain",
  drizzle: "drizzle",
  snow: "snow",
  thunderstorm: "thunderstormrain",
};

export default function getAssetPath(input) {
  input = input.toLowerCase();

  return `../Assets/${weatherMap[input] ?? "clear"}.png`;
}
/*

API                Asset

clear         →    clear.png
clouds        →    clouds.png
rain          →    rain.png
drizzle       →    drizzle.png
snow          →    snow.png
thunderstorm  →    thunderstormrain.png

api property : "asset name" 

-so clears comes from api (key)
-and clear is in our assets

*/
