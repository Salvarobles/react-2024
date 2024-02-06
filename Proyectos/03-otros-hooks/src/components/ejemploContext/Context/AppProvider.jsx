import { useState } from "react";
import AppCont from "./AppCont";

const AppProvider = ({ children }) => {
  const [appState, setAppState] = useState({ count: 0 });
  return (
    <AppCont.Provider value={{ appState, setAppState }}>
      {children}
    </AppCont.Provider>
  );
};

export default AppProvider;
