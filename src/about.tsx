import React from 'react';

class About extends React.Component{
    render(){
        return (
            
    <div id="about">
        <div className="container">
            <div className="row">
                <div className="about-col-1">
                    <img src="images/Group 8900.png"/>
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
                
                    <div className="tab-titles">
                        <p className="tab-links active" > Skills</p>
                        <p className="tab-links" >Experience</p>
                        <p className="tab-links">Education</p>
                    </div>
                    <div id="skills" className="tab-contents active">
                        <ul>                            
                            <li><span>Web Development</span><br/> Web Application Development</li>
                            <li><span>UI/UX</span><br/> Designing Web/App Interfaces</li>
                            <li><span>Mobile Development</span><br/> Building Frontend for Mobile App</li>
                        </ul>
                    </div>

                    <div id="experience" className="tab-contents">
                        <ul>
                            <li><span>2016 - Current</span><br/>Frontend Developer & UI/UX Designer 
                                <br/>
                                <ul>
                                    <li>- Lead team of designer and front-end developer</li>
                                    <li>- Lead the RPM, TIFM and Jobchain project which has multiple portals with mobile application</li>
                                    <li>- Team lead on Front-end side from UI/UX to fully interactive modules integration, designed and developed complete 
                                        design process from initial phase.</li>
                                </ul>
                            </li>
                            <li><span>2015 - 2016</span><br/>Web Developer 
                                <br/>
                                <ul>
                                    <li>- Built CRM web application for real estate industry </li>
                                    <li>- Worked in report generation section, which has 23+ different reports</li>
                                    <li>- Worked on responsive screens for tablet view</li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div id="education" className="tab-contents">
                        <ul>
                            <li><span>2013</span><br/> Bachelors in Computer Engineering, Mumbai University</li>
                            <li><span>2010</span><br/> Diploma in Computer Engineering, MSBTE</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

        );
    }
}

export default About;