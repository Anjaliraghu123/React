import React from 'react';
import ReactDOM from 'react-dom';
import App from ".s/rc/App";
import  ".src/One.css";

// Render the root component (App) into the DOM
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
