import React, { useState } from "react";

export default function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputchange(event) {
    setNewTask(event.target.value);
  }

  function handleAddTasks() {
    newTask.trim() !== "" && setTasks((t) => [...t, newTask]);
    setNewTask("");
  }

  function handleDeleteTask(index) {
    setTasks((t) => t.filter((_, i) => i !== index));
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const cpyTasks = [...tasks];
      [cpyTasks[index - 1], cpyTasks[index]] = [
        cpyTasks[index],
        cpyTasks[index - 1],
      ];
      setTasks(cpyTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const cpyTasks = [...tasks];
      [cpyTasks[index + 1], cpyTasks[index]] = [
        cpyTasks[index],
        cpyTasks[index + 1],
      ];
      setTasks(cpyTasks);
    }
  }

  return (
    <>
      <div className="to-do-list">
        <h1>My To-Do List</h1>

        <div className="text-box">
          <input
            type="text"
            placeholder="Enter new task ..."
            value={newTask}
            onChange={handleInputchange}
          />

          <button onClick={handleAddTasks}>Add</button>
        </div>

        <ol>
          {tasks.map((element, index) => (
            <div className="taskItem">
              <li>{element}</li>
              <button onClick={() => handleDeleteTask(index)}>Delete</button>
              <button onClick={() => moveTaskUp(index)}>👆🏻</button>
              <button onClick={() => moveTaskDown(index)}>👇🏻</button>
            </div>
          ))}
        </ol>
      </div>
    </>
  );
}
