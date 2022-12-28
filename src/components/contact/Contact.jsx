import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {RiMessengerLine} from 'react-icons/ri'
import {RiWhatsappLine} from 'react-icons/ri'
import { useRef } from 'react'
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mex05t6', 'template_dfuchpr', form.current, 'VnrYa5TXgs63dKa42')
      
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h2>Napíš mi</h2>
      
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <HiOutlineMail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>robert.antony050607</h5><h5>@gmail.com</h5>
            <a href="mailto:robert.antony050607@gmail.com" target="_blank">Pošli mi správu</a>
          </article>

          <article className="contact_option">
            <RiMessengerLine className='contact_option-icon' />
            <h4>Messenger</h4>
            <h5>Robert Antony</h5>
            <a href="https://m.me/robertantony13" target="_blank">Pošli mi správu</a>
          </article>

          <article className="contact_option">
            <RiWhatsappLine className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+421948100356</h5>
            <a href="https://api.whatsapp.com/send?phone+421948100356" target="_blank">Pošli mi správu</a>
          </article>

        </div>
        {/*END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Pošli správu</button>
        </form>
      </div> 
    </section>
  )
}

export default Contact