import React from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import { MdDelete } from "react-icons/md";

const MyCart = () => {
  const carts = useLoaderData();
  return (
    <div className="my-12">
      <Helmet>
        <title>Sinrato || My cart</title>
      </Helmet>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Product image</th>
              <th>Product name</th>
              <th>Brand name</th>
              <th>Type</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
                carts?.map(cart=><tr key={cart._id}>
                    <td>
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={cart.productImg}
                            alt="product-image"
                          />
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center gap-3">
                        <div>
                          <div className="">{cart.productName}</div>
                        </div>
                      </div>
                    </td>
                    <td className="font-semibold">{cart.brandName}</td>
                    <td>{cart.type}</td>
                    <td>{cart.price}</td>
                    <th>
                      <button className="btn btn-ghost  text-xl text-red-500"><MdDelete /></button>
                    </th>
                  </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
