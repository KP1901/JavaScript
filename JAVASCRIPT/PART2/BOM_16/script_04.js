/*

BOM Topic 4️⃣ — navigator Object

-The navigator object provides information about the user's browser and device.
-It belongs to the window object.

window.navigator

Usually written as:

navigator-

1️⃣ navigator.userAgent

Gives information about the browser and operating system.

Developers sometimes use this to detect:

browser type
operating system
device type

2️⃣ navigator.language

Shows the user's language preference.

console.log(navigator.language);

Example output:

en-US

Used for international websites.

3️⃣ navigator.onLine

Tells if the browser is online or offline.

console.log(navigator.onLine);

Output:

true

4️⃣ navigator.platform

Shows the operating system platform.

Example:

console.log(navigator.platform);

Output example:

Win32

Other examples:

MacIntel
Linux x86_64

Example: Detect Mobile Device

if (/Mobi/.test(navigator.userAgent)) {
  console.log("Mobile device detected");
}

This is sometimes used for mobile-specific UI.
*/
