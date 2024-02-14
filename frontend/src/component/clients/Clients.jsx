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
      image:brand2
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
      image:brand5
    },
    {
      id:6,
      image:brand6
    }
  ]
   
  return (
    <>
    <div  className='grid grid-cols-1 px-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
      {
        client.map( item => {
            return <div key={item.id}  className='p-10 rounded mt-6 bg-white-100   dark:bg-gray-700 '>
              <div className='hover:scale-125'>
                <img src={item.image}/>
              </div>
            </div>
        })
      }
    </div>
    </>
  )
}

export default Clients;