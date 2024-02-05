import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import EjemploUseRef from "./components/EjemploUseRef";
import EjemploUseRef2 from "./components/EjemploUseRef2";
import EjemploUseRef3 from "./components/EjemploUseRef3";
import EjemploUseContext from "./components/EjemploUseContext";
import TodoProvider from "./components/context/TodoProvider";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <hr />
      <h2>Uso de useRef</h2>
      <h2>Uso de EjemploUseRef</h2>
      <EjemploUseRef />
      <hr />
      <h2>Uso de EjemploUseRef2</h2>
      <EjemploUseRef2 />
      <h2>Uso de Contador</h2>
      <EjemploUseRef3 />
      <h2>Uso de Use Context</h2>
      <TodoProvider>
        <EjemploUseContext />
      </TodoProvider>
    </>
  );
}

export default App;
