import React from "react";
import Navbar from "./pages/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./pages/Footer";
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  return (
    <>
    <ToastContainer position="top-right" autoClose={1000} />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
