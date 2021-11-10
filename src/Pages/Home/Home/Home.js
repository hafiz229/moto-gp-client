import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import News from "../News/News";
import Products from "../Products/Products";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Banner></Banner>
      <Products></Products>
      <News></News>
      <Reviews></Reviews>
      <Footer></Footer>
    </div>
  );
};

export default Home;
