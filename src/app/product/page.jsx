import React from "react";

const Product = () => {
  const products = [
    {
      id: 1,
      name: "Producto 1",
      price: 25,
      imageUrl:
        "https://cdn.pixabay.com/photo/2020/06/16/05/20/nude-5304236_1280.jpg ",
    },
    {
      id: 2,
      name: "Producto 2",
      price: 30,
      imageUrl:
        "https://cdn.pixabay.com/photo/2020/06/16/05/20/nude-5304236_1280.jpg",
    },
    {
      id: 3,
      name: "Producto 2",
      price: 30,
      imageUrl:
        "https://cdn.pixabay.com/photo/2020/06/16/05/20/nude-5304236_1280.jpg",
    },
    {
      id: 4,
      name: "Producto 2",
      price: 30,
      imageUrl:
        "https://cdn.pixabay.com/photo/2020/06/16/05/20/nude-5304236_1280.jpg",
    },
    {
      id: 5,
      name: "Producto 2",
      price: 30,
      imageUrl:
        "https://cdn.pixabay.com/photo/2020/06/16/05/20/nude-5304236_1280.jpg",
    },
    {
      id: 6,
      name: "Producto 2",
      price: 30,
      imageUrl:
        "https://cdn.pixabay.com/photo/2020/06/16/05/20/nude-5304236_1280.jpg",
    },
    // Agrega más productos aquí
  ];

  return (
    <div className="bg-white text-gray-900 py-12 p-10">
      <div className="container mx-auto">
        <h1 className="text-3xl font-semibold mb-8 text-pink-500">
          Nuestros Productos
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className="mx-auto max-h-96 mb-4"
              />
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-600">${product.price}</p>
              <button className="bg-pink-500 text-white py-2 px-4 rounded mt-4 hover:bg-pink-400 transition-colors duration-300">
                Agregar al Carritos
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
