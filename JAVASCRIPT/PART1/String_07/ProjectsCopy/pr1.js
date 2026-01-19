const settings = {};

function updateSettings(key, value) {
  settings[key] = value;
}

updateSettings("theme", "white");
updateSettings("theme", "dark");
updateSettings("language", "en");

console.log(settings);
