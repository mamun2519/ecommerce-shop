import React from "react";
import Loading from "../Utilitis/Loading";

const ProductDetails = ({ product }) => {
      console.log(product);
  return (
    <div className="lg:w-4/5 mx-auto  grid grid-cols-2">
      {product.loading && (
        <p>
          <Loading></Loading>
        </p>
      )}
      {!product.loading && product.error ? <p>{product.error}</p> : ""}

      {!product.loading && product?.product?.product ? (
        <div className="col-span-2">
          <div className="relative   min-w-0 break-words bg-white w-full shadow-md border rounded">
            <div className="p-5">
              <h1 className=" font-medium text-2xl">Product Information</h1>
              <div className=" grid grid-cols-2 gap-10 mt-2">
                <div>
                  <p>Product Name</p>
                </div>
                <div>   <h1 class="text-gray-900  title-font font-medium mb-1">
                      {product?.product?.product?.name}
                    </h1>
                </div>
              </div>
              <div className=" grid grid-cols-2 gap-10 mt-1">
                <div>
                  <p className=" text-gray-600">Brand</p>
                </div>
                <div>Nun</div>
              </div>
              <div className=" grid grid-cols-2 gap-10 mt-1">
                <div>
                  <p className=" text-gray-600">Cetagory</p>
                </div>
                <div> <p>{product?.product?.product?.category}</p></div>
              </div>
              <div className=" grid grid-cols-2 gap-10 mt-1">
                <div>
                  <p className=" text-gray-600">Title</p>
                </div>
                <div><p>{product?.product?.product?.description}</p></div>
              </div>
              <div className=" grid grid-cols-2 gap-10 mt-1">
                <div>
                  <p className=" text-gray-600">Total Reviews</p>
                </div>
                <div><p>{product?.product?.product?.numOfReviews}</p></div>
              </div>
              <div className=" grid grid-cols-2 gap-10 mt-1">
                <div>
                  <p className=" text-gray-600">Stock Avalable</p>
                </div>
                <div><p>{product?.product?.product?.Stock}</p></div>
              </div>
              <div className=" grid grid-cols-2 gap-10 mt-1">
                <div>
                  <p className=" text-gray-600">Price</p>
                </div>
                <div><p>{product?.product?.product?.price} BDT</p></div>
              </div>
              <div className=" grid grid-cols-2 gap-10 mt-1">
                <div>
                  <p className=" text-gray-600">Made In</p>
                </div>
                <div>Bangladesh</div>
              </div>
              <div className=" grid grid-cols-2 gap-10 mt-1">
                <div>
                  <p className=" text-gray-600">Saller Name</p>
                </div>
                <div>nun</div>
              </div>
              <div className=" grid grid-cols-2 gap-10 mt-1">
                <div>
                  <p className=" text-gray-600">Product Released</p>
                </div>
                <div><p>{product?.product?.product?.createdAt}</p></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ProductDetails;
