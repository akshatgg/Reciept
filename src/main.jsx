import "./index.css";
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { AuthProvider } from './Firebase/authcontext'; // Adjust the path as needed
import { Toaster } from 'react-hot-toast';
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <AuthProvider>
    <App />
    <Toaster />
  </AuthProvider>
);
