// import router
import { router } from "./router/router.js";

// run on first load
window.addEventListener("DOMContentLoaded", router);

// run on route change
window.addEventListener("hashchange", router);
