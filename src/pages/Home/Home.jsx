import React from "react";
import Banner from "./Banner";
import { Helmet } from "react-helmet-async";
import Brands from "../Brands/Brands";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Sinrato || Home</title>
      </Helmet>
      <Banner></Banner>
      <Brands></Brands>
    </div>
  );
};

export default Home;
