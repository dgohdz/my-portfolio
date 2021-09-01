import React, { Component } from 'react'
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Resume from './pages/Resume'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import NavBar from './components/NavBar/Navbar';

export default class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      <NavBar/>
      <Footer/>
      <Resume/>
      <Projects/>
      <Contact/>
    </div>
    )
  }
}
