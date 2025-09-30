import './contact.css';
import facebookIcon from '../../assets/facebook-icon.png';
import twitterIcon from '../../assets/twitter.png';
import youtubeIcon from '../../assets/youtube.png';
import instagramIcon from '../../assets/instagram.png';
import linkd from '../../assets/linkedin.png';
import git from '../../assets/github.png';
import React, { useRef, useState } from 'react';
import emailjs from "@emailjs/browser";

const Contact = () => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        emailjs.sendForm('service_j0wcwsi', 'template_fgxzzas', form.current, 'mIR2XQ42ex5WFqyfi')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                setSubmitStatus('success');
                setIsSubmitting(false);
            }, (error) => {
                console.log(error.text);
                setSubmitStatus('error');
                setIsSubmitting(false);
            });
    };

    return (
        <section id='contact' className="contact-section">
            <div className="contact-wrapper">
                {/* Left Side - Contact Info */}
                <div className="contact-info-side">
                    <div className="contact-header">
                        <h2>Let's Work Together</h2>
                        <p>Ready to bring your ideas to life? Let's discuss your project and create something amazing.</p>
                    </div>
                    
                    <div className="contact-details">
                        <div className="detail-item">
                            <div className="detail-icon">📧</div>
                            <div>
                                <h4>Email</h4>
                                <p>verusatharasinghapersonal@gmail.com</p>
                            </div>
                        </div>
                        
                        <div className="detail-item">
                            <div className="detail-icon">📍</div>
                            <div>
                                <h4>Location</h4>
                                <p>Sri Lanka</p>
                            </div>
                        </div>
                    </div>

                    <div className="social-section">
                        <h4>Connect With Me</h4>
                        <div className="social-grid">
                            <a href="https://www.facebook.com/share/17TvDK3vdb/?mibextid=wwXIfr" className="social-card">
                                <img src={facebookIcon} alt="Facebook" />
                                <span>Facebook</span>
                            </a>

                            <a  
                                href="https://www.linkedin.com/in/weruni-satharasingha" 
                                className="social-card" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <img src={linkd} alt="LinkedIn" />
                                <span>LinkedIn</span>
                            </a>

                            <a href="https://github.com/satharasingha" className="social-card">
                                <img src={git} alt="GitHub" />
                                <span>GitHub</span>
                            </a>
                            <a href="https://www.instagram.com/_____veruu____?igsh=MWw5MThvaWV1cTh5&utm_source=qr" className="social-card">
                                <img src={instagramIcon} alt="Instagram" />
                                <span>Instagram</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Side - Contact Form */}
                <div className="contact-form-side">
                    <div className="form-container">
                        <div className="form-header">
                            <h3>Send a Message</h3>
                            <p>I'll get back to you within 24 hours</p>
                        </div>

                        <form className="contact-form" ref={form} onSubmit={sendEmail}>
                            <div className="input-group">
                                <input 
                                    type="text" 
                                    name="your_name" 
                                    placeholder=" "
                                    required 
                                />
                                <label>Full Name</label>
                            </div>
                            
                            <div className="input-group">
                                <input 
                                    type="email" 
                                    name="your_email" 
                                    placeholder=" "
                                    required 
                                />
                                <label>Email Address</label>
                            </div>
                            
                            <div className="input-group textarea-group">
                                <textarea 
                                    name="message" 
                                    placeholder=" "
                                    rows={4}
                                    required 
                                ></textarea>
                                <label>Your Message</label>
                            </div>

                            <button type="submit" className="submit-button" disabled={isSubmitting}>
                                {isSubmitting ? (
                                    <>
                                        <div className="button-spinner"></div>
                                        Sending Message...
                                    </>
                                ) : (
                                    <>
                                        <span>Send Message</span>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                            <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </>
                                )}
                            </button>

                            {submitStatus === 'success' && (
                                <div className="message-status success">
                                    <span>✅ Message sent successfully!</span>
                                </div>
                            )}
                            
                            {submitStatus === 'error' && (
                                <div className="message-status error">
                                    <span>❌ Failed to send message. Please try again.</span>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
