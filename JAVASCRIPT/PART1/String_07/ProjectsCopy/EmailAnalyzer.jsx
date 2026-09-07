function emailAnalyzer(emailsList) {
  let result = [];

  for (let email of emailsList) {
    email = email.trim().toLowerCase();

    const parts = email.split("@");

    const valid = /^[a-z0-9.]+@[a-z]+\.[a-z]+$/.test(email);

    const type =
      email.includes("gmail.com") ||
      email.includes("yahoo.com") ||
      email.includes("hotmail.com") ||
      email.includes("outlook.com")
        ? "personal"
        : "work";

    let reason = null;

    if (!valid) {
      if (parts.length > 2) {
        reason = "Multiple @ symbols";
      } else if (parts[0] === "") {
        reason = "Username is missing";
      } else if (!parts[1] || !parts[1].includes(".")) {
        reason = "Invalid domain";
      } else {
        reason = "Invalid email format";
      }
    }

    const info = {
      username: parts[0],
      domain: parts[1] || "",
      valid: valid,
      type: type,
      reason: reason,
    };

    result.push(info);
  }

  return result;
}

let emailsList = [
  "  Kiran@gmail.com  ",
  "john.doe@yahoo.com",
  "test123@company.in",
  "kiran@gmail",
  "@gmail.com",
  "kiran@@gmail.com",
];

let result = emailAnalyzer(emailsList);

console.log(result);
