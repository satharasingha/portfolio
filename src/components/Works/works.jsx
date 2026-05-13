import React, { useState } from "react";
import "./works.css";

import Portfolio1 from "../../assets/portfolio-1.png";
import Portfolio2 from "../../assets/portfolio-2.png";
import Portfolio3 from "../../assets/portfolio-3.png";
import Portfolio4 from "../../assets/portfolio-4.png";
import Portfolio5 from "../../assets/portfolio-5.png";
import Portfolio6 from "../../assets/portfolio-6.png";
import todo from "../../assets/todoapp.png";
import mediqueue from "../../assets/mediqueue.png";
import quiz from "../../assets/quizapp.png";
import wa from "../../assets/weatherapp.png";
import travo from "../../assets/travoapp.png";
import fuel from "../../assets/fualapp.png";
import air from "../../assets/airdashboard.png";
import devmock from '../../assets/Devmock.png'

const Works = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const githubLink = "https://github.com/satharasingha";

  const projects = [
    {
      id: 1,
      image: mediqueue,
      title: "Hospital Appointment Booking",
      category: "web",
      description:
        "A React-based hospital appointment booking system that simplifies patient scheduling, reduces queue times, and improves daily hospital operations.",
    },

    {
      id: 2,
      image: quiz,
      title: "AI Career Support Platform",
      category: "web",
      description: "An interactive app to create and take quizzes online.",
    },
    {
      id: 3,
      image: wa,
      title: "Weather App",
      category: "web",
      description: "Get current weather and forecasts for any location.",
    },
    {
      id: 4,
      image: travo,
      title: "Travel App",
      category: "mobile",
      description: "Book hotels and plan your trips seamlessly.",
    },
    {
      id: 5,
      image: fuel,
      title: "Fuel App",
      category: "mobile",
      description: "Track fuel consumption and monitor vehicle performance.",
    },
    {
      id: 6,
      image: air,
      title: "Air Quality Monitor",
      category: "web",
      description: "Monitor air quality and pollution levels in real-time.",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="works" className="works-section">
      <div className="works-container">
        <div className="works-header">
          <h2 className="works-title">My Projects</h2>
          <p className="works-subtitle">
            A showcase of my latest projects and creative work. Each piece
            represents attention to detail and passion for excellence.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="works-filter">
          <button
            className={`filter-btn ${activeFilter === "all" ? "active" : ""}`}
            onClick={() => setActiveFilter("all")}
          >
            All Projects
          </button>
          <button
            className={`filter-btn ${activeFilter === "web" ? "active" : ""}`}
            onClick={() => setActiveFilter("web")}
          >
            Web Development
          </button>
          <button
            className={`filter-btn ${activeFilter === "mobile" ? "active" : ""}`}
            onClick={() => setActiveFilter("mobile")}
          >
            Mobile Apps
          </button>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-actions">
                      <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="view-btn">View Project</button>
                      </a>
                      <button className="details-btn">Details</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <span className="project-category">{project.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
