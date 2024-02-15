import React from 'react'
import team1 from '../images/team1.jpg'
import team2 from '../images/team2.jpg'
import team3 from '../images/team3.jpg'
import team4 from '../images/team4.jpg'
import team5 from '../images/team5.jpg'
import team6 from '../images/team6.jpg'
function OurTeam() {

  const team = [
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
      <h2 className="text-[60px] font-bold"><span>Skilled Team</span></h2>
      <p className="text-[20px] text-gray-500" >There are many variations of passages of Lorem Ipsum available,
        <br /> but the majority have suffered alteration.</p>

      <div className='grid grid-cols-1 px-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
      {
            team.map((item) => {
              return (
                <div className='px-5 relative  ease-in-out duration-300 delay-75' key={item.id}>
                  <div className='relative mt-5'>
                    <img src={item.icon} className='rounded-lg' />
                    <div className='absolute px-5   h-full w-full z-10 hover:bg-red-700 rounded-lg opacity-50 top-0 left-0 '>
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

      </div>
       
    </>
  )
}

export default OurTeam;