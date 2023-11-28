"use client";
import React, { useState } from "react";
import ModalIzquierdaMenu from "../ModalIzquierdaMenu";
import useGetProduct from "@/hooks/UseGetProduct/useGetProduct";

const DetailsHome = () => {
  const [openModal, setOpenModal] = useState(false);
  const { data: products, loading, error } = useGetProduct();
  return (
    <>
      <div className="bg-white text-[#9806A9] py-12 -mt-11 sm:mt-2 md:mt-2 lg:mt-2">
        <div className="container mx-auto text-center ">
          <h1 className="text-xl sm:text-xl md:text-1xl  lg:text-3xl font-semibold mb-6 animate-fade-in-up">
            ¡Bienvenido Desiderium nuestra Tienda Erótica!
          </h1>
          <p className="text-lg mb-8 animate-fade-in-up-delay">
            Descubre una amplia selección de productos sensuales para añadir un
            toque de pasión a tu vida.
          </p>
          <button
            className="bg-[#D50CD5] hover:bg-[#9806A9] text-white py-2 px-6 rounded text-md sm:text-lg md:text-xl  lg:text-3xl  font-semibold animate-bounce z-0"
            onClick={() => setOpenModal(true)}
          >
            Explora Nuestros Productos
          </button>
          <div className="mt-12 animate-fade-in-up-delay mx-5">
            <img
              src="https://cdn.pixabay.com/photo/2020/06/16/05/20/nude-5304236_1280.jpg" // Reemplaza con la URL de tu imagen
              alt="Productos Eróticos"
              className="mx-auto max-w-full rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="mt-12">
            <h2 className="text-xl sm:text-xl md:text-1xl  lg:text-3xl font-semibold mb-6 animate-fade-in-up">
              Nuestros Destacados
            </h2>
            {loading ? (
              <div
                role="status"
                className="flex justify-center justify-items-center items-center place-items-center"
              >
                <div role="status">
                  <svg
                    aria-hidden="true"
                    className="inline w-20 h-20 ml-3 text-gray-200 animate-spin dark:text-gray-600 fill-[#9806A9]"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="text-black font-semibold ">Cargando...</span>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 m-4">
                {products &&
                  products.map((item, key) => (
                    <div
                      key={key}
                      className="bg-black p-4 rounded animate-fade-in-up-delay transform hover:scale-105 transition-transform duration-300"
                    >
                      <img
                        src={item.imagePath[0]} // Reemplaza con la URL de la imagen del producto
                        alt="Producto Destacado"
                        className="mx-auto max-w-full rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 "
                      />
                      <h3 className="text-lg font-semibold mt-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <ModalIzquierdaMenu
        openModalVar={openModal}
        setOpenModal={setOpenModal}
      />
    </>
  );
};

export default DetailsHome;
