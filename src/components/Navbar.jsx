import React, { useRef } from "react";
import Link from "next/link";
import {
  AiOutlineClose,
  AiOutlineMinus,
  AiOutlineMinusCircle,
  AiOutlinePlus,
  AiOutlinePlusCircle,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { MdOutlineAccountCircle } from "react-icons/md";
const Navbar = ({
  cart,
  addToCart,
  RemoveFromCart,
  ClearCart,
  saveCart,
  increasecart,
  subTotal,
}) => {
  const inputRef = useRef(null);
  const toggleCart = () => {
    console.log("toggleCart");
    console.log(inputRef.current);
    if (inputRef.current) {
      if (inputRef.current.classList.contains("translate-x-full")) {
        console.log("open");
        inputRef.current.classList.remove("translate-x-full");
        inputRef.current.classList.add("translate-x-0");
        inputRef.current.classList.remove("hidden");
      } else if (inputRef.current.classList.contains("translate-x-0")) {
        console.log("close");
        inputRef.current.classList.remove("translate-x-0");
        inputRef.current.classList.add("translate-x-full");
        inputRef.current.classList.add("hidden");
      }
    }
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row md:justify-start justify-center items-center p-2 z-10 fixed top-0 shadow-md w-full bg-white ">
        <Link href="/">
          <div className="top-1 logo mx-5 font-extrabold text-2xl">
            UpBeatStore
          </div>
        </Link>
        <div className="nav">
          <ul className="flex items-center space-x-4 font-bold top-4">
            <Link href="/tshirts">
              <li>Tshirts</li>
            </Link>
            <Link href="/hoodies">
              <li>Hoodies</li>
            </Link>
            <Link href="/shirts">
              <li>Shirts</li>
            </Link>
          </ul>
        </div>

        <div className="cart cursor-pointer absolute right-0 top-2 mx-5 flex text-2xl md:text-4xl">
          <Link href="/login">
            <MdOutlineAccountCircle />
          </Link>
          <AiOutlineShoppingCart onClick={toggleCart} />
        </div>
        <div
          ref={inputRef}
          className={`sideCart absolute top-16 w-72 right-0 bg-blue-500 p-10 hidden
transform transition-transform ${
            Object.keys(cart).length === 0
              ? "translate-x-0"
              : "translate-x-full"
          } rounded-l-xl`}
        >
          <h2 className="font-bold text-x1">Shopping Cart</h2>
          {/* <span
            onClick={toggleCart}
            className="absolute top-5 right-2 cursor-pointer
text-2x1 text-pink-500"
          >
            <AiOutlineClose />
          </span> */}
          <ol className="list-decimal font-semibold">
            {Object.keys(cart).length === 0 && (
              <div className="my-4 semi-bold">Cart is Empty</div>
            )}
            {Object.keys(cart).map((item) => {
              return (
                <li key={item}>
                  <div className="item flex my-5">
                    <div className="w-2/3 font-semibold">{cart[item].name+"("+cart[item].variant+","+cart[item].size+")"}</div>
                    <div className="flex font-semibold items-center justify-center w-1/3">
                      <AiOutlinePlus
                        onClick={() => {
                         return increasecart(item, 1);
                        }}
                        className="mx-3 text-2xl"
                      />
                      {cart[item].qty}
                      <AiOutlineMinus
                        className="mx-3"
                        onClick={() => {
                          return RemoveFromCart(item, 1);
                        }}
                      />
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
          <span className="total">Subtotal :{subTotal}</span>
          <div className="flex">
            <Link href={"/checkout"}>
              <button
                type="button"
                className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                Checkout
              </button>
            </Link>
            <button
              type="button"
              onClick={ClearCart}
              className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
