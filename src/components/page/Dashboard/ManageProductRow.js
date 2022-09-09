import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductDeleteM from '../Modal/ProductDeleteM';
const ManageProductRow = ({ product }) => {
  const { name, price, Stock, images, category, description , _id } = product;
  const navigate = useNavigate()

  const [userId, setUserId] = useState("")
  const [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
    const deletehendeler = (id) => {
      setUserId(id)
      openModal()
    }

  return (
    <tr className="border-b">
      <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
        <div class="avatar">
          <div class="w-12 rounded-xl">
            <img src={images[0]?.url} />
          </div>
        </div>
      </th>
      <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
        {name}
      </th>
      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        {category}
      </td>
      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        {price}
      </td>
      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        {Stock}
      </td>
      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        {description}
      </td>
      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        <button onClick={()=>navigate(`/dashboard/product/readMore/${_id}`)} className="bg-red-500 text-white px-4 py-1 rounded-lg">Read More</button>
      </td>

      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        <button
        onClick={()=>deletehendeler(_id)}
        >
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
      {isOpen && <ProductDeleteM
            closeModal={closeModal}
            isOpen={isOpen}
            openModal={openModal}
            id={userId}

          
            ></ProductDeleteM>}
    </tr>
  );
};

export default ManageProductRow;
