import React from "react";
import { useLoaderData } from "react-router-dom";

const Update = () => {
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
  return (
    <div className="my-8 w-3/4 mx-auto">
      <h2 className="text-center text-2xl">Brand Product update bellow</h2>
      <div className="mt-4">
        <form>
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
                  defaultValue={productName}
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
                  defaultValue={productImg}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Brand name</span>
                </div>
                <input
                  type="text"
                  placeholder="brand name"
                  name="brandName"
                  defaultValue={brandName}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Type</span>
                </div>
                <input
                  type="text"
                  placeholder="type"
                  name="type"
                  defaultValue={type}
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
                  defaultValue={price}
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
                  defaultValue={rating}
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
                placeholder="description"
                name="description"
                defaultValue={description}
                className="textarea textarea-bordered h-36 textarea-md w-full"
              ></textarea>
            </label>
          </div>
          <button className="btn bg-cyan-300 w-full mt-4">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Update;
