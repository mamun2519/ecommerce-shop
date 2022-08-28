import React from 'react';

const SuccessMessage = () => {
      return (
            <div className="card lg:w-2/3 w-full  m-auto  border p-3">
            <div class="">
              <div class="p-2 flex justify-center">
               
                 <div>
                <div className='flex justify-center'> <img  className='w-60' src="/Assist/picture/paymenSuccess.gif" alt="" /></div>
               <p className='lg:text-2xl text-xl'>Congraculation Your Payment SuccessFull</p>
               <div className='text-center mt-3'>
               <button className='px-6 bg-red-500 rounded-lg py-2 text-white'>Go DashBoard</button>
               </div>
                 </div>
              </div>
            </div>
          </div>
      );
};

export default SuccessMessage;