



import React, { useState } from "react";
import TaskList from "./TaskList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [taskName, setTaskName] = useState("");
  const [tasks, setTasks] = useState([]);
  const [message, setMessage] = useState("Add a task to get started!");
  const [bgColor, setBgColor] = useState("white");

  const handleAddTask = () => {
    if (taskName.trim() === "") return;

    setTasks([...tasks, taskName]);
    setMessage(`Task added: ${taskName}!`);
    setTaskName("");
    setBgColor("lightblue");
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 mb-4" style={{ backgroundColor: bgColor }}>
        <h2 className="mb-3">React Task Planner</h2>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Enter task name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />

        <button
          className="btn btn-primary"
          onClick={handleAddTask}
        >
          Add Task
        </button>
      </div>

      <TaskList tasks={tasks} message={message} />
    </div>
  );
}

export default App;