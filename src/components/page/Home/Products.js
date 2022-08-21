import React from "react";
import { FcLike } from 'react-icons/fc';
import { GrView } from 'react-icons/gr';
import { AiFillStar} from 'react-icons/ai';
const Products = () => {
  return (
    <div className="max-w-7xl m-auto px-2 my-20">
      <h1 className="text-xl mb-5">Top Categories Products</h1>
      <div className="grid grid-cols-4 ">
        <div className="w-60  ">
          <div className="card bg-base-100 border rounded-lg h-80">
            <div className="card-bod p-2">
              <div className="border-b px-4 ">
                <p className="py-3">Home</p>
              </div>
              <div className="border-b  px-4">
                <p className="py-3">Home</p>
              </div>
              <div className="border-b  px-4 bg-red-400 rounded-lg text-white">
                <p className="py-3">Home</p>
              </div>
              <div className="border-b  px-4">
                <p className="py-3">Home</p>
              </div>
              <div className="border-b  px-4">
                <p className="py-3">Home</p>
              </div>
              <div className="  px-4">
                <p className="py-3">Vrew All Catagory</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full col-span-3">
          <div className=" grid grid-cols-3 gap-5">
            <div className="card  h-[410px]  bg-base-100 shadow-xl relative ">
              <figure className="px-5 pt-5">
                <img
                  src="https://www.graphixking.com/wp-content/uploads/2020/08/Software-Engineer-Black-Cotton-T-shirt.jpg"
                  alt="Shoes"
                  className="rounded-xl h-[175px] w-full"
                />
              </figure>
              <div className="card-b  px-5 pt-3">
              <p className="badge badge-secondary p-2 absolute top-[25px] right-[2px]  rotate-45">In Stcok</p>
                <h2 className="card-title pb-0">Smart T-Shart  </h2>
               
                <span className=" text-gray-500">Man Fashion</span>
                <p className="text-xl text-red-400 font-medium">999$</p>
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
            <div className="card h-[410px] bg-base-100 shadow-xl relative ">
              <figure className="px-5 pt-5">
                <img
                  src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/151642341/original/ec88e1330b7577bb4b39c4f50fb05eedfc3ca2fb/create-an-awesome-tshirt-design-for-you.jpg"
                  alt="Shoes"
                  className="rounded-xl h-[175px] w-full"
                />
              </figure>
              <div className="card-b  px-5 pt-3">
              <p className="badge badge-secondary p-2 absolute top-[25px] right-[2px]  rotate-45">In Stcok</p>
                <h2 className="card-title pb-0">Smart T-Shart  </h2>
               
                <span className=" text-gray-500">Man Fashion</span>
                <p className="text-xl text-red-400 font-medium">999$</p>
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
            <div className="card h-[410px] bg-base-100 shadow-xl relative ">
              <figure className="px-5 pt-5">
                <img
                  src="https://static-01.daraz.com.bd/p/0dcdbc879f87b8c7f66c10393b7a5788.jpg"
                  alt="Shoes"
                  
                  className="rounded-xl h-[175px] w-full"
                />
              </figure>
              <div className="card-b  px-5 pt-3">
              <p className="badge badge-secondary p-2 absolute top-[25px] right-[2px]  rotate-45">In Stcok</p>
                <h2 className="card-title pb-0">Smart T-Shart  </h2>
               
                <span className=" text-gray-500">Man Fashion</span>
                <p className="text-xl text-red-400 font-medium">999$</p>
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
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
