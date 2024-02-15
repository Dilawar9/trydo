import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import todo1 from '../images/todo1.jpg';
import todo2 from '../images/todo2.jpg';
import todo3 from '../images/todo3.jpg';


function News() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  const news = [
    {
      id: 1,
      icon: todo3,
      name: "Jone Due",
      post: "Web Developer"
    },
    {
      id: 2,
      icon: todo2,
      name: "Jone Due",
      post: "Web Developer"
    },
    {
      id: 3,
      icon: todo1,
      name: "Jone Due",
      post: "Web Developer"
    },
    {
      id:4,
      icon: todo3,
      name: "Jone Due",
      post: "Web Developer"
    }

  ]
  return (
    <>
      <div className="section-title mb--20 mb_sm--0 text-left ">
        <h2 className="text-[60px] font-bold"><span>Latest News</span></h2>
        <p className="text-[20px] text-gray-500" >There are many variations of passages of Lorem Ipsum available,
          <br /> but the majority have suffered alteration.</p>
        <div className="slider-container mt-5 ">
          <Slider {...settings}>
            {
              news.map((item) => {
                return (
                  <div className='px-8  relative hover:scale-110 ease-in-out duration-300 delay-75 my-8' key={item.id}>
                    <div className='relative'>
                      <img src={item.icon} className='rounded-lg' />
                      <div className='absolute  h-full w-full z-10 hover:bg-red-700 rounded-lg opacity-50 top-0 left-0'>
                        <div className='absolute rounded-lg bottom-5 left-5 text-white z-30'>
                          <h3>{item.name}</h3>
                          <p>{item.post}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </Slider>
        </div>

      </div>
    </>
  )
}

export default News