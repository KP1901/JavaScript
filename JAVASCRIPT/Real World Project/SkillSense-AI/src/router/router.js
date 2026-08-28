import { Signup } from "../pages/signup";
import { Landing } from "../pages/landing/navbar";

export function router() {
  let path = window.location.hash;

  if (path === "#signup") {
    Signup();
  } else {
    Landing();
  }
}
