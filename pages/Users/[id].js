import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import UserDetail from "@/container/Users/UserDetail";
import React from "react";

function User() {
  return (
    <>
      <Navbar />
      <UserDetail />
      <Footer />
    </>
  );
}

export default User;
