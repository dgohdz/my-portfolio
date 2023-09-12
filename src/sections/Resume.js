import React, { Component } from 'react'
import '../stylesheets/Resume.css'
import HTML from "../assets/images/html-icon.png";
import CSS from "../assets/images/css-icon.png";
import Javascript from "../assets/images/js-icon.png";
import JiraIcon from "../assets/images/JIRA-icon.png";
import vscode from "../assets/images/vscode-icon.png";
import git from "../assets/images/git-icon.png";
import SqlIcon from "../assets/images/SQL-Icon.png";
import PostmanIcon from "../assets/images/Postman-Icon.png"

export default class Resume extends Component {
  render() {
    return (
      <>
      <section className="resume-section" id="Resume">
          <div className="skills-container">
          <h1 className="skills-heading">Skills</h1>
          <h5 className="skills-subheading">__________</h5>
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
              <div><img src={Javascript} alt="js-icon" className="js-icon"/>
              <p>JavaScript</p>
              </div>
            </li>
            <li>
              <div><img src={SqlIcon} alt="SQL-Icon" className="SQL-Icon"/>
              <p>SQL</p>
              </div>
            </li>
            <li>
              <div><img src={JiraIcon} alt="JIRA-icon" className="JIRA-icon"/>
              <p>JIRA</p>
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
              <div><img src={PostmanIcon} alt="Postman-Icon" className="Postman-Icon"/>
              <p>Postman</p>
              </div>
            </li>
          </ul>
          </div>

      <div className="experience-container">
          <h1 className="experience-heading">Experience</h1>
          <h5 className="experience-subheading">__________</h5>
      </div>
      <div className="list-container">
          <ul className="experience-grid">
            <li>U.S. Army</li>
            <li>Real Estate Agent</li>
            <li>Notch8 Software Development Intern</li>
            <li>FBS Developer Support Analyst</li>
          </ul>
      </div>
      <div className="button-container">
      <a href="https://www.dropbox.com/scl/fi/3b1rl6pu0jet1pevcd54b/Diego-Hernandez-Developer-Support-Resume.pdf?rlkey=eqxzq5kxwbyvnkgms5kupyajh&dl=0" target="_blank" rel="noreferrer" alt="Resume link"><button className="button">View Resumé</button></a>
      </div>
      </section>
      </>
    )
  }
}
