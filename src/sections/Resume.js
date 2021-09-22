import React, { Component } from 'react'
import '../stylesheets/Resume.css'

export default class Resume extends Component {
  render() {
    return (
      <>
      <div className="resume-container">
        <div className="skills">
          <h1>Skills</h1>
          <h3>What I know</h3>
          <ul>
            <li>HTML</li>
            <li>CSS/SCSS</li>
            <li>Javascript</li>
            <li>React.js</li>
            <li>Ruby on Rails</li>
          </ul>
        </div>
        <div className="experience">
          <h1>Experience</h1>
          <h3>Where I've worked</h3>
          <p>Jobs</p>
        </div>
      </div>
      <div className="button-container">
      <button className="download-resume">Download Resume</button>
      </div>
      </>
    )
  }
}
