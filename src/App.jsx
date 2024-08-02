import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Authentication/login.jsx';
import Signup from './Authentication/signup.jsx';
import Navbar from './Navbar/navbar.jsx';
function App() {

  return (
    <Router>
      <Routes>
      <Route path="/" element={<Navbar/>} />
      <Route path="/signin" element={<Navbar/>} />
      <Route path="/signup" element={<Navbar/>} />
      </Routes>
      
      <Routes>
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
