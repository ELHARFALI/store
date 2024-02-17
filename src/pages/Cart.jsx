import React, { useState } from 'react'
import { useSingleProductContext } from '../context/singleProduct_context'
import { amountInput, formatPrice } from '../utils'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cartProduct, subtotal, shipping, tax, orderTotal } = useSingleProductContext()

    
    if (cartProduct.length < 1) {
        return (
            <main className='min-h-[calc(100vh-106px)] w-full flex justify-center items-center flex-col'>
                <h1 className='text-3xl md:text-4xl lg:text-5xl mb-6'>Your cart is empty!</h1>
                <Link to='/products' className='btn btn-neutral'>
                    Our Products
                </Link>
            </main>
        )
    }

  return (
      <main className='w-full h-full py-10 lg:py-2 min-h-[calc(100vh-106px)]'>
          <div className="main-width px-4 lg:px-2 xl:px-0">
            <h1 className='text-xl lg:text-2xl xl:text-3xl font-medium mt-4 lg:mt-10'>Shopping Cart</h1>
              <div className='w-full mt-3 mb-4 lg:mb-6 h-[2px] bg-black' />
              <div className='grid gap-x-2 gap-y-8 lg:grid-cols-3 mt-10'>
                  <div className='col-span-2 grid gap-y-4'>
                      {cartProduct.map((item) => {
                          const { id, title, image, company, price, color, amount } = item

                          return (
                              <div key={id} className='grid grid-cols-2 md:grid-cols-4 border-b-[1px] pb-4 border-gray-300'>
                                  <img src={image} alt={title} className='w-44   h-44 object-cover rounded-xl col-span-1 mr-2' />
                                  <div className='md:col-span-3 grid md:grid-cols-3'>
                                  <div className='mt-3'>
                                      <h3 className=' font-semibold text-xl lg:text-2xl w-full md:max-w-32 mb-1'>{title}</h3>
                                      <h4 className='text-lg text-gray-500 font-medium mb-2'>{company}</h4>
                                      <div className='flex items-center gap-x-2'>
                                          <p className='text-lg'>Color :</p>
                                          <span style={{backgroundColor: color}} className='w-4 h-4 rounded-full'></span>
                                      </div>
                                  </div>
                                  <div>
                                      <label className='text-lg text-center'>Amount :</label>
                                      {/* <select value={amountChange} onChange={() => console.log('change)} className="select select-bordered w-sm select-xs focus:outline-none">
                                          {amountInput.map((a) => {
                                              return (
                                                  <option key={a}>
                                                      {a}
                                                  </option>
                                              )
                                          })}
                                      </select> */}
                                  </div>
                                  <div>
                                      <h1 className='text-lg md:text-xl lg:text-2xl font-medium'>{formatPrice(price)}</h1>
                                  </div>
                                  </div>
                              </div>
                          )
                      })}
                  </div>
                  <div className='col-span-2 lg:col-span-1 flex flex-col'>
                      <div className='border-b-[1px] border-black flex justify-between items-center px-1 pb-1'>
                          <h4 className='text-lg'>Subtotal</h4>
                          <p className='text-lg font-medium'>{formatPrice(subtotal)}</p>
                      </div>
                      <div className='border-b-[1px] border-black flex justify-between items-center px-1 pb-1 mt-3'>
                          <h4 className='text-lg'>Shipping</h4>
                          <p className='text-lg font-medium'>{formatPrice(shipping)}</p>
                      </div>
                      <div className='border-b-[1px] border-black flex justify-between items-center px-1 pb-1 mt-3'>
                          <h4 className='text-lg'>Tax</h4>
                          <p className='text-lg font-medium'>{formatPrice(tax)}</p>
                      </div>
                      <div className='mt-6 flex justify-between items-center px-1 '>
                          <h4 className='text-xl'>Subtotal</h4>
                          <p className='text-xl font-medium'>{formatPrice(subtotal)}</p>
                      </div>
                      <div className='mt-6 flex justify-center items-center'>
                          <button type='button' className='btn'>
                              Please login
                          </button>
                      </div>
                  </div>
              </div>
          </div>
    </main>
  )
}

export default Cart