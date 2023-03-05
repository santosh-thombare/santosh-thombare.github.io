import React from 'react';
import About1 from './about';
import ReactDOM from 'react-dom/client';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes, faBars, faUpRightFromSquare, faPenNib, faCode, faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons';
import {FaBehance, FaBehanceSquare, FaFacebook, FaFacebookSquare, FaInstagram, FaLinkedin, FaLinkedinIn} from 'react-icons/fa';
import { RiAppStoreLine } from "react-icons/ri";

function Nav(){
    return(
        <nav>
        <a href="#header"><img src="../images/logo2.png" className="logo"/></a>
        
        <ul id="sidemenu">                    
            <li><AnchorLink href="#header" id="">Home</AnchorLink ></li>
            <li><AnchorLink href="#about" id="">About</AnchorLink></li>
            <li><AnchorLink href="#services" id="">Services</AnchorLink></li>
            <li><AnchorLink href="#portfolio" id="">Portfolio</AnchorLink></li>
            <li><AnchorLink href="#contact" id="">Contact</AnchorLink></li>
            {/* <i className="fa-solid fa-times" ></i> */}
        </ul>
        {/* <i className="fa-solid fa-bars"></i> */}
    </nav>
    )    
}

function MyForm() {
    return (
        <form name="submit-to-google-sheet">
            <input type="text" name="Name" placeholder="Your name" required/>
            <input type="text" name="Email" placeholder="Your email" required/>
            <textarea name="Message" placeholder="Your message" required></textarea>
            <button type="submit" className="btn btn2">Submit</button>
        </form>
    )
  }

const Home= () => {
    return (
        <div id="header">
            
        <div className="container">
        <Nav/>
            <div className="header-text">
                <p>Frontend Developer &</p>
                <p>UI/UX Designer</p>
                <h1>Hi, I'm <span>Santosh</span> <br/>from India</h1>
            </div>
        </div>
    </div>
    )}

    const About = () => {
        return (
            <div id="about">
                <div className="container">
                    <div className="row">
                        <div className="about-col-1">
                            <img src="../images/Group 8900.png"/>
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
                                <p className="tab-links active" >Skills</p>
                                <p className="tab-links" >Experience</p>
                                <p className="tab-links" >Education</p>
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
        )
    }

    const Services = () => {
        return (<div id="services">
        <div className="container">
            <h1 className="sub-title">My Services</h1>
            <div className="services-list">
                <div>
                <FontAwesomeIcon className="fa-solid" icon={faCode} />
                    <h2>Web Development</h2>
                    <p>Create fully-responsive, mobile-friendly
                        website designs. With a website that looks
                        stunning on any device, from large desktop
                        screens to smartphones, your site visitors
                        have a great experience when visiting your
                        website.</p>
                    <a href="#">Learn more</a>
                </div>
                <div>
                <FontAwesomeIcon className="fa-solid" icon={faPenNib} />
                    <h2>UI/UX Design</h2>
                    <p>Custom web design services can help you build a custom website that reflects
                        your business and brand. With create a site that is easy to
                        navigate, looks professional, and catches
                        our potential customer's attention</p>
                    <a href="#">Learn more</a>
                </div>
                <div>
                    <RiAppStoreLine className='fa-solid-2'/>
                    <h2>App Design</h2>
                    <p>Our mobile app developers can build high-quality native apps for both Android and iOS systems aligned with your business and security requirements.</p>
                    <a href="#">Learn more</a>
                </div>
            </div>
        </div>
    </div>
    )}

    const Portfolio = () => {
        return (
            <div id="portfolio">
                <div className="container">
                    <h1 className="sub-title">My Work</h1>
                    <div className="work-list">
                        <div className="work">
                            <img src="../images/projects/radiance_cover_page.png" alt=""/>
                            <div className="layer">
                                <h3>Radiance - Web Application</h3>
                                <p>Knowledge transfer platform through audio/video notes</p>
                                <a href="https://www.behance.net/gallery/160979497/Radiance-Knowledge-Transfer-Web-Application"><FontAwesomeIcon className="fa-solid" icon={faUpRightFromSquare} /></a>
                            </div>
                        </div>
                        <div className="work">
                            <img src="../images/projects/docuvitals_cover_page.png" alt=""/>
                            <div className="layer">
                                <h3>Docuvitals - Web & Mobile App</h3>
                                <p>Remote patient monitoring for hospital caregiver & patients</p>
                                <a href="https://www.behance.net/gallery/160988099/Remote-Patient-Monitoring-Application"><FontAwesomeIcon className="fa-solid" icon={faUpRightFromSquare} /></a>
                            </div>
                        </div>
                        <div className="work">
                            <img src="../images/projects/jobchain.png" alt=""/>                    
                            <div className="layer">
                                <h3>Jobchain - Web & Mobile App</h3>
                                <p>Shipment tracking for customs jobs </p>
                                <a href="https://www.behance.net/gallery/162489943/JobChain-%28Automated-Shipment-Tracking-Service%29"><FontAwesomeIcon className="fa-solid" icon={faUpRightFromSquare} /></a>
                            </div>
                        </div>
                        <div className="work">
                            <img src="../images/projects/TIFM_cover_page.png" alt=""/>                    
                            <div className="layer">
                                <h3>TIFM</h3>
                                <p>Total Infrastructure Facility Mgmt. </p>
                                <a href="https://www.behance.net/gallery/163844957/Bysness-ERP-TIFM"><FontAwesomeIcon className="fa-solid" icon={faUpRightFromSquare} /></a>
                            </div>
                        </div>

                    </div>
                    <a href="#" className="btn">See more</a>
                </div>
            </div>
        )
    }

    const Contact = () => {
        return (<div id="contact">
        <div className="container">
            <div className="row">
                <div className="contact-left">
                    <h1 className="sub-title">Contact me</h1>
                    <p><FontAwesomeIcon className="fa-solid" icon={faPaperPlane} />sans.thombare@gmail.com</p>
                    <p><FontAwesomeIcon className="fa-solid" icon={faPhone} />9773959591</p>
                    <div className="social-icons">
                        <a href="https://www.behance.net/santosh-thombare"><FaBehance className='fa-solid'/></a>
                        <a href="https://in.linkedin.com/in/santosh-thombare-09ab1b186"><FaLinkedin className='fa-solid'/></a>
                        <a href="https://m.facebook.com/santosh.thombare.585/"><FaFacebookSquare className='fa-solid'/></a>                        
                        <a href=""><FaInstagram className='fa-solid'/></a>
                        
                    </div>
                    <a href="images/santosh-cv.pdf" download className="btn btn2">Download CV</a>
                </div>
                <div className="contact-right">
                    <MyForm/>
                    {/* <form name="submit-to-google-sheet">
                        <input type="text" name="Name" placeholder="Your name" required>
                        <input type="text" name="Email" placeholder="Your email" required>
                        <textarea name="Message" rows="6" placeholder="Your message" required></textarea>
                        <button type="submit" className="btn btn2">Submit</button>
                    </form> */}
                    <span id="msg"></span>
                </div>
            </div>
        </div>
        <div className="copyright">
            <p>Copyright © Santosh. Made with <i className="fa-solid fa-heart"></i> by Santosh.</p>
        </div>
    </div>
    )
    }

    const SinglePage = () => {
        return (
          <div>
            <Home/>
            <About1/>
            <Services/>
            <Portfolio/>
            <Contact/>
          </div>
        )
      }

// class SinglePage extends React.Component{
//     render(){
//         return(
//         <div id="root">
//         </div>
//         )
//     }
// }

export default SinglePage;