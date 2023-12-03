import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AdvertisementSlide from "./AdvertisementSlide";
import BrandProduct from "./BrandProduct";

const BrandInfo = () => {
  const brand = useLoaderData();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
       
      });
  }, []);

  const brandProducts = products.filter(
    (product) => product.brandName === brand.brandName
  );
 

  return (
    <div className="my-12">
      {brandProducts.length > 0 ? (
        <div>
          <AdvertisementSlide></AdvertisementSlide>
          <h2 className="text-center text-2xl mt-12">Brand Product bellow</h2>
          <div className="grid grid-col-1 md:grid-cols-2  gap-6 p-4">
            {brandProducts.map((product) => (
              <BrandProduct key={product._id} product={product}></BrandProduct>
            ))}
          </div>
        </div>
      ) : (
        <h2 className="text-center text-2xl">No Product Available</h2>
      )}
    </div>
  );
};

export default BrandInfo;
