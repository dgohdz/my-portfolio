import React, { Component } from 'react'
import Blackout from "../assets/images/blackout-image.png"
import '../stylesheets/Projects.css'

export default class Projects extends Component {
    render() {
        return (
            <>
            <section className="project-section" id="Projects">
            <div className="image-container">
            <a href="https://infinite-taiga-38805.herokuapp.com/" target="_blank" rel="noreferrer"><img src= {Blackout} alt="" className="blackout-png"/></a>
                <h1 className="blackout-heading">Blackout Project</h1>
                <p className="instruction-paragraph">Click on the image to open the app.</p>
                <p className="description-paragraph">This is an online application currently being worked on by myself and two other collegues. It contains a list of 500 cocktails from an API of which you can look at their ingredients and instructions on how to prepare them. If you create an account, you have the option to save them in your favorites list as well. </p>
            </div>
            </section>
            </>
        )
    }
}
