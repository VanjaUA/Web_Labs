import React from "react";
import Logo from "../../../../components/Logo"
import Social from '../../../../components/Social'
import './Footer.css'
import socialIcon1 from '../../../../img/facebook-icon.jpg'
import socialIcon2 from '../../../../img/twitter-logo-png.png'
import socialIcon3 from '../../../../img/linkedin-icon.jpg'
import socialIcon4 from '../../../../img/googleplus-icon.jpg'

const Footer = () =>{
    return(
        <div style={{borderTop:"1px solid #808080", padding:"20px 120px"}}>
            <div className="footer__envelopment">
                <div className="footer__envelopment-text">
                    <h4 className="footer__title">Socials</h4>
                    <p className="footer__text small__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Fuga cumque perspiciatis corrupti quo!</p>
                </div>
                <Logo/>
                <div className="socials">
                    <Social icon={socialIcon1}/>
                    <Social icon={socialIcon2}/>
                    <Social icon={socialIcon3}/>
                    <Social icon={socialIcon4}/>
                </div>
            </div>
            <p className="footer__copyright">
                    2024 IoT © Copyright all rights reserved
                </p>
        </div>
    )
}

export default Footer;