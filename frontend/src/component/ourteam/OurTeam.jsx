import React from 'react'

function OurTeam() {

  const team = [
    {
      id:1,
      icon:"",
      name: "Jone Due",
      post:"Web Developer"
    },
    {
      id:2,
      icon:"",
      name: "Jone Due",
      post:"Web Developer"
    },
    {
      id:3,
      icon:"",
      name: "Jone Due",
      post:"Web Developer"
    },
    {
      id:4,
      icon:"",
      name: "Jone Due",
      post:"Web Developer"
    },
    {
      id:5,
      icon:"",
      name: "Jone Due",
      post:"Web Developer"
    },
    {
      id:6,
      icon:"",
      name: "Jone Due",
      post:"Web Developer"
    },
   
  ]
  return (
   <>
    <h2 className="text-[80px] font-bold"><span>Skilled Team</span></h2>
      <p className="text-[20px] text-gray-500" >There are many variations of passages of Lorem Ipsum available,
      <br /> but the majority have suffered alteration.</p>

      <div  className='grid grid-cols-1 px-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
      {
        team.map( item => {
            return <div key={item.id}  className='p-10 rounded mt-6 border bg-gray-400   dark:bg-gray-700 '>
              <p className='text-[60px] mb-4'>{item.icon}</p>
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