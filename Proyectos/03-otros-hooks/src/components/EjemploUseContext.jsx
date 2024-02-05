import { useContext } from "react";

import TodoContext from "./context/TodoContext";

const EjemploUseContext = () => {
  const { tareas, setTareas, eliminarTarea } = useContext(TodoContext);

  return (
    <div>
      <h2>Lista de Tareas</h2>
      <ul>
        {tareas.map((tarea) => (
          <li key={tarea.id}>
            {tarea.nombre} - Completada: {tarea.completada.toString()}
            <button onClick={() => eliminarTarea(tarea.id)}>
              Eliminar Tarea
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EjemploUseContext;
