// src/Navbar.js
import React from 'react';
import './Navbar.css';
import logo from '../../assets/loginAssets/Logo_mit.png'; // Adjust the path as needed

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="Logo" />
            </div>
            <ul className="navbar-links">
                <li><a href="#admissions">Admissions</a></li>
                <li><a href="#passouts">Passouts</a></li>
                <li><a href="#filter">Filter</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
