import React from "react";
import {
  AiOutlineClose,
  AiOutlineMinus,
  AiOutlineMinusCircle,
  AiOutlinePlus,
  AiOutlinePlusCircle,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import Link from "next/link";
const checkout = ({ cart, ClearCart, addToCart, RemoveFromCart, subTotal }) => {
  return (
    <div>
      <div className="container m-auto mt-11">
        <h1 className="font-bold text-3xl mt-20 mb-10 text-center">Checkout</h1>
        <h2>1. Delivery Details</h2>

        <form>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block mt-4 mb-2 text-sm font-medium text-gray-900 "
            >
              Your Name
            </label>
            <input
              type="name"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="John Doe"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mt-4 mb-2 text-sm font-medium text-gray-900 "
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="address"
              className="block mt-4 mb-2 text-sm font-medium text-gray-900 "
            >
              Address
            </label>
            <input
              type="address"
              id="address"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="1234 Main St"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="phone"
              className="block mt-4 mb-2 text-sm font-medium text-gray-900 "
            >
              Phone No.
            </label>
            <input
              type="phone"
              id="phone"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="123-456-7890"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="city"
              className="block mt-4 mb-2 text-sm font-medium text-gray-900 "
            >
              City
            </label>
            <input
              type="city"
              id="city"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="City"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="state"
              className="block mt-4 mb-2 text-sm font-medium text-gray-900 "
            >
              State
            </label>
            <input
              type="state"
              id="state"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="State"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="pincode"
              className="block mt-4 mb-2 text-sm font-medium text-gray-900 "
            >
              Pincode
            </label>
            <input
              type="pincode"
              id="pincode"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="123456"
              required
            />
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mb-8"
          >
            Submit
          </button>
        </form>
        <h2>2. Review Cart Items</h2>
        <ol className="list-decimal font-semibold">
          {Object.keys(cart).length === 0 && (
            <div className="my-4 semi-bold">Cart is Empty</div>
          )}
          {Object.keys(cart).map((item) => {
            return (
              <li key={item}>
                <div className="item flex my-5">
                  <div className="w-2/3 font-semibold">{cart[item].name}</div>
                  <div className="flex font-semibold items-center justify-center w-1/3">
                    <AiOutlinePlus
                      onClick={() => {
                        addToCart(item, 1, 499, "wear th fuck", "XL", "Red");
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
        <button
          type="button"
          onClick={ClearCart}
          className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Clear Cart
        </button>
        <span className="total">Subtotal :{subTotal}</span>
        <Link href={"/order"}>
              <button
                type="button"
                className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                Pay ₹{subTotal}
              </button>
            </Link>
      </div>
    </div>
  );
};

export default checkout;
