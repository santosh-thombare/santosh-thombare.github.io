import React from 'react';
import Tabs from "./tab";




class About extends React.Component{
    render(){
        return (
            
    <div id="about">
        <div className="container">
            <div className="row">
                <div className="about-col-1">
                    <img alt="" src="images/Group 8900.png"/>
                </div>
                <div className="about-col-2">
                    <h1 className="subtitle">About Me</h1>
                    <p> have a strong hands-on experience in 
                        Front-end Engineering for over 7+ years. 
                        Started as a novice web developer and 
                        through my career path gained knowledge 
                        of latest trends in front-end technology as 
                        well as in designer.
                        Because of my versatile nature I quickly 
                        adapt to the latest UI trends, can diffuse 
                        pressure, manage and communicate ideas 
                        clearly and effectively</p>
                
                    <Tabs/>
                </div>
            </div>
        </div>
    </div>

        );
    }
}

export default About;