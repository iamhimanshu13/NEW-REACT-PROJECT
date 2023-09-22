import React from "react";
import "../Css/Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
           <div className="footer-hover-cate">
           <div className="sub-cate">
              <Link to="/Silver" className="sub-cate-head">
                Silver
              </Link>
              <Link to="/Rings" className="sub-cate-link">
                Rings
              </Link>
              <Link to="/Bracelet" className="sub-cate-link">
                Bracelet
              </Link>
              <Link to="/ChainSet" className="sub-cate-link">
                Chain Set
              </Link>
              <Link to="/Payal" className="sub-cate-link">
                Payal
              </Link>
              </div>
              <div className="sub-cate">
              <Link to="/Gold" className="sub-cate-head">
                Gold
              </Link>
              <Link to="/Oranament" className="sub-cate-link">
                Oranament
              </Link>
              <Link to="/AntiqueSet" className="sub-cate-link">
                Antique set
              </Link>
              <Link to="/CoinsForGift" className="sub-cate-link">
                Coins for gift
              </Link>
              <Link to="/GoldNosepin" className="sub-cate-link">
                Nosepin
              </Link>
            </div>
            <div className="sub-cate">
              <Link to="/Diamond" className="sub-cate-head">
                Diamond
              </Link>
              <Link to="/LoveAndEngagement" className="sub-cate-link">
                Love & Engagement
              </Link>
              <Link to="/DiamondNosepin" className="sub-cate-link">
                Nosepin
              </Link>
              <Link to="/Pendants" className="sub-cate-link">
                Pendants
              </Link>
              <Link to="/Naceless" className="sub-cate-link">
                Naceless
              </Link>
            </div>
        
        </div>
      <div className="footer-icon-box"> 
        <ul className="wrapper">
    <li className="icon facebook">
        <span className="tooltip">Facebook</span>
        <span><i className="fab fa-facebook-f"></i></span>
    </li>
    <li className="icon twitter">
        <span className="tooltip">Whatsapp</span>
        <span><i className="fab fa-whatsapp"></i></span>
    </li>
    <li className="icon instagram">
        <span className="tooltip">Instagram</span>
        <span><i className="fab fa-instagram"></i></span>
    </li>
</ul>
      </div>
  
    </div>
  
  );


};

export default Footer;
