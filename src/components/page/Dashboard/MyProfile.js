import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { FaGraduationCap } from "react-icons/fa";
import { MdOutlineAccountBox } from "react-icons/md";
import { MdCastForEducation } from "react-icons/md";
import { MdDateRange} from "react-icons/md";
import { AiOutlineMail} from "react-icons/ai";
import { NavLink } from "react-router-dom";
const MyProfile = () => {
  const [user] = useAuthState(auth);
  const userId = localStorage.getItem("UserId")
  const [myProfile , setMyProfile] = useState({})

  useEffect(()=>{
    fetch(`https://boiling-mesa-36077.herokuapp.com/user/single/${userId}`)
    .then(res => res.json())
    .then(data => setMyProfile(data?.user))
  },[])
  return (
    <div className="mb-5 px-4 lg:px-0">
      <div>
        <div className="w-full lg:w-9/12 mx-auto border  shadow-md rounded-lg p-5">
          <div className="">
            <img
              className="rounded-xl relative h-[150px] object-cover lg:h-[250px] w-full "
              src={myProfile?.cover?.url}
              alt=""
            />
          </div>
          <div className="h-50 relative"></div>

          <div className="mt-2">
            <p className="pl-[165px] text-xl font-medium">
              {user?.displayName} ({myProfile?.username})
            </p>
          </div>

          <div className="h-8 relative">
            <div class="avatar online">
              <div class="w-28 rounded-full absolute top-[-110px] lg:top-[-110px] left-10">
                <img
                  className=""
                  src={myProfile?.avatar?.url}
                />
              </div>
            </div>
          </div>
        
          <div className=" flex justify-center">
            <p className="lg:w-4/12  text-center   font-sans">
              {myProfile?.bio}
            </p>
          </div>
          <div className="flex justify-center mt-3"> 
            <NavLink to='/dashboard/updateProfile' className="bg-[#062C30] text-white px-6 py-1  rounded-lg">Edit Profile</NavLink>
          </div>
          <div className="mt-5 flex justify-center">
            <div>
              <div className="flex items-center gap-2">
                <span className="   text-xl">
                  <FaGraduationCap />
                </span>
                <span className="">
               
                  Studied At{" "}
                  <span className=" font-medium">
                    {myProfile?.univercity}
                  </span>
                </span>
              </div>
              <div className="flex items-center gap-2 mt-2">
              <span className=" text-xl">
                  <MdOutlineAccountBox />
                </span>
              <span className="">
                Profession At{" "}
                <span className=" font-medium">
                {myProfile?.profession}
                </span>
              </span>
              </div>
              <div className="flex items-center gap-2 mt-2">
              <span className=" text-xl">
                  <MdCastForEducation />
                </span>
              <span className="">
              Job Title At{" "}
                <span className=" font-medium">
                {myProfile?.jobtitle}
                </span>
              </span>
              </div>
              <div className="flex items-center gap-2 mt-2">
              <span className=" text-xl">
                  <FaGraduationCap />
                </span>
              <span className="">
              Date Of Biths At{" "}
                <span className=" font-medium">
                {myProfile?.birthday}
                </span>
              </span>
              </div>
              <div className="flex items-center gap-2 mt-2">
              <span className=" text-xl">
                  <MdDateRange />
                </span>
              <span className="">
              Alternative Contect Email At{" "}
                <span className=" font-medium">
                {myProfile?.alternativEmail}
                </span>
              </span>
              </div>
              <div className="flex items-center gap-2 mt-2">
              <span className=" text-xl">
                  <AiOutlineMail />
                </span>
              <span className="">
              Joining Date At{" "}
                <span className=" font-medium">
                {myProfile?.createdAt}
                </span>
              </span>
              </div>
              
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
