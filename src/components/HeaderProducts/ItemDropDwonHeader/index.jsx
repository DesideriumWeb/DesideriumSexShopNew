import React from "react";
import Link from "next/link";
import { faAngleDown , faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ItemDropDwonHeader = ({ title, option }) => {
  return (
    <div className="relative group">
      <button className="px-4 py-2 rounded hover:text-rose-600">
        {title} &nbsp;&nbsp;
        <span>
          <FontAwesomeIcon
            icon={faAngleDown}
            className="text-gray-500 cursor-pointer"
          />
        </span>
      </button>
      <div className="absolute hidden space-y-2 bg-white border border-gray-300 rounded shadow-lg group-hover:block origin-top pt-2 z-50">
        {option?.map((item, key) => (
          <div key={key}>
            <Link href={item.link}>
              <div className="block px-4 hover:bg-gray-100 w-[200px]">
                {item.name} &nbsp;&nbsp;
                {item.submenu && (
                  <span>
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="text-gray-500 cursor-pointer"
                    />
                  </span>
                )}
              </div>
            </Link>
            {item.submenu && (
              <div className="ml-4 space-y-2">
                {item.submenu.map((subitem, subkey) => (
                  <Link key={subkey} href={subitem.link}>
                    <div className="block px-4 py-2 hover:bg-gray-100">
                      {subitem.name}
                    </div>
                  </Link>
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
