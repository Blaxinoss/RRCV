import Cookies from "js-cookie";
import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Modal from "./Modal.js"; // Import the modal component
import "./Navbar.css";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const hamburgerRef = useRef(null);
  const menuListRef = useRef(null);
  const navigate = useNavigate();

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  const handleHamburgerClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  // Handle logout
  const handleLogout = () => {
    Cookies.remove("authToken"); // Remove the auth token
    navigate("/login", { replace: true }); // Redirect to the login page
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <header className="navbar">
        <div className="logoHome">
          <img src="/Images/logo.png" alt="Logo" />
        </div>
        {/* Hamburger Menu for Mobile */}
        <div className="hamburger-menu" ref={hamburgerRef} onClick={handleHamburgerClick}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className="menu">
          <ul ref={menuListRef} className={isMenuOpen ? 'active' : ''}>
            <li>
              <Link style={{ color: 'red' }} to="/" className="contactUsBtn">
                ADMIN SIDE
              </Link>
            </li>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/quiz">Quiz</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <a href="#contact-us" className="contactUsBtn" onClick={handleModalToggle}>
                Contact us
              </a>
            </li>

          </ul>
        </nav>
      </header>
      {showModal && <Modal showModal={showModal} handleClose={handleModalToggle} />}
    </>
  );
};

export default Navbar;
