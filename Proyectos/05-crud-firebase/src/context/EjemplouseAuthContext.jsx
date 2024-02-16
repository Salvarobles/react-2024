// import {  createContext, useContext, useState } from "react"

// const AuthContext = createContext();

// export const AuthProvider = ({children}) => {
//     const [userFirebase, setUserFirebase] = useState(null);
//     // funcion para guardar en el estado el inicio de la sesion
//         const signInFirebase = (userData)=>{
//             setUserFirebase(userData);
//         }
//     // funcion para guardar en el estado el cierre de la sesion.
//     const signOutFirebase = ()=>{
//         setUserFirebase(null);
//     }
//     // aqui pongo todas las funciones que necesite pasar a traves de mi
//     // contezto.

//   return (
//     <AuthContext.Provider value={{userFirebase, signInFirebase, signOutFirebase}}>
//         {children}
//     </AuthContext.Provider>
//   )

// }

// export const useAuthContext = () => {
//     return useContext(AuthContext)
// }