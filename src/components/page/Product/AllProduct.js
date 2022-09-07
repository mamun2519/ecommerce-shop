import React, { useEffect, useState } from "react";
import { FcLike } from "react-icons/fc";
import { GrView } from "react-icons/gr";
import { AiFillStar } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "../Futurecher/Slice/productSlice";
import Product from "../Home/Product";
import Pagination from "./Pagination";
import Catagory from "../Home/Catagory";
import Loading from "../Utilitis/Loading";
// import Product from "./Product";

const AllProduct = () => {
      const [TshartCatagory, setTshartCatagory] = useState("T Shirt");
  const [hudiCatagory, setHudiCatagory] = useState("Hudi");
  const [viewAllCatagory, setviewAllCatagory] = useState("all");
  const [shart , setshart] = useState(false)
  const [hudi , sethudi] = useState(false)
  const [viewAll, setviewAll] = useState(false);
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
      setviewAll(false)
    }
    if (s === "hudi") {
      disPatch(fetchProduct(hudiCatagory));
      sethudi(true)
      setshart(false)
      setviewAll(false)
    }
    if(s === "all"){
      disPatch(fetchProduct(viewAllCatagory));
      setviewAll(true)
      sethudi(false);
      setshart(false);
      

    }

  };
      return (
            <div className="max-w-7xl m-auto px-2 my-20">
      <h1 className="text-xl">PRODUCTS CATEGORIES</h1>
      <div className="grid lg:grid-cols-4  grid-cols-2">
        <div className="w-60  mt-5">
          <div className="card bg-base-100  sticky top-0 border shadow-md rounded-lg h-96">
           
            <Catagory
            selectCatagoryHendeler={selectCatagoryHendeler}
            shart={shart}
            hudi={hudi}
            viewAll={viewAll}
            >

            </Catagory>
          </div>
        </div>
        <div className="w-full col-span-3 mt-5">
          <div className=" grid lg:grid-cols-3 grid-cols-1  gap-5">
            {product.loading && <Loading></Loading>}
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