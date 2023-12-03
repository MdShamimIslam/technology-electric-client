import React from "react";
import { useLoaderData} from "react-router-dom";

const ProductDetails = () => {
const product = useLoaderData();
const {productImg,productName,brandName,description,type,price,rating} = product;

  return (
    <div>
      <div className="card shadow-xl my-12">
      <figure>
        <img
        className="h-[200px] my-4"
          src={productImg}
          alt="product-image"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-semibold">{productName}</h2>
        <p className="text-lg font-semibold">Brand : {brandName}</p>
        <p>{description}</p>
        <p>Type : {type}</p>
        <p>Price : $ {price}</p>
        <p>rating : {rating}</p>
        <div className="card-actions ">
              <button className="btn btn-ghost bg-blue-400 w-full">Add to Cart</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProductDetails;
