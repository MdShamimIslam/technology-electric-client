import React from "react";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const AddProduct = () => {
  const handleAddToProduct = (e) => {
    e.preventDefault();
    const form = e.target;

    const productName = form.productName.value;
    const productImg = form.productImg.value;
    const brandName = form.brandName.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.description.value;

    const addProduct = {
      productName,
      productImg,
      brandName,
      type,
      price,
      rating,
      description,
    };

    fetch("https://technology-electronic-server-zeta.vercel.app/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Product added Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        }
      });
  };

  return (
    <div className="my-8 w-3/4 mx-auto">
      <Helmet>
        <title>Sinrato || Add product</title>
      </Helmet>
      <div>
        <h2 className="md:text-3xl text-2xl font-semibold text-center">
          If You want to add Product
        </h2>
        <div className="mt-4">
          <form onSubmit={handleAddToProduct}>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
              <div>
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Product name</span>
                  </div>
                  <input
                    type="text"
                    name="productName"
                    placeholder="product name"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div>
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Product Image</span>
                  </div>
                  <input
                    type="text"
                    placeholder="product image"
                    name="productImg"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div>
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Brand name</span>
                  </div>
                  <select
                    name="brandName"
                    className="select select-bordered w-full"
                  >
                    <option>Select Brand name</option>
                    <option>Walton</option>
                    <option>Singer</option>
                    <option>Jamuna</option>
                    <option>Samsung</option>
                    <option>Konka</option>
                    <option>Sony</option>
                    <option>TechMaster</option>
                    <option>ElectroGadget</option>
                    <option>AudioMasters</option>
                  </select>
                </label>
              </div>
              <div>
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">product Type</span>
                  </div>
                  <input
                    type="text"
                    placeholder="product type"
                    name="type"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>

              <div>
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Price</span>
                  </div>
                  <input
                    type="text"
                    placeholder="price"
                    name="price"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div>
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Rating</span>
                  </div>
                  <input
                    type="text"
                    placeholder="rating"
                    name="rating"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            <div>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Description</span>
                </div>
                <textarea
                  placeholder="product description type here ..."
                  name="description"
                  className="textarea textarea-bordered h-36 textarea-md w-full"
                ></textarea>
              </label>
            </div>
            <button className="btn bg-cyan-300 w-full mt-4">Add Product</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
