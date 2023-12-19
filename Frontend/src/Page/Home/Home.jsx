// eslint-disable-next-line no-unused-vars
import React from "react";
import Banner from "./Banner";
import FeaturedProperty from "./FeaturedProperty";
import WhyChoose from "./WhyChoose";
import Testmonial from "./Testmonial";
import Footer from "../../Component/Footer";
const Home = () => {
  return (
    <div>
      <Banner />
      {/* <Search/> */}
      <FeaturedProperty />
      <WhyChoose />
      <Testmonial />
      {/* <Map/> */}
      <Footer />
    </div>
  );
};

export default Home;
