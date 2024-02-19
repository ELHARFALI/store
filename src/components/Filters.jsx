import React from 'react'

const Filters = () => {
  return (
    <div className='p-3 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-5'>
      <label className='form-control w-sm'>
        <div className="label">
          <span className="label-text text-lg">
            Search products
          </span>
        </div>
        <input type="search" name="search" placeholder='search...' className='input input-bordered w-sm focus:outline-none' />
      </label>
      <label className='form-control w-sm'>
        <div className="label">
          <span className="label-text text-lg">
            Select Category
          </span>
        </div>
        <select name="category" className='select select-bordered w-sm' >
          <option disabled selected>all</option>
        </select>
      </label>
      <label className='form-control w-sm'>
        <div className="label">
          <span className="label-text text-lg">
            Select company
          </span>
        </div>
        <select name="company" className='select select-bordered w-sm' >
          <option disabled selected>all</option>
        </select>
      </label>
      <label className='form-control w-sm'>
        <div className="label">
          <span className="label-text text-lg">
            Sort by
          </span>
        </div>
        <select name="category" className='select select-bordered w-sm' >
          <option disabled selected>a-z</option>
        </select>
      </label>
      <label className='form-control w-sm'>
        <div className="label">
          <span className="label-text text-lg">
            Select price
          </span>
          <span className='label-text-alt text-lg'>
            $1000
          </span>
        </div>
        <input type="range" min={0} max={100} value={40} step={10} className='range range-accent' />
        <div className="label">
        <span className='label-text-alt text-lg font-medium'>
            0
          </span>
          <span className='label-text-alt text-lg font-medium'>
            Max: $1000
          </span>
        </div>
      </label>
      <label className='form-control w-sm'>
        <div className="label flex justify-center items-center flex-col">
          <span className='label-text text-lg mb-2'>Free Shipping</span>
          <input type="radio" name="radio" className="radio radio-accent" />
        </div>
      </label>
      <div className="flex justify-center items-center">
        <button className='btn w-full btn-accent text-lg text-white' type='submit'>
          Search 
          </button>
      </div>
      <div className="flex justify-center items-center">
        <button className='btn w-full btn-neutral text-lg text-white' type='submit'>
          Reset 
          </button>
      </div>
    </div>
  )
}

export default Filters