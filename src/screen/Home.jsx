import React from 'react'
import Header from '../components/Header'
import HomeLeft from '../components/HomeLeft'
import HomeRight from '../components/HomeRight'
import "./Home.css"
const Home = () => {
  return (
    <div>
      <Header/>
      <div className="home_display">
        <HomeLeft/>
        <HomeRight/>
      </div>
    </div>
  )
}

export default Home
