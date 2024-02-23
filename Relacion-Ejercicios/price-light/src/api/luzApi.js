
const corsAnywhereURL = "https://cors.bridged.cc/";
const originalURL = "https://api.preciodelaluz.org/v1/prices/all?zone=PCB";
const proxiedURL = corsAnywhereURL + originalURL;

const getPriceLight = async () => {
  try {
    const response = await fetch(proxiedURL, {
      headers: {
        'x-cors-api-key': 'temp_f8aa94d900ff748d1ca3ac36ce391b8e'
      }
    });
    const data = await response.json();

    // Convertir el objeto a una array de pares clave-valor
    const entriesArray = Object.entries(data);

    // Ordenar la array de pares clave-valor por el valor de "price"
    const orderedArray = entriesArray.sort(([, a], [, b]) => a.price - b.price);

    return orderedArray;
  } catch (error) {
    console.error("Error al fechear:", error.message);
    throw error;
  }
};

export const getPriceById = async (id) => {
  try {
    const response = await fetch(proxiedURL, {
      headers: {
        'x-cors-api-key': 'temp_f8aa94d900ff748d1ca3ac36ce391b8e'
      }
    });
    const data = await response.json();

    if (data.hasOwnProperty(id)) {
      return data[id];
    } else {
      console.error("No se encontró ningún objeto con el ID:", id);
      return null; // O lanzar un error según tu lógica
    }

  } catch (error) {
    console.error("Error al fechear:", error.message);
    throw error;
  }
};

export default getPriceLight;