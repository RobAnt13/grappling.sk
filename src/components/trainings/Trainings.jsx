import React from 'react'
import './trainings.css'

const Trainings = () => {
  return (
    <section id='trainings'>
      <h2>Tréningy</h2>

      <div className="container trainings_container">
        <div className="trainings_grapplingFirstColumn">
          <div className="trainings_content">
            <article className='trainings_details'>
              <p>
                <ul>
                  <li>Pondelok</li>
                  <li>Utorok: <br/> 8:00 - 9:30 <br/>    18:00 - 19:30</li>
                  <li>Streda</li>
                  <li>Štvrtok: <br/>  8:00 - 9:30       </li>
                  <li>Piatok: <br/>  18:00 - 19:30</li>
                  <li>Sobota</li>
                  <li>Nedeľa: <br/>  10:00 - 11:30</li>

                </ul> 
              </p> 
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Trainings