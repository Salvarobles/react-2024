import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import {GoogleAuthProvider, browserSessionPersistence, getAuth, setPersistence, signInWithPopup, signOut} from "firebase/auth";
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

export const validar = async (nombre) => {
  let validacion = false;
  try {
    const q = query(productosCollection, where("nombre", "==", nombre));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      const validad = (doc.id, " => ", doc.data());
      if (validad.nombre == nombre) {
        validacion = true
      } else {
        validacion = false
      }
    });
    return validacion;
  } catch (error) {
    console.log("Error validar productos", error);
    throw error;
  }
};

// --------------- CARGAR UN PRODUCTO ---------------

export const getProductoById = async (idProducto) => {
  try {
    const productDocRef = doc(productosCollection, idProducto);
    const productDoc = await getDoc(productDocRef);
    if (productDoc.exists()) {
      return { ...productDoc.data(), id: productDoc.id };
    } else {
      console.error("Producto no encontrado");
      return null;
    }
    // return(productDoc._document.data.value.mapValue);
  } catch (error) {
    console.log("Error getting product with id is:", idProducto, error);
    throw error;
  }
};

// --------------- CREAR ENTRADA DE PRODUCTOS ---------------
export const addProducto = async (productoData) => {
  try {
    const docRef = await addDoc(productosCollection, productoData);
    return docRef.id;
  } catch (error) {
    console.log("Error adding product", error);
    throw error;
  }
};

// --------------- ACTUALIZAR UN PRODUCTOS ---------------
export const editProduct = async (id, newData) => {
  // crear una referecia al documento de donde esta esa id

  try {
    const productDocRef = doc(productosCollection, id);
    //actualizamos
    await updateDoc(productDocRef, newData);
  } catch (error) {
    console.log("Error deleting product", error);
    throw error;
  }
};

// --------------- ELIMINAR ENTRADA DE PRODUCTOS ---------------
export const deleteProducto = async (id) => {
  try {
    const productDocRef = doc(productosCollection, id);
    deleteDoc(productDocRef);
  } catch (error) {
    console.log("Error deleting product", error);
    throw error;
  }
};

// -------------------- VALIDAR LA ENTRADA DE GOOGLE ------------------

export const signInWithGoolge = async (login, setError, navigate) =>{
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  try {
    // tipo de persistencia que tenemos con la sesion de google
    // a nivel local, sesion y sin persistencia.browserSessionPersistence
    // a nivel de sesion seria utilizando:
    await setPersistence(auth, browserSessionPersistence);
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    // setear mi estado con el usuaario
    login(user);
    navigate("/");
  } catch (error) {
    setError("error al iniciar con google", error)
  }
}

// ------------------------ CERRAR SESION EN GOOGLE ------------------
export const cerrarSesion = async() => {
  const auth = getAuth();
  try {
    await signOut(auth)
    return true;
  } catch {
    console.log("Error al cerrar sesion con googles")
  }
}