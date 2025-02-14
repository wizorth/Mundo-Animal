


import Header from './components/Header';
import Footer from './components/Footer';
import { Carrusel } from './components/Carrusel';
import BusinessCard from './components/BusinessCard';

import React, { useEffect, useState, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('');

  // Referencias para cada sección
  const vetRef = useRef<HTMLDivElement>(null);
  const groomingRef = useRef<HTMLDivElement>(null);
  const petshopRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id); // Guarda el id de la sección visible
          }
        });
      },
      { threshold: 0.3 } // Detecta cuando el 60% de la sección es visible
    );

    if (vetRef.current) observer.observe(vetRef.current);
    if (groomingRef.current) observer.observe(groomingRef.current);
    if (petshopRef.current) observer.observe(petshopRef.current);

    return () => observer.disconnect(); // Limpia el observer cuando el componente se desmonta
  }, []);

  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 100); // Si el scroll está arriba de 100px, oculta el título
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
  className="min-h-screen bg-cover bg-center font-funny">
      {/* Header */}
      <div >
        <Header/> 
      </div>
       
      {/* Carrusel */}
      <div id="inicio" className=" bg-[#D2D9BA]">
        <Carrusel />
      </div>


      {!isAtTop && (
  <AnimatePresence mode="wait"> {/* Asegura la animación de cambio */}
    <motion.h1
      key={activeSection} // Detecta cambios en la sección activa
      initial={{ x: -100, opacity: 0 }} // Aparece desde la izquierda
      animate={{ x: 0, opacity: 1 }} // Se desliza a la derecha y se hace visible
      exit={{ x: 100, opacity: 0 }} // Se desliza a la derecha y desaparece
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="text-5xl font-bold text-center text-white text-outline bg-[#4A8578] py-4 w-full fixed top-0 shadow-md z-40"
    >
      {activeSection === 'veterinaria' && 'Veterinaria'}
      {activeSection === 'peluqueria' && 'Peluquería'}
      {activeSection === 'petshop' && 'Petshop'}
    </motion.h1>
  </AnimatePresence>
)}


      <div className=" flex flex-wrap space-y-12 justify-center min-h-screen bg-[url('/images/fondo_Pagina.png')] bg-repeat bg-auto bg-top">
      <div ref={vetRef} id="veterinaria" className=" p-4 md:w-2/3">
        <BusinessCard
        imgSrc="/images/veterinaria.png"
        facebook='https://www.facebook.com/MundoAninalClinicaVeterinariaEstetica'
        tiktok='https://www.tiktok.com/@supermercadodemascotas?lang=es'
        whatsapp='https://wa.me/59172880392'
        title="Veterinaria"
        description="Cuidamos la salud de tus mascotas con amor y profesionalismo."
        services={["Consulta general", "Vacunaciónes y desparacitaciones", "Cirugía en general","Medicina interna","Farmacia veterinaria","Tratamiento de enfermedades en general"]}
        schedule="Lunes a Viernes: 8 AM - 6 PM"
        locations={[
         {
            imgFrontis:"/images/FranciscoCerro.jpeg",
            address: "CALLE FRANCISCO CERRO # 50, Sucre-Bolivia",
            mapSrc: "https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d235.72211481963672!2d-65.25541029335679!3d-19.039372055468274!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sbo!4v1734658979655!5m2!1ses-419!2sbo"
          },
          {
            imgFrontis:"/images/petshopAv6agosto.jpeg",
            address: "Av. 6 de agosto, Sucre-Bolivia",
            mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235.7441839718863!2d-65.28283787283146!3d-19.02382177265806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93fbc900104acc5f%3A0xef704622be25ecd5!2sClinica%20veterinaria%20y%20estetica%20%22mundo%20animal%22!5e0!3m2!1ses-419!2sbo!4v1734724513354!5m2!1ses-419!2sbo"
          }
       ]}
      />
        </div>
        <div ref={groomingRef} id="peluqueria" className=" md:w-2/3">
        <BusinessCard
        imgSrc="/images/peluqueriaCanina.png"
        title="Peluquería"
        facebook='https://www.facebook.com/MundoAninalClinicaVeterinariaEstetica'
        tiktok='https://www.tiktok.com/@supermercadodemascotas?lang=es'
        whatsapp='https://wa.me/59172880392'
        description="Deja que tu mascota luzca hermosa con nuestros servicios de grooming."
        services={["Corte de pelo", "Baño completo", "Desenredo de pelaje"]}
        schedule="Lunes a Sábado: 9 AM - 7 PM"
        locations={[
          {
            imgFrontis:"/images/FranciscoCerro.jpeg",
             address: "Av. Principal No. 123, Sucre",
             mapSrc: "https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d235.72211481963672!2d-65.25541029335679!3d-19.039372055468274!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sbo!4v1734658979655!5m2!1ses-419!2sbo"
           },
           {
            imgFrontis:"/images/petshopAv6agosto.jpeg",
              address: "Calle Secundaria No. 456, Sucre",
             mapSrc:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235.7441839718863!2d-65.28283787283146!3d-19.02382177265806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93fbc900104acc5f%3A0xef704622be25ecd5!2sClinica%20veterinaria%20y%20estetica%20%22mundo%20animal%22!5e0!3m2!1ses-419!2sbo!4v1734724513354!5m2!1ses-419!2sbo"
           }
        ]}
      />
        </div >
        <div ref={petshopRef} id="petshop" className='md:w-2/3'>
        <BusinessCard
        imgSrc="/images/petshop_fondo.png"
        title="Petshop"
        facebook='https://www.facebook.com/MundoAninalClinicaVeterinariaEstetica'
        tiktok='https://www.tiktok.com/@supermercadodemascotas?lang=es'
        whatsapp='https://wa.me/59172880392'
        description="Todo lo que tu mascota necesita, lo encuentras aquí."
        services={["Alimentos", "Juguetes", "Accesorios"]}
        schedule="Todos los días: 10 AM - 8 PM"
        locations={[
          {
            imgFrontis:"/images/petshopSas.jpg",
             address: "Av. Principal No. 123, Sucre",
             mapSrc:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235.7048432438113!2d-65.26195756347119!3d-19.05153336252653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93fbcf37e1d3ee8d%3A0x2c4cb4866c340398!2sJuan%20Jose%20Perez%20366%2C%20Sucre!5e0!3m2!1ses-419!2sbo!4v1734723892202!5m2!1ses-419!2sbo"
           },
           {
            imgFrontis:"/images/petshopAv6agosto.jpeg",
              address: "Calle Secundaria No. 456, Sucre",
             mapSrc:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235.74418397188626!2d-65.28283787283145!3d-19.023821772658085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93fbc900601c31bf%3A0xd9e4e06ba58bb596!2sSupermercado%20de%20mascotas!5e0!3m2!1ses-419!2sbo!4v1734724167921!5m2!1ses-419!2sbo"
           }
        ]}
      />
      </div>
    </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};
export default App;