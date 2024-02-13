import React from 'react'
import Card from './Card'
import { useMainContext } from '../context/main_context'

const FeaturedProducts = () => {
  const {featuredProducts} = useMainContext()

  return (
    <section className='py-10 lg:py-14 '>
      <div>
        <h1 className='text-xl lg:text-2xl xl:text-3xl font-medium'>Featured Products</h1>
        <div className='w-full mt-2 mb-4 lg:mb-6 h-[2px] bg-black' />
        <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((item) => {
            const { id, attributes } = item
            const { price, image, title } = attributes

            return (
              <Card key={id} id={id} title={title} price={price} src={image} />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts