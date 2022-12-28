import React from 'react'
import './experience.css'

const experience = () => {
  return (
    <section id='experience'>
      <h2>Čo je Grappling?</h2>

      <div className="container experience_container">
        <div className="experience_grapplingFirstColumn">
          <div className="experience_content">
            <article className='experience_details'>
              <p>V našej akadémii vychádzame predovšetkým z brazílskeho jiu jitsu, v ktorom je veľké množstvo rôznych pák, škrtení, pretočení, strhov. Táto forma grapplingu sa stala najdominantnejšiou zo všetkých a to najmä tým že všetci víťazi ale aj ostatní medailisti najznámejšej a najprestížnejšej súťaže v grapplingu ADCC (Abu Dhabi combat club) sú vo všetkých kategóriách zápasníci brazílskeho jiu jitsu.</p> 
            </article>
          </div>
        </div>
        <div className="experience_grapplingSecondColumn">
          <div className="experience_content">
            <article className='experience_details'>
              <p>Grappling zahŕňa množstvo bojových zručností ktoré tréningom rozvíjame. Vysoká variabilita rôznych techník nám dáva veľa možností ako mať v boji navrch.
Všetky formy grapplingu ti pomôžu zlepšiť fyzickú kondíciu, zosilnieť a spevnieť svoje telo, naučia ťa ho efektívne používať. Všetky tieto benefity su výsledkom nepretržitej aktivnej povahy tohto umenia, neustála práca so súperovým a svojím telom.
</p>
            </article>
          </div>

        </div>  
      </div>
    </section>
  )
}

export default experience
