
import { FaFacebook } from 'react-icons/fa';
import { FaCopyright } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGlobe } from 'react-icons/fa';





function Footer(){
    return(
<div>

        <div class="mainn centerr">
            <div class="iconn ml-30 ">
               <a  href="https://www.facebook.com/manja.gowda.526"><FaFacebook className="fa-facebook-f"></FaFacebook></a> 
            </div>
            <div class="iconn centerr">
            <a href="https://www.instagram.com/manjunath_gowda7">    <FaInstagram className="fa-instagram"></FaInstagram></a>
            </div>
            
            <div class="iconn centerr">
                <a href="https://github.com/MonstrousEye"> <FaGithub className="fa-github"></FaGithub></a>
            </div>
            <div class="iconn centerr">
                <a href="https://twitter.com/ManjunathRS16"><FaTwitter className="fa-twitter"></FaTwitter></a>
            </div>
            <div class="iconn centerr">
                <a href="https://www.linkedin.com/in/manjunath-r-s-2a0881206"> <FaLinkedin className="fa-linkedin"></FaLinkedin></a>
            </div>
            <div class="iconn centerr">
                <a href="https://manjunathportfolio.herokuapp.com"><FaGlobe className="fa-globe"></FaGlobe></a>
            </div>
        </div>


<div className="last">

<span>Created By <a href="https://manjunathportfolio.herokuapp.com" >MANJUNATH R S</a> | <FaCopyright></FaCopyright> 2020 All rights reserved.</span>


</div>


</div>
    )
}

export default Footer;