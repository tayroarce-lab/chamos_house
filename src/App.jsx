import React, { useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import heroVideo from './videos/hero-video.mp4';
import logoImg from './Chamos IMG/logo-removebg-preview.png';
import nuestraCasaImg from './Chamos IMG/hamburguesas 12.png';
import carritoImg from './Chamos IMG/Loschamoscar.png';

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
        toggleActions: "play none none reverse"
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
          <div className="flex-1 relative">
            <FadeInUp>
              <svg className="absolute -top-10 -left-10 w-20 h-20 text-chamo-red opacity-80" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M12 2L13.5 8H22L15 12.5L17.5 20L12 15.5L6.5 20L9 12.5L2 8H10.5L12 2Z" />
              </svg>
              <h1 className="font-marker text-6xl md:text-8xl text-chamo-yellow leading-[0.9] tracking-wider mb-6">
                EL SABOR<br/><span className="text-chamo-white">AUTÉNTICO</span>
              </h1>
              <p className="text-xl md:text-2xl text-chamo-white mb-10 max-w-lg leading-relaxed drop-shadow-md">
                Comida rápida brutal con el verdadero sazón venezolano. Hamburguesas, perros calientes, panes y más.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#menu" className="bg-chamo-red text-chamo-white px-8 py-4 font-bold text-lg uppercase tracking-wider hover:bg-red-700 transition-colors transform hover:-translate-y-1 shadow-lg">
                  Ver Favoritos
                </a>
                <a href="#" className="border-2 border-chamo-yellow text-chamo-yellow px-8 py-4 font-bold text-lg uppercase tracking-wider hover:bg-chamo-yellow hover:text-chamo-black transition-colors backdrop-blur-sm">
                  Dónde Estamos
                </a>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="nuestra-casa" className="py-24 px-6 md:px-12 bg-zinc-950 border-y border-chamo-white/10">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-16">
          <div className="flex-1 w-full max-w-lg relative">
            <FadeInUp delay={200}>
              <div className="absolute inset-0 bg-chamo-red transform -rotate-3 translate-x-4 translate-y-4 torn-edge hidden md:block"></div>
              <div className="torn-edge w-full aspect-square bg-chamo-white p-1 relative z-10">
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
              <h2 className="font-marker text-5xl text-chamo-red mb-6 tracking-wide uppercase">Nuestra Casa</h2>
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
      <section id="el-carrito" className="py-24 px-6 md:px-12 bg-chamo-black border-b border-chamo-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <FadeInUp>
              <h2 className="font-marker text-5xl text-chamo-yellow mb-6 tracking-wide uppercase">El Carrito Original</h2>
              <p className="text-xl leading-relaxed text-chamo-white mb-6">
                Donde la magia ocurre. Nuestro carrito de ventas es el corazón de <strong className="text-chamo-red font-bold">Chamo's House</strong>, llevando el ambiente callejero y el sabor inconfundible de Venezuela directo a tu esquina favorita.
              </p>
              <p className="text-lg leading-relaxed text-chamo-white/70 mb-8">
                Acércate, siente el aroma a parrilla y vive la verdadera experiencia de la comida urbana. ¡Estamos listos para atenderte con la mejor vibra!
              </p>
              <a 
                href="https://maps.app.goo.gl/CEKUPqnQ9mNZhTZg8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-chamo-red text-chamo-white px-8 py-4 font-bold text-lg uppercase tracking-wider hover:bg-red-700 transition-colors transform hover:-translate-y-1 inline-flex items-center gap-3 shadow-lg"
              >
                <span className="material-symbols-outlined">location_on</span>
                Encuéntralo Ya
              </a>
            </FadeInUp>
          </div>
          <div className="flex-1 w-full max-w-lg relative">
            <FadeInUp delay={200}>
              <div className="absolute inset-0 bg-chamo-yellow transform rotate-3 -translate-x-4 translate-y-4 torn-edge hidden md:block"></div>
              <div className="torn-edge w-full aspect-square bg-chamo-white p-1 relative z-10">
                <img 
                  src={carritoImg} 
                  alt="El Carrito de Chamo's House" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Featured Menu Section */}
      <section id="menu" className="py-24 px-6 md:px-12 max-w-4xl mx-auto">
        <FadeInUp>
          <div className="text-center mb-16">
            <h2 className="font-marker text-5xl md:text-6xl text-chamo-yellow mb-4 tracking-wide uppercase">FAVORITOS DEL MENÚ</h2>
            <p className="text-chamo-white/70 text-lg uppercase tracking-widest">Un vistazo a lo más pedido</p>
          </div>
        </FadeInUp>

        <FadeInUp delay={200}>
          <div className="bg-zinc-950 p-8 md:p-12 border-2 border-chamo-white/10 relative">
            {/* Decorative pins */}
            <div className="absolute top-4 left-4 w-3 h-3 bg-chamo-red rounded-full"></div>
            <div className="absolute top-4 right-4 w-3 h-3 bg-chamo-red rounded-full"></div>
            <div className="absolute bottom-4 left-4 w-3 h-3 bg-chamo-red rounded-full"></div>
            <div className="absolute bottom-4 right-4 w-3 h-3 bg-chamo-red rounded-full"></div>

            <MenuItem 
              name="Jumbo Tradicional"
              price="2500"
              description="El rey de los perros calientes. Salchicha Jumbo, Repollo, Cebolla, Paspas Hilo, Salsas Tradicionales y Salsas Especiales."
            />
            <MenuItem 
              name="Tranca Pecho"
              price="4500"
              description="Cerdo, Pollo, Salchicha, Tocineta, Huevo, Maíz Dulce, Papitas Hilo, Queso Mozzarella, Todos los Vegetales, Salsas Tradicionales y Salsas Especiales + Papas."
            />
            <MenuItem 
              name="Aleman Especial"
              price="4500"
              description="Salchicha Alemana, Tocineta, Repollo, Cebolla, Paspas Hilo, Salsas Tradicionales y Salsas Especiales + Papas a las Francesa."
            />

            <div className="mt-12 text-center">
              <button className="bg-chamo-yellow text-chamo-black px-10 py-4 font-bold text-lg uppercase tracking-wider hover:bg-white transition-colors transform hover:-translate-y-1 inline-flex items-center gap-3">
                <span className="material-symbols-outlined">menu_book</span>
                Descargar Menú Completo
              </button>
            </div>
          </div>
        </FadeInUp>
      </section>

      {/* Footer / Info Section */}
      <footer className="bg-chamo-red py-16 px-6 md:px-12 text-chamo-white mt-12 border-t-8 border-chamo-yellow overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          
          <FadeInUp delay={0}>
            <div>
              <h3 className="font-marker text-4xl mb-4">Chamo's House</h3>
              <p className="opacity-90 max-w-xs mx-auto md:mx-0 font-bold tracking-wide">
                Comida Rápida 100% Sabor Venezolano.
              </p>
            </div>
          </FadeInUp>
          
          <FadeInUp delay={150}>
            <div>
              <h4 className="font-bold text-xl uppercase tracking-widest mb-6">Ubicación</h4>
              <p className="opacity-90 mb-2">Av. Principal Street #123</p>
              <p className="opacity-90">Ciudad de los Sabores, VE</p>
            </div>
          </FadeInUp>
          
          <FadeInUp delay={300}>
            <div>
              <h4 className="font-bold text-xl uppercase tracking-widest mb-6">Horarios</h4>
              <p className="opacity-90 mb-2">Lunes a Domingo</p>
              <p className="opacity-90 font-bold text-xl">5:00 PM - 12:00 AM</p>
            </div>
          </FadeInUp>

        </div>
        <FadeInUp delay={500}>
          <div className="mt-16 pt-8 border-t border-chamo-white/20 text-center opacity-60 text-sm tracking-wider uppercase font-bold">
            &copy; {new Date().getFullYear()} Chamo's House. Todos los derechos reservados.
          </div>
        </FadeInUp>
      </footer>

    </div>
  );
}

export default App;
