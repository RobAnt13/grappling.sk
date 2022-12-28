import React from 'react'
import './footer.css'
import {BsInstagram} from 'react-icons/bs'

const footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'></a>

      <ul className='permalinks'>
        <li><a href="#">Domov</a></li>
        <li><a href="#about">O mne</a></li>
        <li><a href="#experience">Čo je Grappling</a></li>
        <li><a href="#gallery">Galéria</a></li>
        <li><a href="#trainings">Tréningy</a></li>
        <li><a href="#contact">Napíš mi</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://instagram.com/antonygrapplingdivision"><BsInstagram /></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Antonygrapplingdivision. All rights reserved.</small> 
        </div>
    </footer>
  )
}

export default footer