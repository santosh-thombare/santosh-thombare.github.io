import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import {FaBehance, FaLinkedin, FaPaperPlane, FaArrowRight} from 'react-icons/fa';
import { RiWhatsappFill } from "react-icons/ri";


class Contact extends React.Component{
    render(){
        return(
            <div id="contact">

        <div className="container contact-main">
        <h1 className="sub-title">Contact me</h1>
            <div className="contact-card-list social-icons">
                <div className="contact-card">
                    <FaPaperPlane className='fa-solid'/>
                    <p>Email</p>
                    <p>sans.thombare@gmail.com</p>
                    <a href="mailto:sans.thombare@gmail.com" className="link">Write me <FaArrowRight className='fa-solid arrow'/></a>
                </div>
                <div className="contact-card">
                    <RiWhatsappFill className='fa-solid'/>
                    <p>Whatsapp</p>
                    <p>+91 9773959591</p>
                    <a href="https://wa.me/919773959591" className="link">Write me <FaArrowRight className='fa-solid arrow'/></a>
                </div>
                <div className="contact-card">
                    <FaBehance className='fa-solid'/>
                    <p>Behance</p>
                    <p>santosh-thombare</p>
                    <a href="https://www.behance.net/santosh-thombare" className="link">Write me <FaArrowRight className='fa-solid arrow'/></a>
                </div>
                <div className="contact-card">
                    <FaLinkedin className='fa-solid'/>
                    <p>Linkedin</p>
                    <p>santosh-thombare-09ab1b186</p>
                    <a href="https://in.linkedin.com/in/santosh-thombare-09ab1b186" className="link">Write me <FaArrowRight className='fa-solid arrow'/></a>
                </div>
            </div>
        </div>
        <div className="copyright">
            <p>Copyright © Santosh. Made with <FontAwesomeIcon className="fa-solid" icon={faHeart} /> by Santosh Thombare.</p>
        </div>
    </div>
        )
    }
}

export default Contact;