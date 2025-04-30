


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


      <div className=" flex flex-wrap space-y-12 justify-center min-h-screen bg-[url('/images/fondo_Pagina.png')] bg-repeat bg-auto bg-top items-center">
      <div ref={vetRef} id="veterinaria" className="p-4">
        <BusinessCard
        imgSrc="/images/veterinaria.png"
        facebook='https://www.facebook.com/MundoAninalClinicaVeterinariaEstetica'
        tiktok='https://www.tiktok.com/@supermercadodemascotas?lang=es'
        whatsapp='https://wa.me/59172880392'
        title="Veterinaria"
        description="Cuidamos la salud de tus mascotas con amor y profesionalismo."
        services={[
          {
            name: "Consulta general",
            sticker: "/stickers/consulta.png" // Ruta a tu sticker generado por IA
          },
          {
            name: "Vacunaciónes y desparacitaciones",
            sticker: "/stickers/vacunas.png"
          },
          {
            name: "Cirugía en general",
            sticker: "/stickers/cirugia.png"
          },
          {
            name: "Medicina interna",
            sticker: "/stickers/medicina.png"
          },
          {
            name: "Farmacia veterinaria",
            sticker: "/stickers/farmacia.png"
          },
          {
            name: "Tratamiento de enfermedades en general",
            sticker: "/stickers/tratamiento.png"
          }
        ]}
        schedule="Lunes a Sábado: 8:00am a 12:30pm - 2:30pm a 7:00pm"
        locations={[
         {
            imgFrontis:"/images/FranciscoCerro.jpeg",
            address: "CALLE FRANCISCO CERRO # 50, Sucre-Bolivia",
            mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3796.1086925691134!2d-65.2603576192641!3d-19.039351565167447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93fbc8cc9862baab%3A0xfaff6af352001ad8!2sFrancisco%20Cerro%2011-60%2C%20Sucre%2C%20Bolivia!5e1!3m2!1ses!2sus!4v1745255981628!5m2!1ses!2sus&markers=color:red%7C-19.039351565167447,-65.2603576192641&language=es"
          },
          {
            imgFrontis:"/images/peluqueriaAv6Agosto.jpeg",
            address: "Av. 6 de agosto #950, Sucre-Bolivia",
            mapSrc: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1898.227302097196!2d-65.28351187054717!3d-19.02421680904588!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93fbc900104acc5f%3A0xef704622be25ecd5!2sClinica%20veterinaria%20y%20estetica%20%22mundo%20animal%22!5e1!3m2!1ses!2sus!4v1745339090475!5m2!1ses!2sus"
          }
       ]}
      />
        </div>
        <div ref={groomingRef} id="peluqueria" className="">
        <BusinessCard
        imgSrc="/images/peluqueriaCanina.png"
        title="Peluquería"
        facebook='https://www.facebook.com/MundoAninalClinicaVeterinariaEstetica'
        tiktok='https://www.tiktok.com/@supermercadodemascotas?lang=es'
        whatsapp='https://wa.me/59172880392'
        description="Deja que tu mascota luzca hermosa con nuestros servicios de grooming."
        services={["Baños medicados y de belleza", "Baño con agua atemperada", "Cortes de exposición","Cortes de pelo segun la raza","Corte de uñas","Limpieza de oidos","Lavado de dientes","drenado de glandulas anales","Aplicación de perfume"]}
        schedule={`Lunes a Sábado: 8:00am a 5:00pm\nDomingos: 9:00am a 2:00pm`}
        locations={[
          {
            imgFrontis:"/images/FranciscoCerro.jpeg",
             address: "CALLE FRANCISCO CERRO # 50, Sucre-Bolivia",
             mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3796.1086925691134!2d-65.2603576192641!3d-19.039351565167447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93fbc8cc9862baab%3A0xfaff6af352001ad8!2sFrancisco%20Cerro%2011-60%2C%20Sucre%2C%20Bolivia!5e1!3m2!1ses!2sus!4v1745255981628!5m2!1ses!2sus&markers=color:red%7C-19.039351565167447,-65.2603576192641&language=es"
           },
           {
            imgFrontis:"/images/peluqueriaAv6Agosto.jpeg",
              address: "Av. 6 de agosto #950, Sucre-Bolivia",
             mapSrc:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1898.227302097196!2d-65.28351187054717!3d-19.02421680904588!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93fbc900104acc5f%3A0xef704622be25ecd5!2sClinica%20veterinaria%20y%20estetica%20%22mundo%20animal%22!5e1!3m2!1ses!2sus!4v1745339090475!5m2!1ses!2sus"
           }
        ]}
      />
        </div >
        <div ref={petshopRef} id="petshop" className=''>
        <BusinessCard
        imgSrc="/images/petshop_fondo.png"
        title="Petshop"
        facebook='https://www.facebook.com/MundoAninalClinicaVeterinariaEstetica'
        tiktok='https://www.tiktok.com/@supermercadodemascotas?lang=es'
        whatsapp='https://wa.me/59172880392'
        description="Todo lo que tu mascota necesita, lo encuentras aquí."
        services={["Alimentos", "Juguetes", "Todo tipo de ropa","Accesorios"]}
        schedule={`Lunes a Sábado: 8:00am a 9:00pm\nDomingos: 9:00am a 7:00pm`}
        locations={[
          {
            imgFrontis:"/images/petshopSas.jpg",
             address: "CALLE Juan Jose Perez #354, Sucre-Bolivia",
             mapSrc:"https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1128.5047254556557!2d-65.26163103981592!3d-19.051872843491214!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ses!2sus!4v1745341466208!5m2!1ses!2sus"
           },
           {
            imgFrontis:"/images/petshopAv6agosto.jpeg",
              address: "Av. 6 de agosto #950, Sucre-Bolivia",
             mapSrc:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3192.4274318184353!2d-65.2838694821758!3d-19.02409373380273!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93fbc900601c31bf%3A0xd9e4e06ba58bb596!2sSupermercado%20de%20mascotas!5e1!3m2!1ses!2sus!4v1745340135085!5m2!1ses!2sus"
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