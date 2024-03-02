// const URL = "https://rickandmortyapi.com/api/character";

 const getImgs = async (URL) => {
  try {
    const img = [];
    const response = await fetch(URL);
    const data = response.json();
    data.then((data2) => {
      const results = data2.results;
      results.forEach((obj) => {
        img.push(obj.image);
      });
    });

    return img;
  } catch (error) {
    console.error("Error fetching products data:", error.message);
    throw error;
  }
};
export default getImgs


