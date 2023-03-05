import React from 'react';
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
