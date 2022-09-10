import React, { useEffect, useState } from "react";
import { FcLike } from "react-icons/fc";
import { GrView } from "react-icons/gr";
import { AiFillStar } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "../Futurecher/Slice/productSlice";
import Product from "./Product";
import Catagory from "./Catagory";
import { useNavigate } from "react-router-dom";
import Loading from "../Utilitis/Loading";
const Products = () => {
  const navigate = useNavigate()
  const [TshartCatagory, setTshartCatagory] = useState("T Shirt");
  const [hudiCatagory, setHudiCatagory] = useState("Hudi");
  const [viewAllCatagory, setviewAllCatagory] = useState("all");
  const [shart, setshart] = useState(false);
  const [hudi, sethudi] = useState(false);
  const [viewAll, setviewAll] = useState(false);
  const product = useSelector((state) => state.products);

  const disPatch = useDispatch();
  useEffect(() => {
    setshart(true);
    disPatch(fetchProduct());
  }, []);
  const selectCatagoryHendeler = (s) => {
    if (s === "T Shirt") {
      disPatch(fetchProduct(TshartCatagory));
      setshart(true);
      sethudi(false);
      setviewAll(false)
    }
    if (s === "hudi") {
      disPatch(fetchProduct(hudiCatagory));
      sethudi(true);
      setshart(false);
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
      <h1 className="text-xl ">PRODUCTS CATEGORIES</h1>
      <div className="grid lg:grid-cols-4  grid-cols-2">
        <div className="w-60  mt-5">
          <div  data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1000" className="card bg-base-100  sticky top-0 border shadow-md  rounded-lg h-96 w-full">
            <Catagory
              selectCatagoryHendeler={selectCatagoryHendeler}
              shart={shart}
              hudi={hudi}
              viewAll={viewAll}
            ></Catagory>
          </div>
        </div>
        <div   className="w-full col-span-3">
          <div className=" grid lg:grid-cols-3 grid-cols-1  gap-5  mt-5">
            {product.loading && <div className=" flex  justify-end"><Loading></Loading></div>}
            {!product.loading && product.error ? <p>{product.error}</p> : ""}
            {!product.loading && !product.error ? (
              <>
                {product?.products?.products?.map((product) => (
                  <Product key={product._id} product={product}></Product>
                ))}
              </>
            ) : null}
          </div>
          <div className="text-right mt-5">
            <button onClick={()=> navigate("/view/all/product")} className=" bg-[#062C30] text-white rounded-lg px-3 py-2">
              See All Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
