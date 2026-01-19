(async function loadDashBoard() {
  try {
    const response = await Promise.race([
      fetch("https://jsonplaceholder.typicode.com/users/1"),
      fetch("https://jsonplaceholder.typicode.com/posts/1"),
      fetch("https://jsonplaceholder.typicode.com/photos/1"),
    ]);

    if (!response.ok) {
      throw new Error(`HTTP Error : ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
})();

/*

1.network issues are done automatically like Promise.all()
2.One-line mental rule (memorize)

-Multiple .json() promises → Promise.all()
-Single .json() promise → await response.json()


*/
