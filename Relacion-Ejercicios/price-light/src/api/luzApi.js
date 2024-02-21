const corsAnywhereURL = "https://cors.bridged.cc/";
const originalURL = "https://api.preciodelaluz.org/v1/prices/all?zone=PCB";
const proxiedURL = corsAnywhereURL + originalURL;

export const getPriceLight = async () => {
  try {
    const response = await fetch(proxiedURL);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching user data:", error.message);
    throw error;
  }
};

getPriceLight();
