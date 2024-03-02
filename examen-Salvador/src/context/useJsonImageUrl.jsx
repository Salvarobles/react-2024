import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [url, setUrl] = useState();
  const [urlFirebase, setUrlFirebase] = useState();

  const handleAddUrl = (url) => {
    setUrl(url);
  };

  const handleUrlFirebase = (url) => {
    setUrlFirebase(url);
  };

  return (
    <AuthContext.Provider value={{ url, handleAddUrl, urlFirebase, handleUrlFirebase }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useJsonImageUrl = () => {
  return useContext(AuthContext);
};
