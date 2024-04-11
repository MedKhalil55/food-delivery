import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'


const Home = () => {

    const [Category,SetCategory] = useState("All");

  return (
    <div>
      <Header/>
      <ExploreMenu category={Category} SetCategory={SetCategory} />
    </div>
  )
}

export default Home
