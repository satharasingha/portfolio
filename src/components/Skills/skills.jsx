import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ux.png';
import WebDesign from '../../assets/coding.png';
import AppDesign from '../../assets/softwareengineer.png'


const Skills = () => {
    const skillsData = [
        {
            icon: UIDesign,
            title: "UI/UX Design",
            description: "Creating intuitive user experiences with modern design principles and user-centered approaches that drive engagement.",
            color: "#667eea",
            technologies: ["Figma", "Prototyping", "Wireframing"]
        },
        {
            icon: WebDesign,
            title: "Web Development",
            description: "Building responsive, high-performance websites with clean code and optimal user experiences across all devices.",
            color: "#ffd700",
            technologies: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"]
        },
        {
            icon: AppDesign,
            title: "Software Engineering",
            description: "Developing robust applications using various programming languages and emerging technologies.",
            color: "#4facfe",
            technologies: ["Java", "Python", "C#", "C++", "AI/ML", "IoT"]
        }
    ];

    const technicalSkills = [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "Tailwind CSS", level: 80 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 80 },
        { name: "Java", level: 75 },
        { name: "Python", level: 80 },
        { name: "AI & ML", level: 70 },
        { name: "IoT", level: 80 },
        { name: "C#", level: 70 },
        { name: "C", level: 75 },
        { name: "C++", level: 70 }
    ];

    return (
        <section id='skills' className="skills-section">
            <div className="skills-container">
                <div className="skills-header">
                    <h2 className="skills-title">Skills & Education</h2>
                    <p className="skills-subtitle">
                        Final Year Undergraduate Student at NSBM Green University | University of Plymouth (UK)
                    </p>
                    <p className="education-info">
                        Pursuing BSc (Hons) in Software Engineering with hands-on experience in modern technologies 
                        and software development practices.
                    </p>
                </div>
                
                {/* Education Card */}
                <div className="education-card">
                    <div className="university-badge">
                        <span className="badge-icon">🎓</span>
                        <div className="badge-content">
                        
                            <h3>BSc (Hons) Software Engineering</h3>
                        </div>
                    </div>
                    <div className="universities">
                        <div className="university">
                            <span className="uni-flag">🇱🇰</span>
                            <div>
                                <h4>NSBM Green University</h4>
                                <span>Sri Lanka</span>
                            </div>
                        </div>
                        <div className="university">
                            <span className="uni-flag">🇬🇧</span>
                            <div>
                                <h4>University of Plymouth</h4>
                                <span>United Kingdom</span>
                            </div>
                        </div>
                    </div>
                    <div className="degree-progress">
                        <span className="progress-text">Final Year • Expected Graduation: 2026</span>
                        <div className="progress-bar">
                            <div className="progress-fill" style={{width: '85%'}}></div>
                        </div>
                    </div>
                </div>

                {/* Skills Grid */}
                <div className="skills-grid">
                    {skillsData.map((skill, index) => (
                        <div key={index} className="skill-card" style={{ '--accent-color': skill.color }}>
                            <div className="card-header">
                                <div className="card-icon">
                                    <img src={skill.icon} alt={skill.title} />
                                    <div className="icon-bg"></div>
                                </div>
                                <h3>{skill.title}</h3>
                            </div>
                            <p>{skill.description}</p>
                            <div className="technologies">
                                {skill.technologies.map((tech, techIndex) => (
                                    <span key={techIndex} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Technical Skills Progress */}
                <div className="technical-skills">
                    <h3 className="technical-title">Technical Proficiency</h3>
                    <div className="skills-list">
                        {technicalSkills.map((skill, index) => (
                            <div key={index} className="skill-item">
                                <div className="skill-info">
                                    <span className="skill-name">{skill.name}</span>
                                    <span className="skill-percent">{skill.level}%</span>
                                </div>
                                <div className="skill-bar">
                                    <div 
                                        className="skill-progress" 
                                        style={{width: `${skill.level}%`}}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;