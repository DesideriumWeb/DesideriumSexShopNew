"use client";
import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const WhatsapIcon = () => {
  return (
    <div>
      {" "}
      <FloatingWhatsApp
        phoneNumber="57-3005693097"
        chatMessage="Bienvenid@ a Desiderium Sex Shop, en que te podemos asesorar."
        accountName="Desiderium S e x  S h o p"
        statusMessage="En Linea"
        avatar="/logo.png"
      />
    </div>
  );
};

export default WhatsapIcon;
