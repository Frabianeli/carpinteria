import './App.css'
import { Navbar } from './componentes/Navbar'
import { Hero } from './componentes/Hero'
import { Catalogo } from './componentes/Catalogo'
import { Servicios } from './componentes/Servicios'
import { Testimonios } from './componentes/Testimonios'
import { Contacto } from './componentes/Contacto'

function App() {

  return (
    <div className="min-h-screen bg-lumbert-paper text-gray-800 antialiased">
      {/* 1. Header & Navigation */}
      <Navbar />

      {/* 2. Banner Principal */}
      <Hero />

      {/* 3. Sección sobre nosotros (250px) */}
      <section id="nosotros" className="py-20 px-6 max-w-7xl mx-auto border-b border-lumbert-border">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img 
            src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800" 
            alt="Taller de carpintería" 
            className="rounded-lg shadow-md border-4 border-white"
          />    
          <div className="space-y-4">
            <span className="text-lumbert-amber font-bold text-xs uppercase tracking-widest">Sobre Lumbert</span>
            <h2 className="text-3xl font-extrabold text-lumbert-green">Artesanía en Madera con Estándares Industriales</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Combinamos técnicas ebanistas tradicionales con maquinaria CNC de vanguardia para ofrecer soluciones estructurales e interiores en madera tratada.
            </p>
          </div>
        </div>
      </section>

      <Servicios />


      {/* 5. Catálogo API (900px) */}
      <Catalogo />

      {/* 6. Formulario de Contacto (500px) */}
      <Contacto />

      {/* 7. Testimonios de Clientes */}
      <Testimonios />

      {/* 7. Footer (300px) */}
      <footer className="bg-[#101b15] text-gray-400 py-12 px-6 border-t border-[#1e3227] text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="text-xl font-black text-white">LUMBERT</span>
            <p className="mt-1">© 2026 Lumbert Theme Replica. Todos los derechos reservados.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#inicio" className="hover:text-lumbert-amber">Inicio</a>
            <a href="#catalogo" className="hover:text-lumbert-amber">API AlwaysData</a>
            <a href="#contacto" className="hover:text-lumbert-amber">Contacto</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
