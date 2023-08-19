import React from 'react';
import ImgX from '../../assets/imgHome/X1.jpg'

const DetailsHome = () => {
  return (
    <div className="bg-pink-800 text-white py-12">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-semibold mb-6 animate-fade-in-up">
          ¡Bienvenido Desiderium nuestra Tienda Erótica!
        </h1>
        <p className="text-lg mb-8 animate-fade-in-up-delay">
          Descubre una amplia selección de productos sensuales para añadir un
          toque de pasión a tu vida.
        </p>
        <button className="bg-pink-500 hover:bg-pink-400 text-white py-2 px-6 rounded text-lg font-semibold animate-bounce">
          Explora Nuestros Productos
        </button>
        <div className="mt-12 animate-fade-in-up-delay">
          <img
            src="https://cdn.pixabay.com/photo/2020/06/16/05/20/nude-5304236_1280.jpg" // Reemplaza con la URL de tu imagen
            alt="Productos Eróticos"
            className="mx-auto max-w-full rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="mt-12">
          <h2 className="text-3xl font-semibold mb-6 animate-fade-in-up">
            Nuestros Destacados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-pink-700 p-4 rounded animate-fade-in-up-delay transform hover:scale-105 transition-transform duration-300">
              <img
                src="https://cdn.pixabay.com/photo/2020/06/16/05/20/nude-5304236_1280.jpg" // Reemplaza con la URL de la imagen del producto
                alt="Producto Destacado"
                className="mx-auto max-w-full rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-lg font-semibold mt-2">Nombre del Producto</h3>
              <p className="text-gray-300">Descripción del producto...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsHome;
