import React from "react";
import { useLoaderData} from "react-router-dom";
import Swal from "sweetalert2";

const ProductDetails = () => {
const product = useLoaderData();
const {productImg,productName,brandName,description,type,price,rating} = product;


const handleAddToProduct = () => {
  const addToCartProduct = {productImg,productName,brandName,description,type,price,rating};
  fetch('http://localhost:5000/carts',{
    method:'POST',
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify(addToCartProduct)
  })
  .then(res => res.json())
  .then(data=>{
    if(data.insertedId){
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Product add to Cart Successfully",
        showConfirmButton: false,
        timer: 1500
      });
    }
  })
}

  return (
    <div>
      <div className="card w-2/3 mx-auto shadow-xl my-8">
      <figure>
        <img
        className="h-[200px] mt-4"
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
              <button onClick={handleAddToProduct} className="btn btn-ghost bg-blue-400 w-full">Add to Cart</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProductDetails;
