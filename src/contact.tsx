import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPaperPlane, faPhone, faHeart } from '@fortawesome/free-solid-svg-icons';
import {FaBehance, FaBehanceSquare, FaFacebook, FaFacebookSquare, FaInstagram, FaLinkedin, FaLinkedinIn, FaPaperPlane, FaArrowRight} from 'react-icons/fa';
import { RiWhatsappFill } from "react-icons/ri";

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

class Contact extends React.Component{
    render(){
        return(
            <div id="contact">
        {/* <div className="container">
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
                    
                    <span id="msg"></span>
                </div>
            </div>
        </div> */}

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