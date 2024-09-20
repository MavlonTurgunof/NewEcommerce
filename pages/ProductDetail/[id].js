import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PopularCollection from "@/container/home/PopularCollection";
import Detail from "@/container/Product/Detail";
import Review from "@/container/Product/Review";
import React from "react";

function ProductDetail() {
  return (
    <>
      <Navbar />
      <Detail />
      <Review />
      <PopularCollection />
      <Footer />
    </>
  );
}

export default ProductDetail;
