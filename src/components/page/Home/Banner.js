import React from 'react';
import { BsSearch } from 'react-icons/bs';
const Banner = () => {
      return (
            <div className='banner  flex justify-center items-center '>
              <div className='relative text-center'>
                <div>
                <h1 className='lg:text-5xl text-3xl text-white mb-2 font-medium'>New Feshion Collection</h1>
                <p className='text-2xl text-white mb-2'>Sales Offer</p>
                </div>
                <input className='h-14 w-[325px] lg:w-[450px] search outline-none rounded-lg px-4 ' placeholder='Search Your Product'  type="text" name="" id="" />
              <button className='h-12 mt-1 bg-red-500 px-4 text-white rounded-lg absolute left-[260px] lg:left-[602px]'>Search</button>
              
                <div>
                <p className='text-white mt-2 text-xl px-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, officiis enim sunt eos ullam tempore.</p>
               
                </div>
              </div>
             
            </div>
      );
};

export default Banner;