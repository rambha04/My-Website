import React from "react";
import './Footer.css'
import footer_logo from '../Assets/logo.jpg'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import map_icon from '../Assets/map_icon.png'

const Footer =() =>{
    return (
      <div className="footer">
        <div className="footer-logo">
          <img src={footer_logo} alt="" />
          <p> REETA STORE </p>
        </div>
        <ul className="footer-links">
          <li> Company </li>
          <li> Products </li>
          <li> Offices </li>
          <li> About </li>
          <li> Contact </li>
        </ul>
        <div className="footer-social-icon">
          <div className="footer-icons-container">
            <img src={instagram_icon} alt="" />
          </div>
          <div className="footer-icons-container">
            <img src={pintester_icon} alt="" />
          </div>
          <div className="footer-icons-container">
            <img src={whatsapp_icon} alt="" />
          </div>
        </div>
        <div className="footer-map">
          <a
            href="https://maps.app.goo.gl/M1ZstuwTSAFUF7Ux5"
            target="_blank"
            rel="noopener noreferrer"
            className="map-link"
          >
            <img src={map_icon} alt="Google Map" className="map-icon" />
            <span className="map-address">Reeta Store,Jalahari,Jurudi,Keonjhar Odisha, 758034</span>
          </a>
        </div>

        <div className="footer-copyright">
          <hr />
          <p>Copyright @ 2025-All Right Reserved </p>
        </div>
      </div>
    );
}
export default Footer;