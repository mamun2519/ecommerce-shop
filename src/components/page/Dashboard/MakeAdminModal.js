import { Dialog, Transition } from "@headlessui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Fragment } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { AiOutlineMail } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import { fetchAdmin } from "../Futurecher/Slice/getallAdminSlice";
import { fetchUser } from "../Futurecher/Slice/userSlice";

const MakeAdminModal = ({ closeModal, openModal, isOpen, id }) => {
  const [user, setUser] = useState({});
  const [role, setRole] = useState("");
  const [users, lodaing] = useAuthState(auth);
  const disPatch = useDispatch();
  useEffect(() => {
  
      fetch(`https://ecommerce-shop-server-w8qm.vercel.app/user/single/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data?.user));

  
    
  }, []);

  const selectUserRole = (e) => {
    setRole(e.target.value);
  };

  console.log(user);
  const makeUserAdminHendeler = (user) => {
    fetch(
      `https://ecommerce-shop-server-w8qm.vercel.app/user/admin/${user?.email}?roleAction=${role}`,
      {
        method: "PUT",
        headers: {
          authorization: `Bearer ${localStorage.getItem("UserToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.admin.matchedCount > 0) {
          disPatch(fetchUser());
          disPatch(fetchAdmin());
          toast("Admin Make Successfull");
          closeModal();
        }
      });
  };
  return (
    <div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="lg:w-96 w-72 py-10 max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium flex justify-center leading-6 text-gray-900"
                  >
                    <div>
                      <div className="relative">
                        <div className="border p-2   w-9 rounded absolute top-[32px] left-1 text-[#EC255A]">
                          <CgProfile />
                        </div>
                        <label for="username" class="block text-sm text-black">
                          Name
                        </label>

                        <input
                          type="text"
                          value={user?.name}
                          placeholder="Email address"
                          class="block pl-12 w-full px-4 py-2 mt-2  bg-white border rounded-md   outline-none  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring focus:ring-opacity-40"
                        />
                      </div>

                      <div class="mt-4">
                        <div class="flex items-center justify-between relative">
                          <div className="border p-2   w-9 rounded absolute top-[32px] left-1 text-[#EC255A]">
                            <AiOutlineMail />
                          </div>
                          <label
                            for="password"
                            class="block text-sm text-black "
                          >
                            Email
                          </label>
                        </div>

                        <input
                          type="email"
                          placeholder="Enter Email"
                          value={user?.email}
                          class="block w-full px-4 py-2 mt-2 pl-12  bg-white border rounded-md   focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                      </div>

                      <div className="mt-4">
                        <label for="role" class="block text-sm text-black ">
                          Role
                        </label>
                        <select
                          //     ref={orderStatusRef}
                          onChange={(e) => selectUserRole(e)}
                          class="w-full block  
  px-2 py-2   bg-slate-100 border rounded-md   outline-none  focus:border-blue-400 mt-2 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring focus:ring-opacity-40"
                        >
                          <option value={user?.role} selected>
                            {user?.role}
                          </option>
                          <option value="admin">Admin</option>
                        </select>
                      </div>

                      <div class="mt-6">
                        <button
                          onClick={() => makeUserAdminHendeler(user)}
                          className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#062C30] rounded-md"
                        >
                          Make Admin
                        </button>
                      </div>
                    </div>
                  </Dialog.Title>

                  {/*       
                        <div className="mt-4 flex justify-center gap-5">
                          <button className=' bg-red-400 text-white rounded px-4 py-1'>
                            No
                          </button>
                          <button className=' bg-red-400 text-white rounded px-4 py-1'>
                            yes
                          </button>
                        </div> */}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default MakeAdminModal;
