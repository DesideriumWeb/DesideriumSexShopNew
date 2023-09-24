import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const MenuProductsLeft = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-screen grid place-items-start bd-gradient-to-r from-sky-600 to-indigo-600">
      <div className="relative flex flex-col items-start w-[280px] h-[340px] rounded-lg">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="bg-white p-4 w-full flex items-center justify-between  tracking-wide border-4 border-transparent active:border-white duration-500 active:text-white hover:text-[#9806A9] rounded-lg text-lg font-semibold"
        >
          Opcion
          {!isOpen ? (
            <FontAwesomeIcon
              icon={faAngleDown}
              className="text-gray-500 cursor-pointer"
            />
          ) : (
            <FontAwesomeIcon
              icon={faAngleUp}
              className="text-gray-500 cursor-pointer"
            />
          )}
        </button>
        {isOpen && <div className="bg-white absolute top-14 flex flex-col items-start rounded-lg p-2 w-full">
            {
                [1,2,3,4,5,6].map((item, i)=>(
                    <div className="flex w-full justify-between hover:bg-pink-200 cursor-pointer  rounded-r-lg border-l-transparent hover:border-l-[#D50CD5] border-l-4 p-1 " key={i}>
                        <h3 className="font-bold">{ item}</h3>

                    </div>
                   
                ))
            }
            </div>}
      </div>
    </div>
  );
};

export default MenuProductsLeft;
