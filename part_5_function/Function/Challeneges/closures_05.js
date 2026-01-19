function logger(prefix) {
  return function (message) {
    console.log(prefix, message);
  };
}
const errorLogger = logger("❌ Error:");
const infoLogger = logger("ℹ️ Info:");

infoLogger("File not found!");
infoLogger("Server started successfully.");
