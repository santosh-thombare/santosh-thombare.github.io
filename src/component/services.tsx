import React, { useState } from "react";
import { newServices } from "../data/services";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { RiCloseFill } from "react-icons/ri";

export default function Services() {
    const [currentService, setCurrentService] = useState<string | undefined>();

    

    // const services = [
    //     {
    //         id: "1",
    //         content: <div className="">
    //             <FontAwesomeIcon className="fa-solid" icon={faCode} />
    //             <h2>Web Development</h2>
    //             <p>Create fully-responsive, mobile-friendly
    //                 website designs. With a website that looks
    //                 stunning on any device, from large desktop
    //                 screens to smartphones, your site visitors
    //                 have a great experience when visiting your
    //                 website.</p>
    //         </div>,
    //         modal_content: <div>
    //             <div className="heading">Web Development</div>
    //             <p>
    //                 <div className="para">Web Development</div>
    //                 <li><FontAwesomeIcon className="fa-solid" icon={faCheck} />Point 1</li>
    //                 <li><FontAwesomeIcon className="fa-solid" icon={faCheck} />Point 2</li>
    //             </p>
    //         </div>
    //     },
    //     {
    //         id: "2",
    //         content: <div className="">
    //             <FontAwesomeIcon className="fa-solid" icon={faPenNib} />
    //             <h2>UI/UX Design</h2>
    //             <p>Custom web design services can help you build a custom website that reflects
    //                 your business and brand. With create a site that is easy to
    //                 navigate, looks professional, and catches
    //                 our potential customer's attention</p>
    //         </div>,
    //         modal_content: <div>
    //             <div className="heading">UI/UX Design</div>
    //             <p>
    //                 <div className="para">UI/UX Design</div>
    //                 <li><FontAwesomeIcon className="fa-solid" icon={faCheck} />Point 1</li>
    //                 <li><FontAwesomeIcon className="fa-solid" icon={faCheck} />Point 2</li>
    //             </p>
    //         </div>
    //     },
    //     {
    //         id: "3",
    //         content: <div className="">
    //             <RiAppStoreLine className='fa-solid-2' />
    //             <h2>App Design</h2>
    //             <p>Our mobile app developers can build high-quality native apps for both Android and iOS systems aligned with your business and security requirements.</p>
    //         </div>,
    //         modal_content: <div>
    //             <div className="heading">App Design</div>
    //             <p>
    //                 <div className="para">App Design</div>
    //                 <li><FontAwesomeIcon className="fa-solid" icon={faCheck} />Point 1</li>
    //                 <li><FontAwesomeIcon className="fa-solid" icon={faCheck} />Point 2</li>
    //             </p>
    //         </div>
    //     }]


    const handleClick = (id: string) => {
        setCurrentService(id);
    }

    const handleOnModalClose = () => {
        setCurrentService(undefined)
    }




    return (
        <div id="services">
            <div className="container">
                <h1 className="sub-title">My Services</h1>
                <div className="services-list">
                    {newServices.map((service, i) =>
                        <div className="card-parent" style={{}} key={i} id={service.id}>


                            <div className="">
                                <FontAwesomeIcon className="fa-solid" icon={service.content.icon} />
                                <h2>{service.content.title}</h2>
                                <p>{service.content.description}</p>
                            </div>

                            <button className="see-more" key={i} id={service.id} onClick={()=>{ handleClick(service.id) }}>See more</button>
                            {
                                currentService === `${service.id}` &&
                                <div key={i} className={currentService === `${service.id}` ? "modal-window-parent active" : "modal-window-parent"}>
                                    <div className="content">
                                        <button
                                            className="closeButton"
                                            onClick={() => handleOnModalClose()}>
                                            <RiCloseFill className='fa-solid-2' />
                                        </button>

                                        <div>
                                            <div className="heading">{service.modal_content.title}</div>
                                            <p>
                                                <div className="para">{service.modal_content.description}</div>
                                                <ul>
                                                    {service.modal_content.bullets.map((bullet, i) =>
                                                        <li key={i}><FontAwesomeIcon className="fa-solid" icon={faCheck} />{bullet}</li>
                                                    )}                                                   
                                                </ul>
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            }
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}