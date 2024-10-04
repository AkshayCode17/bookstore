import { Box } from '@chakra-ui/react';
import React from 'react';
import Slider from 'react-slick';
import '../sliderCustom.css'

const SampleCarousel = () => {
  const settings = {
    dots: true, // Show dots below the slides
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 3, // Number of slides to show
    slidesToScroll: 1, // Number of slides to scroll
    autoplay:true,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };

  return (
   <div id = "carousel"  >
     <Slider {...settings} backgroundColor="orange" >
      <div  >
        <img src = "https://akshargranth.in/cdn/shop/files/Ramayana.jpg?v=1704870685" ></img>
      </div>
      <div  >
        <img src = "https://m.media-amazon.com/images/I/71OUdZrzQdL._AC_UF1000,1000_QL80_.jpg" ></img>
      </div>
      <div  >
        <img src = "https://img.etimg.com/photo/msid-99107682,imgsize-41620/DiscoveryofIndia.jpg" ></img>
      </div>
      <div  >
        <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg_hWXCq3_mDVaOPr2h6Gr5V9YsAa8flrq2pfgwcEVbwEAgzWxb2NFubygmP4ZEeSmIzI&usqp=CAU" ></img>
      </div>
      <div  >
        <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy1ZC1JV0gMwEPijwwElrNKZTspRLZyirkkHGjX2ipYvLg3caDaB7uKwplhoDqbowRJkw&usqp=CAU" ></img>
      </div>
      <div  >
        <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSesuWhlZcHHiuFpMp0_L4AuDSQjRRNbc6OYQ&s" ></img>
      </div>
    </Slider>
   </div>
  );
};

export default SampleCarousel;
