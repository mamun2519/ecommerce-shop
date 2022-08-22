import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { fetchProduct } from "../Futurecher/Slice/productSlice";
const Banner = () => {
  const [searchText, setSearchText] = useState();
  console.log(searchText);
  const disPatch = useDispatch();
  const searchHendeler = () => {
    disPatch(fetchProduct(searchText));
  };

  return (
    <div className="banner  flex  items-center ">
      <div className="relative text-center">
        <div>
          <h1 className="lg:text-5xl text-3xl text-black mb-2 font-medium">
            New Feshion Collection
          </h1>
          <p className="text-2xl text-black mb-2">Sales Offer</p>
        </div>
        <input
          onChange={(e) => setSearchText(e.target.value)}
          className="h-14 w-[325px] lg:w-[450px] search outline-none rounded-lg px-4 "
          placeholder="Search Your Product"
          type="text"
          name=""
          id=""
        />
        <button
          onClick={() => searchHendeler()}
          className="h-12 mt-1 bg-red-500 px-4 text-white rounded-lg absolute left-[260px] lg:left-[602px]"
        >
          Search
        </button>

        <div>
          <p className="text-black mt-2 text-xl px-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum,
            officiis enim sunt eos ullam tempore.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
