import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react'
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { fetchProduct } from '../Futurecher/Slice/productSlice';
const ProductDeleteM = ({closeModal , openModal , isOpen , id}) => {
      const disPatch = useDispatch();
      const deleteMyOrderHendeler = (id) =>{
            fetch(`https://ecommerce-shop-server.vercel.app/product/delete/${id}` , {
              method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
              if(data.success){
                toast(data?.message)
                closeModal()
                disPatch(fetchProduct());
              }
            })
           }
      return (
            <div>
            <Transition appear show={isOpen} as={Fragment}>
  <Dialog as="div" className="relative z-10" onClose={closeModal}>
    <Transition.Child
      as={Fragment}
      enter="ease-out duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="fixed inset-0 bg-black bg-opacity-25" />
    </Transition.Child>

    <div className="fixed inset-0 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4 text-center">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Dialog.Panel className="lg:w-96 w-72 py-10 max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
            <Dialog.Title
              as="h3"
              className="text-lg font-medium flex justify-center leading-6 text-gray-900"
            >
              <div className='text-center'>
                <h1 className='text-xl'> Are You Sure Delete?</h1>
                <span className='text-sm text-red-500'> If you delete it , it will be permanently deleted.</span>                    </div>
           
            </Dialog.Title>
           

            <div className="mt-4 flex justify-center gap-5">
              <button onClick={()=> closeModal()} className=' bg-[#062C30] text-white rounded px-4 py-1'>
                No
              </button>
              <button onClick={()=>deleteMyOrderHendeler(id)}  className=' bg-red-500 text-white rounded px-4 py-1'>
                Yes
              </button>
            </div>
          </Dialog.Panel>
        </Transition.Child>
      </div>
    </div>
  </Dialog>
</Transition>
      </div>
      );
};

export default ProductDeleteM;