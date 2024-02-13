import React from 'react'
import { Link } from 'react-router-dom'
import { formatPrice } from '../utils'

const Card = ({ id, src, title, price }) => {

  return (
    <Link key={id} to={`/products/${id}`} className="card w-full shadow-xl hover:shadow-2xl hover:scale-105 transition duration-300">
        <figure className="px-4 pt-4">
            <img src={src} alt={title} className="rounded-xl h-64 md:h-48 w-full object-cover" />
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title capitalize tracking-wider">
                {title}
            </h2>
            <span className="text-gray-700"> 
                {formatPrice(price)}
            </span>
        </div>
    </Link>
  )
}

export default Card