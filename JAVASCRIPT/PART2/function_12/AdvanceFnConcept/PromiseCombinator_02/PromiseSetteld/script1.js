async function loadDashBoard() {
  console.time("parallel");
  try {
    const responses = await Promise.allSettled([
      fetch("https://jsonplaceholder.typicode.com/users/1"),
      fetch("https://jsonplaceholder.typicode.com/posts/1"),
      fetch("https://jsonplaceholder.typicode.com/photos/1"),
    ]);

    for (const response of responses) {
      if (response.status !== "fulfilled") {
        throw new Error(`Network Error : ${response.reason.message}`);
      }
      if (!response.value.ok) {
        throw new Error(`HTTP Error : ${response.value.status}`);
      }
    }

    const data = await Promise.all(
      responses.map((response) => response.value.json())
    );

    const [user, orders, settings] = data;
    console.log(user, orders, settings);
  } catch (error) {
    console.log("Dashboard failed:" + error.message);
  }
  console.timeEnd("parallel");
}
loadDashBoard();

/*
Promise.allSettled () you MUST check network-level failures manually and also http levels

🔑 Core rule (memorize this)

-fetch() does NOT reject on HTTP errors (404, 500, etc.)
-It rejects only on network-level failures.
*/
