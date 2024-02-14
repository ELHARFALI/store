import React from 'react'

const About = () => {
  return (
    <main className='min-h-[calc(100vh-106px)] bg-[#FFF7F1]'>
      <div className="main-width px-4 xl:px-2 min-h-[calc(100vh-106px)] 2xl:px-0 flex justify-center items-center ">
        <div className=' flex justify-center items-center flex-col'>
          <h1 className='text-3xl font-semibold md:text-4xl lg:text-5xl xl:text-6xl'>We Love <span className='px-3 lg:px-5 py-1 bg-blue-500 text-white rounded-lg'>Comfy</span></h1>
          <p className='text-center mt-6 lg:mt-10 text-lg text-gray-500  xl:max-w-[750px]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem totam exercitationem numquam dolor recusandae earum voluptatibus aperiam accusamus nemo eveniet nesciunt eaque commodi quis facilis modi possimus hic, doloribus iure iusto veniam sunt eligendi. Beatae?
          </p>
        </div>
      </div>
    </main>
  )
}

export default About