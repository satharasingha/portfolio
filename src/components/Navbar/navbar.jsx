import React, { useState, useEffect } from 'react';
import './navbar.css';

import contactImg from '../../assets/contact.png';
import { Link } from 'react-scroll';

import close from '../../assets/close.png';
import mlogo from '../../assets/techlogo.png';
import menunew from '../../assets/menunew.png';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle navbar background/shadow when scrolling
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Close mobile menu
    const closeMenu = () => {
        setShowMenu(false);
    };

    // Toggle mobile menu
    const toggleMenu = () => {
        setShowMenu((prev) => !prev);
    };

    // Scroll to a section safely
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);

        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }

        closeMenu();
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">

                {/* ==================== LOGO ==================== */}
                <div
                    className="nav-logo"
                    onClick={() => scrollToSection('intro')}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            scrollToSection('intro');
                        }
                    }}
                >
                    <img
                        src={mlogo}
                        alt="Portfolio Logo"
                        className="logo"
                    />
                </div>


                {/* ==================== DESKTOP MENU ==================== */}
                <div className="desktopMenu">

                    {/* Home */}
                    <Link
                        activeClass="active"
                        to="intro"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        className="desktopMenuListItem"
                    >
                        <span>Home</span>
                    </Link>


                    {/* About Me */}
                    <Link
                        activeClass="active"
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                        className="desktopMenuListItem"
                    >
                        <span>About me</span>
                    </Link>


                    {/* Projects */}
                    <Link
                        activeClass="active"
                        to="works"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                        className="desktopMenuListItem"
                    >
                        <span>Projects</span>
                    </Link>


                    {/* Blog */}
                    <Link
                        activeClass="active"
                        to="blog"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                        className="desktopMenuListItem"
                    >
                        <span>Blog</span>
                    </Link>


                    {/* Contact */}
                    <Link
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                        className="desktopMenuListItem"
                    >
                        <span>Contact</span>
                    </Link>

                </div>


                {/* ==================== DESKTOP CONTACT BUTTON ==================== */}
                <button
                    type="button"
                    className="desktopMenuBtn"
                    onClick={() => scrollToSection('contact')}
                >
                    <img
                        src={contactImg}
                        alt="Contact"
                        className="desktopMenuImg"
                    />

                    <span>Get In Touch</span>
                </button>


                {/* ==================== MOBILE MENU BUTTON ==================== */}
                <button
                    type="button"
                    className="mobMenuBtn"
                    onClick={toggleMenu}
                    aria-label={showMenu ? 'Close menu' : 'Open menu'}
                    aria-expanded={showMenu}
                >
                    <img
                        src={showMenu ? close : menunew}
                        alt={showMenu ? 'Close menu' : 'Open menu'}
                        className="mobMenuIcon"
                    />
                </button>


                {/* ==================== MOBILE MENU ==================== */}
                <div
                    className={`navMenu ${showMenu ? 'navMenuOpen' : ''}`}
                >
                    <div className="mobile-menu-content">

                        {/* Home */}
                        <Link
                            activeClass="active"
                            to="intro"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            className="listItem"
                            onClick={closeMenu}
                        >
                            <span>Home</span>
                        </Link>


                        {/* About Me */}
                        <Link
                            activeClass="active"
                            to="skills"
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={500}
                            className="listItem"
                            onClick={closeMenu}
                        >
                            <span>About me</span>
                        </Link>


                        {/* Projects */}
                        <Link
                            activeClass="active"
                            to="works"
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={500}
                            className="listItem"
                            onClick={closeMenu}
                        >
                            <span>Projects</span>
                        </Link>


                        {/* Blog */}
                        <Link
                            activeClass="active"
                            to="blog"
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={500}
                            className="listItem"
                            onClick={closeMenu}
                        >
                            <span>Blog</span>
                        </Link>


                        {/* Contact */}
                        <Link
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={500}
                            className="listItem"
                            onClick={closeMenu}
                        >
                            <span>Contact</span>
                        </Link>


                        {/* Mobile Contact Button */}
                        <button
                            type="button"
                            className="mobileContactBtn"
                            onClick={() => scrollToSection('contact')}
                        >
                            <img
                                src={contactImg}
                                alt="Contact"
                            />

                            <span>Contact Me</span>
                        </button>

                    </div>
                </div>


                {/* ==================== MOBILE OVERLAY ==================== */}
                {showMenu && (
                    <div
                        className="menuOverlay"
                        onClick={closeMenu}
                        aria-hidden="true"
                    ></div>
                )}

            </div>
        </nav>
    );
};

export default Navbar;