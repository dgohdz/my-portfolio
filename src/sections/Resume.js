import React, { Component } from 'react'
import '../stylesheets/Resume.css'
import HTML from "../assets/images/html-icon.png";
import CSS from "../assets/images/css-icon.png";
import SASS from "../assets/images/sass-icon.png";
import Javascript from "../assets/images/js-icon.png";
import reactIcon from "../assets/images/react-icon.png";
import vscode from "../assets/images/vscode-icon.png";
import git from "../assets/images/git-icon.png";
import postgresql from "../assets/images/postgresql.png"

export default class Resume extends Component {
  render() {
    return (
      <>
      <section className="resume-section" id="Resume">
          <div className="skills-container">
          <h1 className="skills-heading">Skills</h1>
          <h5 className="skills-subheading">What I know</h5>
          <ul className="skills-grid">
            <li>
              <div><img src={HTML} alt="html-icon" className="html-icon"/>
              <p>HTML</p>
              </div>
            </li>
            <li>
              <div><img src={CSS} alt="css-icon" className="css-icon"/>
              <p>CSS</p>
              </div>
            </li>
            <li>
              <div><img src={SASS} alt="sass-icon" className="sass-icon"/>
              <p>SASS</p>
              </div>
            </li>
            <li>
              <div><img src={Javascript} alt="js-icon" className="js-icon"/>
              <p>Javascript</p>
              </div>
            </li>
            <li>
              <div><img src={reactIcon} alt="react-icon" className="react-icon"/>
              <p>React.js</p>
              </div>
            </li>
            <li>
              <div><img src={vscode} alt="vscode-icon" className="vscode-icon"/>
              <p>VS Code</p>
              </div>
            </li>
            <li>
              <div><img src={git} alt="git-icon" className="git-icon"/>
              <p>Git</p>
              </div>
            </li>
            <li>
              <div><img src={postgresql} alt="postgresql-icon" className="postgresql-icon"/>
              <p>PostgreSQL</p>
              </div>
            </li>
          </ul>
          </div>

      <div className="experience-container">
          <h1 className="experience-heading">Experience</h1>
          <h5 className="experience-subheading">Where I've worked</h5>
      </div>
      <div className="list-container">
          <ul className="experience-grid">
            <li>U.S. Army Veteran</li>
            <li>Real Estate Agent</li>
            <li>Notch8 Software Development Intern</li>
            <li>LEARN Academy Teacher's Assistant</li>
          </ul>
      </div>
      <div className="button-container">
      <a href="https://www.dropbox.com/s/6ni92aoglcrks34/Diego%20Hernandez%20Support%20Engineer%20Resume.pdf?dl=0" target="_blank" rel="noreferrer"><button className="button">Resume</button></a>
      </div>
      </section>
      </>
    )
  }
}
