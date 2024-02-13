import React from 'react'
import { Link } from 'react-router-dom'
import { heroImages } from '../utils/data'

const Hero = () => {
  return (
    <section className='grid lg:grid-cols-2 gap-x-6 items-center py-36 lg:py-0  lg:h-[calc(100vh-106px)]'>
      <div className=''>
        <h1 className='font-semibold mb-4 text-4xl lg:text-5xl xl:text-6xl'>We are changing the way people shop</h1>
        <p className='text-lg text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quia aspernatur doloribus incidunt sunt fugit, ex earum deleniti natus quae iusto recusandae facere beatae nihil.</p>
        <div className='mt-10'>
          <Link to='/products' className='btn btn-md btn-outline'>
            OUR PRODUCTS
          </Link>
        </div>
      </div>
      <div>
        <div className="lg:carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box hidden ">
          {heroImages.map((img) => {
            const { id, alt, src } = img
            return (
              <div className="carousel-item" key={id}>
                <img src={src} alt={alt} className='rounded-box h-full w-80 object-cover' />
              </div> 
            )
          })}
          
        </div>
      </div>
    </section>
  )
}

export default Hero