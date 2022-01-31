import React from 'react';
import emailjs from 'emailjs-com';
import '../stylesheets/Contact.css'
// import Modal from '../components/Modal';

export default function Contact () {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_1yz114h', 'template_v080ym6', e.target, 'user_8W3LRh9aPhANlUqqbGnYa')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <div className="form-container" id="Contact">
    
    <h1 className="headline">Contact Me</h1>
    <p className="paragraph">Send me a direct email by filling out the form below!</p>
    
    <form onSubmit={sendEmail}>
    <div className="form-items">
      <label>Name</label>
      <input type="text" name="name" className="name-input"/>
      <label>Email</label>
      <input type="email" name="email" className="email-input"/>
      <label>Message</label>
      <textarea name="message" className="message-input"/>
      <button type="submit" value="Send" className="button-send">Send</button>
    </div>
    </form>
    </div>
  );
};