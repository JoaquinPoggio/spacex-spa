import Home from "../pages/Home.js";
import Launch from "../pages/Launch.js";
import Error404 from "../pages/Error404.js";

const routes = {
  "/": Home,
  "/:id": Launch,
};

const router = async () => {
  const content = document.getElementById("app");

  console.log("👉 router ejecutado. ¿#app existe?:", content);
  if (!content) {
    console.error("⚠️ No se encontró el div con id='app'");
    return;
  }

  const hash = location.hash.slice(1).toLowerCase() || "/";

  let view = null;

  if (hash.startsWith("/")) {
    if (hash.length > 1) {
      const id = hash.slice(1);
      view = await routes["/:id"]?.(id);
    } else {
      view = await routes["/"]?.();
    }
  } else {
    view = await Error404();
  }

  if (view) {
    content.innerHTML = view;
  } else {
    content.innerHTML = "<p>Error al cargar la vista</p>";
  }
};

export default router;
