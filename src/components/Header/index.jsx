"use client";
import { STRINGS, TITLE_MENU_NAVBAR } from "@/config/config";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faShoppingCart,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import HeaderProducts from "../HeaderProducts/HeaderProduct";

const Header = () => {
  const [open, setOpen] = useState(false);
  const numPedidos = 5; // Cambia esto con la cantidad real de pedidos
  return (
    <>
      <div className="shadow-md w-full fixed top-0 left-0 z-20">
        <div className="md:flex items-center justify-between bg-black text-white py-4 md:px-10 px-7">
          <div
            className="font-bold text-2xl cursor-pointer flex flex-col items-center font-[Poppins] 
      text-pink-500"
          >
            <span>{STRINGS.NAVBAR_BUTTON_TITLE_DESIDERIUM}</span>
            <span>
              {STRINGS.NAVBAR_BUTTON_TITLE_DESIDERIUM_1}&nbsp;&nbsp;
              {STRINGS.NAVBAR_BUTTON_TITLE_DESIDERIUM_2}
            </span>
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
          >
            <FontAwesomeIcon
              icon={open ? faTimes : faBars}
              className="text-white hover:text-gray-400 cursor-pointer"
            />
          </div>
          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-black md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-20 " : "top-[-490px]"
            }`}
          >
            {TITLE_MENU_NAVBAR.map((link) => (
              <li key={link.name} className="md:ml-8 text-sm md:my-0 my-7">
                <Link
                  href={link.link}
                  className="text-white hover:text-gray-400 duration-500"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <Link href="/cart">
              <div className="text-3xl relative  sm:ml-6 md:ml-6 lg:ml-6">
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  className="text-white hover:text-gray-400 cursor-pointer"
                />
                {numPedidos > 0 && (
                  <span className="relative -top-8 -right-3 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm transform translate-y-[-50%] translate-x-1/2 transition-all duration-300">
                    {numPedidos}
                  </span>
                )}
              </div>
            </Link>
            <button
              className="bg-pink-500 text-white font-[Poppins] text-sm py-2 px-6 rounded md:ml-8 hover:bg-pink-400 
    duration-500"
            >
              {STRINGS.NAVBAR_BUTTON_LOGIN}
            </button>
          </ul>
        </div>
       
      </div>
      <div className="pt-32 bg-white shadow-md w-full fixed top-0 left-0 pb-10 z-10">
          <div className=" block  sm:flex  md:flex lg:flex justify-center items-center">
            <HeaderProducts />
          </div>
        </div>
    </>
  );
};

export default Header;
