import React, { useContext } from "react";
import AppCont from "../Context/AppCont";

const Componente4 = () => {
    const {appState, setAppState} = useContext(AppCont)
  return (
    <>
      <div>Componente4</div>
      <p>Count: {appState.count}</p>
    </>
  );
};

export default Componente4;
