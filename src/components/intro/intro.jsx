import React, { useState, useEffect } from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import dp from '../../assets/profile.jpg';
import { Link } from 'react-scroll';

const Intro = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const roles = ['Web Designer', 'UI/UX Designer', 'Frontend Developer', 'Software Developer'];

    useEffect(() => {
        const handleType = () => {
            const i = loopNum % roles.length;
            const fullText = roles[i];

            setText(isDeleting 
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 75 : 150);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleType, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed, roles]);

    return (
        <section id="intro" className="intro-section">
            <div className="intro-container">
                <div className="intro-content">
                    <div className="intro-text">
                        <span className="hello">Hello, I'm</span>
                        <h1 className="intro-name">Satharasingha</h1>
                        <div className="role-container">
                            <h2 className="intro-role">
                                I'm a <span className="typed-text">{text}</span>
                                <span className="cursor">|</span>
                            </h2>
                        </div>
                        <p className="intro-description">
                            I create stunning, user-friendly websites and digital experiences that 
                            blend creativity with functionality. Let's bring your vision to life 
                            with modern design and cutting-edge development.
                        </p>
                        
                        <div className="intro-buttons">
                            <Link to="contact" spy={true} smooth={true} offset={-50} duration={500}>
                                <button className="btn primary-btn">
                                    <img src={btnImg} alt="Hire me" className="btn-icon" />
                                    <span>Hire Me</span>
                                    <div className="btn-hover-effect"></div>
                                </button>
                            </Link>
                            
                            <Link to="works" spy={true} smooth={true} offset={-50} duration={500}>
                                <button className="btn secondary-btn">
                                    <span>View My Work</span>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </button>
                            </Link>
                        </div>

                        <div className="intro-stats">
                            <div className="stat">
                                <span className="stat-number">20+</span>
                                <span className="stat-label">Projects</span>
                            </div>
                           
                            <div className="stat">
                                <span className="stat-number">100%</span>
                                <span className="stat-label">Client Satisfaction</span>
                            </div>
                        </div>
                    </div>

                    <div className="intro-image">
                        <div className="image-container">
                            <img src={dp} alt="Smith - Web Designer" className="profile-image" />
                            <div className="image-overlay"></div>
                            <div className="floating-elements">
                                <div className="floating-element element-1">💡</div>
                                <div className="floating-element element-2">🚀</div>
                                <div className="floating-element element-3">⭐</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="scroll-indicator">
                    <div className="scroll-line"></div>
                    <span>Scroll Down</span>
                </div>
            </div>
        </section>
    );
}

export default Intro;