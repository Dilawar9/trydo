import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Portfolio() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (

    <div className="section-title mb--20 mb_sm--0 text-left">
      <h2 className="text-[80px] font-bold"><span>Our Portfolio</span></h2>
      <p className="text-[20px] text-gray-500" >There are many variations of passages of Lorem Ipsum available,
        <br /> but the majority have suffered alteration.</p>
      <div className='mt-5'>
        <Slider {...settings}>
          <div>
          <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>

    </div>
  )
}

export default Portfolio;