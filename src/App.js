// src/Components/HomePage.js
import React, { useState, useEffect } from 'react';
import Sidebar from './Components/Sidebar';
import TaskForm from './Components/TaskForm';
import TaskList from './Components/TaskList';
import { useNavigate } from 'react-router-dom';
import './Components/HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [isImportant, setIsImportant] = useState(false);
  const [filter, setFilter] = useState("all");

  // Fetch tasks from localStorage on mount
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Add task handler
  const addTask = () => {
    if (newTask.trim()) {
      const newTaskObj = {
        id: Date.now(),
        name: newTask,
        status: "planned",
        important: isImportant,
      };
      setTasks((prevTasks) => [...prevTasks, newTaskObj]);
      setNewTask("");
      setIsImportant(false);
    }
  };

  // Toggle task status between 'planned' and 'completed'
  const toggleTaskStatus = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, status: task.status === "planned" ? "completed" : "planned" } : task
      )
    );
  };

  // Toggle task importance
  const toggleTaskImportance = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, important: !task.important } : task
      )
    );
  };

  // Handle task type click (filtering tasks)
  const onTaskTypeClick = (type) => {
    setFilter(type);
  };

  // Sign out handler
  const handleSignOut = () => {
    navigate("/"); // Redirect back to the Introduction page
  };

  // Filter tasks based on the selected filter
  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "important") return task.important;
    return task.status === filter;
  });

  return (
    <div className="home-page">
      <Sidebar
        onAddTask={addTask} // Pass addTask function
        onSignOut={handleSignOut} // Pass handleSignOut function
        onTaskTypeClick={onTaskTypeClick} // Pass task type click handler
        selectedTaskType={filter} // Pass current selected filter type
      />
      <div className="content">
        <h1>Welcome to Task Manager</h1>
        <TaskForm
          newTask={newTask}
          setNewTask={setNewTask}
          addTask={addTask}
          setIsImportant={setIsImportant}
          isImportant={isImportant}
        />
        <TaskList
          tasks={filteredTasks}
          toggleTaskStatus={toggleTaskStatus}
          toggleTaskImportance={toggleTaskImportance}
        />
      </div>
    </div>
  );
};

export default HomePage;
