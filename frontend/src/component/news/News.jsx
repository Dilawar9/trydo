import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import team1 from '../images/team1.jpg'
import team2 from '../images/team2.jpg'
import team3 from '../images/team3.jpg'
import team4 from '../images/team4.jpg'
import team5 from '../images/team5.jpg'
import team6 from '../images/team6.jpg'

function News() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  const news = [
    {
      id: 1,
      icon: team1,
      name: "Jone Due",
      post: "Web Developer"
    },
    {
      id: 2,
      icon: team2,
      name: "Jone Due",
      post: "Web Developer"
    },
    {
      id: 3,
      icon: team3,
      name: "Jone Due",
      post: "Web Developer"
    },
    {
      id: 4,
      icon: team4,
      name: "Jone Due",
      post: "Web Developer"
    },
    {
      id: 5,
      icon: team5,
      name: "Jone Due",
      post: "Web Developer"
    },
    {
      id: 6,
      icon: team6,
      name: "Jone Due",
      post: "Web Developer"
    },

  ]
  return (
    <>

      <div className="section-title mb--20 mb_sm--0 text-left">
        <h2 className="text-[60px] font-bold"><span>Latest News</span></h2>
        <p className="text-[20px] text-gray-500" >There are many variations of passages of Lorem Ipsum available,
          <br /> but the majority have suffered alteration.</p>
        <div className="slider-container mt-5">
          <Slider {...settings}>
            {
              news.map((item) => {
                return (
                  <div className='' key={item.id}>
                    <div className=''>
                      <div className='relative  hover:scale-125'>
                        <img src={item.icon} />
                        <div className='absolute z-1 hover:bg-red-100 '>
                        </div>
                      </div>
                      <div className='absolute z-1'>
                        <h3>{item.name}</h3>
                        <p>{item.post}</p>
                      </div>
                    </div>
                  </div>
                )
              })
            }
            <div>
              <image></image>
              <div></div>
            </div>

          </Slider>
        </div>

      </div>
    </>
  )
}

export default News