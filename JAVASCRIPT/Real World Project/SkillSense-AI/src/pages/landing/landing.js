import "./navbar.css";
import { Button } from "../../components/Button.js";

export function navbar() {
  document.getElementById("app").innerHTML = `
    <div class="navbar-section">
      <div class="nav-section">
        <div>
          <img src="" alt="" />
          <h1>AI Resume Analyzer</h1>
        </div>
        <ul class="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#pricing">pricing</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div>${Button("Sign In", "#signin")}</div>
      </div>
      <div class="container main-section"></div>
      <div class="feature-section"></div>
    </div>
  `;
}
