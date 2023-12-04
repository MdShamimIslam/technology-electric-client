import React from "react";
import { Link } from 'react-router-dom';

const Brand = ({ brand }) => {
  const {_id, brandImage, brandName } = brand;
  return (
    <Link to={`/brand/${_id}`}>
      <div className="card shadow-2xl">
        <figure>
          <img
            src={brandImage}
            className="h-[200px] w-full"
            alt="brand-image"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-semibold text-success">{brandName}</h2>
        </div>
      </div>
    </Link>
  );
};

export default Brand;
