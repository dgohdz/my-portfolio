import React, { Component } from 'react'
import '../stylesheets/Resume.css'

export default class Resume extends Component {
  render() {
    return (
      <>
      <section className="resume-section" id="Resume">

          <h1 className="skills-heading">Skills</h1>
          <h4 className="skills-subheading">What I know</h4>
      <div className="list-container">
          <ul className="skills-grid">
            <li>HTML</li>
            <li>CSS/SCSS</li>
            <li>Javascript</li>
            <li>React.js</li>
            <li>VS Code</li>
            <li>Git</li>
          </ul>
      </div>
      <div className="experience-container">
          <h1 className="experience-heading">Experience</h1>
          <h4 className="experience-subheading">Where I've worked</h4>
      </div>
      <div className="list-container">
          <ul className="experience-grid">
            <li>US Army</li>
            <li>Real Estate Agent</li>
            <li>Notch8 Software Development Intern</li>
            <li>LEARN Academy Teacher's Assistant</li>
          </ul>
      </div>
      <div className="button-container">
      <a href="https://drive.google.com/file/d/13203KjaitOUzQSXxXui8HqRx1kIv_g5E/view?usp=sharing" target="_blank" rel="noreferrer"><button className="button">Resume</button></a>      </div>
      </section>
      </>
    )
  }
}
