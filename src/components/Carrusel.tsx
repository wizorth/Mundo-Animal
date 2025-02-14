

"use client";
import 'flowbite/dist/flowbite.css';
import { Carousel } from "flowbite-react";

export function Carrusel() {
  return (
    <div className="max-w-3xl mx-auto px-4 h-56 sm:h-64 xl:h-80 2xl:h-96 rounded-lg overflow-hidden shadow-lg">
      <Carousel>
        <img src="/images/fondo_vetterinaria.png" alt="Veterinaria" />
        <img src="/images/peluqueria_fondo.png" alt="Peluquería" />
        <img src="/images/petshop_fondo.png" alt="Petshop" />
      </Carousel>
    </div>
  );
}
