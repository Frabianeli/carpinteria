
export const Navbar = () => {
  return (
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

      {/* Menú de Navegación PANTALLAS GRANDES */}
      <nav className="hidden md:flex items-center space-x-8 text-[11px] font-bold tracking-[0.15em] text-white/90 uppercase">
        <a href="#inicio" className="hover:text-[#d97706] transition flex items-center gap-1">INICIO</a>
        <a href="#acercade" className="hover:text-[#d97706] transition flex items-center gap-1">ACERCA DE</a>
        <a href="#servicios" className="hover:text-[#d97706] transition flex items-center gap-1">SERVICIOS</a>
        <a href="#productos" className="hover:text-[#d97706] transition flex items-center gap-1">PRODUCTOS</a>
        <a href="#contacto" className="hover:text-[#d97706] transition">CONTACTO</a>
      </nav>  
    </header>
  );
};
