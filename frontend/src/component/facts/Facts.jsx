import React from 'react'
import CountUp from 'react-countup';

function Facts() {

  const fact = [
    {
      id: 1,
      icon: "400",
      content: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those."
    },
    {
      id: 2,
      icon: "600",
      content: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those."
    },
    {
      id: 3,
      icon: "800",
      content: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those."
    }
  ]
  return (
    <>
      <div className='text-center'>
        <h6 className="text-[20px]  text-red-500" >Our Fun Facts</h6>
        <h2 className="text-[50px] font-bold p-1" >Completed 1200+ Projects<br /> Successfully.</h2>
      </div>

      <div className='grid grid-cols-1 px-3 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {
          fact.map(item => {
            return <div key={item.id} className='p-10 rounded-xl group dark:bg-gray-700'>
              <p className='text-[60px] mb-4  font-bold text-red-600'>
                <CountUp start={100}
                  end={item.icon}
                  duration={1}
                  enableScrollSpy={true}
                  delay={2} />+
              </p>
              <p className='text-xl text-gray-500 dark:text-white'>{item.content}</p>
            </div>
          })
        }
      </div>
    </>
  )
}

export default Facts;