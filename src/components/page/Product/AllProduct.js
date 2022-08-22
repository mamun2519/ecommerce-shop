import React, { useEffect, useState } from "react";
import { FcLike } from "react-icons/fc";
import { GrView } from "react-icons/gr";
import { AiFillStar } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "../Futurecher/Slice/productSlice";
import Product from "../Home/Product";
import Pagination from "./Pagination";
import Catagory from "../Home/Catagory";
// import Product from "./Product";

const AllProduct = () => {
      const [TshartCatagory, setTshartCatagory] = useState("T Shirt");
  const [hudiCatagory, setHudiCatagory] = useState("Hudi");
  const [shart , setshart] = useState(false)
  const [hudi , sethudi] = useState(false)
  const product = useSelector((state) => state.products);

  const disPatch = useDispatch();
  useEffect(() => {
    setshart(true)
    disPatch(fetchProduct());
  }, []);
  const selectCatagoryHendeler = (s) => {
   
    if (s === "T Shirt") {
      disPatch(fetchProduct(TshartCatagory));
      setshart(true)
      sethudi(false)
    }
    if (s === "hudi") {
      disPatch(fetchProduct(hudiCatagory));
      sethudi(true)
      setshart(false)
    }

  };
      return (
            <div className="max-w-7xl m-auto px-2 my-20">
      <h1 className="text-xl mb-5">Top Categories Products</h1>
      <div className="grid lg:grid-cols-4  grid-cols-2">
        <div className="w-60  mt-5">
          <div className="card bg-base-100  sticky top-0 border shadow-lg rounded-lg h-80">
           
            <Catagory
            selectCatagoryHendeler={selectCatagoryHendeler}
            shart={shart}
            hudi={hudi}
            >

            </Catagory>
          </div>
        </div>
        <div className="w-full col-span-3">
          <div className=" grid lg:grid-cols-3 grid-cols-1  gap-5">
            {product.loading && <p>Loading</p>}
            {!product.loading && product.error ? <p>{product.error}</p> : ""}
            {!product.loading && !product.error ? (
              <>
                {product?.products?.products?.map((product) => (
                  <Product key={product._id} product={product}></Product>
                ))}
              </>
            ) : null}
          </div>
          <div className="text-center mt-10">
            <Pagination/>
          </div>
        </div>
      </div>
    </div>
      );
};

export default AllProduct;