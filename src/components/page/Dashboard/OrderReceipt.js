import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const OrderReceipt = () => {
      const [user] = useAuthState(auth)
      return (
            <div className='mb-40'>
                  <div className='border rounded-md shadow-md relative  w-9/12 mx-auto '>
                   <div className='my-20 px-8 '>
                   <div className=' w-44 absolute top-0  right-10'>
                        <img src="/Assist/picture/paid1.png" alt="" />
                   </div>
                        <h1 className='text-2xl font-medium'>Your Order Confirmed!</h1>

                        <p className=' font-medium mt-5'>Hellow {user?.displayName},</p>
                        <p className=''>Your order Has been confirmed and will be shipping next to days.</p>
                       
                        <div className=' border-t border-b h-24 mt-6'>
                              <div className=' grid  grid-cols-4'>
                                    <div className='py-5'>
                                          <h1>Order Date</h1>
                                          <span>12/33/200</span>
                                    </div>
                                    <div className='py-5'>
                                          <h1>Order No</h1>
                                          <span>838783634</span>
                                    </div>
                                    <div className='py-5'>
                                          <h1>Payment</h1>
                                          <span>Card</span>
                                    </div>
                                    <div className='py-5'>
                                          <h1>Shipping Address</h1>
                                          <span>Chittagong,Bangladesh</span>
                                    </div>
                                    
                              
                              </div>

                        </div>

                        <div>
                        <div class="overflow-x-auto my-5">
                      <table class="table-auto w-full">
                        <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                          <tr className="">
                            <th>Picture</th>
                            <th class="p-2">
                              <div class="font-semibold text-left">
                                Product Name
                              </div>
                            </th>
                            <th class="p-2">
                              <div class="font-semibold text-left">
                                Quantity
                              </div>
                            </th>
                            <th class="p-2">
                              <div class="font-semibold text-left">Price</div>
                            </th>
                            
                          
                          </tr>
                        </thead>

                        <tbody class="text-sm divide-y divide-gray-100">
                        <tr >
            <td class="p-2 ">
              <div class="avatar ">
                <div class="w-16 rounded-xl">
                  <img src="" />
                </div>
              </div>
            </td>
            <td class="p-2 ">
              <div class="font-medium text-gray-800 ">
                xxxxd
              </div>
            </td>
            <td class="p-2">
              <div class="text-left">xxxx</div>
            </td>
            <td class="p-2">
              <div class="text-left font-medium text-green-500">
                xxxx
              </div>
            </td>
            
           
          </tr>
                         

                         
                        </tbody>
                      </table>
                    </div>
                        </div>

                        <div className='border-t'>
                              <div className='mt-2  grid grid-cols-2'>
                                    <div></div>
                                    <div>
                                          <div className=' grid grid-cols-2'>
                                          <p>SubTotal</p>
                                          <span className='text-center'>6666 BDT</span>
                                          </div>
                                          <div className=' grid grid-cols-2'>
                                          <p >Shipping Fee</p>
                                          <span className='text-center'>100 BDT</span>
                                          </div>
                                          <div className=' grid grid-cols-2 '>
                                          <p className='text-sm'>Discount</p>
                                          <span className='text-center text-sm'>400 BDT</span>
                                          </div>
                                          <div className='border-t border-b mt-3'>
                                          <div className=' grid grid-cols-2 py-2'>
                                          <p className=''>Total</p>
                                          <span className='text-center '>400 BDT</span>
                                          </div>

                                          </div>
                                         

                                    </div>
                                   
                              </div>

                        </div>
                     <div className='mt-10'>
                    <p>We Well be Sending a Shipping confrimation email when the items shipped successfully.</p>

                   <div className='mt-3'>
                   <h3 className=' font-medium'>Thank You for shopping with us</h3>
                    <h3 className=' font-medium'>Ceo Mamun</h3>
                   </div>

                  

                     </div>
                     
                   </div>
                   
                   <div className=' bg-slate-200 py-2 px-8'>
                    <div className=' flex justify-between'>
                       <p className='text-sm'>Need Help? <span>Visit our Help Center</span></p>
                       <span className='text-sm'>12/3/2022</span>

                    </div>
                   </div>
                   
                  </div>
                  <div className='text-center mt-10'>
                        <button className=' bg-slate-300 py-1 px-4 rounded'>Recipt Dowenlode</button>

                   </div>
            </div>
      );
};

export default OrderReceipt;