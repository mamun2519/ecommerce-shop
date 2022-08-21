import React from 'react';
import CountUp from 'react-countup';
import { BsFillFlagFill } from 'react-icons/bs';
import { AiFillCustomerService } from 'react-icons/ai';
import { SiBitcoincash } from 'react-icons/si';
import {  IoIosPeople } from 'react-icons/io';
import { MdProductionQuantityLimits } from 'react-icons/md';
const Busness = () => {
      return (
            <div
            data-aos="fade-up"
     data-aos-duration="3000"
            
            className='my-20 max-w-7xl m-auto px-3'>
                   <h1 className='text-xl ptext'>Milions Business Trust Us</h1>
                  <div className="sumarry-counter grid grid-cols-1 lg:grid-cols-4 gap-5">
                        <div class="card  shadow-sm border bg-white mt-3">
                              <div class="card-body text-center">
                                    <div className=''>
                                          <div className=' inline-block'>
                                          <small className=' text-4xl'>< AiFillCustomerService className='text-blue-800' /></small>
                                          </div>

                                          <p className='text-3xl  font-bold'>
                                                <CountUp delay={5} start={0} end={670} />
                                          </p>
                                          <p className='text-xl ptext'>served customers</p>
                                    </div>
                              </div>
                        </div>
                        <div class="card shadow-sm border bg-white mt-3">
                              <div class="card-body">
                                    <div className='text-center'>
                                          <small className='text-center inline-block text-4xl'>< SiBitcoincash className='text-red-400' /></small>

                                          <p className='text-3xl font-bold'>
                                                <CountUp delay={2} start={0} end={120} />M
                                          </p>
                                          <p className='text-xl ptext'>Annual revenue</p>
                                    </div>
                              </div>
                        </div>
                        <div class="card shadow-sm border bg-white mt-3">
                              <div class="card-body">
                                    <div className='text-center'>
                                          <small className='text-center text-4xl inline-block'>< IoIosPeople className='text-blue-800' /></small>

                                          <p className='text-3xl  font-bold'>
                                                <CountUp delay={5} start={0} end={33} />K
                                          </p>
                                          <p className='text-xl ptext'> Reviews</p>
                                    </div>
                              </div>
                        </div>
                        <div class="card shadow-sm border bg-white mt-3">
                              <div class="card-body">
                                    <div className='text-center'>
                                          <small className='text-center text-4xl inline-block'>< MdProductionQuantityLimits className='text-red-400' /></small>

                                          <p className='text-3xl  font-bold'>
                                                <CountUp delay={5} start={0} end={123} />
                                          </p>
                                          <p className='text-xl ptext'>Tools</p>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Busness;