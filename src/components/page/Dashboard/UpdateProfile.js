import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { BiLockOpenAlt } from "react-icons/bi";
import auth from "../../../firebase.init";
import { useForm } from "react-hook-form";
import { AiFillCamera, AiOutlineMail } from "react-icons/ai";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { fetchUserAvater } from "../Futurecher/Slice/userProSlice";
import { MdCastForEducation, MdDateRange } from "react-icons/md";
import { SiAboutdotme} from "react-icons/si";
import { MdOutlineAccountBox} from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import PageTitle from "../Utilitis/PageTitle";
const UpdateProfile = () => {
  
  const [user] = useAuthState(auth);
  const [cover, setCover] = useState("");
  const [profile, setProfile] = useState("");
  const userId = localStorage.getItem("UserId");
  useEffect(() => {
    if (userId) {
      fetch(`https://boiling-mesa-36077.herokuapp.com/user/single/${userId}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setProfile(data?.user?.avatar?.url);
            setCover(data?.user?.cover?.url);
          }
        });
    }
  }, [userId]);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const disPatch = useDispatch()
  const changeCoverPictureHendeler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setCover(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  const changeProfilePictureHendeler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setProfile(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  const onSubmit = async (data) => {
    const myForm = new FormData();
    myForm.append("username", data.username);
    myForm.append("profession", data.profession);
    myForm.append("birthday", data.birthday);
    myForm.append("jobtitle", data.jobtitle);
    myForm.append("bio", data.bio);
    myForm.append("univercity", data.univercity);
    myForm.append("alternativEmail", data.alternativEmail);
    myForm.append("avatar", profile);
    myForm.append("cover", cover);

    await axios({
      method: "put",
      url: `https://boiling-mesa-36077.herokuapp.com/user/update/${userId}`,
      data: myForm,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((res) => {
        if (res.data.success) {
          toast("Profile Update Success");
          disPatch(fetchUserAvater(userId))
        }
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="mb-5 px-4 lg:px-0">
      <PageTitle title='Update Profile'></PageTitle>
      <div className="w-full lg:w-9/12 mx-auto border  shadow-md rounded-lg p-5">
        <div className="">
          <img
            className="rounded-xl relative h-[150px] object-cover lg:h-[250px] w-full "
            src={cover}
            alt=""
          />
        </div>
        <div className="h-50 relative">
          <div className="px-[15px] py-2 text-xl bg-base-200 rounded-lg text-black w-12 absolute top-[-60px] right-[20px] z-1">
            <input
              onChange={(e) => changeCoverPictureHendeler(e)}
              type="file"
              name="image-uplode"
              id="input"
              hidden
            />
            <label htmlFor="input" className=" ">
              <span className="">
                <span className="">
                  <AiFillCamera />
                </span>
              </span>
            </label>
          </div>
        </div>

        <div className="mt-2">
          <p className="pl-[190px] text-xl font-medium">{user?.displayName}</p>
          <p className="pl-[190px] text-sm">
            Update Photo And Personal Details
          </p>
        </div>

        <div className="h-14 relative">
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
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="">
            <div className=" grid grid-cols-3">
              <div className="flex  items-center py-0">
                <p>Username</p>
              </div>
              <div className="col-span-2">
                <div class="">
                  <div class="flex items-center justify-between relative">
                    <div className="border p-2   w-9 rounded absolute top-[12px] left-1 text-[#EC255A] ">
                    <AiOutlineMail />
                    </div>
                  </div>

                  <input
                    {...register("username", {
                      required: {
                        value: true,
                        message: "Username is Required",
                      },
                    })}
                    type="text"
                    placeholder="Enter username"
                    class="block w-full px-4 py-2 mt-2 pl-12  bg-white border rounded-md   focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                  <label class="label">
                    {errors.username?.type === "required" && (
                      <span className="text-red-500">
                        {errors.username.message}
                      </span>
                    )}
                  </label>
                </div>
              </div>
            </div>
            <div className=" grid grid-cols-3 mt-">
              <div className="flex  items-center py-0">
                <p>Job Title</p>
              </div>
              <div className=" col-span-2">
                <div class="">
                  <div class="flex items-center justify-between relative">
                    <div className="border p-2   w-9 rounded absolute top-[12px] left-1 text-[#EC255A]">
                    <MdCastForEducation />
                    </div>
                  </div>

                  <input
                    {...register("jobtitle", {
                      required: {
                        value: true,
                        message: "Job Title is Required",
                      },
                    })}
                    type="text"
                    placeholder="Enter Job Title"
                    class="block w-full px-4 py-2 mt-2 pl-12  bg-white border rounded-md   focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                  <label class="label">
                    {errors.jobtitle?.type === "required" && (
                      <span className="text-red-500">
                        {errors.jobtitle.message}
                      </span>
                    )}
                  </label>
                </div>
              </div>
            </div>
            <div className=" grid grid-cols-3 mt-">
              <div className="flex  items-center py-0">
                <p>Your Bio</p>
              </div>
              <div className=" col-span-2">
                <div class="">
                  <div class="flex items-center justify-between relative">
                    <div className="border p-2   w-9 rounded absolute top-[12px] left-1 text-[#EC255A]">
                      <SiAboutdotme />
                    </div>
                  </div>

                  <textarea
                    {...register("bio", {
                      required: {
                        value: true,
                        message: "Bio is Required",
                      },
                    })}
                    type="text"
                    placeholder="Enter Bio"
                    class="block w-full h-[100px] px-4 py-2 mt-2 pl-12  bg-white border rounded-md   focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                  <label class="label">
                    {errors.bio?.type === "required" && (
                      <span className="text-red-500">{errors.bio.message}</span>
                    )}
                  </label>
                </div>
              </div>
            </div>
            <div className=" grid grid-cols-3 mt-">
              <div className="flex  items-center py-0">
                <p>Profession</p>
              </div>
              <div className=" col-span-2">
                <div class="">
                  <div class="flex items-center justify-between relative">
                    <div className="border p-2   w-9 rounded absolute top-[12px] left-1 text-[#EC255A]">
                      <MdOutlineAccountBox />
                    </div>
                  </div>

                  <input
                    {...register("profession", {
                      required: {
                        value: true,
                        message: "Profession is Required",
                      },
                    })}
                    type="text"
                    placeholder="Enter Profession"
                    class="block w-full px-4 py-2 mt-2 pl-12  bg-white border rounded-md   focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                  <label class="label">
                    {errors.profession?.type === "required" && (
                      <span className="text-red-500">
                        {errors.profession.message}
                      </span>
                    )}
                  </label>
                </div>
              </div>
            </div>
            <div className=" grid grid-cols-3 mt-">
              <div className="flex  items-center py-0">
                <p>Univercity Name</p>
              </div>
              <div className=" col-span-2">
                <div class="">
                  <div class="flex items-center justify-between relative">
                    <div className="border p-2   w-9 rounded absolute top-[12px] left-1 text-[#EC255A]">
                      <FaGraduationCap />
                    </div>
                  </div>

                  <input
                    {...register("univercity", {
                      required: {
                        value: true,
                        message: "Univercity is Required",
                      },
                    })}
                    type="text"
                    placeholder="Enter Univercity"
                    class="block w-full px-4 py-2 mt-2 pl-12  bg-white border rounded-md   focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                  <label class="label">
                    {errors.univercity?.type === "required" && (
                      <span className="text-red-500">
                        {errors.univercity.message}
                      </span>
                    )}
                  </label>
                </div>
              </div>
            </div>
            <div className=" grid grid-cols-3 mt-">
              <div className="flex  items-center py-0">
                <p>Date Of Biths</p>
              </div>
              <div className=" col-span-2">
                <div class="">
                  <div class="flex items-center justify-between relative">
                    <div className="border p-2   w-9 rounded absolute top-[12px] left-1 text-[#EC255A]">
                      <MdDateRange/>
                    </div>
                  </div>

                  <input
                    {...register("birthday", {
                      required: {
                        value: true,
                        message: "Birthday is Required",
                      },
                    })}
                    type="date"
                    placeholder="Enter Birthday"
                    class="block w-full px-4 py-2 mt-2 pl-12  bg-white border rounded-md   focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                  <label class="label">
                    {errors.birthday?.type === "required" && (
                      <span className="text-red-500">
                        {errors.birthday.message}
                      </span>
                    )}
                  </label>
                </div>
              </div>
            </div>
            <div className=" grid grid-cols-3 mt-">
              <div className="mt-5  py-0">
                <div>
                  <p>Alternative Contect Email</p>
                  {/* <p className="text-sm ">Enter On Allternative email if you like to be contact by defarnt Email</p> */}
                </div>
              </div>
              <div className=" col-span-2">
                <div class="">
                  <div class="flex items-center justify-between relative">
                    <div className="border p-2   w-9 rounded absolute top-[12px] left-1 text-[#EC255A]">
                      <AiOutlineMail/>
                    </div>
                  </div>

                  <input
                    {...register("alternativEmail", {
                      required: {
                        value: true,
                        message: "AlternativEmail is Required",
                      },
                    })}
                    type="email"
                    placeholder="Enter Email"
                    class="block w-full px-4 py-2 mt-2 pl-12  bg-white border rounded-md   focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                  <label class="label">
                    {errors.alternativEmail?.type === "required" && (
                      <span className="text-red-500">
                        {errors.alternativEmail.message}
                      </span>
                    )}
                  </label>
                </div>
              </div>
            </div>
            <div className="text-center mt-4" >
              <input
                type="submit"
                value="Save"
                className="bg-[#062C30] px-16 py-2 rounded-lg text-white"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
