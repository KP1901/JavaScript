import { Button } from "../components/Button.js";

export function Landing() {
  document.querySelector("#app").innerHTML = `   
    <h1>Welcome to SkillSense AI 🚀</h1>
    <p>This is Landing Page</p>

    <a href="#signup">
      <button>Go to Signup</button>
    </a>

    <div>
    ${Button("Click Me")}
    </div>`;

  document.querySelector("#customBtn").addEventListener("click", () => {
    alert("Button clicked!");
  });
}
