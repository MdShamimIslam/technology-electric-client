import React from "react";
import Banner from "./Banner";
import { Helmet } from "react-helmet-async";
import Brands from "../Brands/Brands";
import Reviews from "./Reviews";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>MyShop || Home</title>
      </Helmet>
      <Banner></Banner>
      <Brands></Brands>
      <Reviews></Reviews>
      <Contact></Contact>
    </div>
  );
};

export default Home;
