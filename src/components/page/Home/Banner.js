import React, { useState } from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useNavigate } from "react-router-dom";
const Banner = () => {
const navigate = useNavigate()

  return (
    <div  className=" ">
      <Carousel >
                <div onClick={()=>navigate('/view/all/product')}>
                    <img src="/Assist/picture/banner18.png" />
                  
                </div>
                <div onClick={()=>navigate('/view/all/product')}>
                <img src="/Assist/picture/banner16.png" />
                   
                </div>
                <div onClick={()=>navigate('/view/all/product')}>
                <img src="/Assist/picture/banner15.png" />
                 
                </div>
                <div onClick={()=>navigate('/view/all/product')}>
                <img src="/Assist/picture/banner19.png" />
                   
                </div>
                <div onClick={()=>navigate('/view/all/product')}>
                <img src="/Assist/picture/banner17.png" />
                   
                </div>
                
            </Carousel>
    </div>
  );
};

export default Banner;
