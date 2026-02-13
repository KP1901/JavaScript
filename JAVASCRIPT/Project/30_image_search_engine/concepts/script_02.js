/*
There are Two main types of errors when using fetch():


✅ 1️⃣ Network Errors (Promise Rejection)

These happen when the request cannot reach the server at all.

In this case:

👉 fetch() rejects the Promise automatically

🔴 Examples of Network Errors:

-No internet connection
-Wrong domain name
-DNS failure
-Server completely down
-CORS blocking request
-Invalid URL

In network errors:

response.ok Does NOT exist.

✅ 2️⃣ HTTP Errors (Response Errors)

👉 The server receives the request
👉 But returns an error status code

Examples of HTTP error status codes:

400 → Bad Request
401 → Unauthorized
403 → Forbidden
404 → Not Found
500 → Server Error
------------------------------------------------------
*/

/*

1️⃣ What fetch() actually does

fetch():

-Sends an HTTP request to a server
-Returns a Promise
-That Promise can be:
  -pending
  -fulfilled
  -rejected

2️⃣ Very Important Concept 🚨

There are TWO types of errors with fetch():

✅ 1. Network Error (Promise Rejected)

This happens when:

-No internet
-Wrong domain
-Server not reachable
-CORS blocked
-DNS failure

Example:

fetch("https://wrongdomain1234.com")


In this case:

-Promise → ❌ Rejected
-catch() will run automatically
-You do NOT get a response object

So:

Network error = Promise rejected

✅ 2. HTTP Error (Promise Fulfilled but response not OK)

This happens when:

-400 → Bad Request
-401 → Unauthorized (wrong access key in your case)
-403 → Forbidden
-404 → Not Found
-500 → Server error

Example:

Wrong Unsplash access key:

const response = await fetch("unsplash_url_with_wrong_key");


Here:

Promise → ✅ Fulfilled
You DO get response object
But response.ok → ❌ false

That’s why we manually check:

if (!response.ok) {
  throw new Error("Failed to fetch images");
}

So:

HTTP error = Promise fulfilled BUT response not ok

IMP : 

Promise Pending → Waiting
Promise Fulfilled → Response object created
Promise Rejected → No response object

IMP : 

Network errors happen when the request cannot reach the server.
HTTP errors happen when the server responds with an error status code.
*/