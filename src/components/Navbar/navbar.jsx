import React, { useState, useEffect } from 'react';
import './navbar.css';
import contactImg from '../../assets/contact.png';
import { Link } from 'react-scroll';
import menu from '../../assets/menu.png';
import close from '../../assets/close.png';
import mlogo from '../../assets/techlogo.png';
import menunew from '../../assets/menunew.png'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeMenu = () => setShowMenu(false);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                {/* Logo */}
                <div className="nav-logo">
                    <img src={mlogo} alt="Logo" className='logo'/>
                    <span className="logo-text"></span>
                </div>

                {/* Desktop Menu */}
                <div className="desktopMenu">
                    <Link 
                        activeClass='active' 
                        to='intro' 
                        spy={true} 
                        smooth={true} 
                        offset={-100} 
                        duration={500} 
                        className="desktopMenuListItem"
                    >
                        <span>Home</span>
                    </Link>
                    <Link 
                        activeClass='active' 
                        to='skills' 
                        spy={true} 
                        smooth={true} 
                        offset={-50} 
                        duration={500} 
                        className="desktopMenuListItem"
                    >
                        <span>About me</span>
                    </Link>
                    <Link 
                        activeClass='active' 
                        to='works' 
                        spy={true} 
                        smooth={true} 
                        offset={-50} 
                        duration={500} 
                        className="desktopMenuListItem"
                    >
                        <span>Projects</span>
                    </Link>
                    <Link 
                        activeClass='active' 
                        to='contact' 
                        spy={true} 
                        smooth={true} 
                        offset={-50} 
                        duration={500} 
                        className="desktopMenuListItem"
                    >
                        <span>Contact</span>
                    </Link>

                    <Link 
                        activeClass='active' 
                        to='contact' 
                        spy={true} 
                        smooth={true} 
                        offset={-50} 
                        duration={500} 
                        className="desktopMenuListItem"
                    >
                        <span>Blog</span>
                    </Link>
                </div>

                {/* Contact Button */}
                <button className="desktopMenuBtn" onClick={() => {
                    document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
                    closeMenu();
                }}>
                    <img src={contactImg} alt="Contact" className="desktopMenuImg" />
                    <span>Get In Touch</span>
                </button>

                {/* Mobile Menu Button */}
                <button className="mobMenuBtn" onClick={() => setShowMenu(!showMenu)}>
                    <img src={showMenu ? close : menunew} alt="Menu" className='mobMenuIcon'/>
                </button>

                {/* Mobile Menu */}
                <div className={`navMenu ${showMenu ? 'navMenuOpen' : ''}`}>
                    <div className="mobile-menu-content">
                        <Link 
                            activeClass='active' 
                            to='intro' 
                            spy={true} 
                            smooth={true} 
                            offset={-100} 
                            duration={500} 
                            className="listItem" 
                            onClick={closeMenu}
                        >
                            <span>Home</span>
                        </Link>
                        <Link 
                            activeClass='active' 
                            to='skills' 
                            spy={true} 
                            smooth={true} 
                            offset={-50} 
                            duration={500} 
                            className="listItem" 
                            onClick={closeMenu}
                        >
                            <span>About me</span>
                        </Link>
                        <Link 
                            activeClass='active' 
                            to='works' 
                            spy={true} 
                            smooth={true} 
                            offset={-50} 
                            duration={500} 
                            className="listItem" 
                            onClick={closeMenu}
                        >
                            <span>Projects</span>
                        </Link>
                        <Link 
                            activeClass='active' 
                            to='contact' 
                            spy={true} 
                            smooth={true} 
                            offset={-50} 
                            duration={500} 
                            className="listItem" 
                            onClick={closeMenu}
                        >
                            <span>Contact</span>
                        </Link>
                        
                        <button className="mobileContactBtn" onClick={() => {
                            document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
                            closeMenu();
                        }}>
                            <img src={contactImg} alt="Contact" />
                            <span>Contact Me</span>
                        </button>
                    </div>
                </div>

                {/* Overlay */}
                {showMenu && <div className="menuOverlay" onClick={closeMenu}></div>}
            </div>
        </nav>
    )
}

export default Navbar;