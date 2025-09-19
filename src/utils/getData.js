const API = "https://api.spacexdata.com/v5/launches";

const getData = async (id) => {
  try {
    const apiURL = id ? `${API}/${id}` : API;
    const res = await fetch(apiURL);
    if (!res.ok) throw new Error("Error al obtener datos");
    return await res.json();
  } catch (error) {
    console.error("getData error:", error);
    return null;
  }
};

export default getData;
