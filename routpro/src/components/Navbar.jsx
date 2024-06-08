// src/components/Navbar.jsx
import React from 'react';
import './Navbar.css';

const Navbar = () => {
    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className="navbar">
            <h1 className="navbar-logo">MrX</h1>
            <ul className="navbar-links">
                <li><a href="#home" onClick={() => scrollToSection('home')}>Home</a></li>
                <li><a href="#about" onClick={() => scrollToSection('about')}>About</a></li>
                <li><a href="#services" onClick={() => scrollToSection('services')}>Services</a></li>
                <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
