import React from "react";
import { Link } from "react-router-dom";

const BrandProduct = ({ product }) => {
  const { _id, productName, productImg, brandName, type, price, rating } = product;

  return (
    <div className="card shadow-xl">
      <figure>
        <img className="h-[200px] my-4" src={productImg} alt="product-image" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-semibold">{productName}</h2>
        <p className="text-lg font-semibold">Brand : {brandName}</p>
        <p>Type : {type}</p>
        <p>Price : $ {price}</p>
        <p>rating : {rating}</p>
        <div className="card-actions w-full">
          <Link to={`/productDetails/${_id}`}>
            <button className="btn btn-ghost bg-blue-400">Details</button>
          </Link>
          <Link>
            <button className="btn btn-ghost bg-blue-400">Update</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BrandProduct;
