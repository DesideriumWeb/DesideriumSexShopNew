"use client";
import React from "react"
import { CATALOGOS } from "../../config/config";

const CatalogCard = () => {
  const handleDownload = (item) => {
    const catalogoUrl = `/catalogo/${item.link.substring(
      item.link.lastIndexOf("/") + 1
    )}`;

    // Crear un enlace temporal para descargar el archivo
    const link = document.createElement("a");
    link.href = catalogoUrl;
    link.target = "_blank"; // Abre el enlace en una nueva pestaña
    link.download = `${item.link.substring(item.link.lastIndexOf("/") + 1)}`;
    link.click();

    // Limpiar el enlace después de la descarga
    link.remove();
  };

  return (
    <div className="container mx-auto sm:mt-16 md:mt-16 lg:mt-16">
      <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-2 text-[#9806A9] font-serif"></h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {CATALOGOS &&
          CATALOGOS.map((item, key) => (
            <div
              key={key}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg hover:shadow-[#9806A9] hover:border-opacity-0 transition-shadow duration-300 text-xs sm:text-lg flex flex-col justify-between"
            >
              <div>
                <h2 className="text-sm font-semibold ">{item.name}</h2>
                <img
                  src={item.imagePath}
                  alt={item.name}
                  className="mx-auto h-48 w-48 sm:h-72 sm:w-72 mb-2 object-cover"
                />
              </div>
              <div onClick={() => handleDownload(item)}>
                <button className="bg-[#D50CD5] hover:bg-[#9806A9] transition-colors duration-300 text-white py-1 px-2 sm:py-2 sm:px-4 rounded mt-1 md:block font-serif">
                  Descargar Catálogo
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CatalogCard;
