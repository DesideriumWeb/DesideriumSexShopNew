"use client";
import React, { useState } from "react";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Producto 1",
      price: 10,
      quantity: 2,
      imageUrl:
        "https://cdn.pixabay.com/photo/2014/06/28/16/04/sex-toys-378988_1280.jpg",
      description: "Descripción del producto 1.",
    },
    {
      id: 2,
      name: "Producto 2",
      price: 20,
      quantity: 1,
      imageUrl:
        "https://cdn.pixabay.com/photo/2014/06/28/16/04/sex-toys-378988_1280.jpg",
      description: "Descripción del producto 2.",
    },
  ]);

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const increaseQuantity = (itemId) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCart);
  };

  const decreaseQuantity = (itemId) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updatedCart);
  };

  const removeItem = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
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
              src={item.imageUrl}
              alt={item.name}
              className="w-20 h-20 object-cover rounded-full mr-4"
            />
            <div className="flex-grow font-semibold">
              <h2 className="text-lg ">{item.name}</h2>
              <p className="text-black">Descripción: {item.description}</p>
              <p className="text-black">Precio: ${item.price} Und</p>
              <div className="flex items-center justify-center sm:justify-start md:justify-start mt-2">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="text-[#D50CD5] font-semibold mr-2"
                >
                  -
                </button>
                <p className="text-lg">{item.quantity}</p>
                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="text-[#D50CD5] font-semibold ml-2"
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-row">
              <p className="text-lg font-semibold">
                ${item.price * item.quantity}
              </p>
              <button
                onClick={() => removeItem(item.id)}
                className="bg-[#D50CD5] text-white py-2 px-4 rounded mt-1 ml-2 block mx-auto hover:bg-[#9806A9] transition-colors duration-300 md:hidden" // Ocultar en dispositivos pequeños (md:hidden)
              >
                Eliminar
              </button>
              <button
                onClick={() => removeItem(item.id)}
                className="bg-[#D50CD5] text-white py-2 px-4 rounded mt-1 ml-2 hidden md:block" // Mostrar en dispositivos medianos y mayores (md:block)
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
        <div className="border-t pt-4">
          <p className="text-xl font-semibold text-center text-[#D50CD5]">
            Total: ${calculateTotal()}
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
