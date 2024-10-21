import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const TaskList = ({ onEdit, onDelete, tasksChanged, onTasksChanged }) => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  const fetchTasks = useCallback(() => {
    axios
      .get("http://localhost:3000/tasks")
      .then((response) => {
        setTasks(response.data);
        onTasksChanged();
      })
      .catch((error) => console.error("Error fetching tasks:", error));
  }, [onTasksChanged]);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks, tasksChanged]);

  const handleEditClick = (task) => {
    onEdit(task);
    navigate("/");
  };

  return (
    <div>
      <div className="text-center mb-8">
        <Link to="/">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Add Tasks
          </button>
        </Link>
      </div>
      <div className="p-6 bg-gray-100">
        <h2 className="text-xl font-bold mb-4">Task List</h2>
        <ul className="space-y-4">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="p-4 bg-white rounded shadow-md flex justify-between"
            >
              <div>
                <h3 className="font-semibold">{task.title}</h3>
                <p>{task.description}</p>
              </div>
              <div>
                <button
                  className="mr-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                  onClick={() => handleEditClick(task)}
                >
                  Edit
                </button>
                <button
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  onClick={() => onDelete(task.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskList;
