import React, { Component } from 'react'
import '../stylesheets/Resume.css'

export default class Resume extends Component {
  render() {
    return (
      <>
      <div className="resume-container">
        <div className="skills">
          <h1>Skills</h1>
          <h2>What I know</h2>
          <ul className="skills-list">
            <li>HTML</li>
            <li>CSS/SCSS</li>
            <li>Javascript</li>
            <li>React.js</li>
            <li>Ruby on Rails</li>
          </ul>
        </div>
        <div className="experience">
          <h1>Experience</h1>
          <h2>Where I've worked</h2>
          <h3>US Army</h3>
          <h3>Real Estate Agent</h3>
          <h3>Notch8 Intern</h3>

        </div>
      </div>
      <div className="button-container">
      <button className="download-resume" onClick="https://drive.google.com/file/d/13203KjaitOUzQSXxXui8HqRx1kIv_g5E/view?usp=sharing">Download Resume</button>
      </div>
      </>
    )
  }
}
