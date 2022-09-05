import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { BiLockOpenAlt } from 'react-icons/bi';
import { MdAddPhotoAlternate} from 'react-icons/md';
import { TiDelete} from 'react-icons/ti';

const AddProduct = () => {
      const [productPictue , setProductPicture] = useState("")
      const {
            register,
            formState: { errors },
            handleSubmit,
          } = useForm();
          const onSubmit = async (data) => {
            console.log(data)
          }

          

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
            <div className="mb-20 px-4 lg:px-0">
            <div className="w-full  mx-auto border  shadow-md rounded-lg p-5">
              
      
              {/* <div className="h-14 relative">
                <div class="avatar online ">
                  <div class="w-28 rounded-full absolute top-[-150px] lg:top-[-110px] left-10">
                    <img className="" src={profile} />
                  </div>
                </div>
      
                <div className="px-[10px] py-2 text-xl bg-base-200 rounded-lg text-black w-10 absolute top-[-68px] lg:top-[-48px] left-[130px]">
                  <input
                    onChange={(e) => changeProfilePictureHendeler(e)}
                    type="file"
                    name="image-uplode"
                    id="profile"
                    hidden
                  />
                  <label htmlFor="profile" className=" ">
                    <span className="">
                      <span className="">
                        <AiFillCamera />
                      </span>
                    </span>
                  </label>
                </div>
              </div> */}
      
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="">
                  <div className=" grid grid-cols-3">
                    <div className="flex  items-center py-0">
                      <p>Product Name</p>
                    </div>
                    <div className="col-span-2">
                      <div class="">
                        <div class="flex items-center justify-between relative">
                          <div className="border p-2   w-9 rounded absolute top-[12px] left-1 bg-red-200">
                            <BiLockOpenAlt />
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
                          <div className="border p-2   w-9 rounded absolute top-[12px] left-1 bg-red-200">
                            <BiLockOpenAlt />
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
                          <div className="border p-2   w-9 rounded absolute top-[12px] left-1 bg-red-200">
                            <BiLockOpenAlt />
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
                            <span className="text-red-500">{errors.description.message}</span>
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
                          <div className="border p-2   w-9 rounded absolute top-[12px] left-1 bg-red-200">
                            <BiLockOpenAlt />
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
                          <div className="border p-2   w-9 rounded absolute top-[12px] left-1 bg-red-200">
                            <BiLockOpenAlt />
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
                          <div className="border p-2   w-9 rounded absolute top-[12px] left-1 bg-red-200">
                            <BiLockOpenAlt />
                          </div>
                        </div>
      
                        <input
                          {...register("brand", {
                            required: {
                              value: true,
                              message: "Brand is Required",
                            },
                          })}
                          type="text"
                          placeholder="Enter brand"
                          class="block w-full px-4 py-2 mt-2 pl-12  bg-white border rounded-md   focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
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
                        <p>Seller Name</p>
                      </div>
                    </div>
                    <div className=" col-span-2">
                      <div class="">
                        <div class="flex items-center justify-between relative">
                          <div className="border p-2   w-9 rounded absolute top-[12px] left-1 bg-red-200">
                            <BiLockOpenAlt />
                          </div>
                        </div>
      
                        <input
                          {...register("seller", {
                            required: {
                              value: true,
                              message: "Seller is Required",
                            },
                          })}
                          type="text"
                          placeholder="Enter seller name"
                          class="block w-full px-4 py-2 mt-2 pl-12  bg-white border rounded-md   focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                        <label class="label">
                          {errors.seller?.type === "required" && (
                            <span className="text-red-500">
                              {errors.seller.message}
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
                        <div class="flex items-center justify-between relative">
                          
                        </div>
      
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
                        <label htmlFor={!productPictue && "product-img" } className=" ">
                    <div className="h-44 w-72 border rounded-md flex justify-center  items-center">
                     {!productPictue &&  <div className=' '>
                        <span className='text-6xl text-gray-700'><MdAddPhotoAlternate/></span>
                      </div>} 
                      {productPictue && <div className='h-44 w-72 relative'>
                        <img className='h-44 w-72 p-1 rounded-lg' src={productPictue} alt="productPicure" />
                        <span onClick={() => setProductPicture("")}  className=' absolute text-2xl top-[5px] text-red-500 right-[5px] cursor-pointer'><TiDelete/></span>
                        </div>}
                        
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
                      className="bg-red-500 px-6 py-2 rounded-lg text-white"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
      );
};

export default AddProduct;