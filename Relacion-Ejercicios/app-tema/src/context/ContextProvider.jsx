import { useEffect, useRef, useState } from "react";
import ThemeContext from "./ThemeContext";

const initialState = {
    white : "bg-white",
    black : "bg-black",
};
const ContextProvider = ({ children }) => {
const [theme, setTheme] = useState("")
const check = useRef()
const [isCheck, setIsCheck] = useState(check.current?.checked || false)

const handleCheckboxChange = () => {
  setIsCheck((isCheck)=>!isCheck);
  isCheck ? setTheme("bg-white text-black") : setTheme("bg-black text-white");
};

console.log(isCheck)

  return (
    <ThemeContext.Provider value={{ theme, setTheme, isCheck, setIsCheck, check: check.current, handleCheckboxChange }}>
      <>{children}</>
    </ThemeContext.Provider>
  );
};

export default ContextProvider;