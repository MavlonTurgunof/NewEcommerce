import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import UsersList from "@/container/Users/UserList";
import React from "react";

function users() {
  return (
    <>
      <Navbar />
      <UsersList />
      <Footer />
    </>
  );
}

export default users;
