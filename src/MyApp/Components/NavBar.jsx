import React, { useState } from "react";
import "../Css/NavBar.css";
import Modal from "./Modal";
import navimage from "../assets-img/product (34).jpg";
import navimage1 from "../Assets/image.jpg";
// import navimage2 from "../Assets/Image (9).jpg"

import logo from "../Assets/logo.jpg";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [navTop, setNavTop] = useState(true);

  // const top_nav_off = () => {
  //   setNavTop(false);
  // };

  const [modalOpen, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modalOpen);
  };

  return (
    <div className="navbar">
      {navTop && (
        <div className="nav-top">
          <div>
            <p className="nav-top-text">
              Purchases made on this site will ship to U.S. addresses only. Do
              you want to shop the U.S. site?
            </p>
          </div>
          <div className="logo-nav">
            {/* <img className="logo-nav-top" src={logo} alt="" /> */}
          </div>
          {/* <i
            className="fa-solid fa-xmark nav-top-close"
            onClick={top_nav_off}
          ></i> */}
          <i
            className="fa-solid fa-user nav-top-close"
            onClick={toggleModal}
          ></i>
        </div>
      )}
      <div className="nav-top-line"></div>
      <div className="nav-bottom">
        <Link to="/" className="logo-box">
          <img className="logo-nav1" src={logo} alt="" />
        </Link>
        <Link to="/" className="nav-link home-link">
          HOME
        </Link>
        <Link to="" className="nav-link cato-link">
          CATEGORIES
          <div className="nav-hover-cate">
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
            <div>
              <img className="nav-image" src={navimage1} alt="" />
            </div>
            <div>
              <img className="nav-image" src={navimage} alt="" />
            </div>
            {/* <div>
          <img className="nav-image" src={navimage2} alt="" />
        </div> */}
          </div>
        </Link>
        <Link to="" className="nav-link about-link">
          ABOUT
        </Link>
        <Link to="/ContactUs" className="nav-link contact-link">
          CONTACT
        </Link>
        <Link to="" className="nav-link cart-link">
          CART 
        <i style={{ color: "black" , marginLeft:"5px" , fontSize:"13px"}} className="fa-solid fa-cart-shopping"></i>
        </Link>
        {/* <Link to="/BookMyAppointment" className="nav-link">
          BOOK APPOINTMENT
        </Link> */}
      </div>

      {modalOpen && <Modal handleclick={toggleModal} />}
    </div>
  );
};

export default NavBar;
