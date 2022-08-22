import React, { useEffect } from "react";
import { FcLike } from 'react-icons/fc';
import { GrView } from 'react-icons/gr';
import { AiFillStar} from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux'
import { fetchProduct } from "../Futurecher/Slice/productSlice";
import Product from "./Product";
const Products = () => {
  const product = useSelector((state) => state.products)
  console.log(product)
  const disPatch = useDispatch()
  useEffect(()=>{
    disPatch(fetchProduct())
  },[])


  return (
    <div className="max-w-7xl m-auto px-2 my-20">
      <h1 className="text-xl mb-5">Top Categories Products</h1>
      <div className="grid lg:grid-cols-4  grid-cols-2">
        <div className="w-60  mt-5">
          <div className="card bg-base-100 border shadow-lg rounded-lg h-80">
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
          <div className=" grid lg:grid-cols-3 grid-cols-1  gap-5">
           
         {product.loading && <p>Loading</p>}
         {!product.loading && product.error ? <p>{product.error}</p> : ""}
         {!product.loading && !product.error ? <>
         {product.products.products.map((product) => <Product key={product._id}
         product={product}
         
         ></Product>)}
         
         </>  : null }
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
