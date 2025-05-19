import { assets } from "@/assets/assets";
import { Button } from "@/components/ui/button";
import { ShoppingBag, User } from "lucide-react";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setShowUserLogin } from "@/redux/showLoginSlice";
import { setUser } from "@/redux/authSlice";

const Navbar = () => {
  // State to manage mobile menu open/close
  const [open, setOpen] = useState(false);

  //state from redux that holds user data
  const { user } = useSelector((store) => store?.auth);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  //function to logout triggered by logout button
  const handleLogout = async () => {
    dispatch(setUser(null));
    navigate("/");
  };

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">
      <NavLink
        to="/"
        className="flex items-center gap-2"
        onClick={() => setOpen(false)}
      >
        <img className="h-9" src="ecom.svg" alt="dummyLogoColored" />
        <h3 className="font-semibold md:text-xl bg-red-700 text-white px-4 py-1 rounded-lg">
          MEGAMART
        </h3>
      </NavLink>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-8">
        <NavLink
          to="/"
          className="font-medium md:text-xl bg-red-700 text-white px-4 py-1 rounded-lg"
        >
          Home
        </NavLink>
        <NavLink
          to="/products"
          className="font-medium md:text-xl bg-red-700 text-white px-4 py-1 rounded-lg"
        >
          All Products
        </NavLink>

        {/* search icon div */}
        <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full ring-2 ring-red-700">
          <input
            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
            type="text"
            placeholder="Search products"
          />
          <img src={assets.search_icon} alt="search-icon" className="w-4 h-4" />
        </div>

        {/* Cart div */}
        <div
          className="relative cursor-pointer"
          onClick={() => navigate("/cart")}
        >
          <ShoppingBag className="w-6 opacity-80" />
          <button className="absolute -top-2 -right-3 text-sm text-white bg-red-700 w-[18px] h-[18px] rounded-full">
            5
          </button>
        </div>

        {!user ? (
          <Button
            variant="default"
            className="!px-6 !py-2 transition duration-300 hover:scale-105"
            onClick={() => dispatch(setShowUserLogin(true))}
          >
            Login
          </Button>
        ) : (
          <div className="relative group">
            <User
              className="w-14 bg-red-800 text-white rounded-full py-1"
              alt="profile"
            />
            <ul className="hidden group-hover:block absolute top-full right-0 bg-white shadow rounded-md w-40 text-sm z-40 py-2 ring-1 ring-red-600">
              <li
                className="px-4 py-2 hover:bg-primary/10 cursor-pointer whitespace-nowrap text-red-800 font-semibold"
                onClick={() => navigate("/my-orders")}
              >
                My Orders
              </li>
              <li
                className="px-4 py-2 hover:bg-primary/10 cursor-pointer whitespace-nowrap text-red-800 font-semibold"
                onClick={handleLogout}
              >
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>

      <button
        onClick={() => (open ? setOpen(false) : setOpen(true))}
        aria-label="Menu"
        className="sm:hidden"
      >
        {/* Menu Icon SVG */}
        <img src={assets.menu_icon} alt="menu" />
      </button>

      {/* Mobile Menu */}
      {open && (
        <div
          className={`${
            open ? "flex" : "hidden"
          } absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}
        >
          <NavLink
            to="/"
            className="font-semibold text-red-700 md:text-xl"
            onClick={() => setOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className="font-semibold text-red-700 md:text-xl"
            onClick={() => setOpen(false)}
          >
            All Products
          </NavLink>
          {user && (
            <NavLink
              to="/products"
              className="font-semibold text-red-700 md:text-xl"
              onClick={() => setOpen(false)}
            >
              My Orders
            </NavLink>
          )}
          {!user ? (
            <Button
              variant="default"
              className="!px-6 !py-2 transition duration-300 hover:scale-105"
              onClick={() => {
                setOpen(false);
                dispatch(setShowUserLogin(true));
              }}
            >
              Login
            </Button>
          ) : (
            <Button
              variant="default"
              className="!px-6 !py-2 transition duration-300 hover:scale-105"
              onClick={handleLogout}
            >
              Logout
            </Button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
