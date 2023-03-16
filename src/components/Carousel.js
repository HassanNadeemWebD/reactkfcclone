import React from 'react'
import img1 from '../img/img1.jpg';
import img2 from '../img/img2.jpg';
import img3 from '../img/img3.jpg';

export default function Carousel() {
  return (
    <div><div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={img1} className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src={img2} className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src={img3} className="d-block w-100" alt="..."/>
      </div>
    </div>
  </div></div>
  )
}
