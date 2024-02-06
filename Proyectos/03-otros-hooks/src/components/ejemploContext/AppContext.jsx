import React from "react";
import Componente1 from "./Component/Componente1";
import Componente4 from "./Component/Componente4";
import AppProvider from "./Context/AppProvider";

const AppContext = () => {
  return (
    <>
      <div>AppContext</div>
      <AppProvider>
        <Componente1 />
        <Componente4 />
      </AppProvider>
    </>
  );
};

export default AppContext;
