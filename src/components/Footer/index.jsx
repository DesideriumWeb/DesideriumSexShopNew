'use client'
import React, { useState } from "react";
import ModalIzquierdaMenu from "../ModalIzquierdaMenu";

const Footer = () => {
  const [openModal, setOpenModal] = useState(false);
  const whatsappNumber = "3005693097";

  return (
    <>
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto flex flex-wrap justify-center px-16">
          <div className="w-full md:w-1/3 mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4 text-[#D50CD5]">
              Navegación
            </h3>
            <ul className="text-gray-400 font-serif">
              <li className="mb-2">
                <a href="/">Home</a>
              </li>
              <li className="mb-2 cursor-pointer">
                <a onClick={() => setOpenModal(true)}>Productos</a>
              </li>
              <li className="mb-2">
                <a href="/about">Acerca de</a>
              </li>
              <li className="mb-2">
                <a href="/contact-form">Contacto</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0 text-center font-serif">
            <h3 className="text-xl font-semibold mb-4 text-[#D50CD5]">
              Contacto
            </h3>
            <p className="text-gray-400">Dirección: Armenia Quindio</p>
            <p className="text-gray-400">Teléfono: (+57) 3005693097</p>
            <p className="text-gray-400">Email: desideriumsex@gmail.com</p>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right">
            <h3 className="text-xl font-semibold mb-4 text-[#D50CD5]">
              Síguenos
            </h3>
            <div className="flex justify-center md:justify-end space-x-4">
              <a
                href="https://www.facebook.com/people/Desiderium-Sex-shop/100089852987890/?mibextid=ZbWKwL"
                className="text-gray-400 hover:text-white"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/desideriumsexshop/?igshid=ZDdkNTZiNTM%3D"
                className="text-gray-400 hover:text-white"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com/desideriumsexshop/?igshid=ZDdkNTZiNTM%3D"
                className="text-gray-400 hover:text-white"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href={`https://wa.me/${whatsappNumber}`}
                className="text-gray-400 hover:text-white"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 py-2 text-center font-serif">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Desiderium Sex Shop. Todos los
            derechos reservados.
          </p>
        </div>
      </footer>
      <ModalIzquierdaMenu
        openModalVar={openModal}
        setOpenModal={setOpenModal}
      />
    </>
  );
};

export default Footer;
