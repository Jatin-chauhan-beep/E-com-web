import React from "react";
import Navbar from "../components/template/Navbar";
import Footer from "../components/template/Footer";
import SignInDialog from "../components/template/signin";
import View from "../view";

const Layout = () => {
  return (
    <>
      <Navbar />
      <SignInDialog />
      <View />
      <Footer />
    </>
  );
};

export default Layout;
