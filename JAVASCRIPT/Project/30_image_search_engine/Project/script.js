const accessKey = "oCX97Q7IHPLLiyycGlZ3CNVNrqHH0fyG57TD9ilB7qw";
const searchFormEl = document.getElementById("search-form");
const searchBoxEl = document.getElementById("search-box");
const searchResultEl = document.getElementById("search-result");
const showMoreBtnEl = document.getElementById("show-more-btn");

let page = 1;
let keyword = "";

async function searchImage() {
  try {
    if (!keyword) return;

    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${keyword}&page=${page}&client_id=${accessKey}&per_page=20`,
    );

    if (!response.ok) {
      throw new Error("Failed to fetch images");
    }
    const imageData = await response.json();

    const images = imageData.results;

    if (images.length === 0) {
      showMoreBtnEl.style.display = "none";
      return;
    }

    const fragment = document.createDocumentFragment();

    images.forEach((image) => {
      const img = document.createElement("img");
      img.src = image.urls.small;
      img.loading = "lazy";

      const anchorLink = document.createElement("a");
      anchorLink.href = image.links.html;
      anchorLink.target = "_blank";

      anchorLink.appendChild(img);
      fragment.appendChild(anchorLink);
    });

    searchResultEl.appendChild(fragment);

    showMoreBtnEl.style.display = "block";
  } catch (error) {
    console.log(error.message);
  }
}

searchFormEl.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  keyword = searchBoxEl.value.trim();
  searchResultEl.innerHTML = "";
  searchImage();
});

showMoreBtnEl.addEventListener("click", () => {
  page++;
  searchImage();
});

/*
  Lesson 1

  When we click Submit, the browser automatically reloads the page because form submission has a default behavior.
  The browser does not wait for the Fetch API to complete.
  That’s why we use preventDefault() to stop the page reload.

  ✔️ Correct concept
  ✔️ Correct reasoning

  Lesson 2

  After submitting the form, we have two ways to stop the reload:

  Pass a wrapper callback function that calls preventDefault()

  Pass a direct function reference where preventDefault() is handled inside the function itself

  ✔️ Correct
  ✔️ Well explained
  ✔️ Industry-accurate

  lesson 3 

  form.addEventListener("submit", handleSubmit); tells the browser to run handleSubmit when the form is submitted, and the browser automatically gives it the event object.

  lesson 4 

  preventDefault() stops the page from reloading, so the Fetch API gets time to run and return data.

  lesson 5

  preventDefault() is NOT only for form submit.
  It is used to stop the default behavior of any event.

  lesson 6 

  🎯 In form submit specifically

  Default behavior → page reload
  preventDefault() → stay on same page + run JS logic

  lesson 7

  Total results = 1000
  per_page (limit) = 20 (fetch limit)

  then 
  1000 ÷ 20 = 50 pages

  so it works page 1 => 1-20 result
              page 2 => 21-40 result

  Lesson 8:

  createDocumentFragment() => 

-create a lightweight temporary container in memory 
-It is not part of the real DOM.

When you normally do:

searchResultEl.appendChild(anchorLink);

👉 The browser updates the DOM every time
👉 That causes reflow + repaint

When you normally do:

searchResultEl.appendChild(anchorLink);

👉 The browser updates the DOM every time
👉 That causes reflow + repaint
-----------------------------------------------------------------------------------------


const accessKey = "..."              → store API key
const el = document.getElementById() → cache DOM element
let page = 1                         → pagination state

async function searchImage()         → async function (allows await)

searchBoxEl.value                    → current user input text

fetch(url)                           → send HTTP request
await fetch(...)                     → wait for response
response.json()                      → parse JSON body
await response.json()                → wait for parsed data

data.results                         → array of images from API

results.forEach(fn)                      → loop over results array
document.createElement("img")        → create image element
img.src = url                        → set image source

document.createElement("a")          → create anchor element
anchor.href = link                   → set link URL
anchor.target = "_blank"             → open in new tab
anchor.appendChild(img)              → image inside link
searchResultEl.append(anchor)        → add to DOM

showMoreBtnEl.style.display = "block"→ show button

addEventListener("submit", fn)       → listen form submit
e.preventDefault()                   → stop page reload
searchImage()                        → trigger search

++page                               → move to next page
addEventListener("click", fn)        → listen button click

  */
