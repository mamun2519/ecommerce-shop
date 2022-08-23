import React from "react";

const Catagory = ({ selectCatagoryHendeler, shart, hudi , viewAll}) => {
  return (
    <div className="card-bod p-2  ">
      <div
        onClick={() => selectCatagoryHendeler("T Shirt")}
        className={
          shart
            ? "bg-red-400  rounded-lg border-b   px-4 text-white cursor-pointer"
            : "py-3 border-b  px-4 cursor-pointer"
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
            ? "bg-red-400 py-3 rounded-lg border-b   px-4 text-white cursor-pointer"
            : "py-3 border-b  px-4 cursor-pointer"
        }
      >
        <p id="hudi" className="py-c">
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
            ? "bg-red-400 py-3 rounded-lg border-b   px-4 text-white cursor-pointer"
            : "py-3 border-b  px-4 cursor-pointer"
        }>
        <p className="py-3">Vrew All Catagory</p>
      </div>
    </div>
  );
};

export default Catagory;
