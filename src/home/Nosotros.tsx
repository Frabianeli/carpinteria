
export const Nosotros = () => {
  return (
    <section id="acercade" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img 
            src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800" 
            alt="Taller de carpintería" 
            className="rounded-xl shadow-md border-4 border-white"
          />    
          <div className="space-y-4">
            <span className="font-bold text-xs uppercase tracking-widest">Sobre Lumbert</span>
            <h2 className="text-3xl font-extrabold">Artesanía en Madera con Estándares Industriales</h2>
            <p className="text-gray-600 text-sm">
              Combinamos técnicas ebanistas tradicionales con maquinaria CNC de vanguardia para ofrecer soluciones estructurales e interiores en madera tratada.
            </p>
          </div>
        </div>
      </section>
  )
}
