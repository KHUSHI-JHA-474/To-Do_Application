import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTask } from '../redux/tasksSlice';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return (
    <div className="task-list">
      <h2>Your Tasks</h2>
      {tasks.map((task, index) => (
        <div key={index} className="task">
          <span>{task.text}</span>
          <button onClick={() => dispatch(removeTask(index))}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
