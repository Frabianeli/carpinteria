export const MainFooter = () => {
  return (
    <footer className="bg-[#101b15] text-gray-400 py-12 px-6 border-t border-[#1e3227] text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <span className="text-xl font-black text-white">LUMBERT</span>
          <p className="mt-1">© 2026 Rene Izacupe Coello.</p>
        </div>
        <div className="flex space-x-6">
          <a href="#inicio" className="hover:text-[#d97706]">Inicio</a>
          <a href="#acercade" className="hover:text-[#d97706]">Acerca de</a>
          <a href="#servicios" className="hover:text-[#d97706]">Servicios</a>
          <a href="#productos" className="hover:text-[#d97706]">Productos</a>
          <a href="#contacto" className="hover:text-[#d97706]">Contacto</a>
        </div>
      </div>
    </footer>
  )
}
