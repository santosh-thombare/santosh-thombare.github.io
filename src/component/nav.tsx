import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {useState, useEffect} from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { faMoon, faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
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
            
        
    };

    function SideBar(){

    const[openSidaBar, setOpenSidaBar] = useState<string>('true');
    
    const openSideHandleClick = () => {
        // const element = document.getElementById('sidemenu');
        // const element2 = document.getElementById('sidemenu')?.classList.contains('active');
        // console.log(element, "--->",element2, "test")
        // if (!element2 && element) {
        //     element.classList.add('active');
        //     //setOpenSidaBar("true");
        //   } else if(element2 === true){
        //     element2?.classList.remove('active');
        //   }
        console.log(openSidaBar, "test")
        if(openSidaBar === "true"){
            document.getElementById("sidemenu")?.classList.add("active");
            setOpenSidaBar("false");
        }else if(openSidaBar === "false"){
            document.getElementById("sidemenu")?.classList.remove("active");
            setOpenSidaBar("true");
        }
        
         }
         
        //useEffect(()=>{document.getElementById("sidemenu")?.classList}, [openSidaBar]);

        return(
            <a onClick={() => openSideHandleClick()}>
                <FontAwesomeIcon className="fa-solid"  icon={faBars}/>
                {/* <FontAwesomeIcon className="fa-solid fa-times"  icon={faTimes}/> */}
            </a>
        )
    }

    function SideBarclose(){

        const[openSidaBar, setOpenSidaBar] = useState<string>('true');
        
        const openSideHandleClick = () => {
            // const element = document.getElementById('sidemenu');
            // const element2 = document.getElementById('sidemenu')?.classList.contains('active');
            // console.log(element, "--->",element2, "test")
            // if (!element2 && element) {
            //     element.classList.add('active');
            //     //setOpenSidaBar("true");
            //   } else if(element2 === true){
            //     element2?.classList.remove('active');
            //   }
            console.log(openSidaBar, "test")
            if(openSidaBar === "true"){
                document.getElementById("sidemenu")?.classList.add("active");
                setOpenSidaBar("false");
            }else if(openSidaBar === "false"){
                document.getElementById("sidemenu")?.classList.remove("active");
                setOpenSidaBar("true");
            }
            
             }
             
            //useEffect(()=>{document.getElementById("sidemenu")?.classList}, [openSidaBar]);
    
            return(
                <a className="menuAction" onClick={() => openSideHandleClick()}>
                    <FontAwesomeIcon className="fa-solid fa-times" icon={openSidaBar === "true" ? faBars : faTimes}/>
                </a>
            )
        }

    


class Nav extends React.Component{
    render(){
        return(
            <div className="container">  
                <nav>
                    <a href="#header"><img src="images/logo2.png" className="logo" alt=""/></a>
                    
                    <ul id="sidemenu" className="sidemenu">                    
                        <li><AnchorLink href="#header" id="">Homes</AnchorLink ></li>
                        <li><AnchorLink href="#about" id="">About</AnchorLink></li>
                        <li><AnchorLink href="#services" id="">Services</AnchorLink></li>
                        <li><AnchorLink href="#portfolio" id="">Portfolio</AnchorLink></li>
                        <li><AnchorLink href="#contact" id="">Contact</AnchorLink></li>
                        
                        <App/>
                        {/* <SideBar/> */}
                        {/* <i className="fa-solid fa-times" ></i> */}
                    </ul>
                    <SideBarclose/>
                </nav>
            </div>
        )
    }
}


export default Nav;