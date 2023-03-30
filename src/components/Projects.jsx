/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState } from "react";

function Projects() {
  const [projects] = useState([
    {
      title: "webpage 1",
      img: "/projects/1.png",
      gLink: "https://github.com/Berlin2222",
     
    },  
  ]);
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="title">
          <h3>Basic pages i make</h3>
          <a
            href="#"
            target="_blank"
            className="btn"
            rel="noreferrer"
          >
            View All
          </a>
        </div>
        <div className="projects-wrapper">
          {projects.map((project, i) => (
            <div className="project" key={i}>
              <div className="img-container">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="description">
                <h4>{project.title}</h4>
                <div className="links">
                  <a href={project.gLink} target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
              <p>
              I Created this webpages using  HTML,CSS,JAVASCRIPT and REACT,JS . I learn much things in this an create a Responsive page which help people to use in diffrent devices.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
