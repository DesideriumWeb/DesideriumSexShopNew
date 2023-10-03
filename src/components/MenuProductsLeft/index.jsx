import React, { useState } from "react";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MENU_MODAL } from "@/config/config";

const MenuProductsLeft = ({ options }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleMenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="h-screen grid place-items-start bg-gradient-to-r from-white to-white">
      <div className="relative flex flex-col items-start w-[300px] rounded-lg max-h-[600px] overflow-y-auto overflow-x-hidden">
        {MENU_MODAL.map((option, index) => (
          <div key={index}>
            <button
              onClick={() => toggleMenu(index)}
              className="bg-white  flex items-center justify-between tracking-wide border-4 border-transparent active:border-white duration-500 active:text-white hover:text-[#9806A9] rounded-lg text-xl font-sans font-semibold w-[286px]"
            >
              {option.name}
              {option.products.length > 0 ? (
                openIndex === index ? (
                  <FontAwesomeIcon
                    icon={faAngleUp}
                    className="text-gray-500 cursor-pointer"
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    className="text-gray-500 cursor-pointer"
                  />
                )
              ) : null}
            </button>
            {openIndex === index && (
              <div
                className="bg-pink-50 flex flex-col items-start rounded-lg p-1 w-full max-h-60 overflow-y-auto"
                style={{ maxHeight: "15rem" }} // Establecer la altura máxima aquí
              >
                {option.products.map((item, i) => (
                  <div
                    className="flex w-full justify-between hover:bg-pink-200 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-[#D50CD5] border-l-4 p-1 "
                    key={i}
                  >
                    <a href={item.link} className="font-serif font-normal">
                      {item.name}
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuProductsLeft;
