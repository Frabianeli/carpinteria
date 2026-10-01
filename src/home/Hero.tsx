export const Hero = () => {
  return (
    <main className="relative z-10 max-w-7xl w-full mx-auto px-6 lg:px-16 py-20 my-auto">
      <div className="max-w-3xl space-y-8">
        <p className="text-[11px] lg:text-xs font-bold tracking-[0.25em] text-white/80 uppercase">
          Diseño y planificación de proyectos adaptada a las características de los materiales
        </p>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-amber-50/95 uppercase leading-[0.95] drop-shadow-md">
          Diseño, <br />
          fabricación e <br />
          instalación de muebles de madera
        </h1>
        <div className="flex flex-wrap items-center gap-6 pt-4">
          <a href="#acercade"
            className="bg-[#c2410c] hover:bg-[#a3360a] text-white font-bold text-[11px] uppercase tracking-[0.2em] px-8 py-4 rounded-full transition-colors shadow-lg inline-block"
          >
            leer mas
          </a>
          <button className="flex items-center gap-4 flex-wrap group cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center text-sm shadow-md group-hover:scale-105 transition-transform">
              ▶
            </div>
            <span className="text-[10px] lg:text-[11px] font-bold tracking-[0.18em] text-white uppercase group-hover:text-[#d97706] transition-colors">
              recorrido en video por la carpintería
            </span>
          </button>
        </div>
      </div>
    </main>
  );
};