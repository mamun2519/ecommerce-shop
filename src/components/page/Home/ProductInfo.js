import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchSingleProduct } from "../Futurecher/Slice/singleProductSlice";
import { addToCart } from "../Futurecher/Slice/cartSlice";
import Loading from "../Utilitis/Loading";
import { Tab } from "@headlessui/react";
import ProductReview from "./ProductReview";
import AddProductReview from "./AddProductReview";
import ProductDetails from "./ProductDetails";
import { toast } from "react-toastify";
import MoreProduct from "./MoreProduct";

const ProductInfo = () => {
  const [quantity, setquantity] = useState(1);
  const { id } = useParams();
  const disPatch = useDispatch();
  const product = useSelector((state) => state.product);
  useEffect(() => {
    disPatch(fetchSingleProduct(id));
  }, [id]);

  const addedToCartHendeler = () => {
    const totalPrice =
      parseInt(quantity) * parseInt(product?.product?.product?.price);
    const shoppingCart = {
      name: product?.product?.product?.name,
      image: product?.product?.product?.images[0].url,
      description: product?.product?.product?.description,
      price: product?.product?.product?.price,
      id: product?.product?.product?._id,
      quantity,
      product: product?.product?.product?._id,
      totalPrice,
    };
    disPatch(addToCart(shoppingCart));
    toast("Thank You Product Added To Cart")
  };

  const increasequantity = () => {
    setquantity(quantity + 1);
  };
  const decreasequantity = () => {
    if (quantity > 1) {
      setquantity(quantity - 1);
    } else {
      alert("sorry");
    }
  };
  const Tabs = [
    {
      name: "Product Info",
      content: (
        <div data-aos="fade-right"
        data-aos-duration="1000">
          <ProductDetails product={product}></ProductDetails>
        </div>
      ),
    },
    {
      name: "Product Review",
      content: (
        <div data-aos="fade-right"
        data-aos-duration="1000">
          <ProductReview product={product}></ProductReview>
        </div>
      ),
    },
    {
      name: "Add Review",
      content: (
        <div data-aos="fade-right"
        data-aos-duration="1000">
          <AddProductReview product={product}></AddProductReview>
        </div>
      ),
    },
    {
      name: "More Products",
      content: (
        <div data-aos="fade-right"
        data-aos-duration="1000">
          <MoreProduct></MoreProduct>
     
        </div>
      ),
    },
   
  ];

  return (
    <div className="max-w-7xl m-auto pb-10 px-4">
      {product.loading && (
        <p>
          <Loading></Loading>
        </p>
      )}
      {!product.loading && product.error ? <p>{product.error}</p> : ""}
      {!product.loading && product?.product?.product ? (
        <div data-aos="fade-right"
        data-aos-duration="500" class="card w-full bg-base-100 shadow border mt-10">
          <div class="card-body ">
            <section class="text-gray-600 body-font overflow-hidden">
              <div class="container lg:px-5 py- lg:mx-auto">
                <div class="lg:w-4/5 sm:w-full  lg:mx-auto flex flex-wrap">
                  <img
                    alt="ecommerce"
                    class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                    src={product?.product?.product?.images[0].url}
                  />
                  <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <h2 class="text-sm title-font text-gray-500 tracking-widest">
                    {product?.product?.product?.brand}
                    </h2>
                    <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                      {product?.product?.product?.name}
                    </h1>
                    <p>{product?.product?.product?.description}</p>
                    <div class="flex mb-4">
                      <span class="flex items-center">
                        <svg
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-4 h-4 text-orange-400"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <svg
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-4 h-4 text-orange-400"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <svg
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-4 h-4 text-orange-400"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <svg
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-4 h-4 text-orange-400"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-4 h-4 text-orange-400"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <span class="text-gray-600 ml-3">{product?.product?.product?.numOfReviews} Reviews</span>
                      </span>
                      <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                        <a class="text-gray-500">
                          <svg
                            fill="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                          </svg>
                        </a>
                        <a class="text-gray-500">
                          <svg
                            fill="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                          </svg>
                        </a>
                        <a class="text-gray-500">
                          <svg
                            fill="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                          </svg>
                        </a>
                      </span>
                    </div>
                    <p class="leading-relaxed">
                    {product?.product?.product?.prodescription}
                    </p>
                    <div class="lg:flex block mt-6 justify-between items-center pb-5 border-b-2 border-gray-100 mb-5">
                      <div>
                        <button
                          onClick={() => decreasequantity()}
                          className="bg-[#062C30] rounded p-2 text-white px-5"
                        >
                          -
                        </button>
                        <div className="px-2 inline">
                          <div className="w-[50px] h-[40px] inline py-2 mt-2 bg-white border rounded-md focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">
                            <span className="px-4">{quantity}</span>
                          </div>
                        </div>
                        <button
                          onClick={() => increasequantity()}
                          className="bg-[#062C30] rounded p-2 text-white px-5"
                        >
                          +
                        </button>
                      </div>
                      <h1>
                        Avalible quantity: {product?.product?.product?.Stock}
                      </h1>
                    </div>
                    <div class="flex">
                      <span class="title-font font-medium text-2xl text-gray-900">
                        {product?.product?.product?.price}$ BDT
                      </span>
                      <button
                        onClick={() => addedToCartHendeler()}
                        class="flex ml-auto text-white bg-[#062C30] rounded-lg px-6 py-3"
                      >
                        Add To card
                      </button>
                      <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                        <svg
                          fill="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="border-t mt-10">
              <div>
                <div className="flex justify-center  lg:px-4">
                  <div class="lg:card cards w-full bg-base-100  ">
                    <div class="lg:card-body lg:p-4">
                      <Tab.Group>
                        <Tab.List className="lg:flex text-center gap-10 py-[4px] bg-slate-100 lg:px-[4px] border rounded-lg   lg:mx-auto justify-center">
                          {Tabs.map((item, index) => (
                            <Tab
                              key={index}
                              className={({ selected }) => (
                                "w-full relative  px-4 py-2.5 focus:outline-none whitespace-nowrap",
                                selected
                                  ? "transition duration-500 py-[5px] px-6 bg-[#062C30]  text-white rounded-lg "
                                  : "  py-[5px] px-6"
                              )}
                            >
                              {index < Tabs.length - 1 && (
                                <span className=" absolute right-0 w-[1px] h-6 top-1/2 -translate-y-1/2 bg-gray-100" />
                              )}
                              <span className="text-xl">{item.name}</span>
                            </Tab>
                          ))}
                        </Tab.List>
                        <Tab.Panels className="pt-5">
                          {Tabs.map((item, index) => (
                            <Tab.Panel>{item.content}</Tab.Panel>
                          ))}
                        </Tab.Panels>
                      </Tab.Group>
                    </div>
                  </div>
                </div>
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

export default ProductInfo;
