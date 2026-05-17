import React, { useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import heroVideo from './videos/hero-video.mp4';
import logoImg from './Chamos IMG/logo-removebg-preview.png';
import nuestraCasaImg from './Chamos IMG/hamburguesas 12.png';
import carritoImg from './Chamos IMG/Loschamoscar.png';
import localImg from './Chamos IMG/local.png';

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Componente para animar elementos al hacer scroll con GSAP
const FadeInUp = ({ children, delay = 0 }) => {
  const container = useRef();

  useGSAP(() => {
    gsap.from(container.current, {
      y: 80,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      delay: delay / 1000,
      scrollTrigger: {
        trigger: container.current,
        start: "top 85%",
        once: true
      }
    });
  }, { scope: container });

  return <div ref={container}>{children}</div>;
};

const MenuItem = ({ name, price, description }) => (
  <div className="mb-8">
    <div className="flex items-baseline justify-between mb-1">
      <h3 className="font-sans font-bold text-chamo-yellow text-2xl tracking-wide">{name}</h3>
      <div className="dotted-line"></div>
      <span className="font-sans font-bold text-chamo-yellow text-2xl">{price}</span>
    </div>
    <p className="font-sans text-chamo-white text-base leading-relaxed">{description}</p>
  </div>
);

function App() {
  return (
    <div className="bg-chamo-black min-h-screen text-chamo-white font-sans relative overflow-x-hidden">
      

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-chamo-black/90 backdrop-blur-sm z-40 border-b border-chamo-white/10 px-6 py-2 md:px-12 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logoImg} alt="Chamo's House Logo" className="h-16 object-contain" />
        </div>
        <div className="flex gap-6 items-center">
          <a href="#nuestra-casa" className="hover:text-chamo-yellow transition-colors font-bold uppercase text-sm tracking-wider hidden md:block">Nuestra Casa</a>
          <a href="#menu" className="hover:text-chamo-yellow transition-colors font-bold uppercase text-sm tracking-wider hidden md:block">Favoritos</a>
          <button className="bg-chamo-yellow text-chamo-black px-6 py-2 font-bold uppercase tracking-wider hover:bg-white transition-colors transform hover:-translate-y-1">
            Ordenar
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden border-b border-chamo-yellow/30">
        
        {/* Video Background */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
          src={heroVideo}
        ></video>
        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-chamo-black/40 z-10"></div>

        <div className="w-full max-w-7xl mx-auto pt-32 pb-20 px-6 md:px-12 flex flex-col md:flex-row items-center justify-center gap-12 relative z-20">
          <div className="flex-1 relative text-center md:text-left">
            <FadeInUp>
              <svg className="absolute -top-12 left-0 md:-top-10 md:-left-10 w-12 h-12 md:w-20 md:h-20 text-chamo-red opacity-80" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M12 2L13.5 8H22L15 12.5L17.5 20L12 15.5L6.5 20L9 12.5L2 8H10.5L12 2Z" />
              </svg>
              <h1 className="font-marker text-5xl sm:text-6xl md:text-8xl text-chamo-yellow leading-[0.9] tracking-wider mb-6">
                EL SABOR<br/><span className="text-chamo-white">AUTÉNTICO</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-chamo-white mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed drop-shadow-md">
                Comida rápida brutal con el verdadero sazón venezolano. Hamburguesas, perros calientes, panes y más.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-start gap-4">
                <a href="#menu" className="bg-chamo-red text-chamo-white px-8 py-4 font-bold text-lg uppercase tracking-wider hover:bg-red-700 transition-colors transform hover:-translate-y-1 shadow-lg w-full sm:w-auto text-center">
                  Ver Menú
                </a>
                <a href="https://maps.app.goo.gl/SsZ9LBAR5FmByivGA" target="_blank" rel="noopener noreferrer" className="border-2 border-chamo-yellow text-chamo-yellow px-8 py-4 font-bold text-lg uppercase tracking-wider hover:bg-chamo-yellow hover:text-chamo-black transition-colors backdrop-blur-sm w-full sm:w-auto text-center">
                  Dónde Estamos
                </a>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Featured Menu Section */}
      <section id="menu" className="py-16 md:py-24 px-6 md:px-12 max-w-6xl mx-auto">
        <FadeInUp>
          <div className="text-center mb-10 md:mb-16">
            <h2 className="font-marker text-4xl md:text-6xl text-chamo-yellow mb-4 tracking-wide uppercase">NUESTRO MENÚ</h2>
            <p className="text-chamo-white/70 text-base md:text-lg uppercase tracking-widest">Lo mejor de la calle a tu mesa</p>
          </div>
        </FadeInUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Perros Calientes */}
          <FadeInUp delay={200}>
            <div className="bg-zinc-950 p-8 md:p-10 border-2 border-chamo-red shadow-[0_0_20px_rgba(230,57,70,0.4)] relative h-full">
              {/* Decorative pins */}
              <div className="absolute top-4 left-4 w-3 h-3 bg-chamo-red rounded-full"></div>
              <div className="absolute top-4 right-4 w-3 h-3 bg-chamo-red rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-3 h-3 bg-chamo-red rounded-full"></div>
              <div className="absolute bottom-4 right-4 w-3 h-3 bg-chamo-red rounded-full"></div>

              <h3 className="font-marker text-3xl md:text-4xl text-chamo-red mb-8 tracking-wide uppercase border-b-2 border-chamo-white/10 pb-4 text-center">
                Perros Calientes
              </h3>

              <MenuItem 
                name="Jumbo Tradicional"
                price="₡2500"
                description="Salchicha Jumbo, Repollo, Cebolla, Papas Hilo, Salsas Tradicionales y Salsas Especiales."
              />
              <MenuItem 
                name="Alemán"
                price="₡3500"
                description="Salchicha Jumbo Alemana, Repollo, Cebolla, Papas Hilo, Salsas Tradicionales y Salsas Especiales."
              />
              <MenuItem 
                name="Alemán Especial"
                price="₡4500"
                description="Salchicha Alemana, Tocineta, Repollo, Cebolla, Papas Hilo, Salsas Tradicionales y Salsas Especiales + Papas a la Francesa."
              />
            </div>
          </FadeInUp>

          {/* Panes */}
          <FadeInUp delay={400}>
            <div className="bg-zinc-950 p-8 md:p-10 border-2 border-chamo-yellow shadow-[0_0_20px_rgba(255,202,58,0.4)] relative h-full">
              {/* Decorative pins */}
              <div className="absolute top-4 left-4 w-3 h-3 bg-chamo-yellow rounded-full"></div>
              <div className="absolute top-4 right-4 w-3 h-3 bg-chamo-yellow rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-3 h-3 bg-chamo-yellow rounded-full"></div>
              <div className="absolute bottom-4 right-4 w-3 h-3 bg-chamo-yellow rounded-full"></div>

              <h3 className="font-marker text-3xl md:text-4xl text-chamo-yellow mb-8 tracking-wide uppercase border-b-2 border-chamo-white/10 pb-4 text-center">
                Panes
              </h3>

              <MenuItem 
                name="Submarino"
                price="₡3000"
                description="Cerdo, Pollo, Maíz Dulce, Papas Hilo, Queso Mozzarella, Todos los Vegetales, Salsas Tradicionales y Salsas Especiales."
              />
              <MenuItem 
                name="Tranca Pecho"
                price="₡4500"
                description="Cerdo, Pollo, Salchicha, Tocineta, Huevo, Maíz Dulce, Papas Hilo, Queso Mozzarella, Todos los Vegetales, Salsas Tradicionales y Salsas Especiales + Papas a la Francesa."
              />
              <MenuItem 
                name="PaniCarne"
                price="₡2500"
                description="Carne Esmechada, Queso Mozzarella, Todos los Vegetales, Salsas Tradicionales y Salsas Especiales."
              />
            </div>
          </FadeInUp>
        </div>

        <FadeInUp delay={600}>
          <div className="mt-16 text-center">
            <button className="bg-chamo-red text-chamo-white px-10 py-4 font-bold text-lg uppercase tracking-wider hover:bg-red-700 transition-colors transform hover:-translate-y-1 inline-flex items-center gap-3 shadow-lg">
              <span className="material-symbols-outlined">menu_book</span>
              Descargar Menú Completo
            </button>
          </div>
        </FadeInUp>
      </section>

      {/* About Us Section */}
      <section id="nuestra-casa" className="py-16 md:py-24 px-6 md:px-12 bg-zinc-950 border-y border-chamo-white/10">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
          <div className="flex-1 w-full max-w-lg relative">
            <FadeInUp delay={200}>
              <div className="absolute inset-0 bg-chamo-red transform -rotate-3 translate-x-4 translate-y-4 torn-edge hidden md:block"></div>
              <div className="torn-edge w-full aspect-square bg-chamo-white p-1 relative z-10 shadow-[0_0_25px_rgba(230,57,70,0.6)]">
                <img 
                  src={nuestraCasaImg} 
                  alt="Preparación" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </FadeInUp>
          </div>
          <div className="flex-1">
            <FadeInUp>
              <h2 className="font-marker text-4xl md:text-5xl text-chamo-red mb-4 md:mb-6 tracking-wide uppercase">Nuestra Casa</h2>
              <p className="text-xl leading-relaxed text-chamo-white mb-6">
                Nacimos con la idea de llevar el <strong className="text-chamo-yellow font-bold">100% Sabor Venezolano</strong> a la calle. No somos una comida rápida cualquiera, somos la casa donde cada plato se hace con amor, salsas especiales y mucha pasión.
              </p>
              <p className="text-lg leading-relaxed text-chamo-white/70 mb-8">
                Desde nuestros enormes perros calientes hasta los famosos panes "Tranca Pecho", todo aquí es tamaño jumbo y de calidad premium. Ven y descubre por qué la gente siempre regresa a Chamo's House.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full border-2 border-chamo-yellow flex items-center justify-center">
                  <span className="material-symbols-outlined text-3xl text-chamo-yellow">local_fire_department</span>
                </div>
                <div>
                  <h4 className="font-bold text-xl uppercase tracking-widest text-chamo-white">Parrilla Activa</h4>
                  <p className="text-sm text-chamo-white/50">Todos los días</p>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* El Carrito Section */}
      <section id="el-carrito" className="py-16 md:py-24 px-6 md:px-12 bg-chamo-black border-b border-chamo-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="flex-1">
            <FadeInUp>
              <h2 className="font-marker text-4xl md:text-5xl text-chamo-yellow mb-4 md:mb-6 tracking-wide uppercase">El Carrito Original</h2>
              <p className="text-xl leading-relaxed text-chamo-white mb-6">
                Donde la magia ocurre. Nuestro carrito de ventas es el corazón de <strong className="text-chamo-red font-bold">Chamo's House</strong>, llevando el ambiente callejero y el sabor inconfundible de Venezuela directo a tu esquina favorita.
              </p>
              <p className="text-lg leading-relaxed text-chamo-white/70 mb-8">
                Acércate, siente el aroma a parrilla y vive la verdadera experiencia de la comida urbana. ¡Estamos listos para atenderte con la mejor vibra!
              </p>
              <a 
                href="https://maps.app.goo.gl/oMP94UoeJ4ci9zaA6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-chamo-red text-chamo-white px-8 py-4 font-bold text-base md:text-lg uppercase tracking-wider hover:bg-red-700 transition-colors transform hover:-translate-y-1 inline-flex items-center justify-center gap-3 shadow-lg w-full sm:w-auto"
              >
                <span className="material-symbols-outlined">location_on</span>
                Encuéntralo Ya
              </a>
            </FadeInUp>
          </div>
          <div className="flex-1 w-full max-w-lg relative">
            <FadeInUp delay={200}>
              <div className="absolute inset-0 bg-chamo-yellow transform rotate-3 -translate-x-4 translate-y-4 torn-edge hidden md:block"></div>
              <div className="torn-edge w-full aspect-square bg-chamo-white p-1 relative z-10 hover:scale-105 transition-transform duration-300 shadow-[0_0_25px_rgba(255,202,58,0.6)]">
                <a href="https://maps.app.goo.gl/oMP94UoeJ4ci9zaA6" target="_blank" rel="noopener noreferrer" className="block w-full h-full cursor-pointer">
                  <img 
                    src={carritoImg} 
                    alt="El Carrito de Chamo's House" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </a>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* El Local Section */}
      <section id="el-local" className="py-16 md:py-24 px-6 md:px-12 bg-zinc-950 border-b border-chamo-white/10">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
          <div className="flex-1 w-full max-w-lg relative">
            <FadeInUp delay={200}>
              <div className="absolute inset-0 bg-chamo-red transform -rotate-3 translate-x-4 translate-y-4 torn-edge hidden md:block"></div>
              <div className="torn-edge w-full aspect-square bg-chamo-white p-1 relative z-10 hover:scale-105 transition-transform duration-300 shadow-[0_0_25px_rgba(230,57,70,0.6)]">
                <a href="https://maps.app.goo.gl/SsZ9LBAR5FmByivGA" target="_blank" rel="noopener noreferrer" className="block w-full h-full cursor-pointer">
                  <img 
                    src={localImg} 
                    alt="El Local de Chamo's House" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </a>
              </div>
            </FadeInUp>
          </div>
          <div className="flex-1">
            <FadeInUp>
              <h2 className="font-marker text-4xl md:text-5xl text-chamo-red mb-4 md:mb-6 tracking-wide uppercase">Nuestro Local</h2>
              <p className="text-xl leading-relaxed text-chamo-white mb-6">
                El espacio perfecto para disfrutar con los tuyos. En <strong className="text-chamo-yellow font-bold">Chamo's House</strong> hemos creado un ambiente único, lleno de buena energía y comodidad.
              </p>
              <p className="text-lg leading-relaxed text-chamo-white/70 mb-8">
                Ven a visitarnos y disfruta de nuestra atención de primera en nuestro local principal. ¡Un lugar donde te sentirás como en casa, pero con el mejor sabor!
              </p>
              <a 
                href="https://maps.app.goo.gl/SsZ9LBAR5FmByivGA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-chamo-yellow text-chamo-black px-8 py-4 font-bold text-base md:text-lg uppercase tracking-wider hover:bg-white transition-colors transform hover:-translate-y-1 inline-flex items-center justify-center gap-3 shadow-lg w-full sm:w-auto"
              >
                <span className="material-symbols-outlined">location_on</span>
                Visítanos
              </a>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/1234567890" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-colors z-50 transform hover:scale-110 flex items-center justify-center"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
      </a>

      {/* Footer / Info Section */}
      <footer className="bg-chamo-yellow py-16 px-6 md:px-12 text-chamo-black mt-12 border-t-4 border-zinc-800 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-chamo-red rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-chamo-black rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left relative z-10">
          
          <FadeInUp delay={0}>
            <div className="flex flex-col items-center md:items-start">
              <img src={logoImg} alt="Chamo's House Logo" className="h-24 object-contain mb-6 drop-shadow-lg" />
              <p className="opacity-90 max-w-xs font-bold tracking-wide text-lg mb-6">
                Comida Rápida 100% Sabor Venezolano. El verdadero sazón de la calle.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-chamo-black/10 flex items-center justify-center hover:bg-chamo-red hover:text-chamo-white transition-all transform hover:-translate-y-1">
                  <span className="material-symbols-outlined">photo_camera</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-chamo-black/10 flex items-center justify-center hover:bg-chamo-red hover:text-chamo-white transition-all transform hover:-translate-y-1">
                  <span className="material-symbols-outlined">thumb_up</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-chamo-black/10 flex items-center justify-center hover:bg-chamo-red hover:text-chamo-white transition-all transform hover:-translate-y-1">
                  <span className="material-symbols-outlined">play_arrow</span>
                </a>
              </div>
            </div>
          </FadeInUp>
          
          <FadeInUp delay={150}>
            <div>
              <h4 className="font-marker text-2xl uppercase tracking-widest mb-6 text-chamo-red">Dónde Encontrarnos</h4>
              
              <div className="mb-6 group">
                <h5 className="font-bold text-lg mb-1 flex items-center justify-center md:justify-start gap-2">
                  <span className="material-symbols-outlined text-chamo-red">storefront</span>
                  Nuestro Local
                </h5>
                <a href="https://maps.app.goo.gl/SsZ9LBAR5FmByivGA" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 hover:text-chamo-red transition-colors inline-block">
                  Avenida Principal, Local 4<br/>
                  <span className="text-sm underline decoration-chamo-red/50 underline-offset-4">Ver en Google Maps</span>
                </a>
              </div>

              <div className="group">
                <h5 className="font-bold text-lg mb-1 flex items-center justify-center md:justify-start gap-2">
                  <span className="material-symbols-outlined text-chamo-red">local_shipping</span>
                  El Carrito Original
                </h5>
                <a href="https://maps.app.goo.gl/oMP94UoeJ4ci9zaA6" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 hover:text-chamo-red transition-colors inline-block">
                  Esquina del Sabor, Calle 8<br/>
                  <span className="text-sm underline decoration-chamo-red/50 underline-offset-4">Ver en Google Maps</span>
                </a>
              </div>
            </div>
          </FadeInUp>
          
          <FadeInUp delay={300}>
            <div>
              <h4 className="font-marker text-2xl uppercase tracking-widest mb-6 text-chamo-red">Atención</h4>
              
              <div className="mb-6">
                <h5 className="font-bold text-lg mb-2 flex items-center justify-center md:justify-start gap-2">
                  <span className="material-symbols-outlined text-chamo-red">schedule</span>
                  Horario
                </h5>
                <p className="opacity-90">Lunes a Domingo</p>
                <p className="font-bold text-xl text-chamo-black">5:00 PM - 12:00 AM</p>
              </div>

              <div>
                <h5 className="font-bold text-lg mb-2 flex items-center justify-center md:justify-start gap-2">
                  <span className="material-symbols-outlined text-chamo-red">support_agent</span>
                  Delivery y Pedidos
                </h5>
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-2 rounded-full hover:bg-[#128C7E] transition-colors transform hover:-translate-y-1 font-bold shadow-lg">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                  </svg>
                  Hacer Pedido
                </a>
              </div>
            </div>
          </FadeInUp>

        </div>
        <FadeInUp delay={500}>
          <div className="relative z-10 mt-16 pt-8 border-t border-chamo-black/20 flex flex-col md:flex-row justify-between items-center gap-4 opacity-80 text-sm tracking-wider font-bold">
            <p>&copy; {new Date().getFullYear()} Chamo's House. Todos los derechos reservados.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-chamo-red transition-colors">Términos de Servicio</a>
              <span className="opacity-50">|</span>
              <a href="#" className="hover:text-chamo-red transition-colors">Políticas de Privacidad</a>
            </div>
          </div>
        </FadeInUp>
      </footer>

    </div>
  );
}

export default App;
