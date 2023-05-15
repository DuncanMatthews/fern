import React, { useState } from "react";
import { Link } from "react-scroll";


const NavBar = () => {
    const scrollOptions = {
        duration: 500,
        smooth: true,
        offset: -100
      };
  const [selectedNavItem, setSelectedNavItem] = useState("Photos");

  const handleNavItemClick = (event) => {
    event.preventDefault();
    setSelectedNavItem(event.target.getAttribute("rel"));
  };

  return (
    <div className="navbar-wedding">
  <div style={{paddingBottom: "0px"}}></div>
  <ul className="nav--f2cca" id="nav-bar" style={{zIndex: "1", transform: "translateZ(0px)"}}>
    <li className={`nav-item--649fa ${selectedNavItem === "Photos" ? "selected-nav-item" : ""}`}>
      <Link
        className="nav-link--fd4c5"
        to="photos"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        onClick={handleNavItemClick}
        rel="Photos"
      >
        Photos
      </Link>
    </li>
    <li className={`nav-item--649fa ${selectedNavItem === "About" ? "selected-nav-item" : ""}`}>
      <Link
        className="nav-link--fd4c5"
        to="about"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        onClick={handleNavItemClick}
        rel="About"
      >
        About
      </Link>
    </li>
    <li className={`nav-item--649fa ${selectedNavItem === "Amenities" ? "selected-nav-item" : ""}`}>
      <Link
        className="nav-link--fd4c5"
        to="amenities"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        onClick={handleNavItemClick}
        rel="Amenities"
      >
        Amenities
      </Link>
    </li>
    <li className={`nav-item--649fa ${selectedNavItem === "Pricing" ? "selected-nav-item" : ""}`}>
      <Link
        className="nav-link--fd4c5"
        to="pricing"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        onClick={handleNavItemClick}
        rel="Pricing"
      >
        Pricing
      </Link>
    </li>
    
    <li className={`nav-item--649fa ${selectedNavItem === "Vendors" ? "selected-nav-item" : ""}`}>
      <Link
        className="nav-link--fd4c5"
        to="vendors"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        onClick={handleNavItemClick}
        rel="Vendors"
      >
        Vendors
      </Link>
    </li>
  </ul>
</div>


  
  
  );
};

export default NavBar;
