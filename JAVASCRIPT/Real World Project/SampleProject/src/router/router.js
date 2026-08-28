import { Landing } from "../pages/landing.js";
import { Signup } from "../pages/signup.js";

export function router() {
  const path = window.location.hash;

  if (path === "#signup") {
    Signup();
  } else {
    Landing();
  }
}
