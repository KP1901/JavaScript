/*
BOM Topic 2️⃣ — location Object

The location object represents the current URL of the page.

It allows JavaScript to:
read the URL
redirect to another page
reload the page
get query parameters

1️⃣ location.href

Gets the full URL.

console.log(location.href);

Output:

https://example.com/products?id=10#section

You can also change the page:

location.href = "https://google.com";

This redirects the browser.

2️⃣ location.hostname

Gets the domain name.

console.log(location.hostname);

Output:

example.com

3️⃣ location.pathname

Gets the path after the domain.

console.log(location.pathname);

Output:

/products

4️⃣ location.search

Gets the query parameters.

console.log(location.search);

Output:

?id=10

These are used for things like:

product pages
filters
search queries

Example:

const params = new URLSearchParams(location.search);
console.log(params.get("id"));

Output:

10

5️⃣ location.hash

Gets the URL fragment.

console.log(location.hash);

Output:

#section

Used for scrolling to sections of a page.

6️⃣ Reload Page

location.reload();

Reloads the current page.
*/