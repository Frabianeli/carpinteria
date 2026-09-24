import banner1 from '../assets/banner/Carpinteria-banner-1.png'

export const Navbar = () => {

  return (
    <div className="relative min-h-screen bg-[#111e16] text-[#f2efe9] font-sans overflow-hidden flex flex-col justify-between">
      {/* 1. Fondo de pantalla (Imagen de madera) */}
      <div className="absolute inset-0 z-0">
        <img src={banner1} alt="Taller de carpinteria"
          className="w-full h-full object-cover object-center brightness-[0.85] contrast-[1.05]"
        />
        {/* Overlay degradado para asegurar contraste en el menú e imagen */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f1d15]/80 via-transparent to-[#0f1d15]/40" />
        </div>

      {/* 2. BARRA DE NAVEGACIÓN SUPERIOR (NAVBAR) */}
      <header className="relative z-10 w-full px-6 lg:px-16 py-6 flex items-center justify-between border-b border-white/10 backdrop-blur-xs bg-[#0f1d15]/40">
        {/* Logo Lumbert */}
        <a href="#" className="flex items-center space-x-3 group">
          <div className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-white text-lg">
            🍃
          </div>
          <span className="text-sm font-extrabold tracking-[0.2em] uppercase text-white">
            LUMBERT
          </span>
        </a>

        {/* Menú de Navegación PANTALLAS GRANDES*/}
        <nav className="hidden md:flex items-center space-x-8 text-[11px] font-bold tracking-[0.15em] text-white/90 uppercase">
          <a href="#inicio" className="hover:text-[#d97706] transition flex items-center gap-1">
            INICIO
          </a>
          <a href="#about" className="hover:text-[#d97706] transition flex items-center gap-1">
            ACERCA DE
          </a>
          <a href="#store" className="hover:text-[#d97706] transition flex items-center gap-1">
            TIENDA
          </a>
          <a href="#contacts" className="hover:text-[#d97706] transition">
            CONTACTO
          </a>
        </nav>  
      </header>

      {/* 3. CONTENIDO PRINCIPAL DEL HERO */}
      <main className="relative z-10 max-w-7xl w-full mx-auto px-6 lg:px-16 py-20 my-auto">
        <div className="max-w-3xl space-y-8">
          {/* Subtítulo superior */}
          <p className="text-[11px] lg:text-xs font-bold tracking-[0.25em] text-white/80 uppercase">
            Diseño y planificación de proyectos adaptada a las características de los materiales
          </p>

          {/* Título Principal */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-amber-50/95 uppercase leading-[0.95] drop-shadow-md">
            Diseño, <br />
            fabricación e <br />
            instalación de muebles de madera
          </h1>

          {/* Botones de Acción (Read More + Video Tour) */}
          <div className="flex flex-wrap items-center gap-6 pt-4">
            {/* Botón Terracota / Naranja */}
            <a
              href="#about"
              className="bg-[#c2410c] hover:bg-[#a3360a] text-white font-bold text-[11px] uppercase tracking-[0.2em] px-8 py-4 rounded-full transition-colors shadow-lg inline-block"
            >
              READ MORE
            </a>

            {/* Botón Circular con Icono Play para Video */}
            <button className="flex items-center space-x-3 group cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-white text-[#0f1d15] flex items-center justify-center text-sm shadow-md group-hover:scale-105 transition-transform">
                ▶
              </div>
              <span className="text-[10px] lg:text-[11px] font-bold tracking-[0.18em] text-white uppercase group-hover:text-[#d97706] transition-colors leading-tight text-left">
                CARPENTRY <br />
                VIDEO TOUR
              </span>
            </button>
          </div>
        </div>
      </main>

      {/* Espaciador inferior para mantener la composición vertical */}
      <div className="relative z-10 h-12" />
    </div>
  );
}
