'use client'
import React, { useState } from 'react';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Producto 1',
      price: 10,
      quantity: 2,
      imageUrl: 'https://cdn.pixabay.com/photo/2014/06/28/16/04/sex-toys-378988_1280.jpg',
      description: 'Descripción del producto 1.',
    },
    {
      id: 2,
      name: 'Producto 2',
      price: 20,
      quantity: 1,
      imageUrl: 'https://cdn.pixabay.com/photo/2014/06/28/16/04/sex-toys-378988_1280.jpg',
      description: 'Descripción del producto 2.',
    },
  ]);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const increaseQuantity = (itemId) => {
    const updatedCart = cartItems.map(item =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCart);
  };

  const decreaseQuantity = (itemId) => {
    const updatedCart = cartItems.map(item =>
      item.id === itemId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCartItems(updatedCart);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold mb-4 text-pink-500 text-center">Carrito de Compras</h1>
        {cartItems.map(item => (
          <div
            key={item.id}
            className="bg-white rounded-md p-4 mb-4 flex items-center shadow-md"
          >
            <img src={item.imageUrl} alt={item.name} className="w-20 h-20 object-cover rounded-full mr-4" />
            <div className="flex-grow">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-gray-600">Descripción: {item.description}</p>
              <div className="flex items-center mt-2">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="text-pink-500 font-semibold mr-2"
                >
                  -
                </button>
                <p className="text-lg">{item.quantity}</p>
                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="text-pink-500 font-semibold ml-2"
                >
                  +
                </button>
              </div>
            </div>
            <p className="text-lg font-semibold">${item.price * item.quantity}</p>
          </div>
        ))}
        <div className="border-t pt-4">
          <p className="text-xl font-semibold text-center text-pink-500">Total: ${calculateTotal()}</p>
          <button className="bg-pink-500 text-white py-2 px-4 rounded mt-4 block mx-auto hover:bg-pink-400 transition-colors duration-300">
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;





