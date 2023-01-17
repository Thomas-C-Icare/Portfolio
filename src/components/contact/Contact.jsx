
import "./contact.css"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {HiOutlineMailOpen} from 'react-icons/hi'
// import {RiMessengerLine} from 'react-icons/ri'

const Contact = ({language, setLanguage}) => {
  const form = useRef();
  const encodedMail = atob("dGhvbWFzLmNhbXBvMDhAZ21haWwuY29t")
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_p9qhyad', 'template_ka1rkf8', form.current, 'rxEjKxgE5xVs-sPVN')
     
  };
  return (
    <section id='contact'>
      <h5>{language === 'fr' ? "On reste en contact":"Get in touch"}</h5>
      <h2>{language === 'fr' ? "Me contacter":"Contact me"}</h2>

      <div className="container contact__container">
        <div className="contact__options">
            <article className="contact__option">
                <HiOutlineMailOpen  className="contact__option-icon"/>
                <h4>Email</h4>
                <h5>{encodedMail}</h5>
                <a href="mailto:thomas.campo08@gmail.com" target="_blank" rel="noreferrer">{language === 'fr' ? "M'envoyer un message":"Send me a message"}</a>
            </article>
            {/* <article className="contact_option">
                <RiMessengerLine className="contact__option-icon" />
                <h4>Messenger</h4>
                <h5>Thomas campo</h5>
                <a href="https://m.me/earnest.achiever" target="_blank" rel="noreferrer">Send me a message</a>
            </article> */}
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder={language === 'fr' ? "Votre nom/prénom":"Your full name"} required/>
          <input type="email" name="email" placeholder={language === 'fr' ? "Votre mail":"Your email"} required/>
          <textarea name="message"  rows="7" placeholder={language === 'fr' ? "Votre message":"Your message"} required></textarea>
          <button type="submit" className="btn btn-primary">{language === 'fr' ? "Envoyer":"Send message"}</button>
        </form>
      </div>
    </section>
  )
}

export default Contact