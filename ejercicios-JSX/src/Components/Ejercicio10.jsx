/**
 * @author Salvador Robles Gómez
 * @description Crea un componente UserList que acepte una lista de usuarios como props y renderice una lista
 * ordenada (<ol>) con los nombres de usuarios. Además, cada nombre de usuario debe estar rodeado
 * por un Fragmento y un enlace (<a>) que muestre el índice del usuario.
 */
const Ejercicio10 = ({ usuarios }) => {
  return (
    <div>
      <ol>
        {usuarios.map((user, i) => (
          <li key={i}>
            <a href={`${user}-${i + 1}`}>{user}</a>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Ejercicio10;
