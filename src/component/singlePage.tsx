import React from 'react';
import Home from './TestComponent'
import About from './about';
import Service from './services';
import Portfolio from './portfolio';
import Contact from './contact';
// import ReactDOM from 'react-dom/client';
// import AnchorLink from 'react-anchor-link-smooth-scroll';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faTimes, faBars, faUpRightFromSquare, faPenNib, faCode, faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons';
// import { FaBehance, FaBehanceSquare, FaFacebook, FaFacebookSquare, FaInstagram, FaLinkedin, FaLinkedinIn } from 'react-icons/fa';
// import { RiAppStoreLine } from "react-icons/ri";



class SinglePage extends React.Component {
    render() {
        return (
            <div>
                <Home />
                <About />
                <Service />
                <Portfolio />
                <Contact />
            </div>
        )
    }
}

export default SinglePage;