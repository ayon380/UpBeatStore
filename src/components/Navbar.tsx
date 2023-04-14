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
const Navbar = () => {
  const inputRef = useRef<HTMLDivElement>(null);
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
      <div className="flex flex-col md:flex-row md:justify-start justify-center items-center p-2">
        <div className="top-1 logo mx-5 font-extrabold text-2xl">
          UpBeatStore
        </div>
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
        <div
          onClick={toggleCart}
          className="cart absolute right-0 top-2 mx-5 text-2xl md:text-4xl"
        >
          <AiOutlineShoppingCart />
        </div>
        <div
          ref={inputRef}
          className="sideCart absolute top-16 w-72 right-0 bg-blue-500 p-10 hidden
transform transition-transform translate-x-full rounded-l-xl"
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
            <li>
              <div className="item flex my-5">
                <div className="w-2/3 font-semibold">Tshirt - React Js</div>
                <div className="flex font-semibold items-center justify-center w-1/3">
                  <AiOutlinePlus className="mx-3 text-2xl" />
                  1 <AiOutlineMinus className="mx-3" />
                </div>
              </div>
            </li>
            <li>
              <div className="item flex my-5">
                <div className="w-2/3 font-semibold">Tshirt - React Js</div>
                <div className="flex font-semibold items-center justify-center w-1/3">
                  <AiOutlinePlus className="mx-3 text-2xl" />
                  1 <AiOutlineMinus className="mx-3" />
                </div>
              </div>
            </li>{" "}
            <li>
              <div className="item flex my-5">
                <div className="w-2/3 font-semibold">Tshirt - React Js</div>
                <div className="flex font-semibold items-center justify-center w-1/3">
                  <AiOutlinePlus className="mx-3 text-2xl" />
                  1 <AiOutlineMinus className="mx-3" />
                </div>
              </div>
            </li>
          </ol>
          <div className="flex">
            <button
              type="button"
              className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Checkout
            </button>
            <button
              type="button"
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
