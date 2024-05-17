import { useState, useEffect } from 'react';

const Banner = () => {
  const [messages, setMessages] = useState([
    '¡Tenemos todos los medios de pago!',
    // 'Envíos a todo el país',
    // 'Envío gratis después de compras de $250.000'
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length); // Mostrar el siguiente mensaje o volver al primero
    }, 3000); // Cambiar de mensaje cada 3 segundos

    return () => clearTimeout(timer);
  }, [currentIndex, messages]);

  return (
    <div className={`w-full bg-pink-400 h-6 text-white flex items-end justify-end overflow-hidden bannerContainer`}>
      <div className={'bannerMessages'}>
        {messages.map((message, index) => (
          <p
            key={index}
            className={`bannerMessage ${index === currentIndex ? 'active' : ''}`}
            style={{
              animationName: 'slideIn',
              animationDuration: '10s',
              animationIterationCount: 'infinite',
              animationTimingFunction: 'linear',
              transform: `translateX(${index === currentIndex ? '10%' : '100%'})` // Inicialmente ocultar el mensaje fuera del contenedor
            }}
          >
            {message}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Banner;
