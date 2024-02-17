import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import port1 from '../images/port1.jpg'
import port2 from '../images/port2.jpg'
import port3 from '../images/port3.jpg'
import port4 from '../images/port4.jpg'
import port5 from '../images/port5.jpg'
import port6 from '../images/port6.jpg'
function Portfolio() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const img = [
    {
      id: 1,
      image: port1,
      name: "Jone Due",
      post: "Web Developer"
    },
    {
      id: 2,
      image: port2,
      name: "Jone Sena",
      post: "Athlets"
    },
    {
      id: 3,
      image: port3,
      name: "Imran Khan",
      post: "Cricketer"
    },
    {
      id: 4,
      image: port4,
      name: "Nawaz Shareef",
      post: "Dafar"
    },
    {
      id: 5,
      image: port5,
      name: "Zardari",
      post: "Fradiya"
    },
    {
      id: 6,
      image: port6,
      name: "Fazulo",
      post: "Dissel"
    }

  ]

  return (

    <div className="section-title mb--20 mb_sm--0 text-left">
      <h2 className="text-[60px] font-bold"><span>Our Portfolio</span></h2>
      <p className="text-[20px] text-gray-500" >There are many variations of passages of Lorem Ipsum available,
        <br /> but the majority have suffered alteration.</p>
      <div className="slider-container mt-5 px-6">
        <Slider {...settings}>
          {
            img.map((item) => {
              return (
                <div className='px-6 relative hover:scale-110 ease-in-out duration-300 delay-75 my-8' key={item.id}>
                  <div className='relative '>
                    <img src={item.image} className='rounded-lg' />
                    <div className='absolute px-5   h-full w-full z-10 hover:bg-red-700 rounded-lg   opacity-50 top-0 left-0 '>
                      <div className='absolute bottom-5 left-5 text-white z-30'>
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
  )
}

export default Portfolio;