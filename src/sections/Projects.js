import React, { Component } from 'react'
import Cocky from "../assets/images/cocky-cocktails-image.jpg"
import '../stylesheets/Projects.css'

export default class Projects extends Component {
    render() {
        return (
            <>
            <section id="Projects">
            <div className="project-container">
            <a href="http://www.cockycocktails.diegohernandez.io/" target="_blank" rel="noreferrer"><img src= {Cocky} alt="" className="cocky-cocktails-image"/></a>
                <h1 className="cocky-cocktails-heading">Cocky Cocktails Project</h1>
                <p className="instruction-paragraph">Click on the image to open the app.</p>
                <p className="description-paragraph">This is an online application created using React.js that uses an external API and allows you to search for a specific cocktail base on their name or ingredient. </p>
            </div>
            </section>
            </>
        )
    }
}
