import "./src/styles/styles.css";
import router from "./src/routes/index.js";

window.addEventListener("load", () => {
  router();

  document.body.addEventListener("click", (e) => {
    const link = e.target.closest("a[data-link]");
    if (!link) return;

    e.preventDefault();
    history.pushState(null, null, link.getAttribute("href"));
    router();
  });
});

window.addEventListener("popstate", router);
window.addEventListener("hashchange", router);
