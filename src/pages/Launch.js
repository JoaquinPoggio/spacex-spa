import getData from "../utils/getData.js";

const Launch = async (id) => {
  const launches = await getData();
  const launch = launches.find((l) => l.id === id);

  if (!launch) return "<p>No se encontró el lanzamiento</p>";

  const view = `
    <section class="Launch-inner">
      <div class="Launch-card">
        <img src="${launch.links.patch.small || "placeholder.png"}" alt="${
    launch.name
  }" />
        <h3>${launch.name}</h3>
        <p><strong>Número de vuelo:</strong> ${launch.flight_number}</p>
        <p><strong>Fecha y hora:</strong> ${new Date(
          launch.date_utc
        ).toLocaleString()}</p>
        <p><strong>Fallas:</strong> ${
          launch.failures && launch.failures.length > 0
            ? launch.failures.map((f) => f.reason).join(", ")
            : "Ninguna"
        }</p>
        <p><strong>Detalles:</strong> ${launch.details || "Sin detalles"}</p>
      </div>
    </section>
  `;

  return view;
};

export default Launch;
