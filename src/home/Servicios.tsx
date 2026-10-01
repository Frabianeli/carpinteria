import servicio1 from "../assets/servicios/carpinteria-arquitectonica.png"
import servicio2 from "../assets/servicios/Pérgolas y Cubiertas.png"
import servicio3 from "../assets/servicios/Muebles-medida.png"

export interface Servicio {
  title: string;
  descripcion: string;
  imagen: string;
};

 const DATA_EVENTOS: Servicio[] = [
      {
      title: "Carpintería Arquitectónica",
      descripcion:
        "Diseño y fabricación de elementos de madera para espacios únicos.",
      imagen: servicio1,
    },
    {
      title: "Pérgolas y Cubiertas",
      descripcion:
        "Construcción de pérgolas y cubiertas resistentes y funcionales.",
      imagen: servicio2,
    },
    {
      title: "Muebles a Medida",
      descripcion:
        "Fabricación de muebles personalizados según cada espacio y necesidad.",
      imagen: servicio3,
    },
  ]

export const Servicios = () => {

  return (
      <section id="servicios" className="bg-[#f2eee9] py-20 px-6 border-b">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <span className="font-bold text-xs uppercase tracking-widest">Nuestra Oferta</span>
          <h2 className="text-3xl font-extrabold">Servicios Especializados</h2>
        </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          {
            DATA_EVENTOS.map((e, i) => (
              <article key={i} className="bg-surface rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <figure className="mb-2 overflow-hidden">
                    <img src={e.imagen} alt={e.title}  className="hover:scale-105 transition-transform duration-500"/>
                </figure>
                <div className="p-6">
                  <p className="text-gray-500 text-xs mt-2">{e.title}</p>
                  <p>{e.descripcion}</p>
                </div>
              </article>
            ))
          }
        </div>
      </section>
  )
}
