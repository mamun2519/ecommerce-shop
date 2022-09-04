import React from "react";
import { useState } from "react";
import MakeAdminModal from "./MakeAdminModal";

const UserRow = ({ user }) => {
  const [isOpen , setIsOpen] = useState(false)
  const { name, email, role, avatar , _id} = user;
  const [userId , setUserId] = useState("")
  console.log(user);
  const makeAdminModal = (id) =>{
    setUserId(id)
    openModal()
 
  }
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }


  return (
    <tr>
      <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
        <div class="avatar">
          <div class="w-12 rounded-xl">
            <img src={avatar?.url} />
          </div>
        </div>
      </th>
      <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
        {name}
      </th>
      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        {email}
      </td>
      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        {role}
      </td>
      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        <button onClick={()=>makeAdminModal(_id)} className="px-6 py-1 bg-red-500 text-white rounded-lg">
          create Admin
        </button>
      </td>

      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        <button>
          <svg
            class="w-8 h-8 hover:text-blue-600 rounded-full hover:bg-gray-100 p-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            ></path>
          </svg>
        </button>
      </td>
      {isOpen && <MakeAdminModal
            closeModal={closeModal}
            isOpen={isOpen}
            openModal={openModal}
            id={userId}

          
            ></MakeAdminModal>}
    </tr>
  );
};

export default UserRow;
