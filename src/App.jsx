import { useState } from "react";
import "./App.css";

export default function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: task }]);
    setTask("");
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", fontFamily: "Arial" }}>
      <h1>Task Manager</h1>

      <div style={{ display: "flex", gap: "10px" }}>
        <input
          type="text"
          placeholder="Enter task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          style={{ flex: 1, padding: "10px" }}
        />

        <button onClick={addTask} style={{ padding: "10px 15px" }}>
          Add
        </button>
      </div>

      <ul style={{ marginTop: "20px", padding: 0, listStyle: "none" }}>
        {tasks.map((t) => (
          <li
            key={t.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px",
              border: "1px solid #ccc",
              marginBottom: "8px",
              borderRadius: "5px",
            }}
          >
            {t.text}
            <button
              onClick={() => removeTask(t.id)}
              style={{
                background: "red",
                color: "white",
                border: "none",
                padding: "5px 8px",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
