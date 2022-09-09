import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchProduct } from "../Futurecher/Slice/productSlice";

const Catagory = ({ selectCatagoryHendeler, shart, hudi , viewAll}) => {
  const [searchText, setSearchText] = useState();
  console.log(searchText);
  const disPatch = useDispatch();
  const searchHendeler = () => {
    disPatch(fetchProduct(searchText));
  };
  return (
    <div className="card-bod p-2  ">
      <div className="relative text-center">
        
        <input
          onChange={(e) => setSearchText(e.target.value)}
          className="h-14 w-[220px] lg:w-[220px] search border outline-none rounded-lg px-2 "
          placeholder="Search Product"
          type="text"
          name=""
          id=""
        />
        <button
          onClick={() => searchHendeler()}
          className="h-12 mt-1 bg-[#062C30] px-2 text-white rounded-lg absolute left-[152px] lg:left-[152px]"
        >
          Search
        </button>

      </div>
      <div
        onClick={() => selectCatagoryHendeler("T Shirt")}
        className={
          shart
            ? "bg-[#062C30]  rounded-lg border-b  mt-2  px-4 text-white cursor-pointer"
            : " border-b  px-4 cursor-pointer mt-2"
        }
      >
        <p id="tShart" className="py-3">
          T Shirts
        </p>
      </div>
      <div
        onClick={() => selectCatagoryHendeler("hudi")}
        className={
          hudi
            ? "bg-[#062C30] py-3 rounded-lg border-b   px-4 text-white cursor-pointer"
            : "py-3 border-b  px-4 cursor-pointer"
        }
      >
        <p id="hudi" className="">
          Smart Boy Hudi
        </p>
      </div>
      <div className="border-b  px-4 ">
        <p className="py-3">Home</p>
      </div>
      <div className="border-b  px-4">
        <p className="py-3">Home</p>
      </div>
      <div className="border-b  px-4">
        <p className="py-3">Home</p>
      </div>
      <div  onClick={() => selectCatagoryHendeler("all")}
        className={
          viewAll
            ? "bg-[#062C30]  rounded-lg border-b   px-4 text-white cursor-pointer"
            : " border-b  px-4 cursor-pointer"
        }>
        <p className="py-3">Vrew All Catagory</p>
      </div>
    </div>
  );
};

export default Catagory;
