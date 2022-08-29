import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { AiFillStar } from "react-icons/ai";
const ShowMessage = () => {
      const [user , lodaing] = useAuthState(auth)
  return (
   <div className=" grid lg:grid-cols-3 grid-cols-1 gap-5 lg:gap-20 lg:pr-16 px-4">
     <div> <div class="card w-80  h-36 bg-base-100 shadow-md border rounded-md">
      <div class="p-5">
           <h1 className="text-xl  font-medium">Hello {user?.displayName},</h1> 
           <p className="">Good Morning</p>
           <h3 className="">Wellcome Back Our DashBoard</h3>


       
      </div>
    </div>
      </div>
     <div>
     <div class="card w-80  h-36 bg-base-100 shadow-md border rounded-md ">
      <div class="p-5">
           <h1 className="text-xl  font-medium">By One Get One</h1> 
           <p className="">Ouer Special Tshart bey Offer To Day Special</p>
          


       
      </div>
    </div>
     </div>
     <div>
     <div class="card w-80  h-36 bg-base-100 shadow-md border rounded-md">
      <div class="p-5">
           <h1 className="text-xl  font-medium">New Special offer</h1> 
           <p className="">5000 BD Shpping</p>
           <h3 className="">We Get 45% Discount</h3>


       
      </div>
    </div>
     </div>
    


  
  


   </div>
  );
};

export default ShowMessage;
