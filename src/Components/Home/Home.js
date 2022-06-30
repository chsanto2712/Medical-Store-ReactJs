import React from 'react'
import Offers from '../Offers/Offers'
import TrendingToday from '../Trending Today/TrendingToday'
import ShopByCategory from '../Shop By Category/ShopByCategory'
import TopBrands from '../Top Brands/TopBrands'
import NewArrivals from '../New Arrivals/NewArrivals'
import Carousel from '../Carousel/Carousel'
function Home() {
  return (
    <div>       
        <Carousel />
        <div className='container-fluid'>
            <Offers />
            <TrendingToday />
            <ShopByCategory />
            <NewArrivals />
            <TopBrands />
        </div>
    </div>
  )
}

export default Home