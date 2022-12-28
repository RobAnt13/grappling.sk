import React from 'react'
import './privateClass.css'
import ME from '../../assets/gallery2.JPG'

const PrivateClass = () => {
  return (
    <section id='privateClass'>
      <h2>Súkromná hodina</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
          <p>
            Súkromna hodina u mňa je najlepší spôsob ako sa zlepšiť v grapplingu. Na súkromnej hodine máš moju plnú pozornosť, dostaneš okamžitú spätnú väzbu na techniky a zároveň sa naučíš techniky ktoré sa hodia tvojmu typu postavy. Kým začneme, spoločne rozhodneme o téme našich hodín. Týmto sposobom nájdeme dokonalú rovnováhu medzi tým, čo chceš, a tým na čom musíš pracovať. Budeš napredovať rýchlejšie a grappling si užiješ o to viac.
            </p> 
          </div>
      </div>
    
    
    
    </section>
  )
}

export default PrivateClass