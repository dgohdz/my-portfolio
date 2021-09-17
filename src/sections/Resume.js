import React, { Component } from 'react'
import '../stylesheets/Resume.css'

export default class Resume extends Component {
  render() {
    return (
      <>
      <div className="resume">
        <div className="education">
          <h1>Education</h1>
          <h3>What I've learned</h3>
          <p>Schools</p>
        </div>
        <div className="experience">
          <h1>Experience</h1>
          <h3>Where I've worked</h3>
          <p>Jobs</p>
        </div>
      </div>
        <button className="resume-button">Download Resume</button>
      </>
    )
  }
}
