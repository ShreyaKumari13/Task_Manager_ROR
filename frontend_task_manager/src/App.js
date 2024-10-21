import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import axios from "axios";

const App = () => {
  const [editingTask, setEditingTask] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [tasksChanged, setTasksChanged] = useState(false);

  const refreshTasks = () => {
    setEditingTask(null);
  };

  const handleEdit = (task) => {
    setEditingTask(task);
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/tasks/${id}`)
      .then(() => {
        setTasksChanged(true);
        setSuccessMessage("Task deleted successfully!");
        setTimeout(() => setSuccessMessage(""), 1000);
      })
      .catch((error) => console.error("Error deleting task:", error));
  };

  return (
    <Router>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-8">Task Management</h1>

        {successMessage && (
          <div className="mb-4 p-2 bg-green-100 text-green-700 rounded text-center">
            {successMessage}
          </div>
        )}

        <Routes>
          <Route
            path="/"
            element={
              <TaskForm
                currentTask={editingTask}
                onTaskSubmit={() => {
                  refreshTasks();
                  setSuccessMessage("Task added successfully!");
                  setTimeout(() => setSuccessMessage(""), 1000);
                }}
              />
            }
          />

          <Route
            path="/tasks"
            element={
              <TaskList
                onEdit={handleEdit}
                onDelete={handleDelete}
                tasksChanged={tasksChanged}
                onTasksChanged={() => setTasksChanged(false)}
                setEditingTask={setEditingTask}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
