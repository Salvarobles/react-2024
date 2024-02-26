import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebase";

const usersCollection = collection(db, "users");
// --------------- CARGAR PRODUCTOS ---------------

export const getUsers = async () => {
  try {
    const data = await getDocs(usersCollection);
    return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  } catch (error) {
    console.log("Error getting productos", error);
    throw error;
  }
};

// --------------- CARGAR UN PRODUCTO ---------------

export const getUserById = async (user, navigate) => {
  try {
    const usersDocRef = doc(usersCollection, user);
    const usersDoc = await getDoc(usersDocRef);
    if (usersDoc.exists()) {
      navigate('/')
      return { ...usersDoc.data(), id: usersDoc.id };
    } else {
      console.error("Producto no encontrado");
      return null;
    }
    // return(productDoc._document.data.value.mapValue);
  } catch (error) {
    console.log("Error getting product with id is:", user, error);
    throw error;
  }
};

// --------------- CREAR ENTRADA DE PRODUCTOS ---------------
export const addUser = async (userForm, navigate) => {
  try {
    const docRef = await addDoc(usersCollection, userForm);
    navigate('/')
    console.log(docRef.id)
    return docRef.id;
  } catch (error) {
    console.log("Error adding user", error);
    throw error;
  }
};

// --------------- ACTUALIZAR UN PRODUCTOS ---------------
// export const editProduct = async (id, newData) => {
//   // crear una referecia al documento de donde esta esa id

//   try {
//     const productDocRef = doc(productosCollection, id);
//     //actualizamos
//     await updateDoc(productDocRef, newData);
//   } catch (error) {
//     console.log("Error deleting product", error);
//     throw error;
//   }
// };

// --------------- ELIMINAR ENTRADA DE PRODUCTOS ---------------
// export const deleteProducto = async (id) => {
//   try {
//     const productDocRef = doc(productosCollection, id);
//     deleteDoc(productDocRef);
//   } catch (error) {
//     console.log("Error deleting product", error);
//     throw error;
//   }
// };

// -------------------- VALIDAR LA ENTRADA DE GOOGLE ------------------

// export const signInWithGoolge = async (login, setError, navigate) =>{
//   const auth = getAuth();
//   const provider = new GoogleAuthProvider();
//   try {
//     // tipo de persistencia que tenemos con la sesion de google
//     // a nivel local, sesion y sin persistencia.browserSessionPersistence
//     // a nivel de sesion seria utilizando:
//     await setPersistence(auth, browserSessionPersistence);
//     const result = await signInWithPopup(auth, provider);
//     const user = result.user;
//     // setear mi estado con el usuaario
//     login(user);
//     navigate("/");
//   } catch (error) {
//     setError("error al iniciar con google", error)
//   }
// }

// ------------------------ CERRAR SESION EN GOOGLE ------------------
// export const cerrarSesion = async() => {
//   const auth = getAuth();
//   try {
//     await signOut(auth)
//     return true;
//   } catch {
//     console.log("Error al cerrar sesion con googles")
//   }
// }