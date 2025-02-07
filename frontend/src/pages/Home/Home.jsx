import React from 'react'
import Banner from './Banner'
import TopSeller from './TopSeller'
import Recommend from './Recommend'
import { useState } from 'react'
import News from './News'

const Home = () => {
  const [sharedData, setSharedData] = useState("Hello from Component A!");
  return (
    <div>
    <Banner/>
    <TopSeller  setSharedData={setSharedData}/>
    <Recommend sharedData={sharedData}/>
    <News sharedData={sharedData}/>

    </div>
  )
}

export default Home
