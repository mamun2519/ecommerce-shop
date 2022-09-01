import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { FaGraduationCap } from "react-icons/fa";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="mb-20 px-4 lg:px-0">
      <div>
        <div className="w-full lg:w-9/12 mx-auto border  shadow-md rounded-lg p-5">
          <div className="">
            <img
              className="rounded-xl relative h-[150px] object-cover lg:h-[250px] w-full "
              src="https://ichef.bbci.co.uk/news/999/cpsprodpb/15951/production/_117310488_16.jpg"
              alt=""
            />
          </div>
          <div className="h-50 relative"></div>

          <div className="mt-2">
            <p className="pl-[165px] text-xl font-medium">
              {user?.displayName}
            </p>
          </div>

          <div className="h-8 relative">
            <div class="avatar online">
              <div class="w-28 rounded-full absolute top-[-110px] lg:top-[-110px] left-10">
                <img
                  className=""
                  src="https://ichef.bbci.co.uk/news/999/cpsprodpb/15951/production/_117310488_16.jpg"
                />
              </div>
            </div>
          </div>

          <div className=" flex justify-center">
            <p className="lg:w-4/12  text-center   font-sans">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic,
              expedita?
            </p>
          </div>
          <div className="mt-5 flex justify-center">
            <div>
              <div className="flex items-center gap-2">
                <span className=" text-xl">
                  <FaGraduationCap />
                </span>
                <span className="">
               
                  Studied At
                  <span>
                    Lorem, ipsum dolor sit amet consectetur adipisicing.
                  </span>
                </span>
              </div>
              <div className="flex items-center gap-2 mt-2">
              <span className=" text-xl">
                  <FaGraduationCap />
                </span>
              <span className="">
                Profession At{" "}
                <span>
                  Lorem, ipsum dolor sit amet consectetur adipisicing.
                </span>
              </span>
              </div>
              <div className="flex items-center gap-2 mt-2">
              <span className=" text-xl">
                  <FaGraduationCap />
                </span>
              <span className="">
              Job Title At{" "}
                <span>
                  Lorem, ipsum dolor sit amet consectetur adipisicing.
                </span>
              </span>
              </div>
              <div className="flex items-center gap-2 mt-2">
              <span className=" text-xl">
                  <FaGraduationCap />
                </span>
              <span className="">
              Date Of Biths At{" "}
                <span>
                  Lorem, ipsum dolor sit amet consectetur adipisicing.
                </span>
              </span>
              </div>
              <div className="flex items-center gap-2 mt-2">
              <span className=" text-xl">
                  <FaGraduationCap />
                </span>
              <span className="">
              Alternative Contect Email At{" "}
                <span>
                  Lorem, ipsum dolor sit amet consectetur adipisicing.
                </span>
              </span>
              </div>
              <div className="flex items-center gap-2 mt-2">
              <span className=" text-xl">
                  <FaGraduationCap />
                </span>
              <span className="">
              Joining Date At{" "}
                <span>
                  Lorem, ipsum dolor sit amet consectetur adipisicing.
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
