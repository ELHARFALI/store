import React from 'react'
import { Card, Filters, Pagination } from '../components'
import { useMainContext } from '../context/main_context'

const Products = () => {
  const { all_products, isLoading } = useMainContext()
  

  if (isLoading) {
    return (
      <main className="w-full h-[calc(100vh-106px)] flex justify-center">
          <span className="loading loading-spinner loading-lg"></span>
      </main>
    )
  }

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
        <Pagination />
      </div>
    </main>
  )
}

export default Products