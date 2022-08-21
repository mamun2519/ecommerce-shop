import React from 'react';
// import logo1 from '../../../../Assist/picture/trendz-clothing.jpg'
// import logo2 from '../../../../Assist/picture/textmatpng.png'
// import logo3 from '../../../../Assist/picture/text.png'
// import logo4 from '../../../../Assist/picture/Richman.png'
// import logo5 from '../../../../Assist/picture/darazbaji.png'
// import logo6 from '../../../../Assist/picture/arong.png'

const Barnd = () => {
      return (
            <div
            data-aos="zoom-in-right"
            data-aos-duration="3000"
            
            className='my-40 max-w-7xl m-auto px-3 '>
                  <h1 className='text-xl my-5 ptext'>Our Top Sales Brand</h1>
                  <div className='grid lg:grid-cols-6 grid-cols-3 '>

                  <div className='border h-28'>
                       <img src='/Assist/picture/trendz-clothing1.jpg'
                       className=' h-[110px] w-full' 
                        alt="" /> 
                  </div>
                  <div className='border h-28'>
                  <img src='/Assist/picture/textmatpng.png'
                  className=' h-[110px] w-full' 
                   alt="" /> 
                  </div>
                  <div className='border h-28'>
                  <img src='/Assist/picture/text1.jpg' alt="" /> 
                  </div>
                  <div className='border h-28'>
                  <img src='/Assist/picture/Richman.png' alt="" /> 
                  </div>
                  <div className='border h-28'>
                  <img src='/Assist/picture/darazbaji2.jpg' 
                  className=' h-[110px] w-full' 
                     alt="" /> 
                  </div>
                  <div className='border h-28'>
                  <img src='/Assist/picture/arong.jpg' className=' h-[110px] w-full' alt="" /> 
                  </div>

                  </div>
                  
            </div>
      );
};

export default Barnd;