import React from "react";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const BrandProduct = ({ product }) => {
  const { _id, productName, productImg, brandName, type, price, rating } =
    product;

  return (
    <div className="card lg:w-[500px] md:w-[350px] shadow-2xl lg:mt-20 mt-12">
      <figure className="mt-6 ">
        <img className="h-[250px] my-4 w-3/4 rounded-lg" src={productImg} alt="product-image" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-semibold">{productName}</h2>
        <p className="text-lg font-semibold">Brand : {brandName}</p>
        <p>Type : {type}</p>
        <p>Price : $ {price}</p>
        <Rating initialRating={rating} readonly />
        <div className="card-actions w-full">
          <Link to={`/productDetails/${_id}`}>
            <button className="btn btn-ghost bg-cyan-700">Details</button>
          </Link>
          <Link to={`/updateProduct/${_id}`}>
            <button className="btn btn-ghost bg-cyan-700">Update</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BrandProduct;
