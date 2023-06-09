import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, BrowserRouter, Routes } from 'react-router-dom';
import Dashboard from './componets/Dashboard';
import NavBar from './componets/NavBar';
import Projects from './componets/Projects';
import Settings from './componets/Settings';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Dashboard />} />
          <Route path='projects' element={<Projects />} />
          <Route path='settings' element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
