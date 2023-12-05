import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const MyCart = () => {
  const loadedCarts = useLoaderData();
  const [carts, setCarts] = useState(loadedCarts);

  const handleCartProductDelete = (cart) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You want to delete ${cart.productName}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://technology-electronic-server-zeta.vercel.app/carts/${cart._id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your product has been deleted successfully.",
                icon: "success",
              });
            }

            const remainingProduct = loadedCarts.filter(
              (c) => c._id !== cart._id
            );
            setCarts(remainingProduct);
          });
      }
    });
  };

  return (
    <div className="my-16">
      <Helmet>
        <title>MyShop || My cart</title>
      </Helmet>
      <div className="overflow-x-auto bg-cyan-950 rounded-lg m-2 md:m-4">
        <table className="table">
          <thead>
            <tr className="md:text-lg">
              <th>image</th>
              <th>Product name</th>
              <th>Brand name</th>
              <th>Type</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {carts?.map((cart) => (
              <tr key={cart._id}>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle md:w-12 md:h-12 w-8 h-8">
                      <img src={cart.productImg} alt="product-image" />
                    </div>
                  </div>
                </td>
                <td>
                  <div className="">
                    <div>
                      <div className="">{cart.productName}</div>
                    </div>
                  </div>
                </td>
                <td>{cart.brandName}</td>
                <td>{cart.type}</td>
                <td>${cart.price}</td>
                <th>
                  <button
                    onClick={() => handleCartProductDelete(cart)}
                    className="btn btn-ghost md:text-2xl text-xl text-red-500"
                  >
                    <MdDelete />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
