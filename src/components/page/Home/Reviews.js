import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FcLike } from "react-icons/fc";
import { GrView } from "react-icons/gr";
import { AiFillStar } from "react-icons/ai";
import { Pagination } from "swiper";
const Reviews = () => {
  return (
    <div>
      <div id="testimonail" className="max-w-7xl m-auto lg:px-2 px-4 my-40">
        <div className="mt-16">
          <p className="text-xl">Coustomer Review</p>
          <div className="">
            <Swiper
              pagination={true}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <section className="py-5 grid  grid-cols-3 gap-5">
                  <div className="card h-[410px] w-80 bg-base-200 shadow-lg  relative">
                    <figure className="">
                      <img
                        src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/151642341/original/ec88e1330b7577bb4b39c4f50fb05eedfc3ca2fb/create-an-awesome-tshirt-design-for-you.jpg"
                        alt="Shoes"
                        className="rounded-xl h-[175px] w-full"
                      />
                    </figure>
                    <div >
                      <div class="avatar absolute top-[115px] left-[110px]">
                        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                          <img src="https://placeimg.com/192/192/people" />
                        </div>
                      </div>
                      <div  className=" flex justify-center">
                     <div className="mt-10">
                     <h2 className="text-xl font-medium">Juboraj Islam Mamun</h2>
                      <div className="flex mt-1 justify-center  text-orange-400 gap-1">
                        <span>
                          <AiFillStar />
                        </span>
                        <span>
                          <AiFillStar />
                        </span>
                        <span>
                          <AiFillStar />
                        </span>
                        <span>
                          <AiFillStar />
                        </span>
                        <span>
                          <AiFillStar />
                        </span>
                      </div>
                     </div>
                      </div>
                    </div>
                  </div>
                  <div className="card h-[410px] w-80 bg-base-100 shadow-lg relative ">
                    <figure className="px-5 pt-5">
                      <img
                        src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/151642341/original/ec88e1330b7577bb4b39c4f50fb05eedfc3ca2fb/create-an-awesome-tshirt-design-for-you.jpg"
                        alt="Shoes"
                        className="rounded-xl h-[175px] w-full"
                      />
                    </figure>
                    <div className="card-b  px-5 pt-3">
                      <p className="badge badge-secondary p-2 absolute top-[25px] right-[2px]  rotate-45">
                        In Stcok
                      </p>
                      <h2 className="card-title pb-0">Smart T-Shart </h2>

                      <span className=" text-gray-500">Man Fashion</span>
                      <p className="text-xl text-red-400 font-medium">999$</p>
                      <small className="line-through">1200$</small>

                      <div className="flex mt-2  text-orange-400 gap-1">
                        <span>
                          <AiFillStar />
                        </span>
                        <span>
                          <AiFillStar />
                        </span>
                        <span>
                          <AiFillStar />
                        </span>
                        <span>
                          <AiFillStar />
                        </span>
                        <span>
                          <AiFillStar />
                        </span>
                      </div>

                      <div className="mt-5 flex gap-3">
                        <button className=" px-4 w-1/2 py-2 bg-red-400 rounded-lg text-white ">
                          Buy Now
                        </button>
                        <button className=" px-4 py-2 text-xl bg-base-200 rounded-lg text-white">
                          <span className="">
                            <FcLike />
                          </span>
                        </button>
                        <button className=" px-4 py-2 text-xl bg-base-200 text-red-400 rounded-lg">
                          <span className="">
                            <GrView />
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card h-[410px] w-80 bg-base-100 shadow-lg relative ">
                    <figure className="px-5 pt-5">
                      <img
                        src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/151642341/original/ec88e1330b7577bb4b39c4f50fb05eedfc3ca2fb/create-an-awesome-tshirt-design-for-you.jpg"
                        alt="Shoes"
                        className="rounded-xl h-[175px] w-full"
                      />
                    </figure>
                    <div className="card-b  px-5 pt-3">
                      <p className="badge badge-secondary p-2 absolute top-[25px] right-[2px]  rotate-45">
                        In Stcok
                      </p>
                      <h2 className="card-title pb-0">Smart T-Shart </h2>

                      <span className=" text-gray-500">Man Fashion</span>
                      <p className="text-xl text-red-400 font-medium">999$</p>
                      <small className="line-through">1200$</small>

                      <div className="flex mt-2  text-orange-400 gap-1">
                        <span>
                          <AiFillStar />
                        </span>
                        <span>
                          <AiFillStar />
                        </span>
                        <span>
                          <AiFillStar />
                        </span>
                        <span>
                          <AiFillStar />
                        </span>
                        <span>
                          <AiFillStar />
                        </span>
                      </div>

                      <div className="mt-5 flex gap-3">
                        <button className=" px-4 w-1/2 py-2 bg-red-400 rounded-lg text-white ">
                          Buy Now
                        </button>
                        <button className=" px-4 py-2 text-xl bg-base-200 rounded-lg text-white">
                          <span className="">
                            <FcLike />
                          </span>
                        </button>
                        <button className=" px-4 py-2 text-xl bg-base-200 text-red-400 rounded-lg">
                          <span className="">
                            <GrView />
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </section>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card h-[410px] bg-base-100 shadow-lg relative ">
                  <figure className="px-5 pt-5">
                    <img
                      src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/151642341/original/ec88e1330b7577bb4b39c4f50fb05eedfc3ca2fb/create-an-awesome-tshirt-design-for-you.jpg"
                      alt="Shoes"
                      className="rounded-xl h-[175px] w-full"
                    />
                  </figure>
                  <div className="card-b  px-5 pt-3">
                    <p className="badge badge-secondary p-2 absolute top-[25px] right-[2px]  rotate-45">
                      In Stcok
                    </p>
                    <h2 className="card-title pb-0">Smart T-Shart </h2>

                    <span className=" text-gray-500">Man Fashion</span>
                    <p className="text-xl text-red-400 font-medium">999$</p>
                    <small className="line-through">1200$</small>

                    <div className="flex mt-2  text-orange-400 gap-1">
                      <span>
                        <AiFillStar />
                      </span>
                      <span>
                        <AiFillStar />
                      </span>
                      <span>
                        <AiFillStar />
                      </span>
                      <span>
                        <AiFillStar />
                      </span>
                      <span>
                        <AiFillStar />
                      </span>
                    </div>

                    <div className="mt-5 flex gap-3">
                      <button className=" px-4 w-1/2 py-2 bg-red-400 rounded-lg text-white ">
                        Buy Now
                      </button>
                      <button className=" px-4 py-2 text-xl bg-base-200 rounded-lg text-white">
                        <span className="">
                          <FcLike />
                        </span>
                      </button>
                      <button className=" px-4 py-2 text-xl bg-base-200 text-red-400 rounded-lg">
                        <span className="">
                          <GrView />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <section className="text-gray-600 body-font">
                  <div className="container px-3 py-7 mx-auto">
                    <div className="flex flex-wrap -m-4">
                      <div className="p-4 md:w-1/2 w-full">
                        <div className="h-full bg-gray-100 p-8 rounded">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            className="block w-5 h-5 text-gray-400 mb-4"
                            viewBox="0 0 975.036 975.036"
                          >
                            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                          </svg>
                          <p className="leading-relaxed mb-6">
                            Synth chartreuse iPhone lomo cray raw denim brunch
                            everyday carry neutra before they sold out fixie s
                            microdosing. Tacos pinterest fanny pack venmo,
                            post-ironic heirloom try-hard pabst authentic
                            iceland.
                          </p>
                          <a className="inline-flex items-center">
                            <img
                              alt="testimonial"
                              src="/Asstes/picture/woman5.jfif"
                              className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                            />
                            <span className="flex-grow flex flex-col pl-4">
                              <span className="title-font font-medium text-gray-900">
                                Sarmin Akter
                              </span>
                              <span className="text-gray-500 text-sm">
                                Chittagong, Bangladesh
                              </span>
                            </span>
                          </a>
                        </div>
                      </div>
                      <div className="p-4 md:w-1/2 w-full">
                        <div className="h-full bg-gray-100 p-8 rounded">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            className="block w-5 h-5 text-gray-400 mb-4"
                            viewBox="0 0 975.036 975.036"
                          >
                            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                          </svg>
                          <p className="leading-relaxed mb-6">
                            Synth chartreuse iPhone lomo cray raw denim brunch
                            everyday carry neutra before they sold out fixie
                            microdosing. Tacos pinterest fanny pack venmo,
                            post-ironic heirloom try-hard pabst authentic
                            iceland.
                          </p>
                          <a className="inline-flex items-center">
                            <img
                              alt="testimonial"
                              src="/Asstes/picture/woman6.jfif"
                              className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                            />
                            <span className="flex-grow flex flex-col pl-4">
                              <span className="title-font font-medium text-gray-900">
                                Tamanna Tanha
                              </span>
                              <span className="text-gray-500 text-sm">
                                Kolkata, India
                              </span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
