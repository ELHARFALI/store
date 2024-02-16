import { useParams } from "react-router-dom"
import { useMainContext } from "../context/main_context"
import { useEffect, useState } from "react"
import { formatPrice, amountInput } from "../utils"
import { useSingleProductContext } from "../context/singleProduct_context"

const SingleProduct = () => {
  const {fetchSingleProduct, single_product, isLoading} = useMainContext()
  const { id } = useParams()
  const {addProduct} = useSingleProductContext()
  
  
  useEffect(() => {
    fetchSingleProduct(id)
  }, [id])
  
  const attributes = single_product?.attributes

  const [currentColor, setCurrentColor] = useState(attributes?.colors[0] || null)
  const [amount, setAmount] = useState(1)

  console.log(amount);

  const handleColor = (e) => {
    setCurrentColor(e.target.value)
  }

  
  const handleAmount = (e) => {
    setAmount(parseInt(e.target.value))
  }

  if (isLoading) {
    return (
      <main className="w-full h-[calc(100vh-106px)] flex justify-center">
          <span className="loading loading-spinner loading-lg"></span>
      </main>
    )
  }
  
  return (
    <main className="w-full h-full">
      <div className="main-width px-4 md:px-2 2xl:px-0 flex justify-center items-center min-h-[calc(100vh-106px)] py-8 lg:py-0">
        <div className='grid grid-cols-1 lg:grid-cols-2 place-content-center gap-8'>
          <div className="flex justify-center items-center">
              <img src={attributes?.image} alt={attributes?.title} className="w-96 h-96 object-cover rounded-xl " />
          </div>
          <div className="">
            <h1 className=" text-2xl lg:text-4xl capitalize font-semibold">{attributes?.title}</h1>
            <h3 className="text-gray-400 text-xl lg:text-2xl font-medium mt-2">{attributes?.company}</h3>
            <p className="text-lg text-gray-700 mt-3">{formatPrice(attributes?.price)}</p>
            <p className="max-w-[550px] mt-4 text-lg">
              {attributes?.description}
            </p>
            <div className="mt-3">
              <h4 className="text-lg lg:text-xl font-medium mb-2">Colors:</h4>
              <div className="flex gap-x-2">
                {attributes?.colors.map((color) => {

                  return (
                    <button type="button" value={color} key={color} onClick={(e) => handleColor(e)} style={{ backgroundColor: color }} className={`
                    w-5 h-5 lg:w-6 lg:h-6 rounded-full
                    ${currentColor === color ? 'border-[1px] border-black' : ''}
                    `}>
                    </button>
                  )
                })}
              </div>
              <h4 className="text-lg lg:text-xl font-medium my-2">Amount:</h4>
              <select value={amount} onChange={handleAmount} className="select select-bordered w-full max-w-sm select-md"  >
                {amountInput.map((item) => {
                  return (
                    
                      <option key={item} value={item} >{item}</option>
                  )
                })}
              </select>
              <div className="mt-5">
                <button
                  type="button"
                  className="btn btn-active bg-gray-800 text-white btn-md px-6 hover:bg-gray-600  text-lg"
                  onClick={() => addProduct(id, attributes?.title, amount, attributes?.price, attributes?.company, currentColor )}
                >
                  Add To Bag
                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default SingleProduct