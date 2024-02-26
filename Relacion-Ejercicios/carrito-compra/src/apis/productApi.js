const URL = "https://fakestoreapi.com/products/";

export const getProducts = async () => {
  try {
    const response = await fetch(URL);
    const data = response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products data:", error.message);
    throw error;
  }
};

export const getProductById = async (id) => {
  try {
    const response = await fetch(URL);
    const products = await response.json();

    // Utiliza el método find para buscar el producto con la ID específica
    const productWithId = products.find((product) => product.id == id);

    if (!productWithId) {
      throw new Error(`Product with ID ${id} not found`);
    }

    return productWithId;
  } catch (error) {
    console.error(`Error fetching product data for ID ${id}:`, error.message);
    throw error;
  }
};