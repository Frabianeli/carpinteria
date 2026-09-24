
export const Hero = () => {
return (
    <section id="inicio" className="relative bg-[#182820] text-white py-24 md:py-36 px-6 overflow-hidden">
      {/* Overlay decorativo de textura de madera/bosque */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1546484475-7f7bd55792da?w=1600')] bg-cover bg-center"></div>

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center space-x-2 bg-[#233a2e] px-3 py-1 rounded text-lumbert-amber text-xs font-bold uppercase tracking-widest">
            <span>🌲</span>
            <span>Maestros Ebanistas desde 1998</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black leading-tight tracking-tight">
            CORTAMOS Y CREAMOS <span className="text-lumbert-amber">CON PRECISIÓN</span>
          </h1>

          <p className="text-gray-300 text-base md:text-lg max-w-xl font-normal leading-relaxed">
            Especialistas en carpintería fina, estructuras de madera sustentables para arquitectura y provisión de madera de roble, cedro y pino tratada térmicamente.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="#catalogo" className="bg-lumbert-amber hover:bg-lumbert-amber-dark text-white font-bold text-sm uppercase tracking-wider px-8 py-4 rounded text-center transition shadow-lg">
              Ver Productos API
            </a>
            <a href="#servicios" className="border-2 border-white hover:bg-white hover:text-lumbert-green font-bold text-sm uppercase tracking-wider px-8 py-4 rounded text-center transition">
              Nuestros Servicios
            </a>
          </div>
        </div>

        {/* Imagen Principal Estilo Marco Tallado */}
        <div className="relative">
          <div className="border-8 border-lumbert-amber rounded-lg overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800" 
              alt="Carpintero cortando madera" 
              className="w-full h-[420px] object-cover"
            />
          </div>
          {/* Badge flotante de garantía */}
          <div className="absolute -bottom-6 -left-6 bg-white text-lumbert-green p-4 rounded shadow-xl hidden sm:block border-l-4 border-lumbert-amber">
            <span className="block text-2xl font-black">100%</span>
            <span className="text-xs font-bold text-gray-600">Madera Ecológica Certificada</span>
          </div>
        </div>
      </div>
    </section>
  );
}
