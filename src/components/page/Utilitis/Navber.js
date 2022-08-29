import React from "react";
import Banner from "../Home/Banner";
import {NavLink, useNavigate} from 'react-router-dom'
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
const Navber = () => {
  const [user, loadings, error]= useAuthState(auth)
  const navigate = useNavigate()
    const cart = useSelector((state) => state.cart.cart)
 
  
  const navber = (
    
    <>
      <li>
        < NavLink to='/'>Home</ NavLink>
      </li>
      <li>
        < NavLink to='/view/all/product'>Shopping</ NavLink>
      </li>
      {/* <li>
        <a>About</a>
      </li> */}
      {user && <li>
      < NavLink to='/dashboard'>Dashboard</ NavLink>
      </li>}
      
      <li>
        <a>Blog</a>
      </li>
    </>
  );
  return (
    <>
      <div className="bg-base-200">
        <div className="navbar   max-w-7xl m-auto px-2">
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
            <a className="btn btn-ghost normal-case text-xl">Smart Ecommarce</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">{navber}</ul>
          </div>
          <div className="navbar-end">
          <div class="dropdown dropdown-end">
      <label onClick={()=>navigate('/cart')} tabindex="0" class="btn btn-ghost btn-circle">
        <div class="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span class="badge badge-sm indicator-item">{cart?.length}</span>
        </div>
      </label>
    </div>

            <div className="dropdown dropdown-end px-2">
              <label tabindex="0" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://placeimg.com/80/80/people" />
                </div>
              </label>
              <ul
                tabindex="0"
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li >
                  <a onClick={() => signOut(auth)}>Logout</a>
                </li>
              </ul>
            </div>
           {!user &&   <button className="px-4 py-2 bg-red-400 rounded-lg text-white"><NavLink to='/login'>Login</NavLink></button>}
           
           

            
          </div>
        </div>
      </div>
    </>
  );
};

export default Navber;
