import React from 'react';

const Footer = () => {
  const whatsappNumber = 'NUMERO_DE_WHATSAPP'; // Reemplaza con el número de WhatsApp

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto flex flex-wrap justify-center px-16">
        <div className="w-full md:w-1/3 mb-6 md:mb-0 text-center md:text-left">
          <h3 className="text-xl font-semibold mb-4 text-pink-500">Navegación</h3>
          <ul className="text-gray-400">
            <li className="mb-2"><a href="/">Inicio</a></li>
            <li className="mb-2"><a href="/productos">Productos</a></li>
            <li className="mb-2"><a href="/blog">Blog</a></li>
            <li className="mb-2"><a href="/contacto">Contacto</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 mb-6 md:mb-0 text-center">
          <h3 className="text-xl font-semibold mb-4 text-pink-500">Contacto</h3>
          <p className="text-gray-400">Dirección: Calle Falsa, 123</p>
          <p className="text-gray-400">Teléfono: (123) 456-7890</p>
          <p className="text-gray-400">Email: info@sexshop.com</p>
        </div>
        <div className="w-full md:w-1/3 text-center md:text-right">
          <h3 className="text-xl font-semibold mb-4 text-pink-500">Síguenos</h3>
          <div className="flex justify-center md:justify-end space-x-4">
            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
            <a href={`https://wa.me/${whatsappNumber}`} className="text-gray-400 hover:text-white"><i className="fab fa-whatsapp"></i></a>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 py-2 text-center">
        <p className="text-gray-400">&copy; {new Date().getFullYear()} Sex Shop. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
