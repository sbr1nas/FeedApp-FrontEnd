import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import { BrowserRouter as Router } from "react-router-dom";
import AppContextProvider from "./context/applicationContext";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppContextProvider>
    <Router>
    <App />
    </Router>
    <Toaster />
    </AppContextProvider>
  </React.StrictMode>
);

