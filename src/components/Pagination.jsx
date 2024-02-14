import { useLocation, useNavigate } from "react-router-dom"
import { useMainContext } from "../context/main_context"
import { useEffect } from "react"


const Pagination = () => {
    const { meta, fetchAllProducts } = useMainContext()
    
    const page = meta?.pagination?.page
    const pageCount = meta?.pagination?.pageCount
    
    const pages = Array.from({ length: pageCount }, (_, index) => {
        return index + 1
    })
    
    const {search, pathname} = useLocation()
    const navigate = useNavigate()


    const handlePageChange = (pageNumber) => {
        const searchParams = new URLSearchParams(search)
        searchParams.set('page', pageNumber)
        navigate(`${pathname}?${searchParams.toString()}`)
            fetchAllProducts(`${pathname}?${searchParams.toString()}`)
    }

    if (pages < 2) return null


  return (
    <div className='flex justify-end items-center mt-10'>
          <div className="join">
              <button
                  type='button'
                  className='bg-gray-700 transition duration-200 hover:bg-gray-500 btn-sm lg:btn-md btn-primary join-item'
                  onClick={() => {
                      let prevPage = page - 1
                      if (prevPage < 1)  prevPage = pageCount
                     handlePageChange(prevPage)
                  }}
              >
                  Prev
              </button>
              {pages.map((pageNumber) => {
                  return (
                      <button
                          key={pageNumber}
                    type='button'
                    className={
                        `bg-gray-700 transition duration-200 hover:bg-gray-500 btn-sm lg:btn-md btn-primary join-item ${pageNumber === page ? 'bg-gray-500' : ''}`
                    }
                    onClick={() => {
                      handlePageChange(pageNumber)
                    }}
                >
                    {pageNumber}
                </button>
                  )
              })}
              <button
                  type='button'
                  className='bg-gray-700 transition duration-200 hover:bg-gray-500 btn-sm lg:btn-md btn-primary join-item'
                  onClick={() => {
                    let nextPage = page + 1
                    if (nextPage > pageCount)  nextPage = 1
                   handlePageChange(nextPage)
                  }}
              >
                  Next
              </button>
          </div>
        </div>
  )
}

export default Pagination