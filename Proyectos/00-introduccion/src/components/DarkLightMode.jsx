import { useState } from "react";
import "./DarkLightMode.css"

const DarkLightMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  function handleToggleTheme() {
    setDarkMode(!darkMode);
  }
  return (
    <>
      <div className={`default ${darkMode ? "dark" : "light"}`} >
        <h1>Cambio de tema en React</h1>
        <button onClick={handleToggleTheme}>
          {darkMode ? "Modo claro" : "Modo oscuro"}
        </button>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique,
          aperiam libero repellat pariatur tempore hic beatae dolor at aliquam
          sunt quod? Quidem, maiores? Itaque odio voluptas ratione quis debitis
          quasi.
        </p>
      </div>
    </>
  );
};

export default DarkLightMode;
