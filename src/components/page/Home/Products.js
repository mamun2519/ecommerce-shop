import React from "react";

const Products = () => {
  return (
    <div className="max-w-7xl m-auto px-2 my-20">
      <h1 className="text-xl mb-5">Top Categories Products</h1>
      <div className="grid grid-cols-4 ">
        <div className="w-60  ">
          <div class="card  bg-base-100 border rounded-lg h-80">
            <div class="card-bod p-2">
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
            <div class="card h-96 bg-base-200 shadow-xl relative ">
              <figure class="px-5 pt-5">
                <img
                  src="https://placeimg.com/400/225/arch"
                  alt="Shoes"
                  class="rounded-xl"
                />
              </figure>
              <div class="card-b px-5 pt-3">
              <p class="badge badge-secondary p-2 absolute top-[25px] right-[2px]  rotate-45">In Stcok</p>
                <h2 class="card-title pb-0">Smart T-Shart  </h2>
               
                <span>Man Fashion</span>
                <p className="text-xl text-red-400">999$</p>
                <small className="line-through">1200$</small>
                
                
                
                <div>
                <button class=" px-4 py-2 bg-red-400 rounded-lg text-white">Buy Now</button>
                </div>
              </div>
              
            </div>
            <div class="card bg-base-100 shadow-xl">
              <figure class="px-10 pt-10">
                <img
                  src="https://placeimg.com/400/225/arch"
                  alt="Shoes"
                  class="rounded-xl"
                />
              </figure>
              <div class="card-body items-center text-center">
                <h2 class="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions">
                  <button class="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <div class="card bg-base-100 shadow-xl">
              <figure class="px-10 pt-10">
                <img
                  src="https://placeimg.com/400/225/arch"
                  alt="Shoes"
                  class="rounded-xl"
                />
              </figure>
              <div class="card-body items-center text-center">
                <h2 class="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions">
                  <button class="btn btn-primary">Buy Now</button>
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
