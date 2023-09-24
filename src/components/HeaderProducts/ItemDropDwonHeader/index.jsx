import React from "react";
import { faAngleDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ItemDropDwonHeader = ({ title, option }) => {
  return (
    <div className="relative group">
      <button className="px-4 py-2 rounded hover:text-[#9806A9] transition-all duration-500 ease-in">
        {title} &nbsp;&nbsp;
        <span>
          <FontAwesomeIcon
            icon={faAngleDown}
            className="text-gray-500 cursor-pointer"
          />
        </span>
      </button>
      <div className="absolute opacity-0 invisible space-y-2 bg-white border rounded shadow-lg origin-top pt-2 z-50 group-hover:opacity-100 group-hover:visible">
        {option?.map((item, key) => (
          <div key={key}>
            <a href={item.link}>
              <div className="block px-4 w-[200px] hover:text-[#9806A9] transition-all duration-500 ease-in">
                {item.name} &nbsp;&nbsp;
                {item.submenu && (
                  <span>
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="text-gray-500 hover:text-[#9806A9] transition-all duration-500 ease-in cursor-pointer"
                    />
                  </span>
                )}
              </div>
            </a>
            {item.submenu && (
              <div className="ml-4 space-y-2 ">
                {item.submenu.map((subitem, subkey) => (
                  <a key={subkey} href={subitem.link} >
                    <div className="block px-4 py-2 hover:text-[#9806A9] transition-all duration-500 ease-in">
                      {subitem.name}
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemDropDwonHeader;
