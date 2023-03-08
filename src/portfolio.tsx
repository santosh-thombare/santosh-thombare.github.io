import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes, faBars, faUpRightFromSquare, faPenNib, faCode, faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons';
import { RiAppStoreLine } from "react-icons/ri";

class Portfolio extends React.Component{
    render(){
        return(
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
}

export default Portfolio;