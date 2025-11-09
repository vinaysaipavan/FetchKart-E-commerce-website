import { IoMdAdd } from "react-icons/io";
import { MdOutlineDeleteForever } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { PiSignInBold } from "react-icons/pi";
import {
  IMageSlider,
  BackToTop,
  BottomSignIn,
  LOGO,
  SearchBar,
  MainSearchBar,
  Footer,
  Delivery,
  Language,
  Scrollitems,
} from "./Minorcomponents";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

export function MainPage({ products, Cart, SetCart, CartCount, setCartCount }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const AddToCart = (id) => {
    SetCart((prev) => {
      const isNewItem = !prev[id];
      const updatedCart = { ...prev, [id]: prev[id] ? prev[id] + 1 : 1 };
      if (isNewItem) {
        setCartCount(CartCount + 1);
      }
      return updatedCart;
    });
  };

  const RemoveFromCart = (id) => {
    SetCart((prev) => {
      if (!prev[id]) return prev;

      const updatedCart = { ...prev };
      if (updatedCart[id] === 1) {
        delete updatedCart[id];
        setCartCount(CartCount - 1);
      } else {
        updatedCart[id] -= 1;
      }
      return updatedCart;
    });
  };

  return (
    <>
      <header className="flex items-center text-white" id="Head">
        <div className="flex flex-col w-full">
          <div className="flex items-center bg-slate-800 pr-2 sm:justify-normal justify-between">
            <LOGO />
            <Delivery />
            <MainSearchBar />
            <Language />
            <div className="flex items-center">
              <NavLink to="/cart">
                <div className="relative xl:ml-9 lg:ml-8 md:ml-6 ml-4 cursor-pointer">
                  <FaShoppingCart className="text-3xl" />
                  {CartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                      {CartCount}
                    </span>
                  )}
                </div>
              </NavLink>
              <div className="xl:ml-9 lg:ml-7 ml-5 hover:bg-orange-600 rounded-2xl bg-orange-500 sm:px-2 h-[35px] flex items-center justify-center cursor-pointer">
                {isLoggedIn ? (
                  <NavLink to="/profile">
                    <div className="flex items-center gap-1 px-1 whitespace-nowrap">
                      <FaUserCircle className="text-base sm:text-lg" />
                      <span className="text-sm sm:text-md">Profile</span>
                    </div>
                  </NavLink>
                ) : (
                  <NavLink to="/login">
                    <div className="flex items-center gap-1 px-1 whitespace-nowrap">
                      <PiSignInBold className="text-base sm:text-lg" />
                      <span className="text-sm sm:text-md">Sign In</span>
                    </div>
                  </NavLink>
                )}
              </div>
            </div>
          </div>
          <SearchBar />
          <Scrollitems />
        </div>
      </header>
      <section className="w-full h-full">
        <IMageSlider />
      </section>
      <section className="bg-gray-100 min-h-screen py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 lg:grid-cols-4 gap-6 px-4 sm:px-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-xl shadow hover:shadow-xl transition duration-300 border-2 flex-col h-full flex"
            >
              <div className="">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="h-[160px] sm:h-[180px] mx-auto object-contain mb-4"
                />
                <h2 className="text-md font-semibold mb-2 min-h-[3.5rem]">
                  {product.title.slice(0, 50)}...
                </h2>
                <p className="text-lg font-bold text-green-600 mb-2">
                  ${product.price}
                </p>
                <div className="mt-auto">
                  {Cart[product.id] ? (
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => RemoveFromCart(product.id)}
                        className="px-2 py-1 bg-orange-400 hover:bg-orange-500 rounded-l-lg duration-200"
                      >
                        <MdOutlineDeleteForever className="text-[20px]" />
                      </button>
                      <span className="w-4">{Cart[product.id]}</span>
                      <button
                        onClick={() => AddToCart(product.id)}
                        className="px-2 py-1 bg-orange-400 hover:bg-orange-500 rounded-r-lg duration-200"
                      >
                        <IoMdAdd className="text-[20px]" />
                      </button>
                    </div>
                  ) : (
                    <button
                      className="bottom-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
                      onClick={() => AddToCart(product.id)}
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <BottomSignIn />
      <BackToTop />
      <Footer />
    </>
  );
}
