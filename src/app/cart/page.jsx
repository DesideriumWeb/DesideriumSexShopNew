"use client";
import React, { useEffect, useState } from "react";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  // Función para obtener el carrito desde el localStorage
  const getCart = () => {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
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

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold mb-4 text-[#D50CD5] text-center">
          Carrito de Compras
        </h1>
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-md p-4 mb-4 flex text-center sm:text-left md:text-left lg:text-left flex-col sm:flex-row md:flex-row items-center shadow-md"
          >
            <img
              src={item.imagePath}
              alt={item.name}
              className="w-44 h-44 object-cover rounded-full mr-4 hover:scale-105 transition-transform duration-300"
            />
            <div className="flex-grow font-semibold">
              <h2 className="text-lg ">{item.name}</h2>
              <p className="text-black font-sans">
                Descripción:{" "}
                <span className="font-normal">{item.description}</span>
              </p>
              <p className="text-black font-sans">
                Precio: ${item.precio.toLocaleString()} Und
              </p>

              {/* Dropdown de selección de talla de Brasier */}
              <label
                htmlFor={`talla-brasier-${item.id}`}
                className="block text-black mt-2"
              >
                Talla de Brasier:
              </label>
              <select
                id={`talla-brasier-${item.id}`}
                value={item.tallaBrasier}
                onChange={(e) =>
                  handleBrasierTallaChange(item.id, e.target.value)
                }
                className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-[#D50CD5] text-black mt-1"
              >
                <option value="">Seleccionar talla de Brasier</option>
                <option value="32">32</option>
                <option value="34">34</option>
                <option value="36">36</option>
                <option value="38">38</option>
              </select>

              {/* Dropdown de selección de talla de Panty */}
              <label
                htmlFor={`talla-panty-${item.id}`}
                className="block text-black mt-2 font-sans"
              >
                Talla de Panty:
              </label>
              <select
                id={`talla-panty-${item.id}`}
                value={item.tallaPanty}
                onChange={(e) =>
                  handlePantyTallaChange(item.id, e.target.value)
                }
                className="w-full  p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-[#D50CD5] text-black mt-1"
              >
                <option value="" className="font-sans">Seleccionar talla de Panty</option>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>

              <div className="flex flex-row sm:flex-row md:flex-row">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="text-[#D50CD5] font-bold mr-2 text-2xl"
                >
                  -
                </button>
                <p className="text-lg">{item.cantidad}</p>
                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="text-[#D50CD5] font-bold ml-2 text-2xl"
                >
                  +
                </button>
              </div>
              <p className="text-lg font-semibold">
                Total por producto ${(item.precio * item.cantidad).toLocaleString()}
              </p>
            </div>
            <button
              onClick={() => removeItem(item.id)}
              className="bg-[#D50CD5] text-white py-2 px-4 rounded mt-1 ml-2 block mx-auto hover:bg-[#9806A9] transition-colors duration-300 md:hidden"
            >
              Eliminar
            </button>
            <button
              onClick={() => removeItem(item.id)}
              className="bg-[#D50CD5] text-white py-2 px-4 rounded mt-1 ml-2 hidden md:block"
            >
              Eliminar
            </button>
          </div>
        ))}
        <div className="border-t pt-4">
          <p className="text-xl font-semibold text-center text-[#D50CD5]">
            Total: ${calculateTotal().toLocaleString()}
          </p>
          <button className="bg-[#D50CD5] text-white py-2 px-4 rounded mt-4 block mx-auto hover:bg-[#9806A9] transition-colors duration-300">
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
