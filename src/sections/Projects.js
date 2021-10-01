import React, { Component } from 'react'
import Blackout from "../assets/images/blackout-image.png"
import '../stylesheets/Projects.css'

export default class Projects extends Component {
    render() {
        return (
            <>
            <section className="project-section" id="Projects">
                <img src= {Blackout} alt="" className="blackout-png"/>
                <h1 className="blackout-heading">Blackout Project</h1>
                <p className="paragraph">This is an application currently under construction.</p>
            </section>
            </>
        )
    }
}
