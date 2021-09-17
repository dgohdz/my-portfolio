import React, { Component } from 'react'
import '../stylesheets/Home.css'

export default class Home extends Component {
    render() {
        return (
            <div className='home-container'>
                <h1 className='name'>Diego Hernandez</h1>
                <p className='job-title'>Front-end Developer</p>
                <h1 className='greeting-heading'>Hello! I'm a creative front-end developer looking forward to working with you.</h1>
                <button className='scroll-button'>Scroll Down</button>
            </div>
        )
    }
}
