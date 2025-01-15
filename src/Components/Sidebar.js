// src/Components/Sidebar.js
import React from 'react';
import './Sidebar.css';

const Sidebar = ({ onAddTask, onSignOut, onTaskTypeClick, selectedTaskType }) => {
  return (
    <div className="sidebar">
      <h1>
        Plan your work and work your plan with <strong><p style={{ color: 'green' }}>DoIt</p></strong>
      </h1>
      <h3>Task Manager</h3>
      <button onClick={onAddTask}>Add Task</button>
      <div className="task-buttons">
        <button
          onClick={() => onTaskTypeClick("all")}
          className={selectedTaskType === "all" ? "active" : ""}
        >
          All Tasks
        </button>
        <button
          onClick={() => onTaskTypeClick("planned")}
          className={selectedTaskType === "planned" ? "active" : ""}
        >
          Planned
        </button>
        <button
          onClick={() => onTaskTypeClick("important")}
          className={selectedTaskType === "important" ? "active" : ""}
        >
          Important
        </button>
        <button
          onClick={() => onTaskTypeClick("completed")}
          className={selectedTaskType === "completed" ? "active" : ""}
        >
          Completed
        </button>
      </div>
      <button onClick={onSignOut}>Sign Out</button>
    </div>
  );
};

export default Sidebar;
console.log(onTaskTypeClick); // To see if the function is correctly passed to Sidebar
