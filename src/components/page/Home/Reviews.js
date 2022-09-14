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
          <p className="text-xl">RECENT REVIEWS</p>
          <div className="">
            <Swiper
              pagination={true}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <section class="text-gray-600 body-font">
                  <div class="container  py-10 mx-auto">
                    <div class="flex flex-wrap -m-4">
                      <div
                        data-aos="zoom-out-right"
                        data-aos-duration="1000"
                        class="p-4 md:w-1/2 w-full"
                      >
                        <div class="h-full p-8 border shadow-md bg-white  rounded-lg">
                          <svg
                            className="text-[#EC255A]  h-6 mb-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            class="block w-5 h-5 text-gray-400 mb-4"
                            viewBox="0 0 975.036 975.036"
                          >
                            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                          </svg>
                          <p class="leading-relaxed mb-6">
                            দ্রুত ডেলিভারি পেয়েছি.. আর কাপড়ের কোয়ালিটি অনেক
                            ভালো,, এই টাকার মধ্যে বেশ ভালো একটি গেন্জি.. আশা করি
                            কেউ আশাহত হবেন না..
                            <br />
                            #Recommended ❤️
                          </p>
                          <a class="inline-flex items-center">
                            <img
                              alt="testimonial"
                              src="/Assist/picture/comment1.jpg"
                              class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                            />
                            <span class="flex-grow flex flex-col pl-4">
                              <span class="title-font font-medium text-gray-900">
                                Juboraj Islam Mamun
                              </span>
                              <span class="text-gray-500 text-sm">
                                Chittagong
                              </span>
                            </span>
                          </a>
                        </div>
                      </div>
                      <div
                        data-aos="zoom-out-left"
                        data-aos-duration="1000"
                        class="p-4 md:w-1/2 w-full"
                      >
                        <div class="h-full p-8 border shadow-md text-white bg-[#062C30]  rounded-lg">
                          <svg
                            className="text-[#EC255A]  h-6 mb-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            class="block w-5 h-5 text-gray-400 mb-4"
                            viewBox="0 0 975.036 975.036"
                          >
                            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                          </svg>
                          <p class="leading-relaxed mb-6">
                            পণ্যের গুণগত মান মোটামুটি আমি ডিপ ব্লু কালার অর্ডার
                            করেছিলাম কিন্তু আমার কাছে এসেছে এ্যাশ ব্লু একটু
                            পানচি কালার। আশাকরি Smart E-Shop নেক্সট টাইমে
                            আমাদেরকে আরও ভাল কিছু উপহার দিবেন। ডেলিভারি বয়
                            সার্ভিস ভালো ছিল গুড জব।
                          </p>
                          <a class="inline-flex items-center">
                            <img
                              alt="testimonial"
                              src="/Assist/picture/comment2.jpg"
                              class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                            />
                            <span class="flex-grow flex flex-col pl-4">
                              <span class="title-font font-medium text-white">
                                Tanvir Ahmed
                              </span>
                              <span class="text-gray-300 text-sm">
                                Rangamti,Chittagong
                              </span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </SwiperSlide>
              <SwiperSlide>
                <section class="text-gray-600 body-font">
                  <div class="container  py-10 mx-auto">
                    <div class="flex flex-wrap -m-4">
                      <div
                        data-aos="zoom-out-right"
                        data-aos-duration="1000"
                        class="p-4 md:w-1/2 w-full"
                      >
                        <div class="h-full p-8 border shadow-md bg-white rounded-lg">
                          <svg
                            className="text-[#EC255A]  h-6 mb-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            class="block w-5 h-5 text-gray-400 mb-4"
                            viewBox="0 0 975.036 975.036"
                          >
                            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                          </svg>
                          <p class="leading-relaxed mb-6">
                            আমি একসাথে ৩টি নিয়েছিলাম সবগুলোই ১০০% ভালো ছিলো, দাম
                            অনুযায়ী মান অনেক ভালো। আর সেলারের কথায় এবং কাজে ১০০%
                            মিল আছে। সকলে চোখ বন্ধ করে নিতে পারেন। আর সবচেয়ে
                            ভালো ও সুন্দর ছিলো প্যাকেটিং টা।
                          </p>
                          <a class="inline-flex items-center">
                            <img
                              alt="testimonial"
                              src="/Assist/picture/comment3.jpg"
                              class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                            />
                            <span class="flex-grow flex flex-col pl-4">
                              <span class="title-font font-medium text-gray-900">
                                Mohammad Fhad
                              </span>
                              <span class="text-gray-500 text-sm">
                                Potiya, Chittagong
                              </span>
                            </span>
                          </a>
                        </div>
                      </div>
                      <div
                        data-aos="zoom-out-left"
                        data-aos-duration="1000"
                        class="p-4 md:w-1/2 w-full"
                      >
                        <div class="h-full p-8 border shadow-md text-white bg-[#062C30]  rounded-lg">
                          <svg
                            className="text-[#EC255A]  h-6 mb-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            class="block w-5 h-5 text-gray-400 mb-4"
                            viewBox="0 0 975.036 975.036"
                          >
                            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                          </svg>
                          <p class="leading-relaxed mb-6">
                            THANK U ..FUTURE AO AMADER STORE THEK A KINBEN SAI
                            ASHA KORC ..R ATO SUNDOR REVIEW DERA JONNO ABR O
                            APNK THANKS A LOT..GOD BLESS U ..
                          </p>
                          <a class="inline-flex items-center">
                            <img
                              alt="testimonial"
                              src="/Assist/picture/comment4.jpg"
                              class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                            />
                            <span class="flex-grow flex flex-col pl-4">
                              <span class="title-font font-medium text-white">
                                Sadia Akter
                              </span>
                              <span class="text-gray-300 text-sm">Dhaka</span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </SwiperSlide>
              <SwiperSlide>
                <section class="text-gray-600 body-font">
                  <div class="container  py-10 mx-auto">
                    <div class="flex flex-wrap -m-4">
                      <div
                        data-aos="zoom-out-right"
                        data-aos-duration="1000"
                        class="p-4 md:w-1/2 w-full"
                      >
                        <div class="h-full p-8 border shadow-md bg-white  rounded-lg">
                          <svg
                            className="text-[#EC255A]  h-6 mb-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            class="block w-5 h-5 text-gray-400 mb-4"
                            viewBox="0 0 975.036 975.036"
                          >
                            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                          </svg>
                          <p class="leading-relaxed mb-6">
                            I got the same products which I ordered. Thanks
                            seller and Daraz team for providing this wonderful
                            products within this amount. And delivery was quite
                            fast. I suggest others to purchase this products
                            from this seller.
                          </p>
                          <a class="inline-flex items-center">
                            <img
                              alt="testimonial"
                              src="/Assist/picture/comment5.jpg"
                              class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                            />
                            <span class="flex-grow flex flex-col pl-4">
                              <span class="title-font font-medium text-gray-900">
                                Nishan Das
                              </span>
                              <span class="text-gray-500 text-sm">
                                Chittagong
                              </span>
                            </span>
                          </a>
                        </div>
                      </div>
                      <div
                        data-aos="zoom-out-left"
                        data-aos-duration="1000"
                        class="p-4 md:w-1/2 w-full"
                      >
                        <div class="h-full p-8 border shadow-md text-white bg-[#062C30]  rounded-lg">
                          <svg
                            className="text-[#EC255A]  h-6 mb-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            class="block w-5 h-5 text-gray-400 mb-4"
                            viewBox="0 0 975.036 975.036"
                          >
                            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                          </svg>
                          <p class="leading-relaxed mb-6">
                            দাম হিসেবে শাড়ীর মান বেশ ভালো।তবে একটু ডিফেক্ট আছে
                            কয়েকটা জায়গায়।শাড়ী তে থাকে এই টাইপের ডিফেক্ট তবে এই
                            শাড়ীতে একটু বেশিই।কোঁচকানো আছে একটু একটু।তবে টেনে
                            দিলে ঠিক হয়ে যায়।তবে চলবে।আশা করেছিলাম পুরোপুরি
                            পারফেকশনের।
                          </p>
                          <a class="inline-flex items-center">
                            <img
                              alt="testimonial"
                              src="/Assist/picture/comment6.jpg"
                              class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                            />
                            <span class="flex-grow flex flex-col pl-4">
                              <span class="title-font font-medium text-white">
                                Mohammad Omor Faruk
                              </span>
                              <span class="text-gray-300 text-sm">Rongpur</span>
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
