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
                <section className="py-5 grid  grid-cols-1   lg:grid-cols-3  gap-10 mb-5 ">
                  <div className="card h-[410px] w-80 bg-base-100 shadow-lg  relative">
                    <figure className="">
                      <img
                        src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/151642341/original/ec88e1330b7577bb4b39c4f50fb05eedfc3ca2fb/create-an-awesome-tshirt-design-for-you.jpg"
                        alt="Shoes"
                        className=" h-[175px] w-full"
                      />
                    </figure>
                    <div className="px-5">
                      <div class="avatar absolute top-[115px] left-[110px]">
                        <div class="w-24 rounded-full border-2 ring-offset-base-100 ring-offset-2">
                          <img src="https://placeimg.com/192/192/people" />
                        </div>
                      </div>
                      <div  className=" flex justify-center">
                     <div className="mt-10 text-center">
                     <h2 className="text-xl mt-1 font-medium">Juboraj Islam Mamun</h2>
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
                      <p className=" loading mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus impedit neque nisi eos sunt ipsa!</p>
                      <p className="text-sm mt-5 text-gray-600">2 day ago</p>
                     </div>
                      </div>
                    </div>
                  </div>
                  <div className="card h-[410px] w-80 bg-base-100 shadow-lg  relative">
                    <figure className="">
                      <img
                        src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/151642341/original/ec88e1330b7577bb4b39c4f50fb05eedfc3ca2fb/create-an-awesome-tshirt-design-for-you.jpg"
                        alt="Shoes"
                        className=" h-[175px] w-full"
                      />
                    </figure>
                    <div className="px-5">
                      <div class="avatar absolute top-[115px] left-[110px]">
                        <div class="w-24 rounded-full border-2 ring-offset-base-100 ring-offset-2">
                          <img src="https://placeimg.com/192/192/people" />
                        </div>
                      </div>
                      <div  className=" flex justify-center">
                     <div className="mt-10 text-center">
                     <h2 className="text-xl mt-1 font-medium">Juboraj Islam Mamun</h2>
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
                      <p className=" loading mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus impedit neque nisi eos sunt ipsa!</p>
                      <p className="text-sm mt-5 text-gray-600">2 day ago</p>
                     </div>
                      </div>
                    </div>
                  </div>
                  <div className="card h-[410px] w-80 bg-base-100 shadow-lg  relative">
                    <figure className="">
                      <img
                        src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/151642341/original/ec88e1330b7577bb4b39c4f50fb05eedfc3ca2fb/create-an-awesome-tshirt-design-for-you.jpg"
                        alt="Shoes"
                        className=" h-[175px] w-full"
                      />
                    </figure>
                    <div className="px-5">
                      <div class="avatar absolute top-[115px] left-[110px]">
                        <div class="w-24 rounded-full border-2 ring-offset-base-100 ring-offset-2">
                          <img src="https://placeimg.com/192/192/people" />
                        </div>
                      </div>
                      <div  className=" flex justify-center">
                     <div className="mt-10 text-center">
                     <h2 className="text-xl mt-1 font-medium">Juboraj Islam Mamun</h2>
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
                      <p className=" loading mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus impedit neque nisi eos sunt ipsa!</p>
                      <p className="text-sm mt-5 text-gray-600">2 day ago</p>
                     </div>
                      </div>
                    </div>
                  </div>
                 
                </section>
              </SwiperSlide>
              <SwiperSlide>
                <section className="py-5 grid  grid-cols-3 gap-5">
                  <div className="card h-[410px] w-80 bg-base-100 shadow-lg  relative">
                    <figure className="">
                      <img
                        src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/151642341/original/ec88e1330b7577bb4b39c4f50fb05eedfc3ca2fb/create-an-awesome-tshirt-design-for-you.jpg"
                        alt="Shoes"
                        className=" h-[175px] w-full"
                      />
                    </figure>
                    <div className="px-5">
                      <div class="avatar absolute top-[115px] left-[110px]">
                        <div class="w-24 rounded-full border-2 ring-offset-base-100 ring-offset-2">
                          <img src="https://placeimg.com/192/192/people" />
                        </div>
                      </div>
                      <div  className=" flex justify-center">
                     <div className="mt-10 text-center">
                     <h2 className="text-xl mt-1 font-medium">Juboraj Islam Mamun</h2>
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
                      <p className=" loading mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus impedit neque nisi eos sunt ipsa!</p>
                      <p className="text-sm mt-5 text-gray-600">2 day ago</p>
                     </div>
                      </div>
                    </div>
                  </div>
                  <div className="card h-[410px] w-80 bg-base-100 shadow-lg  relative">
                    <figure className="">
                      <img
                        src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/151642341/original/ec88e1330b7577bb4b39c4f50fb05eedfc3ca2fb/create-an-awesome-tshirt-design-for-you.jpg"
                        alt="Shoes"
                        className=" h-[175px] w-full"
                      />
                    </figure>
                    <div className="px-5">
                      <div class="avatar absolute top-[115px] left-[110px]">
                        <div class="w-24 rounded-full border-2 ring-offset-base-100 ring-offset-2">
                          <img src="https://placeimg.com/192/192/people" />
                        </div>
                      </div>
                      <div  className=" flex justify-center">
                     <div className="mt-10 text-center">
                     <h2 className="text-xl mt-1 font-medium">Juboraj Islam Mamun</h2>
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
                      <p className=" loading mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus impedit neque nisi eos sunt ipsa!</p>
                      <p className="text-sm mt-5 text-gray-600">2 day ago</p>
                     </div>
                      </div>
                    </div>
                  </div>
                  <div className="card h-[410px] w-80 bg-base-100 shadow-lg  relative">
                    <figure className="">
                      <img
                        src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/151642341/original/ec88e1330b7577bb4b39c4f50fb05eedfc3ca2fb/create-an-awesome-tshirt-design-for-you.jpg"
                        alt="Shoes"
                        className=" h-[175px] w-full"
                      />
                    </figure>
                    <div className="px-5">
                      <div class="avatar absolute top-[115px] left-[110px]">
                        <div class="w-24 rounded-full border-2 ring-offset-base-100 ring-offset-2">
                          <img src="https://placeimg.com/192/192/people" />
                        </div>
                      </div>
                      <div  className=" flex justify-center">
                     <div className="mt-10 text-center">
                     <h2 className="text-xl mt-1 font-medium">Juboraj Islam Mamun</h2>
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
                      <p className=" loading mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus impedit neque nisi eos sunt ipsa!</p>
                      <p className="text-sm mt-5 text-gray-600">2 day ago</p>
                     </div>
                      </div>
                    </div>
                  </div>
                 
                </section>
              </SwiperSlide>
              <SwiperSlide>
                <section className="py-5 grid  grid-cols-3 gap-5">
                  <div className="card h-[410px] w-80 bg-base-100 shadow-lg  relative">
                    <figure className="">
                      <img
                        src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/151642341/original/ec88e1330b7577bb4b39c4f50fb05eedfc3ca2fb/create-an-awesome-tshirt-design-for-you.jpg"
                        alt="Shoes"
                        className=" h-[175px] w-full"
                      />
                    </figure>
                    <div className="px-5">
                      <div class="avatar absolute top-[115px] left-[110px]">
                        <div class="w-24 rounded-full border-2 ring-offset-base-100 ring-offset-2">
                          <img src="https://placeimg.com/192/192/people" />
                        </div>
                      </div>
                      <div  className=" flex justify-center">
                     <div className="mt-10 text-center">
                     <h2 className="text-xl mt-1 font-medium">Juboraj Islam Mamun</h2>
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
                      <p className=" loading mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus impedit neque nisi eos sunt ipsa!</p>
                      <p className="text-sm mt-5 text-gray-600">2 day ago</p>
                     </div>
                      </div>
                    </div>
                  </div>
                  <div className="card h-[410px] w-80 bg-base-100 shadow-lg  relative">
                    <figure className="">
                      <img
                        src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/151642341/original/ec88e1330b7577bb4b39c4f50fb05eedfc3ca2fb/create-an-awesome-tshirt-design-for-you.jpg"
                        alt="Shoes"
                        className=" h-[175px] w-full"
                      />
                    </figure>
                    <div className="px-5">
                      <div class="avatar absolute top-[115px] left-[110px]">
                        <div class="w-24 rounded-full border-2 ring-offset-base-100 ring-offset-2">
                          <img src="https://placeimg.com/192/192/people" />
                        </div>
                      </div>
                      <div  className=" flex justify-center">
                     <div className="mt-10 text-center">
                     <h2 className="text-xl mt-1 font-medium">Juboraj Islam Mamun</h2>
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
                      <p className=" loading mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus impedit neque nisi eos sunt ipsa!</p>
                      <p className="text-sm mt-5 text-gray-600">2 day ago</p>
                     </div>
                      </div>
                    </div>
                  </div>
                  <div className="card h-[410px] w-80 bg-base-100 shadow-lg  relative">
                    <figure className="">
                      <img
                        src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/151642341/original/ec88e1330b7577bb4b39c4f50fb05eedfc3ca2fb/create-an-awesome-tshirt-design-for-you.jpg"
                        alt="Shoes"
                        className=" h-[175px] w-full"
                      />
                    </figure>
                    <div className="px-5">
                      <div class="avatar absolute top-[115px] left-[110px]">
                        <div class="w-24 rounded-full border-2 ring-offset-base-100 ring-offset-2">
                          <img src="https://placeimg.com/192/192/people" />
                        </div>
                      </div>
                      <div  className=" flex justify-center">
                     <div className="mt-10 text-center">
                     <h2 className="text-xl mt-1 font-medium">Juboraj Islam Mamun</h2>
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
                      <p className=" loading mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus impedit neque nisi eos sunt ipsa!</p>
                      <p className="text-sm mt-5 text-gray-600">2 day ago</p>
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
