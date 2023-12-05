import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-black text-white'>

    <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
    
    <div className='sm:text-right pb-8 pl-4'>
    <p className='text-4xl font-bold inline border-b-4 border-blue-600'>About</p>
    </div>
    <div></div>
    </div>    




    <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 lg:ml-36'>
            <div className='sm:text-right text-2xl font-bold'>
              <p>Hi. I'm Somowho Fortune, nice to meet you. Please take a look at my webpage.</p>
            </div>

            <div>
              <p>I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. What would you do if you had
              a software expert available at your fingertips?</p>  
            </div>
          </div>


    </div>
  )
}

export default About