import React from 'react'

const Home = () => {
  return (
    <div name="home" className='w-full h-screen bg-black'>

    <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
    <p className='text-blue-300'>Hi, my name is</p>

    <h1 className='text-4xl sm:text-7xl font-bold text-white'>Somowho Fortune</h1>

    <h2 className='text-4xl sm:text-7xl font-bold text-blue-300'>I'm a Full Stack Developer</h2>




    <p className='text-white py-4 max-w-[700px]'>
          I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>

    
    <div>
    <button className='text-white group border-0 px-6 py-3 my-2 flex items-center bg-blue-500  hover:bg-blue-600 hover:border-blue-600'>
      View Projects   


    </button>
    </div>


    </div>
    </div>
  )
}

export default Home