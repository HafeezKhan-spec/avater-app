import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';               // Ensure you have this file or create an empty CSS
import App from './App';            // Your main App component file, e.g. App.jsx
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);