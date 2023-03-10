import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {useState, useEffect} from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { IoMdSunny } from "react-icons/io";

function App(){
    const[theme, setTheme] = useState('dark');

    const toggleTheme = () => {
        if(theme === 'dark'){
            setTheme('light');
            }
            else{
            setTheme('dark');
            }
            
        };

        

        useEffect(()=>{document.body.className = theme}, [theme]);
        return(
            <button onClick={toggleTheme}>
                <FontAwesomeIcon className="fa-solid moon" icon={faMoon}/>
                <IoMdSunny className='fa-solid sun'/>
            </button>
        )
    }

class Nav extends React.Component{
    render(){
        return(
            <div className="container">  
                <nav>
                    <a href="#header"><img src="images/logo2.png" className="logo" alt=""/></a>
                    
                    <ul id="sidemenu">                    
                        <li><AnchorLink href="#header" id="">Home</AnchorLink ></li>
                        <li><AnchorLink href="#about" id="">About</AnchorLink></li>
                        <li><AnchorLink href="#services" id="">Services</AnchorLink></li>
                        <li><AnchorLink href="#portfolio" id="">Portfolio</AnchorLink></li>
                        <li><AnchorLink href="#contact" id="">Contact</AnchorLink></li>
                        <App/>
                        {/* <i className="fa-solid fa-times" ></i> */}
                    </ul>
                    {/* <i className="fa-solid fa-bars" ></i> */}
                </nav>
            </div>
        )
    }
}

export default Nav;