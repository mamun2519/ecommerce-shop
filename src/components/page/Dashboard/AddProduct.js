import axios from "axios";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BiCategoryAlt, BiLockOpenAlt } from "react-icons/bi";
import {
  MdAddPhotoAlternate,
  MdDescription,
  MdOutlineProductionQuantityLimits,
} from "react-icons/md";
import { TiDelete } from "react-icons/ti";
import { RiPriceTagLine } from "react-icons/ri";
import { FiDollarSign } from "react-icons/fi";
import { TbBrandAirtable } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import PageTitle from "../Utilitis/PageTitle";

const AddProduct = () => {
  const [productPictue, setProductPicture] = useState("");
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const userId = localStorage.getItem("UserId");
  const onSubmit = async (data) => {
    const myForm = new FormData();
    myForm.append("name", data.name);
    myForm.append("category", data.category);
    myForm.append("description", data.description);
    myForm.append("Stock", data.Stock);
    myForm.append("price", data.price);
    myForm.append("brand", data.brand);
    myForm.append("user", userId);
    myForm.append("images", productPictue);
    await axios({
      method: "post",
      url: "https://ecommerce-shop-server.vercel.app/product/add",
      data: myForm,
      headers: {
        "Content-Type": "multipart/form-data",
        authorization: `Bearer ${localStorage.getItem("UserToken")}`,
      },
    })
      .then((res) => {
        toast("Order Added Successful");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const ProductPictureHendeler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setProductPicture(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <div className="mb-5 px-4 lg:px-0">
      <PageTitle title="Add Product"></PageTitle>
      <div className="w-full  mx-auto border  shadow-md rounded-lg p-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="">
            <div className=" grid grid-cols-3">
              <div className="flex  items-center py-0">
                <p>Product Name</p>
              </div>
              <div className="col-span-2">
                <div class="">
                  <div class="flex items-center justify-between relative">
                    <div className="border p-2   w-9 rounded absolute top-[12px] left-1 text-[#EC255A]">
                      <MdOutlineProductionQuantityLimits />
                    </div>
                  </div>

                  <input
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Product Name is Required",
                      },
                    })}
                    type="text"
                    placeholder="Enter name"
                    class="block w-full px-4 py-2 mt-2 pl-12  bg-white border rounded-md   focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                  <label class="label">
                    {errors.name?.type === "required" && (
                      <span className="text-red-500">
                        {errors.name.message}
                      </span>
                    )}
                  </label>
                </div>
              </div>
            </div>
            <div className=" grid grid-cols-3 mt-">
              <div className="flex  items-center py-0">
                <p>Category</p>
              </div>
              <div className=" col-span-2">
                <div class="">
                  <div class="flex items-center justify-between relative">
                    <div className="border p-2   w-9 rounded absolute top-[12px] left-1 text-[#EC255A]">
                      <BiCategoryAlt />
                    </div>
                  </div>

                  <input
                    {...register("category", {
                      required: {
                        value: true,
                        message: "Category is Required",
                      },
                    })}
                    type="text"
                    placeholder="Enter category "
                    class="block w-full px-4 py-2 mt-2 pl-12  bg-white border rounded-md   focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                  <label class="label">
                    {errors.category?.type === "required" && (
                      <span className="text-red-500">
                        {errors.category.message}
                      </span>
                    )}
                  </label>
                </div>
              </div>
            </div>
            <div className=" grid grid-cols-3 mt-">
              <div className="flex  items-center py-0">
                <p>Description</p>
              </div>
              <div className="col-span-2">
                <div class="">
                  <div class="flex items-center justify-between relative">
                    <div className="border p-2   w-9 rounded absolute top-[12px] left-1 text-[#EC255A]">
                      <MdDescription />
                    </div>
                  </div>

                  <textarea
                    {...register("description", {
                      required: {
                        value: true,
                        message: "Description is Required",
                      },
                    })}
                    type="text"
                    placeholder="Enter description"
                    class="block w-full h-[100px] px-4 py-2 mt-2 pl-12  bg-white border rounded-md   focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                  <label class="label">
                    {errors.description?.type === "required" && (
                      <span className="text-red-500">
                        {errors.description.message}
                      </span>
                    )}
                  </label>
                </div>
              </div>
            </div>
            <div className=" grid grid-cols-3 mt-">
              <div className="flex  items-center py-0">
                <p>Quentity</p>
              </div>
              <div className=" col-span-2">
                <div class="">
                  <div class="flex items-center justify-between relative">
                    <div className="border p-2   w-9 rounded absolute top-[12px] left-1 text-[#EC255A]">
                      <RiPriceTagLine />
                    </div>
                  </div>

                  <input
                    {...register("Stock", {
                      required: {
                        value: true,
                        message: "Quentity is Required",
                      },
                    })}
                    type="number"
                    placeholder="Enter stcok"
                    class="block w-full px-4 py-2 mt-2 pl-12  bg-white border rounded-md   focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                  <label class="label">
                    {errors.Stock?.type === "required" && (
                      <span className="text-red-500">
                        {errors.Stock.message}
                      </span>
                    )}
                  </label>
                </div>
              </div>
            </div>
            <div className=" grid grid-cols-3 mt-">
              <div className="flex  items-center py-0">
                <p>Price</p>
              </div>
              <div className=" col-span-2">
                <div class="">
                  <div class="flex items-center justify-between relative">
                    <div className="border p-2   w-9 rounded absolute top-[12px] left-1 text-[#EC255A]">
                      <FiDollarSign />
                    </div>
                  </div>

                  <input
                    {...register("price", {
                      required: {
                        value: true,
                        message: "Price is Required",
                      },
                    })}
                    type="number"
                    placeholder="Enter price"
                    class="block w-full px-4 py-2 mt-2 pl-12  bg-white border rounded-md   focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                  <label class="label">
                    {errors.price?.type === "required" && (
                      <span className="text-red-500">
                        {errors.price.message}
                      </span>
                    )}
                  </label>
                </div>
              </div>
            </div>
            <div className=" grid grid-cols-3 mt-">
              <div className="flex  items-center py-0">
                <p>Brand</p>
              </div>
              <div className=" col-span-2">
                <div class="">
                  <div class="flex items-center justify-between relative">
                    <div className="border p-2   w-9 rounded absolute top-[12px] left-1 text-[#EC255A]">
                      <TbBrandAirtable />
                    </div>
                  </div>

                  <select
                    {...register("brand", {
                      required: {
                        value: true,
                        message: "Brand is Required",
                      },
                    })}
                    type="text"
                    placeholder="Enter brand"
                    class="block w-full px-4 py-2 mt-2 pl-12  bg-white border rounded-md   focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  >
                    <option value="Aarong" selected>
                      Aarong
                    </option>
                    <option value="Richman">Richman</option>
                    <option value="Dorjibari">Dorjibari</option>
                    <option value="Smartex">Smartex</option>
                    <option value="Texmart">Texmart</option>
                  </select>
                  <label class="label">
                    {errors.brand?.type === "required" && (
                      <span className="text-red-500">
                        {errors.brand.message}
                      </span>
                    )}
                  </label>
                </div>
              </div>
            </div>

            <div className=" grid grid-cols-3 mt-">
              <div className="mt-5  py-0">
                <div>
                  <p>Product Picture</p>
                </div>
              </div>
              <div className=" col-span-2">
                <div class="">
                  <div class="flex items-center justify-between relative"></div>

                  <input
                    {...register("images", {
                      required: {
                        value: true,
                        message: "images is Required",
                      },
                    })}
                    onChange={(e) => ProductPictureHendeler(e)}
                    type="file"
                    name="image-uplode"
                    id="product-img"
                    hidden
                    placeholder="Enter seller name"
                    //   class="block w-full px-4 py-2 mt-2 pl-12  bg-white border rounded-md   focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                  <label
                    htmlFor={!productPictue && "product-img"}
                    className=" "
                  >
                    <div>
                      {!productPictue && (
                        <div className="h-44 lg:w-72 w-52 border rounded-md flex justify-center  items-center">
                          <div className=" ">
                            <span className="text-6xl text-[#EC255A]">
                              <MdAddPhotoAlternate />
                            </span>
                          </div>
                        </div>
                      )}
                      {productPictue && (
                        <div className="h-44 w-72 border rounded-md flex justify-center  items-center">
                          <div className="h-44 w-72 relative">
                            <img
                              className="h-44 w-72 p-1 rounded-lg"
                              src={productPictue}
                              alt="productPicure"
                            />
                            <span
                              onClick={() => setProductPicture("")}
                              className=" absolute text-2xl top-[5px] text-red-500 right-[5px] cursor-pointer"
                            >
                              <TiDelete />
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </label>

                  <label class="label">
                    {errors.images?.type === "required" && (
                      <span className="text-red-500">
                        {errors.images.message}
                      </span>
                    )}
                  </label>
                </div>
              </div>
            </div>
            <div className="text-center">
              <input
                type="submit"
                value="Save"
                className="bg-[#062C30] px-16 py-2 rounded-lg text-white"
              />
            </div>
          </div>
        </form>
      </div>
      <div className="mt-5">
        <button
          onClick={() => navigate("/dashboard/manageProduct")}
          className="bg-[#062C30] text-white px-6 py-2 rounded-lg"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
