/**
 *Custom que me genera un UUID formado por date.now() -- aleatorio -- aleatorio
 */

import { useState } from "react";

function generarUID() {
  const time = Date.now();
  const random1 = Math.random().toString(36).substring(2);

  const random2 = Math.random().toString(36).substring(2);

  const random3 = Math.random().toString(36).substring(2);
  return `${time}-${random1}-${random2}-${random3}`
}

const useCustomUUID = () => {
  const [uuid, setUUID] = useState(generarUID());

  function setResetUUID(){
    setUUID(generarUID)
  }

  return [uuid, setResetUUID];
};

export default useCustomUUID;
