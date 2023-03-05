import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component
{
    render(){
        return (
        <div id="header">
        <div className="container">            
            <div className="header-text">
                <p>Frontend Developer &</p>
                <p>UI/UX Designer</p>
                <h1>Hi, I'm <span>Santosh</span> <br/>from India</h1>
            </div>
        </div>
    </div>
    )
    }
}

export default Home;