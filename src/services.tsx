import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes, faBars, faUpRightFromSquare, faPenNib, faCode, faPaperPlane, faPhone, faCheck } from '@fortawesome/free-solid-svg-icons';
import { RiAppStoreLine, RiCloseFill } from "react-icons/ri";

export default function Services(){
    const [currentService, setCurrentService] = useState();

    const [closeCurrentModal, setCloseCurrentModal] = useState(true);


    if(!closeCurrentModal){
        console.log(closeCurrentModal,"test");
        return null
    }


    const services = [
        {
            id:"1",
            content:<div className="">
            <FontAwesomeIcon className="fa-solid" icon={faCode} />
                <h2>Web Development</h2>
                <p>Create fully-responsive, mobile-friendly
                    website designs. With a website that looks
                    stunning on any device, from large desktop
                    screens to smartphones, your site visitors
                    have a great experience when visiting your
                    website.</p>
            </div>,
            modal_content:<div>
                <div className="heading">Web Development</div>
                <p>
                    <div className="para">Web Development</div>
                    <li><FontAwesomeIcon className="fa-solid" icon={faCheck} />Point 1</li>
                    <li><FontAwesomeIcon className="fa-solid" icon={faCheck} />Point 2</li>
                </p>
            </div>
        },
        {
            id:"2",
            content:<div className="">
            <FontAwesomeIcon className="fa-solid" icon={faPenNib} />
                <h2>UI/UX Design</h2>
                <p>Custom web design services can help you build a custom website that reflects
                        your business and brand. With create a site that is easy to
                        navigate, looks professional, and catches
                        our potential customer's attention</p>
            </div>,
            modal_content:<div>
                <div className="heading">UI/UX Design</div>
                <p>
                    <div className="para">UI/UX Design</div>
                    <li><FontAwesomeIcon className="fa-solid" icon={faCheck} />Point 1</li>
                    <li><FontAwesomeIcon className="fa-solid" icon={faCheck} />Point 2</li>
                </p>
            </div>
        },
        {
            id:"3",
            content:<div className="">
            <RiAppStoreLine className='fa-solid-2'/>
                <h2>App Design</h2>
                <p>Our mobile app developers can build high-quality native apps for both Android and iOS systems aligned with your business and security requirements.</p>
            </div>,
            modal_content:<div>
                <div className="heading">App Design</div>
                <p>
                    <div className="para">App Design</div>
                    <li><FontAwesomeIcon className="fa-solid" icon={faCheck} />Point 1</li>
                    <li><FontAwesomeIcon className="fa-solid" icon={faCheck} />Point 2</li>
                </p>
            </div>
        }]


    const handleClick = (e:any) => {        
        setCurrentService(e.target.id);
        e.stopPropagation();
        console.log(e.target.id,"checked");
    }
    
        
   

    return(
        <div id="services">
        <div className="container">
            <h1 className="sub-title">My Services</h1>
            <div className="services-list">
                {services.map((service, i) =>
                    <div className="card-parent" style={{}} key={i} id={service.id}>{service.content}
                    <button className="see-more" key={i} id={service.id} onClick={(handleClick)}>See more</button>
                    <div key={i} className={currentService === `${service.id}` ? "modal-window-parent active" : "modal-window-parent"}>
                            {
                                currentService === `${service.id}` && 
                                 <div className="content">  
                                    <button 
                                    className="closeButton"
                                    onClick={() => setCloseCurrentModal(false)}>
                                        <RiCloseFill className='fa-solid-2'/></button>
                                    {service.modal_content}
                                    </div>
                            }
                        </div>
                    </div>                    
                )}
                 {/*<div className="modal-window">
                     {services.map((service, i) => 
                        <div key={i} className="modal-window">
                        {
                            currentService === `${service.id}` && 
                             <div>{service.modal_content}</div>
                        }
                    </div>
                    )} 
                 </div>*/}
            </div>
        </div>
    </div>
        )
    }