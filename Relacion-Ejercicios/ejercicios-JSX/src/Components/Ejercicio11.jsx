/**
 * @author Salvador Robles Gómez
 * @description Crea un componente ConditionalRenderAdvanced que acepte dos props: isLoggedIn
* (booleano) y userRole (cadena de texto). Este componente debe renderizar un mensaje diferente
* según las siguientes condiciones:
* Si isLoggedIn es true, muestra un mensaje de bienvenida para el usuario.
* Si isLoggedIn es false, muestra un mensaje solicitando al usuario que inicie sesión.
* Si el usuario está autenticado y su userRole es "admin", muestra un mensaje adicional de
* privilegios de administrador.
 */

const Ejercicio11 = ({ isLoggedIn, userRole }) => {
  return (
    <div> 
    <p>{isLoggedIn ? "Bienvenida usuario" : "Inicie Sesión"} </p>  
    <p>{userRole == 'admin' && 'Privilegios de administrador'}</p>
    </div>
  )
}

export default Ejercicio11
