import React from "react";
import { Helmet } from "react-helmet-async";
import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const product = useLoaderData();
  const {
    productImg,
    productName,
    brandName,
    description,
    type,
    price,
    rating,
  } = product;

  const handleAddToProduct = () => {
    const addToCartProduct = {
      productImg,
      productName,
      brandName,
      description,
      type,
      price,
      rating,
    };
    fetch("https://technology-electronic-server-zeta.vercel.app/carts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addToCartProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Product add to Cart Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="my-16">
      <Helmet>
        <title>MyShop || product details</title>
      </Helmet>
      <h3 className="md:text-4xl text-2xl font-semibold text-center text-primary">
        Product details
      </h3>
      <div className="card md:w-2/3 w-4/5 mx-auto shadow-2xl my-16">
        <figure>
          <img
            className="h-[300px] mt-4 w-full rounded-lg"
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
          <Rating initialRating={rating} readonly />
          <div className="card-actions ">
            <button
              onClick={handleAddToProduct}
              className="btn btn-ghost bg-cyan-700 w-full"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
