import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { AppProps } from "next/app";
import { useState } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState({});
  const [subTotal, setSubTotal] = useState(0);
  const router=useRouter();
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
  const buynow=(itemCode, qty, price, name, size, variant)=>{
    let newCart = {[itemCode] : { qty:1, price, name, size, variant }};
    console.log(price);
    setCart(newCart);
    saveCart(newCart);
    console.log(price);
    router.push("/checkout")
  }
  const ClearCart = () => {
    localStorage.removeItem("cart");
    setCart({});
    saveCart({});
  };
  const increasecart = (itemCode, qty) => {
    let myCart = cart;
    if (itemCode in myCart) {
      myCart[itemCode].qty = cart[itemCode].qty + qty;
    }
    setCart(myCart);
    saveCart(myCart);
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
    if (itemCode in cart && cart[itemCode].size === size && cart[itemCode].variant === variant) {
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
        increasecart={increasecart}
      />{" "}
      <Component
      buynow={buynow}
        cart={cart}
        addToCart={addToCart}
        RemoveFromCart={RemoveFromCart}
        ClearCart={ClearCart}
        saveCart={saveCart}
        subTotal={subTotal}
        increasecart={increasecart}
        {...pageProps}
      />
      <Footer />
    </>
  );
}
