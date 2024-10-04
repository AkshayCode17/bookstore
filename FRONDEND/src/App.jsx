import React from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import Navbar from './Components/Navbar'
import MiddleCard from './Components/MiddleCard'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SampleCarousel from './Components/BookCarousal';
import Footer from './Components/Footer';


const App = () => {
  return (
    <div>
       <Navbar/>
     <MiddleCard/> 
    <SampleCarousel/>
      <Footer/> 

    </div>
  )
}

export default App
