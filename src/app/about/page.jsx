import { STRINGS } from "@/config/config";
import React from "react";

const About = () => {
  return (
    <section className="bg-white text-black p-8">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">Nuestra Historia</h2>
        <h4 className="font-sans text-justify">{STRINGS.HISTORY}</h4>
      </div>
    </section>
  );
};

export default About;
