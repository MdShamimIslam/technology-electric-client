import React, { useEffect, useState } from "react";
import { useLoaderData, Link } from "react-router-dom";
import AdvertisementSlide from "./AdvertisementSlide";
import BrandProduct from "./BrandProduct";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const BrandInfo = () => {
  const brand = useLoaderData();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://technology-electronic-server-zeta.vercel.app/products")
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
      <Helmet>
        <title>Sinrato || brand product</title>
      </Helmet>
      <AdvertisementSlide brand={brand}></AdvertisementSlide>
      <div className="my-24">
        {brandProducts.length > 0 ? (
          <div>
            <h2 className="md:text-4xl text-2xl font-semibold text-center mt-12 text-primary">
              Brand Product
            </h2>
            <div className="lg:flex justify-center gap-10">
            <div className="grid grid-col-1 md:grid-cols-2 md:gap-8 lg:gap-16 lg:m-0 m-4">
              {brandProducts.map((product) => (
                <BrandProduct
                  key={product._id}
                  product={product}
                ></BrandProduct>
              ))}
            </div>
            </div>
          </div>
        ) : (
          <div>
            <h2 className="text-center md:text-4xl font-semibold text-2xl text-success">
               " No Product Available "
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrandInfo;
