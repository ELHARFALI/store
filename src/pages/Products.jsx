import React from 'react'
import { Card, Filters } from '../components'
import { useMainContext } from '../context/main_context'

const Products = () => {
  const {all_products} = useMainContext()

  return (
    <main className='w-full h-full py-8 lg:py-10'>
      <div className='main-width px-4 lg:px-2 2xl:px-0'>
        <Filters />
        <div className='my-6 lg:my-10 h-[1px] bg-black w-full' />
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
          {all_products.map((item) => {
            const { id, attributes } = item
            const { price, image, title } = attributes

            return (
              <Card id={id} key={id} price={price} src={image} title={title} />
            )
          })}
        </div>
        <div className='flex justify-end items-center mt-8'>
          <button type='button' className='bg-gray-700 transition duration-200 hover:bg-gray-500 btn-sm lg:btn-md btn-primary rounded-tl-md rounded-bl-md'>prev</button>
          <button type='button' className='bg-gray-700 transition duration-200 hover:bg-gray-500 btn-sm lg:btn-md btn-primary'>1</button>
          <button type='button' className='bg-gray-700 transition duration-200 hover:bg-gray-500 btn-sm lg:btn-md btn-primary'>2</button>
          <button type='button' className='bg-gray-700 transition duration-200 hover:bg-gray-500 btn-sm lg:btn-md btn-primary'>3</button>
          <button type='button' className='bg-gray-700 transition duration-200 hover:bg-gray-500 btn-sm lg:btn-md btn-primary rounded-tr-md rounded-br-md'>next</button>
        </div>
      </div>
    </main>
  )
}

export default Products