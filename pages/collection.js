import React from "react";
import Collection from "@/container/Collections/Collection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function collection() {
  return (
    <>
      <Navbar />
      <Collection />
      <Footer />
    </>
  );
}
