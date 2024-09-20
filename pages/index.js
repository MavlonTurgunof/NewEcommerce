import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import OverviewHeader from "./../src/container/home/OverviewHeader";
import React from "react";
import WhatWeDo from "@/container/home/WhatWeDo";
import PopularCollection from "@/container/home/PopularCollection";

function index() {
  return (
    <main>
      <Navbar />
      <OverviewHeader />
      <WhatWeDo />
      <PopularCollection />
      <Footer />
    </main>
  );
}

export default index;
