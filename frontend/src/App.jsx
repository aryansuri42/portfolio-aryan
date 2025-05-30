import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/navigationbar.jsx'
import Profile from './components/profile.jsx';
import Projects from './components/projects.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/projects" element={<Projects />} />
        {/* Add other routes below */}
        {/* <Route path="/projects" element={<Projects />} /> */}
        {/* <Route path="/" element={<Home />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

