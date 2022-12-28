import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/logo.png'
import HeaderSocials from './HeaderSocials'

const header = () => {
  return (
    <header>
      <div className="container header_container">
        <h2>Vitaj v</h2>
        <h1>Bjj Slovakia</h1>
        <h3 className="text-light">Grappling Division by Robert Antony</h3>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll_down'>Posunúť dole</a>
      </div>
    </header>
  )
}

export default header