import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const TaskForm = ({ currentTask, onTaskSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (currentTask) {
      setTitle(currentTask.title);
      setDescription(currentTask.description);
    } else {
      setTitle("");
      setDescription("");
    }
  }, [currentTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentTask) {
      axios
        .put(`http://localhost:3000/tasks/${currentTask.id}`, { task: { title, description } })
        .then(() => {
          onTaskSubmit();
          setSuccessMessage("Task updated successfully!");
          resetForm(); 
          setTimeout(() => {
            setSuccessMessage(""); 
            navigate("/"); 
          }, 1000);
        })
        .catch((error) => console.error("Error updating task:", error));
    } else {
      axios
        .post("http://localhost:3000/tasks", { task: { title, description } })
        .then(() => {
          onTaskSubmit();
          setSuccessMessage("");
          resetForm();
          setTimeout(() => {
            setSuccessMessage("");
            navigate("/");
          }, 3000);
        })
        .catch((error) => console.error("Error creating task:", error));
    }
  };
  const resetForm = () => {
    setTitle("");
    setDescription("");
  };

  return (
    <div>
    <div className="text-center mb-8">
    <Link to="/tasks">
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Show Tasks
      </button>
    </Link>
  </div>
    
    <form onSubmit={handleSubmit} className="p-6 bg-gray-100">
      <h2 className="text-xl font-bold mb-4">{currentTask ? "Edit Task" : "Add New Task"}</h2>
      {successMessage && (
        <div className="mb-4 p-2 bg-green-100 text-green-700 rounded text-center">
          {successMessage}
        </div>
      )}

      <div className="mb-4">
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <textarea
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        {currentTask ? "Update Task" : "Create Task"}
      </button>
    </form>
    </div>
  );
};

export default TaskForm;
