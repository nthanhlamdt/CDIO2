import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import { AuthContextProvider } from './context/authContext';
// import { SocketContextProvider } from './context/SocketContext'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <AuthContextProvider>
        {/* <SocketContextProvider> */}
        <App />
        {/* </SocketContextProvider> */}
      </AuthContextProvider>
    </Router>
  </React.StrictMode>
);
