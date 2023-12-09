"use client";
import React, { useEffect, useState } from "react";
import ReactImageGallery from "react-image-gallery";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [selectedTallaBrasier, setSelectedTallaBrasier] = useState("");
  const [selectedTallaPanty, setSelectedTallaPanty] = useState("");

  // Función para obtener el carrito desde el localStorage
  const getCart = () => {
    const cart = localStorage.getItem("cart");
    const cart_ = JSON.parse(cart)
    return cart ? [...cart_].reverse() : [];
  };

  useEffect(() => {
    // Cargar el carrito almacenado en el localStorage cuando el componente se monta
    const initialCart = getCart();
    setCartItems(initialCart);
  }, []); // El segundo argumento [] asegura que el efecto se ejecute solo una vez al montar el componente

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.precio * item.cantidad,
      0
    );
  };

  const increaseQuantity = (itemId) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId ? { ...item, cantidad: item.cantidad + 1 } : item
    );
    setCartItems(updatedCart);
    // Actualizar el carrito en el localStorage
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const decreaseQuantity = (itemId) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId && item.cantidad > 1
        ? { ...item, cantidad: item.cantidad - 1 }
        : item
    );
    setCartItems(updatedCart);
    // Actualizar el carrito en el localStorage
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeItem = (itemId) => {
    // Filtrar el producto que deseas eliminar
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
    // Actualizar el carrito en el localStorage
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleBrasierTallaChange = (itemId, selectedTalla) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId ? { ...item, tallaBrasier: selectedTalla } : item
    );
    setCartItems(updatedCart);
    // Actualizar el carrito en el localStorage
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handlePantyTallaChange = (itemId, selectedTalla) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId ? { ...item, tallaPanty: selectedTalla } : item
    );
    setCartItems(updatedCart);
    // Actualizar el carrito en el localStorage
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleTallaBrasierChange = (talla) => {
    setSelectedTallaBrasier(talla);
  };

  const handleTallaPantyChange = (talla) => {
    setSelectedTallaPanty(talla);
  };
 

const handleBuyButtonClick = () => {
  // Crear el mensaje con la información del carrito
  const mensaje = cartItems.map(item => {
    const imagenUrls = item.imagePath.join('\n'); 
    return `${imagenUrls} ¡Hola! Estoy interesado en comprar el producto  ${item.name} - Con el precio: $${(item.precio).toLocaleString()}`;
  }).join('\n\n');

  // Número de teléfono de WhatsApp (puedes cambiarlo según tu necesidad)
  const numeroWhatsApp = '57-3005693097';

  // Construir el enlace de WhatsApp
  const enlaceWhatsApp = `https://api.whatsapp.com/send/?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensaje)}`;

  // Abrir la ventana de WhatsApp en una nueva pestaña o aplicación
  window.open(enlaceWhatsApp, '_blank');
};

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-4 text-[#D50CD5] text-center font-serif">
          Carrito de Compras
        </h1>
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-md p-4 mb-4 flex text-center sm:text-left md:text-left lg:text-left flex-col sm:flex-row md:flex-row items-center shadow-md gap-10 "
          >
            <div>
              <ReactImageGallery
                items={item.imagePath.map((imageURL) => ({
                  original: imageURL,
                  thumbnail: imageURL,
                }))}
                showPlayButton={false}
              />
            </div>
            <div className="flex-grow font-semibold">
              <h2 className="text-lg ">{item.name}</h2>
              <div className="mt-4 font-sans">
                <p className="text-black">Descripción: </p>
                <span className="text-gray-500 font-normal">
                  {item.description}
                </span>
              </div>
              <div className="font-sans mt-4">
                <p className="text-black">Precio:</p>
                <span className="text-gray-500 font-normal">
                  ${item.precio.toLocaleString()} Und
                </span>
              </div>
              {item.categoria === "lenceria" ? (
                <>
                  <div className="mt-4">
                    <h5 className="font-sans text-black">
                      Selecciona una talla de panty:
                    </h5>
                    <div className="tallas-checkboxes mt-2">
                      {["XS", "S", "M", "L", "XL"].map((talla) => (
                        <label key={talla} className="talla-checkbox">
                          <input
                            type="radio"
                            value={talla}
                            checked={selectedTallaPanty === talla}
                            onChange={() => handleTallaPantyChange(talla)}
                          />
                          <span
                            className={`talla-box ${
                              selectedTallaPanty === talla ? "selected" : ""
                            }`}
                          >
                            {talla}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4">
                    <h5 className="font-sans text-black">
                      Selecciona una talla de brasier:
                    </h5>
                    <div className="tallas-checkboxes mt-2 mb-4">
                      {["30", "32", "34", "36", "38"].map((talla) => (
                        <label key={talla} className="talla-checkbox">
                          <input
                            type="radio"
                            value={talla}
                            checked={selectedTallaBrasier === talla}
                            onChange={() => handleTallaBrasierChange(talla)}
                          />
                          <span
                            className={`talla-box ${
                              selectedTallaBrasier === talla ? "selected" : ""
                            }`}
                          >
                            {talla}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>{" "}
                </>
              ) : null}

              <h5 className="font-sans text-black">Cantidad :</h5>
              <div className="flex flex-row sm:flex-row md:flex-row text-center items-center justify-center sm:justify-start">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="text-[#D50CD5] font-bold mr-2 text-6xl ml-2 rounded-sm"
                >
                  -
                </button>
                <p className="text-lg text-black">{item.cantidad}</p>
                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="text-[#D50CD5] font-bold ml-2 text-6xl"
                >
                  +
                </button>
              </div>
              <div className="mt-2">
                <h5 className="font-sans text-black">Total por producto :</h5>
                <h5 className="text-black font-semibold text-2xl mt-4">
                  {" "}
                  $ {(item.precio * item.cantidad).toLocaleString()}
                </h5>
              </div>
            </div>
            <div>
              <button
                onClick={() => removeItem(item.id)}
                className="bg-[#D50CD5] hover:bg-[#9806A9] transition-colors duration-300 text-white py-1 px-2 sm:py-2 sm:px-4 rounded mt-1 font-serif md:hidden"
              >
                Eliminar
              </button>
              <button
                onClick={() => removeItem(item.id)}
                className="bg-[#D50CD5] hover:bg-[#9806A9] transition-colors duration-300 text-white py-1 px-2 sm:py-2 sm:px-4 rounded mt-1  font-serif hidden md:block"
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
        <div className="border-t pt-4">
          <p className="text-xl font-semibold text-center text-[#D50CD5]">
            Total: ${calculateTotal().toLocaleString()}
          </p>
          <button className={`${cartItems.length > 0  ? "" :"'opacity-100 cursor-not-allowed'" }  bg-[#D50CD5] block text-white py-1 px-2 rounded mt-4  mx-auto hover:bg-[#9806A9] transition-colors duration-300 font-serif`}
          onClick={handleBuyButtonClick}
          disabled={cartItems.length === 0}>
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
