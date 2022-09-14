import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUserAvater } from "../Futurecher/Slice/userProSlice";
const Navber = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.cart);
  const avatars = useSelector((state) => state.avatar);
  

  const disPatch = useDispatch();
  const userId = localStorage.getItem("UserId");
  useEffect(() => {
    if(userId){
      disPatch(fetchUserAvater(userId));
    }
    
  }, [user , userId ]);


  const navber = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/view/all/product" >Shopping</NavLink>
      </li>
      {/* <li>
        <a>About</a>
      </li> */}
      {user && (
        <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
      )}

      <li>
        <NavLink to='/customerService'>Customer Service</NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className="bg-base-200 ">
        <div className="navbar    max-w-7xl m-auto px-2">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabindex="0" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabindex="0"
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navber}
              </ul>
            </div>
            <a className="btn btn-ghost px-0 lg:px-4 normal-case text-xl">
              {/* SMA<span className="text-[#EC255A]">RT</span>
            
                E-S<span className="text-[#EC255A]">HOP</span> */}
              
                <span> SM</span>
                <span className="text-[#EC255A]">ART</span>
                <span className="pl-2">{" "} E-S</span>
                <span className="text-[#EC255A]">HOP</span>
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">{navber}</ul>
          </div>
          <div className="navbar-end">
            <div class="dropdown dropdown-end">
              <label
                onClick={() => navigate("/cart")}
                tabindex="0"
                class="btn btn-ghost btn-circle"
              >
                <div class="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span class="badge badge-sm indicator-item">
                    {cart?.length}
                  </span>
                </div>
              </label>
            </div>

            {user && (
              <div className="dropdown dropdown-end px-2">
                <label tabindex="0" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={avatars?.avatar?.user?.avatar?.url} />
                  </div>
                </label>
                <ul
                  tabindex="0"
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <NavLink
                      to="/dashboard/myProfile"
                      className="justify-between"
                    >
                      Profile
                    </NavLink>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <a onClick={() => signOut(auth)}>Logout</a>
                  </li>
                </ul>
              </div>
            )}

            {!user && (
              <button className="px-4 py-2 bg-[#062C30] rounded-lg text-white">
                <NavLink to="/login">Login</NavLink>
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navber;
