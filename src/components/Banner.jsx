/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Banner() {
  return (
    <section className="banner" id="banner">
      <div className="container">
        <div className="banner-wrapper">
          <div className="banner-img">
            <img src="/person.png" alt="" />
          </div>
          <div className="banner-content">
            <h6>Hello, I'm Tushar vani</h6>
            <h3>Front-End Developer</h3>
            <p>
              As a fresher in frontend development, focus on building a strong foundation in HTML, CSS, and JavaScript. Keep up with the latest trends and technologies, gain practical experience through internships and personal projects, and network with other professionals in the industry.
            </p>
            <a className="btn" href="#projects">
              About Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
