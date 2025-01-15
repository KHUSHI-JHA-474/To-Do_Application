// src/Components/TaskList.js
import React from 'react';

const TaskList = ({ tasks, toggleTaskStatus, toggleTaskImportance }) => {
  return (
    <div className="task-list">
      <ul>
        {tasks.length === 0 ? (
          <li>No tasks available</li>
        ) : (
          tasks.map((task) => (
            <li key={task.id} className={task.status === "completed" ? "completed" : "planned"}>
              <span>{task.name}</span>
              <button onClick={() => toggleTaskStatus(task.id)}>
                {task.status === "planned" ? "Mark as Completed" : "Mark as Planned"}
              </button>
              <button onClick={() => toggleTaskImportance(task.id)}>
                {task.important ? "Mark as Not Important" : "Mark as Important"}
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default TaskList;
