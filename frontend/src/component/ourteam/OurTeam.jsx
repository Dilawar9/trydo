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
      id:1,
      icon:team1,
      name: "Jone Due",
      post:"Web Developer"
    },
    {
      id:2,
      icon:team2,
      name: "Jone Due",
      post:"Web Developer"
    },
    {
      id:3,
      icon:team3,
      name: "Jone Due",
      post:"Web Developer"
    },
    {
      id:4,
      icon:team4,
      name: "Jone Due",
      post:"Web Developer"
    },
    {
      id:5,
      icon:team5,
      name: "Jone Due",
      post:"Web Developer"
    },
    {
      id:6,
      icon:team6,
      name: "Jone Due",
      post:"Web Developer"
    },
   
  ]
  return (
   <>
    <h2 className="text-[60px] font-bold"><span>Skilled Team</span></h2>
      <p className="text-[20px] text-gray-500" >There are many variations of passages of Lorem Ipsum available,
      <br /> but the majority have suffered alteration.</p>

      <div  className='grid grid-cols-1 px-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
      {
        team.map( item => {
            return <div key={item.id}  className='p-10 rounded mt-6 border bg-gray-400   dark:bg-gray-700 '>
              <div className=' hover:scale-125'>
                <img src={item.icon}/>
              </div>
              <p className='text-[60px] mb-4'></p>
              <h3 className='text-2xl mb-4 font-bold'>{item.name}</h3>
              <p className='text-xl text-gray-500 dark:text-white'>{item.post}</p>
            </div>
        })
      }
    </div>
   </>
  )
}

export default OurTeam;