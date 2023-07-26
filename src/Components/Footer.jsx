import React from "react";
import { IoPerson } from "react-icons/io5";
import { TiLocationOutline,TiMail,TiPhone } from "react-icons/ti";
import { FaLinkedin,FaSquareGit,FaSquareTwitter,FaDownload,FaCode } from "react-icons/fa6";
import "./Footer.css";

function Footer() {
  
  return (
    <div className="footer">
      
      <div className="contact">
        <h2>Contact</h2>
        <ul>
        
          <li><IoPerson className="symbol"/> Bhaskar Roy</li>
          <li><TiLocationOutline className="symbol"/> West Bengal , India</li>
          <li><TiPhone className="symbol"/>+91 8389997439</li>
          <li><TiMail className="symbol"/> bhskr.wb@gmail.com</li>
        </ul>
      </div>

      <div className="socialmedia">
        <h2>Social Media</h2>
        <ul>
          <li><a href=""><FaLinkedin className="symbol"/>LinkedIn</a></li>
          <li><a href=""><FaSquareTwitter className="symbol"/>Twitter</a></li>
          <li><a href=""><FaSquareGit className="symbol"/>Github</a></li>
          <li></li>
        </ul>
      </div>

      <div className="quickacces">
        <h2>Quick Access</h2>
        <ul>
          <li> <a href=""><FaDownload className="symbol"/>Download Resume</a></li>
          <li><FaCode className="symbol"/>Project</li>
          
          <li></li>
        </ul>
      </div>
      
    </div>
  );
}

export default Footer;
