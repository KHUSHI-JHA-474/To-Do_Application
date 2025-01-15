// src/index.js or src/main.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import App from './App'; // Your main App component
import './styles.css'; // Ensure this file exists

// Ensure only one BrowserRouter is wrapping your entire app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* Wrap the whole App component with BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
