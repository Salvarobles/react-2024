import { useState } from "react";
import { generateId } from "../../helpers/generateId";

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

const TodoListBasicTailWindCss = () => {
  const [tasks, setTaks] = useState(initialState);
  const [newTask, setNewTask] = useState("");

  //   function handleChangeTask(e) {
  //     e.preventDefault();
  //     const value = e.target.value;
  //     setNewTask(value);
  //   }

  function handleAddTask() {
    if (newTask.trim()) {
      const newId = generateId();
      const objTask = {
        id: newId,
        title: newTask.trim(),
        completed: false,
      };
      // console.log(objTask);
      setTaks(() => [...tasks, objTask]);
      // console.log(setTaks);
      setNewTask("")
    }
    
  }

  function handleCompleted(taskId) {
    const updateTask = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );

    setTaks(updateTask);
  }

  function handleremoveTask(taskId) {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTaks(updatedTasks);
  }

  const handlekeyEnter = (e) => {
    if (e.key === "Enter"){
      handleAddTask()
    }
  } 

  return (
    <>
      <div className=" max-w-md mx-auto mt-8 p-6 bg-slate-300 shadow-md rounded-md ">
        <h1 className="text-2xl mb-4 font-bold">Lista de Tareas</h1>
        <div className="flex mb-4 ">
          <input
            type="text"
            placeholder="Nueva Tarea"
            className="flex-1 mr-2 p-2 border rounded-md focus:outline-none focus:border-blue-600"
            onChange={(e) => setNewTask(e.target.value)}
            value={newTask}
            onKeyDown={handlekeyEnter}
          />
          <button
            className=" bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-800"
            onClick={handleAddTask}
          >
            Agregar Tarea
          </button>
        </div>
        <ul>
          {tasks.map((task) => (
            <li key={task.id} className="flex items-center mb2">
              <input
                type="checkbox"
                checked={task.completed}
                className="mr-4"
                onChange={() => handleCompleted(task.id)}
              />
              <span
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                }}
              >
                {task.title}
              </span>
              <button
                className=" ml-auto bg-red-500 text-white px-3 py-1 rounded-md mb-2"
                onClick={() => handleremoveTask(task.id)}
              >
                Borrar Tarea
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoListBasicTailWindCss;
