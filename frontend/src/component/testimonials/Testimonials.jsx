import React from 'react'
import test1 from '../images/test1.jpg';
import test2 from '../images/test2.jpg';
import test3 from '../images/test3.jpg';
import test4 from '../images/test4.jpg';
import test5 from '../images/test5.jpg';
import test6 from '../images/test6.jpg';
import test7 from '../images/test7.jpg';
import test8 from '../images/test8.jpg';

function Testimonials() {

  const test = [
    {
      id: 1,
      image: test1
    },
    {
      id: 2,
      image: test2
    },
    {
      id: 3,
      image: test3
    },
    {
      id: 4,
      image: test4
    },
    {
      id: 5,
      image: test5
    },
    {
      id: 6,
      image: test6
    },
    {
      id: 7,
      image: test7
    },
    {
      id: 8,
      image: test8
    }
  ]

  return (
    <>
      <p className="text-[40px] text-center mt-5" >Phenomenal Customer Service! I'm just starting out with,
        <br /> the team helped me so much with integrating this int<br />my website. Highly recommend.</p>
      <h6 className='text-red-600 text-[20px] text-center mt-5'>FATIMA ASRAFY <span>- COO, AMERIMAR ENTERPRISES, INC.</span></h6>
      <div className='w-[700px] grid grid-cols-1 px-1 sm:grid-cols-2 lg:grid-cols-5 gap-1 mx-auto'>

        {
          test.map(item => {
            return <div key={item.id} className='p-10 mt-1 bg-white-100  dark:bg-gray-700  '>
              <div className='hover:scale-110 ease-in-out duration-200 delay-75 opacity-70  '>
                <img src={item.image} />
              </div>
            </div>
          })
        }
      </div>
    </>
  )
}

export default Testimonials