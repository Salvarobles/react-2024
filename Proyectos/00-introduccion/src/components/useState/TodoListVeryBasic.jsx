import { useState } from "react";

const initialState = [
  {
    id: 1,
    title: "Comprar leche",
    completed: false,
  },
  {
    id: 2,
    title: "Comprar huevos",
    completed: true,
  },
  {
    id: 3,
    title: "Estudiar React",
    completed: false,
  },
];

const TodoListBasic = () => {
  const [taks, setTaks] = useState(initialState);
  
  function handleToggleTask(taskId) {
    const updateTask = taks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );

    setTaks(updateTask);
  }
  return (
    <>
      <div>
        <h1>Lista de tareas</h1>
        <ul>
          {taks.map((task) => (
            <li key={task.id}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggleTask(task.id)}
              ></input>
              <span
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                }}
              >
                Titulo: {task.title}
              </span>

              {task.completed ? "Completo" : "No esta completo"}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoListBasic;
