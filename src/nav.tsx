import React from "react";
import {Link} from "react-router-dom";

class Nav extends React.Component{
    render(){
        return(
            <div className="container">  
                <nav>
                    <a href="#header"><img src="images/logo2.png" className="logo"/></a>
                    
                    <ul id="sidemenu">                    
                        <li><Link to="/" id="">Home</Link></li>
                        <li><Link to="/about" id="">About </Link></li>
                        <li><a href="#services" id="">Services</a></li>
                        <li><a href="#portfolio" id="">Portfolio</a></li>
                        <li><a href="#contact" id="">Contact</a></li>
                        {/* <i className="fa-solid fa-times" ></i> */}
                    </ul>
                    {/* <i className="fa-solid fa-bars" ></i> */}
                </nav>
            </div>
        )
    }
}

export default Nav;