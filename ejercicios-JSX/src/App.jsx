import "./App.css";
import Ejercicio11 from "./Components/Ejercicio11";
// import Ejercicio2 from "./Components/Ejercicio2";
// import Ejercicio1 from "./Components/Ejercicio1";
// import Ejercicio3 from "./Components/Ejercicio3";
// import Ejercicio4 from "./Components/Ejercicio4";
// import Ejercicio5 from "./Components/Ejercicio5";
// import Ejercicio6 from "./Components/Ejercicio6";
// import Ejercicio7 from "./Components/Ejercicio7";
// import Ejercicio8 from "./Components/Ejercicio8";
// import Ejercicio9 from "./Components/Ejercicio9";
// import Ejercicio10 from "./Components/Ejercicio10";

function App() {
  const usuarios = ['salva', 'laura', 'juan', 'marta', 'jose', 'pablo']
  return (
    <>
      {/* <Ejercicio1 /> */}
      {/* <Ejercicio2/> */}
      {/* <Ejercicio3 /> */}
      {/* <Ejercicio4 titulo="Bienvenido/a soy Salvador"/> */}
      {/* <Ejercicio5/> */}
      {/* <Ejercicio6
        background="purple"
        text="Pincha aqui"
        eventClick={() => alert("Ha funcionado??")}
      /> */}
      {/* <Ejercicio7 condition="true"/> */}
      {/* <Ejercicio8 title="Salvador Robles Gómez" body="Armilla, Granada. Tengo 21 años." footer="Estudiante de 2ºDAW"/> */}
      {/* <Ejercicio9/> */}
      {/* <Ejercicio10 usuarios={usuarios}/> */}
      <Ejercicio11 isLoggedIn="true" userRole="admin"/>
    </>
  );
}

export default App;
