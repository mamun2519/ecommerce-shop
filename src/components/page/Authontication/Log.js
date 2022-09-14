import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BiLockOpenAlt } from "react-icons/bi";
import SocialLogin from "./SocialLogin";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

import auth from "../../../firebase.init";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import sendToken from "../Utilitis/sendToken";
import { useDispatch } from "react-redux";
import { fetchUserAvater } from "../Futurecher/Slice/userProSlice";
const Log = () => {
  const disPatch = useDispatch()
  const [token, setToken] = useState("");
  const [avatar, setAvatar] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9SPHGbT7zpUnQWxX6G23hhBVjxxAioJDoSNePax1i6FPVuO1bD2NweVg44RenkPB3vTI&usqp=CAU"
  );
  const [cover , setCover] = useState("https://cdn.digitbin.com/wp-content/uploads/Why-I-am-Seeing-Blank-Facebook-Profile-and-How-to-Fix-it.jpg")
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [signInWithEmailAndPassword, users, loading, errorss] =
    useSignInWithEmailAndPassword(auth);
  const [user, loadings, error] = useAuthState(auth);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
    const myForm = new FormData();
    myForm.append("email", data.email);
    myForm.append("avatar", avatar);
    sendToken(myForm );
    setToken(localStorage.getItem("UserToken"));
    disPatch(fetchUserAvater(localStorage.getItem("UserId")))
  };

  // google login hook
  const [signInWithGoogle, Guser, Gloading, Gerror] = useSignInWithGoogle(auth);

  let errorMessage;
  if (error || Gerror) {
    errorMessage = (
      <p className="text-red-500">{error?.message || Gerror?.message}</p>
    );
  }
  const userId = localStorage.getItem("UserId");
  if (Guser) {
    const myForm = new FormData();
    myForm.append("name", user?.displayName);
    myForm.append("email", user?.email);
    myForm.append("avatar", user?.photoURL);
    myForm.append("cover", cover);
    sendToken(myForm);
    setToken(localStorage.getItem("UserToken"));
    
  }

  if ( user) {
    navigate(from, { replace: true });
    disPatch(fetchUserAvater(userId))
    // navigate("/")
  }

  return (
    <div class="w-full max-w-sm py-6 px-4 m-auto bg-white ">
      {/* <h1 class="text-xl font-medium text-center text-black">Smart Eccomarce</h1> */}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="relative">
          <div className="border p-2   w-9 rounded absolute top-[32px] left-1 text-[#EC255A]">
            <AiOutlineMail />
          </div>
          <label for="username" class="block text-sm text-black">
            Email & Username
          </label>

          <input
            {...register("email", {
              required: {
                value: true,
                message: "Email is Required",
              },
              pattern: {
                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: "Provide a valid Email",
              },
            })}
            type="email"
            placeholder="Email address"
            class="block pl-12 w-full px-4 py-2 mt-2  bg-white border rounded-md   outline-none  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring focus:ring-opacity-40"
          />
          <label class="label">
            {errors.email?.type === "required" && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
            {errors.email?.type === "pattern" && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </label>
        </div>

        <div class="mt-4">
          <div class="flex items-center justify-between relative">
            <div className="border p-2   w-9 rounded absolute top-[32px] left-1 text-[#EC255A]">
              <BiLockOpenAlt />
            </div>
            <label for="password" class="block text-sm text-black ">
              Password
            </label>
            <a
              href="#"
              class="text-xs text-gray-600 dark:text-gray-400 hover:underline"
            >
              Forget Password?
            </a>
          </div>

          <input
            {...register("password", {
              required: {
                value: true,
                message: "Password is Required",
              },
              minLength: {
                value: 6,
                message: "Must be 6 characters or longer",
              },
            })}
            type="password"
            placeholder="Password"
            class="block w-full px-4 py-2 mt-2 pl-12  bg-white border rounded-md   focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
          <label class="label">
            {errors.password?.type === "required" && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
            {errors.password?.type === "minLength" && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
          </label>
        </div>

        <div class="mt-6">
          <input
            type="submit"
            value="Login"
            class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#062C30] rounded-md"
          />
          {errorMessage}
        </div>
      </form>

      <SocialLogin signInWithGoogle={signInWithGoogle}></SocialLogin>

      
    </div>
  );
};

export default Log;
