import React, { Component } from 'react'
import Blackout from "../assets/images/blackout-image.png"
import '../stylesheets/Projects.css'

export default class Projects extends Component {
    render() {
        return (
            <>
            <div className= "image-container">
                <img src= {Blackout} alt="" className="blackout-png"/>
            </div>
            <div className= "description">
                <h2>Blackout Project</h2>
                <p>This is an application currently under construction.</p>
            </div>
            </>
        )
    }
}
