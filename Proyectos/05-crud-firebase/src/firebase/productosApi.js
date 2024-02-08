import { addDoc, collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "./firebase";

const productosCollection = collection(db, "crud-productos");

// --------------- CARGAR PRODUCTOS ---------------

export const getProductos = async () => {
  try {
    const data = await getDocs(productosCollection);
    console.log(data);
    return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  } catch (error) {
    console.log("Error getting productos", error);
    throw error;
  }
};

// --------------- CARGAR UN PRODUCTOS ---------------

// --------------- CREAR ENTRADA DE PRODUCTOS ---------------
export const addProducto = async (productoData) => {
    try {
        const docRef = await addDoc(productosCollection, productoData);
        return docRef.id;
    } catch (error) {
        console.log("Error adding product", error)
        throw error;
    }
};

// --------------- ACTUALIZAR UN PRODUCTOS ---------------

// --------------- ELIMINAR ENTRADA DE PRODUCTOS ---------------
export const deleteProducto = async (id) => {
  try {
    const productDocRef =  doc(productosCollection, id);
    deleteDoc(productDocRef);
  } catch (error) {
    console.log("Error deleting product", error)
    throw error;
  }
}
