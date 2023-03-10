import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,  
} from "react-router-dom";
import SinglePage from './component/singlePage';

export default function App() {

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

