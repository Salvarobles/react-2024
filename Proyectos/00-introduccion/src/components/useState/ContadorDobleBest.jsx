import { useState } from "react";

const initialState = {
  salva: 0,
  maria: 2,
};

const ContadorDobleBest = () => {
  //hoocks
  const [friends, setFriends] = useState(initialState);

  // variables

  // funciones

  function handleIncrementFriends(friendName) {
    //incrementar en 1 el numero de salva.
    setFriends((prevFriends) => ({
      ...friends,
      [friendName]: prevFriends[friendName] + 1,
    }));
  }

  return (
    <>
      <div>
        <span>
          salva tiene <strong>{friends.salva}</strong>
        </span>
      </div>
      <button onClick={() => handleIncrementFriends("salva")}>
        Aumentar + 1 Amigos
      </button>
      <div>
        <span>
          maria tiene <strong>{friends.maria}</strong>
        </span>
      </div>
      <button onClick={() => handleIncrementFriends("maria")}>
        Aumentar + 1 Amigos
      </button>
    </>
  );
};

export default ContadorDobleBest;
