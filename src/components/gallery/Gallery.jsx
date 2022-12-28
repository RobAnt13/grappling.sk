import React from 'react'
import './gallery.css'
import IMG1 from '../../assets/gallery1.JPG'
import IMG2 from '../../assets/P1637227.JPG'
import IMG3 from '../../assets/gallery3.JPG'
import IMG4 from '../../assets/gallery4.JPG'
import IMG5 from '../../assets/gallery5.JPG'
import IMG6 from '../../assets/gallery6.JPG'

// import Swiper core and required modules
import { Pagination } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Gallery = () => {
  return (
    <section id='gallery'>
      <h2>Galéria</h2>
      
      <div className="container gallery_container">
        <article className='gallery_item'>
          <div className="gallery_item-image">
            <img src={IMG1} alt=""/>
          </div>
          </article>

          <article className='gallery_item'>
          <div className="gallery_item-image">
            <img src={IMG2} alt=""/>
          </div>
          </article>

          <article className='gallery_item'>
          <div className="gallery_item-image">
            <img src={IMG3} alt=""/>
          </div>
          </article>

          <article className='gallery_item'>
          <div className="gallery_item-image">
            <img src={IMG4} alt=""/>
          </div>
          </article>

          <article className='gallery_item'>
          <div className="gallery_item-image">
            <img src={IMG5} alt=""/>
          </div>
          </article>

          <article className='gallery_item'>
          <div className="gallery_item-image">
            <img src={IMG6} alt=""/>
          </div>
          </article>
        </div> 
      </section>
  )
}

export default Gallery