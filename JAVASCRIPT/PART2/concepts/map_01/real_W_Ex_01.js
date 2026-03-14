const textInput = document.getElementById("textInput");
const btn = document.getElementById("btn");

// let cache = new Map();
let cache = {};

async function loadData() {
  let userId = textInput.value;

  if (!userId) return;

  // if (cache.has(userId)) {
  //   console.log("From cache...");
  //   console.log(cache.get(userId));
  //   return;
  // }
  if (userId in cache) {
    console.log("From cache...");
    console.log(cache[userId]);
    return;
  }

  try {
    console.log("fetching from server...");
    let response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`,
    );

    if (!response.ok) {
      throw new Error("HTTP Error" + response.status);
    }

    let data = await response.json();

    // cache.set(userId, data);
    cache[userId] = data;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  loadData();
});
