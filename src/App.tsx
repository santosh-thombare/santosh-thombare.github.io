import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from "./nav";
import Home from './TestComponent';
import About from './about';
import {
  BrowserRouter as Router,  
  Routes,
  Route,
  Link
} from "react-router-dom";
import SinglePage from './singlePage';

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
    setTheme('dark');
    } else {
    setTheme('light');
    };
  }
    
    useEffect(() => {
      document.body.className = theme;
      }, [theme]);
  

  return (
    <Router>
    <div className="">
        {/* <Nav/>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
          
        </Routes>  */}
        <SinglePage/>
    </div>
    </Router>
  );
}

export default App;
