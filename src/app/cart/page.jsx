'use client'
import React, { useState } from 'react';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Producto 1', price: 10, quantity: 2 },
    { id: 2, name: 'Producto 2', price: 20, quantity: 1 },
  ]);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="bg-white text-gray-900 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold mb-4 text-pink-500">Carrito de Compras</h1>
        {cartItems.map(item => (
          <div
            key={item.id}
            className="border rounded-lg p-4 mb-4 flex items-center hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex-grow">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-gray-600">Cantidad: {item.quantity}</p>
              <p className="text-gray-600">Precio: ${item.price}</p>
            </div>
          </div>
        ))}
        <div className="border-t pt-4">
          <p className="text-lg font-semibold text-pink-500">Total: ${calculateTotal()}</p>
          <button className="bg-pink-500 text-white py-2 px-4 rounded mt-4 hover:bg-pink-400 transition-colors duration-300">
            Comprarr
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

