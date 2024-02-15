import React from 'react'
import brand1 from '../images/brand1.png'
import brand2 from '../images/brand2.png'
import brand3 from '../images/brand3.png'
import brand4 from '../images/brand4.png'
import brand5 from '../images/brand5.png'
import brand6 from '../images/brand6.png'


function Clients() {
 
  const client=[
    {
      id:1,
      image:brand1
    },
    {
      id:2,
      image:brand6
    },
    {
      id:3,
      image:brand3
    },
    {
      id:4,
      image:brand4
    },
    {
      id:5,
      image:brand2
    },
    {
      id:6,
      image:brand4
    },
    {
      id:7,
      image:brand6
    },
    {
      id:8,
      image:brand2
    },
    {
      id:9,
      image:brand5
    }
  ]
   
  return (
    <>
    <div  className='px-1 flex flex-wrap justify-center items-center'>
      
      {
        client.map( item => {
            return <div key={item.id}  className='p-10  mt-6     '>
              <div className=' '>
                <img src={item.image} className='opacity-[.6] dark:invert hover:opacity-100 hover:scale-110   ease-in-out duration-200 delay-75 '/>
              </div>
            </div>
        })
      }
    </div>
    </>
  )
}

export default Clients;