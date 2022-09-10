import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../Futurecher/Slice/productSlice";
import Pagination from "../Product/Pagination";
import Loading from "../Utilitis/Loading";
import ManageProductRow from "./ManageProductRow";

const ManageProduct = () => {
  const product = useSelector((state) => state.products);
  const [searchProduct, seTSearchProdut] = useState();
  const disPatch = useDispatch();
  useEffect(() => {
    disPatch(fetchProduct());
  }, []);

  const searchProductHendeler = () => {
    disPatch(fetchProduct(searchProduct));
  };


  return (
    <div data-aos="fade-down"
    data-aos-duration="1000">
      <section class="py-1 bg-blueGray-50">
        <div class="w-full  mb-12 xl:mb-0 px-4">
          <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-md border rounded ">
            <div class="rounded-t mb-0 px-2 py-3 border-0">
              <div class="lg:flex block flex-wrap items-center">
                <div class="relative w-full p2-4 max-w-full flex-grow flex-1">
                  <h3 class="font-semibold text-center lg:text-left text-base text-blueGray-700">
                    Manage All Product
                  </h3>
                </div>
                <div class="relative w-full mt-2  px-4 max-w-full flex-grow flex-1 text-right">
                  <div className="relative ">
                    <input
                      onChange={(e) => seTSearchProdut(e.target.value)}
                      className="w-full h-12  lg:w-9/12 border search outline-none rounded-lg px-4 "
                      placeholder="Search product Name"
                      type="text"
                      name=""
                      id=""
                    />
                    <button
                      onClick={() => searchProductHendeler()}
                      className="h-10 mt-1 bg-[#062C30] px-4 text-white rounded-lg absolute right-[5px]"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="block w-full overflow-x-auto">
              <table class="items-center bg-transparent w-full border-collapse ">
                <thead>
                  <tr className="bg-[#062C30] text-white sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      product Profile
                    </th>
                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Name
                    </th>
                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Category
                    </th>
                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Price
                    </th>
                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Stock
                    </th>

                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Description
                    </th>
                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Details
                    </th>
                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {product?.products?.products?.length > 0 ? (
                    <>
                      {" "}
                      {product.loading && <Loading></Loading>}
                      {!product.loading && product.error ? (
                        <p>{product.error}</p>
                      ) : (
                        ""
                      )}
                      {!product.loading && !product.error ? (
                        <>
                          {product?.products?.products?.map((product) => (
                            <ManageProductRow
                              key={product._id}
                              product={product}
                            ></ManageProductRow>
                          ))}
                        </>
                      ) : null}
                    </>
                  ) : (
                    <tr className="flex justify-center">
                      <p className=" py-2 text-red-500 font-medium">
                        Product Not Found
                      </p>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <div class="rounded-t mb-0 px-2 py-3 border-t">
              <div class="flex flex-wrap items-center">
                <div class="relative w-full p2-4 max-w-full  flex justify-center">
                  <h3 class="font-semibold text-base text-blueGray-700">
                    <Pagination />
                  </h3>
                </div>
                <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManageProduct;
