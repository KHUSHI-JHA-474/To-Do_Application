import React from 'react';
import './styles.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="main">
        <Sidebar />
        <div className="content">
          <TaskInput />
          <TaskList />
        </div>
      </div>
    </div>
  );
};

export default App;
