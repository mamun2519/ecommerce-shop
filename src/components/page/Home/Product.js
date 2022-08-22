import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { FcLike } from 'react-icons/fc';
import { GrView } from 'react-icons/gr';

const Product = ({product}) => {
      const {name , description , price , images , _id} = product
 
      return (
            <div className="card  h-[420px]  bg-base-100 shadow-lg relative ">
            <figure className="px-5 pt-5">
              <img
                src={images[0].url}
                alt="Shoes"
                className="rounded-xl h-[185px] w-full"
              />
            </figure>
            <div className="card-b  px-5 pt-3">
            <p className="badge badge-secondary p-2 absolute top-[25px] right-[2px]  rotate-45">In Stcok</p>
              <h2 className="card-title pb-0">{name}  </h2>
             
              <span className=" text-gray-500">{description}</span>
              <p className="text-xl text-red-400 font-medium">{price}$</p>
              <small className="line-through">1200$</small>
              
              <div className="flex mt-2  text-orange-400 gap-1">
                <span><AiFillStar/></span>
                <span><AiFillStar/></span>
                <span><AiFillStar/></span>
                <span><AiFillStar/></span>
                <span><AiFillStar/></span>
              </div>
              
              <div className="mt-5 flex gap-3">
              <button className=" px-4 w-1/2 py-2 bg-red-400 rounded-lg text-white ">Buy Now</button>
              <button className=" px-4 py-2 text-xl bg-base-200 rounded-lg text-white"><span className=""><FcLike/></span></button>
              <button className=" px-4 py-2 text-xl bg-base-200 text-red-400 rounded-lg"><span className=""><GrView/></span></button>
              </div>
            </div>
            
          </div>
      );
};

export default Product;