import getData from "../utils/getData.js";

const Home = async () => {
  const launches = await getData();
  if (!launches) return "<p>Error cargando lanzamientos</p>";

  const view = `
    <section class="Characters">
      ${launches
        .map(
          (launch) => `
        <article class="Characters-card">
          <a href="/#/${launch.id}" data-link>
            <img src="${launch.links.patch.small || "placeholder.png"}" alt="${
            launch.name
          }" />
            <h3>${launch.name}</h3>
          </a>
        </article>
      `
        )
        .join("")}
    </section>
  `;

  return view;
};

export default Home;
