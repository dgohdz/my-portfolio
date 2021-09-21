import React, { Component } from 'react'
import '../stylesheets/Resume.css'

export default class Resume extends Component {
  render() {
    return (
      <>
      <div className="resume-container">
        <div className="education">
          <h1>Skills</h1>
          <h3>What I know</h3>
          <p>HTML</p>
        </div>
        <div className="experience">
          <h1>Experience</h1>
          <h3>Where I've worked</h3>
          <p>Jobs</p>
        </div>
      </div>
      <div className="button-container">
      <button className="resume-button">Download Resume</button>
      </div>
      </>
    )
  }
}
