import React, { Component } from 'react'
import '../stylesheets/Home.css'

export default class Home extends Component {
    render() {
        return (
            <div className='Home-Section'>
                <div className='Home-Container'>
                <h3 className='Name'>Diego Hernandez</h3>
                <p className='Job-Title'>Front-end Developer</p>
                <h1 className='Greeting-Heading'>Hello! I'm a creative front-end developer looking forward to working with you.</h1>
                <button className='Scroll-Button'>Scroll Down</button>
                </div>


            </div>
        )
    }
}
