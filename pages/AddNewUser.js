import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AddUser from "@/container/Users/AddUser";
import React from "react";

function AddNewUser() {
  return (
    <>
      <Navbar />
      <AddUser />
      <Footer />
    </>
  );
}

export default AddNewUser;
