"use client";
import React, { useEffect, useState } from "react";
import ReactImageGallery from "react-image-gallery";
//import "./Modal.css"; // Asegúrate de tener un archivo CSS para los estilos del modal

const DetailsProduct = ({ product ,params }) => {
  const [showModal, setShowModal] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  // Función para obtener el carrito desde el localStorage
  const getCart = () => {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
  };

  // Función para agregar un producto al carrito
  const addToCart = (product) => {
    let producto = {
      id: product._id,
      imagePath: product.imagePath,
      name: product.name,
      description: product.description,
      precio: product.precio,
      title: product.title,
      tallaBralette: "38",
      tallaPanty: "M",
      color: "rojo",
      cantidad: 1,
      categoria: params.category,
    };

    const currentCart = getCart();
    currentCart.push(producto);
    localStorage.setItem("cart", JSON.stringify(currentCart));
  };

  useEffect(() => {
    // Crear un carrito vacío en el localStorage si no existe
    if (!localStorage.getItem("cart")) {
      localStorage.setItem("cart", JSON.stringify([]));
    }
  }, []);

  return (
    <>
      <div>
        <button onClick={toggleModal} className="modal-toggle">
          Ver mas
        </button>

        {showModal && (
          <div className="modal z-50">
            <div className="modal-content w-[300px] sm:w-[600px] sm:h-[700px]  md:w-[700px] md:h-[600px]  lg:w-[800px] lg:h-[700px]  ">
              <button
                onClick={toggleModal}
                type="button"
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="authentication-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="mx-2 my-6 lg:mx-8">
                <div className="container mx-auto">
                  <h1 className="text-sm md:text-xl lg:text-2xl font-semibold mb-2 sm:mb-4 lg:mb-6 text-[#D50CD5] text-center">
                    Detalle de producto
                  </h1>
                  <div
                    key={product.id}
                    className="bg-white p-1 sm:p-2 lg:p-2 flex flex-col sm:flex-row  md:flex-row lg:flex-row"
                  >
                    <div className=" sm:w-[200px]  md:w-[200px] lg:w-[200px]  sm:h-[200px]  md:h-[200px] lg:h-[200px]">
                      <ReactImageGallery
                        items={product.imagePath.map((imageURL) => ({
                          original: imageURL,
                          thumbnail: imageURL,
                        }))}
                        showPlayButton={false}
                      />
                    </div>
                    <div className="flex-grow font-semibold ">
                      <h2 className="text-sm font-serif">{product.name}</h2>
                      <div className="mt-4 font-sans justify-start">
                        <p className="text-black ">Descripción: </p>
                        <span className="text-gray-500 font-normal">
                          {product.description}
                        </span>
                      </div>
                      <div className="font-sans mt-4">
                        <p className="text-black">Precio:</p>
                        <span className="text-gray-500 font-normal">
                          ${product.precio.toLocaleString()} Und
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="pt-3">
                    <a
                      href="/cart"
                      onClick={() => addToCart(product)}
                      className="bg-[#D50CD5] hover:bg-[#9806A9] transition-colors duration-300 text-white py-1 px-2 sm:py-2 sm:px-4 rounded mt-1 md:block font-serif"
                    >
                      Añadir a carrito
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DetailsProduct;
