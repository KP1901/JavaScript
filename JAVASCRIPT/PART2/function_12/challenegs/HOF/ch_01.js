/*
🔹 Challenge 1: Configurable Logger (Function Factory + Closure)
Problem

Create a function createLogger(level) that:

Returns a function

The returned function takes a message

Logs messages in this format:

[LEVEL] message
*/

function createLogger(level) {
  return function (message) {
    return `[${level}] ${message}`;
  };
}
const errorLogger = createLogger("ERROR");

console.log(errorLogger("Something Went Wrong"));
