import React from 'react'
import './about.css'
import ME from '../../assets/P1637163 bw.jpg'
import {GiBlackBelt} from 'react-icons/gi'
import {AiOutlineRise} from 'react-icons/ai'
import {TbCertificate} from 'react-icons/tb'

const About = () => {
  return (
    <section id='about'>
      <h5></h5>
      <h2>O mne</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <GiBlackBelt className='about_icon'/>
              <h5>Skúsenosti</h5>
              <small>Čierny pás v Bjj</small>
            </article>

             <article className='about_card'>
              <AiOutlineRise className='about_icon'/>
              <h5>Grappling</h5>
              <small>10+ rokov tréningu</small>
            </article> 
            
            <article className='about_card'>
              <TbCertificate className='about_icon'/>
              <h5>Inštruktor</h5>
              <small>Certifikovaný tréner</small>
            </article>
          </div>

          <p>
            Som držiteľom čierneho pásu v brazílskom jiu jitsu. V tréningu využívam aj prvky klasického zápasenia. Snažím sa neustále vzdelávať formou kempov, súťaží a aj sledovania trendov, keďže sa tento šport neustále vyvíja. Účastnil som sa rôznych lokálnych ale aj zahraničných súťaži, pozbieral množstvo medailí. V našej akadémii trénuje množstvo držiteľov vysokých pásov od modrých cez fialové až po hnedé a čierne pásy.
          </p>
          <a href="#contact" className='btn btn-primary'>Napíš mi</a>
         </div>
      </div>
    </section>
  )
}

export default About