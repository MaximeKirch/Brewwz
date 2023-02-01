import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";
import CartModal from "../Views/CartModal";
import { useSelector } from "react-redux";
import ToggleCart from "../Components/ToggleCart";

export default function Layout({ children }) {
  const cartState = useSelector((state) => state.cart.isClosed);
  const cartLength = useSelector((state) => state.cart.cart.length);
  return (
    <>
      <Header />
      <main>{children}</main>
      {cartState === true ? (
        cartLength >= 1 ? (
          <ToggleCart />
        ) : null
      ) : (
        <CartModal />
      )}
      <Footer />
      <Outlet />
    </>
  );
}
