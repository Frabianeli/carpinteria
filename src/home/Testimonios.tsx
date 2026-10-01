import avatar1 from "../assets/comentarios/avatar1.png"
import avatar2 from "../assets/comentarios/avatar2.png"
import avatar3 from "../assets/comentarios/avatar3.png"

export interface Testimonio {
  id: number;
  name: string;
  role: string;
  text: string;
  image: string;
}

const testimonios: Testimonio[] = [
  {
    id: 1,
    name: "Carlos Mendoza",
    role: "Arquitecto",
    text: "La madera para las pérgolas cumplió con los requerimientos técnicos y de humedad. Excelente proveedor.",
    image: avatar1,
  },
  {
    id: 2,
    name: "Mariana Silva",
    role: "Diseñadora",
    text: "El acabado de las mesas de roble es impecable. Muy buena atención en todo el proceso.",
    image: avatar2,
  },
  {
    id: 3,
    name: "Roberto Gómez",
    role: "Contratista",
    text: "Su catálogo digital facilita la elección de los materiales para las cotizaciones de obra.",
    image: avatar3,
  },
];

export const Testimonios = () => {
  return (
    <section className="bg-bg-dark text-text-light py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-secondary font-bold text-xs uppercase tracking-widest">Reseñas</span>
            <h2 className="text-3xl font-extrabold mt-1">Opiniones de Nuestros Clientes</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {
              testimonios.map((e) => (
                <div key={e.id} className="bg-primary p-8 rounded border border-[#2d4d3a]">
                  <figure className='flex justify-center mb-2'>
                    <img src={e.image} alt="" className='max-w-36'/>
                  </figure>
                  <div className="font-bold text-white text-sm text-center mb-1">{e.name}</div>
                  <div className="text-xs text-text-muted text-center">{e.role}</div>
                  <div className="text-secondary mb-4 text-center">★★★★★</div>
                  <p className="text-text-light text-sm italic mb-6">"{e.text}"</p>
                </div>
              ))
            }
          </div>
        </div>
      </section>
  )
}
