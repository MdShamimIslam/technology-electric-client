import React from "react";
import Banner from "./Banner";
import { Helmet } from "react-helmet-async";
import Brands from "../Brands/Brands";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Sinrato || Home</title>
      </Helmet>
      <Banner></Banner>
      <Brands></Brands>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
