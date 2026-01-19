function validateEmail(email) {
  email = email.trim();

  if (!email.includes("@")) return "❌ Invalid email: missing @";

  const parts = email.split("@");
  if (parts.length !== 2) return "❌ Invalid email: multiple @ symbols";

  // destructure syntax array element
  const [username, domain] = parts;

  if (!username) return "❌ username email : missing username";
  if (!domain.includes(".") || !domain)
    return "❌ Invalid email: invalid domain";

  const formattedEmail = `${username}@${domain.toLowerCase()}`;

  return formattedEmail;
}
// console.log(validateEmail("Jhon.Doe@gmail.com"));

const testEmails = [
  // Valid emails
  "user@gmail.com",
  "USER@YAHOO.COM",
  "admin@company.co.uk",
  "first.last@outlook.com",
  "sub.mail@my-domain.org",
  "test_user@sub.example.com",

  // Invalid emails
  "userexample.com", // missing @
  "user@@example.com", // multiple @
  "@example.com", // missing username
  "user@", // missing domain
  "user@domaincom", // domain missing dot
  "user @example.com", // space inside
  "user!#@example.com", // invalid character
  " user@example.com ", // leading/trailing spaces
];

for (let email of testEmails) {
  console.log(validateEmail(email));
}

/*
✅ In short:
destructure syntax
[username, domain] = ["kl", "gmail.com"] → extracts array elements by position and assigns them to variables.
*/
