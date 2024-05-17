"use client";
import React, { useEffect, useState } from "react";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeaderProducts from "../HeaderProducts/HeaderProduct";
import MenuProductsLeft from "../MenuProductsLeft";

const ModalIzquierdaMenu = ({ openModalVar, setOpenModal }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden"; // Evita el desplazamiento de fondo cuando el modal está abierto
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto"; // Devuelve el desplazamiento de fondo
  };
  useEffect(() => {
    if (openModalVar) {
      openModal();
      setOpenModal(false);
    }
  }, [openModalVar]);

  return (
    <div className="fixed left-0 top-0 h-full w-0 flex items-center justify-center z-50 ">
      {/* Fondo oscuro del modal */}
      <div
        className={`fixed inset-0 bg-black transition-opacity ${
          isOpen ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeModal}
      />

      <div
        className={`fixed inset-y-0 left-0 max-w-xs w-full bg-white shadow-md hover:shadow-xl hover:shadow-[#9806A9] hover:border-opacity-0 shadow-custom-menu-izquierda transform transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } rounded-tr-lg rounded-bl-lg rounded-br-lg`}
      >
        {/* Botón de cierre en la parte superior derecha */}
        <button
          className="absolute top-2 right-2   text-gray-800  hover:text-xl font-semibold py-2 px-3 rounded-full"
          onClick={closeModal}
        >
          <FontAwesomeIcon icon={faX} className="text-black cursor-pointer" />
        </button>

        {/* Cabecera del modal */}
        <div className="p-4 text-[#9806A9] ">
          <h2 className="text-xl font-serif">
            Disfruta de todos nuestros productos
          </h2>
        </div>

        {/* Cuerpo del modal */}
        <div className="p-4  ">
          <MenuProductsLeft setIsOpen={setIsOpen} />
        </div>
      </div>
    </div>
  );
};

export default ModalIzquierdaMenu;
