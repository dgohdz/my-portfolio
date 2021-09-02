import React, { Component } from 'react'
import '../stylesheets/Resume.css'

export default class Resume extends Component {
  render() {
    return (
      <div className="Resume">
        <div className="Education">
          <h1>Education</h1>
          <h3>What I've learned</h3>
        </div>
        <div className="Experience">
          <h1>Experience</h1>
          <h3>Where I've worked</h3>
        </div>
        <div className="Skills">
          <h1>Skills</h1>
          <h3>What I bring to the table</h3>
        </div>
      </div>
    )
  }
}
