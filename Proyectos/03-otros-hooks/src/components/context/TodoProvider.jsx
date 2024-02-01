import React, { useState } from "react";
import TodoContext from "./TodoContext";

const initialState = [
  {
    id: 1,
    nombre: "sacar al perro",
    completada: "false",
  },
  {
    id: 2,
    nombre: "aprender react",
    completada: "false",
  },
];
const TodoProvider = ({ children }) => {
  const [tareas, setTareas] = useState(initialState);

  function eliminarTarea() {}
  return (
    <TodoContext.Provider value={{ tareas, setTareas, eliminarTarea }}>
      <>{children}</>
    </TodoContext.Provider>
  );
};

export default TodoProvider;
