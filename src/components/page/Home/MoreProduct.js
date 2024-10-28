import React, { useEffect } from "react";
import { useState } from "react";

import Product from "./Product";

const MoreProduct = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
<<<<<<< HEAD
    fetch("http://localhost:5000/product/get", {
=======
    fetch("http://207.244.230.118:5000/product/get", {
>>>>>>> 9e080e4f0e88e48ea1ed5c2ec24c25c8a6de7c7e
      headers: { authorization: `Bearer ${localStorage.getItem("UserToken")}` },
    })
      .then((res) => res.json())
      .then((data) => setProduct(data.products));
  }, []);
  return (
    <div className="lg:w-4/5 mx-auto  ">
      <div className=" grid lg:grid-cols-3 grid-cols-1  gap-5  mt-5">
        {product.slice(0, 6).map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default MoreProduct;
