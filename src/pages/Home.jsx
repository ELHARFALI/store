import {FeaturedProducts, Hero} from "../components"

const Home = () => {
  return (
    <main className='w-full h-full'>
      <div className=' main-width px-4 lg:px-2 2xl:px-0'>
        <Hero />
        <FeaturedProducts />
      </div>
    </main>
  )
}

export default Home