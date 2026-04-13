const inputEl = document.getElementById("inputEl");

let controller = null;

async function loadData() {
  try {
    if (controller) {
      controller.abort();
    }

    controller = new AbortController();

    let key = inputEl.value;

    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${key}`,
      {
        signal: controller.signal,
      },
    );

    if (!response.ok) {
      throw new Error("HTTP ERROR" + response.status);
    }
    let data = await response.json();

    console.log(data);
  } catch (error) {
    if ((error.name = "AbortError")) {
      console.log("req aborted");
    } else {
      console.log(error.message);
    }
  }
}
    
inputEl.addEventListener("input", () => {
  loadData();
});

/*
Timeline example

User types quickly:

User types "1"
fetchPost() starts
request A started
(await waiting)

Before it finishes:

User types "12"
fetchPost() starts again

Now this runs:

controller.abort()

So:

request A → aborted
request B → started

-----------------

imp : 

AbortSignal
     ↓
fetch receives event
     ↓
network request cancelled
     ↓
Promise rejected
*/
