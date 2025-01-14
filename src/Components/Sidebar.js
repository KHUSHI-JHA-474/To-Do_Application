import React from 'react';
import './styles.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="profile">
        <img src="https://via.placeholder.com/50" alt="Profile" />
        <p>Hey, ABCD</p>
      </div>
      <ul>
        <li>All Tasks</li>
        <li>Today</li>
        <li>Important</li>
        <li>Planned</li>
        <li>Assigned to me</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
