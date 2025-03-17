import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // ✅ Correct way to use tailwind styles globally
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

