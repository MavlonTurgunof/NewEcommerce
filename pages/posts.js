import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PopularPosts from "@/container/Post/PopularPosts";
import React from "react";
import PostDetails from "@/container/Post/PostDetails";

function posts() {
  return (
    <>
      <Navbar />
      <PopularPosts />
      <Footer />
    </>
  );
}

export default posts;
