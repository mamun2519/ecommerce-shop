import React from "react";
import { useForm } from "react-hook-form";
import { AiOutlineMail } from "react-icons/ai";
import { BiLockOpenAlt } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import SocialLogin from "./SocialLogin";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";
const Reg = () => {
  const [user, loadings, error] = useAuthState(auth);
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  // create user hook
  const [createUserWithEmailAndPassword, Cuser, loading, Cerror] =
    useCreateUserWithEmailAndPassword(auth);
  // update fofile hook
  const [signInWithGoogle, Guser, Gloading, Gerror] = useSignInWithGoogle(auth);
  const [updateProfile, updating, Uerror] = useUpdateProfile(auth);
  const onSubmit = async (data) => {
    console.log(data);
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
  };

  // const [token] = useToken(Cuser || Guser )

  let errorMessage;
  if (Cerror || Uerror || Gerror) {
    errorMessage = (
      <p className="text-red-500">
        {Cerror?.message || Uerror?.message || Gerror?.message}
      </p>
    );
  }
  if (user) {
    navigate("/");
  }

  return (
    <div class="w-full max-w-sm py-6 px-4 m-auto bg-white ">
      {/* <h1 class="text-xl font-medium text-center text-black">Smart Eccomarce</h1> */}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="relative">
          <div className="border p-2   w-9 rounded absolute top-[32px] left-1 bg-red-200">
            <CgProfile />
          </div>
          <label for="username" class="block text-sm text-black">
            Name
          </label>

          <input
            {...register("name", {
              required: {
                value: true,
                message: "Name is Required",
              },
            })}
            type="text"
            placeholder="Name"
            class="block pl-12 w-full px-4 py-2 mt-2  bg-white border rounded-md   outline-none  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring focus:ring-opacity-40"
          />
          <label class="label">
            {errors.name?.type === "required" && (
              <span className="text-red-500">{errors.name.message}</span>
            )}
          </label>
        </div>
        <div className="relative mt-4">
          <div className="border p-2   w-9 rounded absolute top-[32px] left-1 bg-red-200">
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
            <div className="border p-2   w-9 rounded absolute top-[32px] left-1 bg-red-200">
              <BiLockOpenAlt />
            </div>
            <label for="password" class="block text-sm text-black ">
              Password
            </label>
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
            value="Regestion"
            class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-400 rounded-md"
          />
          {errorMessage}
        </div>
      </form>

      <SocialLogin signInWithGoogle={signInWithGoogle}></SocialLogin>

      {/* <p class="mt-8 text-xs font-light text-center text-gray-400"> Don't have an account? <a href="#"
                    class="font-medium text-gray-700 dark:text-gray-200 hover:underline">Create One</a></p> */}
    </div>
  );
};

export default Reg;
