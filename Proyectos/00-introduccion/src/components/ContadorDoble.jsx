import { useState } from "react";

const initialState = {
  salva: 0,
  maria: 2,
};

const ContadorDoble = () => {
  //hoocks
  const [friends, setFriends] = useState(initialState);

  // variables

  // funciones

  function handleIncrementSalva() {
    //incrementar en 1 el numero de salva.
    setFriends({ ...friends, salva : friends.salva + 1 });
    
  }

  function handleIncrementMaria() {
    setFriends({ ...friends, maria : friends.maria + 1 });
  }

  return (
    <>
      <div>
        <span>
          salva tiene <strong>{friends.salva}</strong>
        </span>
      </div>
      <button onClick={handleIncrementSalva}>Aumentar + 1 Amigos</button>
      <div>
        <span>
          maria tiene <strong>{friends.maria}</strong>
        </span>
      </div>
      <button onClick={handleIncrementMaria}>Aumentar + 1 Amigos</button>
    </>
  );
};

export default ContadorDoble;
