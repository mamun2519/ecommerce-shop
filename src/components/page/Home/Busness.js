import React from 'react';
import CountUp from 'react-countup';
import { AiFillDollarCircle } from 'react-icons/ai';
// import {MdProductionQuantityLimits } from 'react-icons/md';
import { ImManWoman } from 'react-icons/im';
import {  IoIosPeople } from 'react-icons/io';
import { MdProductionQuantityLimits } from 'react-icons/md';
const Busness = () => {
      return (
            <div
            data-aos="fade-up"
     data-aos-duration="3000"
            
            className='max-w-7xl m-auto px-3'>
                   <h1 className='text-xl ptext'>OUR SATICFAY CUSTOMER</h1>
                  <div className="sumarry-counter grid grid-cols-1 lg:grid-cols-4 gap-5">
                        <div class="card  shadow-sm border bg-white mt-3">
                              <div class="car p-5 text-center">
                                    <div className=''>
                                          <div className='inline-block'>
                                          <small className='text-3xl'>< MdProductionQuantityLimits className='text-[#EC255A]' /></small>
                                          </div>

                                          <p className='text-2xl  font-bold'>
                                                <CountUp delay={5} start={0} end={600} /> +
                                          </p>
                                          <p className='text-xl ptext'>Our Product</p>
                                    </div>
                              </div>
                        </div>
                        <div class="card shadow-sm border bg-white mt-3">
                              <div class="card-bod  p-5">
                                    <div className='text-center'>
                                          <small className='text-center inline-block text-3xl'>< AiFillDollarCircle className='text-[#062C30]' /></small>

                                          <p className='text-2xl font-bold'>
                                                <CountUp delay={2} start={0} end={4000} />M 
                                          </p>
                                          <p className='text-xl ptext'>Our Sales (for Year)</p>
                                    </div>
                              </div>
                        </div>
                        <div class="card shadow-sm border bg-white mt-3">
                              <div class="card-bod  p-5">
                                    <div className='text-center'>
                                          <small className='text-center text-3xl inline-block'>< IoIosPeople className='text-[#EC255A]' /></small>

                                          <p className='text-2xl  font-bold'>
                                                <CountUp delay={5} start={0} end={33} />K
                                          </p>
                                          <p className='text-xl ptext'> Reviews</p>
                                    </div>
                              </div>
                        </div>
                        <div class="card shadow-sm border bg-white mt-3">
                              <div class="card-bod  p-5">
                                    <div className='text-center'>
                                          <small className='text-center text-3xl inline-block'><ImManWoman className='text-[#062C30]' /></small>

                                          <p className='text-2xl  font-bold'>
                                                <CountUp delay={5} start={0} end={123} />
                                          </p>
                                          <p className='text-xl ptext'>Happy Customer</p>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Busness;