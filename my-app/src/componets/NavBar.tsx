import React from 'react';
import { BrowserRouter as Router, Route, Link , Outlet} from 'react-router-dom';
import Dashboard from './Dashboard';
import Projects from './Projects';


export default function NavBar() {
  return (
    <>
    <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/settings">Settings</Link></li>
        </ul>
      </nav>
      <Outlet/>
    </>
      
  )
};