const corsAnywhereURL = "https://cors.bridged.cc/";
const originalURL = "https://api.preciodelaluz.org/v1/prices/all?zone=PCB";
const proxiedURL = corsAnywhereURL + originalURL;

export const getPriceLight = async () => {
  try {
    const response = await fetch(proxiedURL);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error al fechear:", error.message);
    throw error;
  }
};

getPriceLight();
