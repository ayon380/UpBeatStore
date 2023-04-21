import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { AppProps } from "next/app";
import { useState } from "react";
import { useEffect } from "react";
export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState({});
  const [subTotal, setSubTotal] = useState(0);
  useEffect(() => {
    console.log("ff");
    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")));
        saveCart(JSON.parse(localStorage.getItem("cart")));
        
      }
    } catch (err) {
      console.error(err);
      localStorage.clear();
    }
    // saveCart(cart);
    // setSubTotal(subTotal);
  }, []);

  const saveCart = (mycart) => {
    localStorage.setItem("cart", JSON.stringify( mycart));
    let subt = 0;
    for (let item in mycart) {
      subt += mycart[item].qty * mycart[item].price;
    }
    setSubTotal(subt);
  };
  const ClearCart = () => {
    localStorage.removeItem("cart");
    setCart({});
    saveCart({});
  };
  const RemoveFromCart = (itemCode,qty) => {
    let myCart = cart;
    if (itemCode in myCart) {
      myCart[itemCode].qty = cart[itemCode].qty - qty;
    }
    if (myCart[itemCode].qty <= 0) {
      delete myCart[itemCode];
    }
    setCart(myCart);
    saveCart(myCart);
  };
  const addToCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty + qty;
    } else {
      newCart[itemCode] = { qty, price, name, size, variant };
    }
    setCart(newCart);
    saveCart(newCart);
  };
  return (
    <>
      <Navbar
      key={subTotal}
        cart={cart}
        addToCart={addToCart}
        RemoveFromCart={RemoveFromCart}
        ClearCart={ClearCart}
        saveCart={saveCart}
        subTotal={subTotal}
      />{" "}
      <Component
        cart={cart}
        addToCart={addToCart}
        RemoveFromCart={RemoveFromCart}
        ClearCart={ClearCart}
        saveCart={saveCart}
        subTotal={subTotal}
        {...pageProps}
      />
      <Footer />
    </>
  );
}
